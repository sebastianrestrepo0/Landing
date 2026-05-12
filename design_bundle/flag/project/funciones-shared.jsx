// Componentes compartidos: Modal, Switch, Toast, hook de drag&drop, hook de estado

const { useState, useEffect, useRef, useCallback, useMemo } = React;

// ============================================================
// useFunciones — gestor de estado central
// ============================================================
function useFuncionesState() {
  const [cargos, setCargos] = useState(() => JSON.parse(JSON.stringify(window.CARGOS_DATA)));
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((toast) => {
    const id = Math.random().toString(36).slice(2);
    setToasts(t => [...t, { id, ...toast }]);
    setTimeout(() => {
      setToasts(t => t.filter(x => x.id !== id));
    }, toast.duration || 4500);
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(t => t.filter(x => x.id !== id));
  }, []);

  // ----- Operaciones -----
  const createFuncion = useCallback((cargoId, texto, activa = true) => {
    const newId = 'f-' + Date.now();
    setCargos(cs => cs.map(c => {
      if (c.id !== cargoId) return c;
      // duplicado
      const dup = c.funciones.find(f => f.texto.trim().toLowerCase() === texto.trim().toLowerCase());
      if (dup) {
        addToast({ kind: 'danger', icon: 'fa-circle-exclamation', text: 'Esta función ya existe en el cargo.' });
        return c;
      }
      return { ...c, funciones: [...c.funciones, { id: newId, texto, activa, isNew: true }] };
    }));
    addToast({ kind: 'success', icon: 'fa-circle-check', text: 'Función creada correctamente.' });
    // remover flag isNew
    setTimeout(() => {
      setCargos(cs => cs.map(c => ({ ...c, funciones: c.funciones.map(f => ({ ...f, isNew: false })) })));
    }, 1700);
    return newId;
  }, [addToast]);

  const updateFuncion = useCallback((cargoId, funcId, patch) => {
    setCargos(cs => cs.map(c => c.id !== cargoId ? c : ({
      ...c,
      funciones: c.funciones.map(f => f.id === funcId ? { ...f, ...patch } : f),
    })));
  }, []);

  const toggleFuncion = useCallback((cargoId, funcId) => {
    setCargos(cs => cs.map(c => c.id !== cargoId ? c : ({
      ...c,
      funciones: c.funciones.map(f => f.id === funcId ? { ...f, activa: !f.activa } : f),
    })));
  }, []);

  const deleteFuncion = useCallback((cargoId, funcId) => {
    let snapshot = null;
    setCargos(cs => cs.map(c => {
      if (c.id !== cargoId) return c;
      const idx = c.funciones.findIndex(f => f.id === funcId);
      if (idx < 0) return c;
      snapshot = { cargoId, idx, funcion: c.funciones[idx] };
      return { ...c, funciones: c.funciones.filter(f => f.id !== funcId) };
    }));
    if (snapshot) {
      addToast({
        kind: 'danger',
        icon: 'fa-trash',
        text: 'Función eliminada.',
        action: {
          label: 'Deshacer',
          run: () => {
            setCargos(cs => cs.map(c => {
              if (c.id !== snapshot.cargoId) return c;
              const next = [...c.funciones];
              next.splice(snapshot.idx, 0, snapshot.funcion);
              return { ...c, funciones: next };
            }));
          },
        },
      });
    }
  }, [addToast]);

  const reorderFunciones = useCallback((cargoId, fromIdx, toIdx) => {
    setCargos(cs => cs.map(c => {
      if (c.id !== cargoId) return c;
      const next = [...c.funciones];
      const [moved] = next.splice(fromIdx, 1);
      next.splice(toIdx, 0, moved);
      return { ...c, funciones: next };
    }));
  }, []);

  return {
    cargos, setCargos,
    toasts, addToast, removeToast,
    createFuncion, updateFuncion, toggleFuncion, deleteFuncion, reorderFunciones,
  };
}

// ============================================================
// Switch (toggle)
// ============================================================
function Switch({ on, onChange, title }) {
  return (
    <div className={"switch" + (on ? " on" : "")} onClick={(e) => { e.stopPropagation(); onChange(!on); }} title={title || (on ? "Activa" : "Inactiva")} role="switch" aria-checked={on}></div>
  );
}

// ============================================================
// Toast container
// ============================================================
function ToastStack({ toasts, removeToast }) {
  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className={"toast " + (t.kind || "")}>
          <i className={"fas lead " + (t.icon || "fa-info-circle")}></i>
          <span>{t.text}</span>
          {t.action && (
            <button className="undo-btn" onClick={() => { t.action.run(); removeToast(t.id); }}>
              {t.action.label}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================================
// Modal genérico
// ============================================================
function Modal({ open, onClose, children, width }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-backdrop show" onClick={onClose}>
      <div className="modal" style={{ width: width || 560 }} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

// ============================================================
// Modal: crear/editar función
// ============================================================
function FuncionModal({ open, onClose, mode, cargos, initial, onSubmit }) {
  // mode: 'create' | 'edit'
  const [cargoId, setCargoId] = useState(initial?.cargoId || '');
  const [texto, setTexto]     = useState(initial?.texto || '');
  const [activa, setActiva]   = useState(initial?.activa ?? true);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (open) {
      setCargoId(initial?.cargoId || (cargos[0]?.id ?? ''));
      setTexto(initial?.texto || '');
      setActiva(initial?.activa ?? true);
      setTouched(false);
    }
  }, [open]);

  const cargoActual = cargos.find(c => c.id === cargoId);
  const dup = useMemo(() => {
    if (!cargoActual || !texto.trim()) return false;
    return cargoActual.funciones.some(f =>
      f.id !== initial?.funcId &&
      f.texto.trim().toLowerCase() === texto.trim().toLowerCase()
    );
  }, [cargoActual, texto, initial]);

  const valid = cargoId && texto.trim().length >= 5 && !dup;

  const submit = () => {
    if (!valid) { setTouched(true); return; }
    onSubmit({ cargoId, texto: texto.trim(), activa });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="modal-head">
        <h3>
          <i className={"fas " + (mode === 'edit' ? "fa-pen-to-square" : "fa-plus-circle")}></i>
          {mode === 'edit' ? 'Editar función' : 'Nueva función'}
        </h3>
        <button className="btn-icon" onClick={onClose} title="Cerrar"><i className="fas fa-xmark"></i></button>
      </div>
      <div className="modal-body">
        <div className="field">
          <label>Cargo</label>
          <select value={cargoId} onChange={e => setCargoId(e.target.value)} disabled={mode === 'edit'}>
            {cargos.map(c => (<option key={c.id} value={c.id}>{c.nombre} · {c.area}</option>))}
          </select>
          <span className="field-help">
            <i className="fas fa-circle-info"></i>
            {mode === 'edit' ? 'No se puede mover una función a otro cargo desde aquí.' : 'La función se añade al final de la lista del cargo.'}
          </span>
        </div>

        <div className="field">
          <label>Descripción de la función</label>
          <textarea
            value={texto}
            onChange={e => setTexto(e.target.value.slice(0, 280))}
            placeholder="Ej. Gestionar los requerimientos del cliente y asegurar su entrega en los tiempos pactados."
            autoFocus
          />
          <span className={"field-help" + (touched && !texto.trim() ? " error" : (dup ? " error" : ""))}>
            {dup ? (
              <><i className="fas fa-triangle-exclamation"></i> Ya existe una función idéntica en este cargo.</>
            ) : touched && texto.trim().length < 5 ? (
              <><i className="fas fa-circle-exclamation"></i> Mínimo 5 caracteres.</>
            ) : (
              <span className="char-count">{texto.length} / 280 caracteres · usa lenguaje claro y verbo en infinitivo</span>
            )}
          </span>
        </div>

        <div className="toggle-card" onClick={() => setActiva(a => !a)}>
          <Switch on={activa} onChange={setActiva}/>
          <div className="toggle-info">
            <div className="toggle-info-title">{activa ? 'Función activa' : 'Función inactiva'}</div>
            <div className="toggle-info-sub">
              {activa
                ? 'Aparecerá en el certificado laboral generado para este cargo.'
                : 'Quedará oculta hasta que la reactives. No aparece en certificados.'}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-foot">
        <span className="field-help">
          <i className="fas fa-keyboard"></i>
          <span className="kbd">Esc</span> para cancelar · <span className="kbd">⌘ + Enter</span> para guardar
        </span>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-ghost" onClick={onClose}>Cancelar</button>
          <button className={"btn btn-primary"} onClick={submit} disabled={!valid && touched}>
            <i className={"fas " + (mode === 'edit' ? 'fa-check' : 'fa-plus')}></i>
            {mode === 'edit' ? 'Guardar cambios' : 'Crear función'}
          </button>
        </div>
      </div>
    </Modal>
  );
}

// ============================================================
// Modal: confirmar eliminación
// ============================================================
function ConfirmDeleteModal({ open, onClose, funcion, onConfirm }) {
  return (
    <Modal open={open} onClose={onClose} width={460}>
      <div className="modal-head">
        <h3 style={{ color: 'var(--c-danger)' }}>
          <i className="fas fa-trash" style={{ color: 'var(--c-danger)' }}></i>
          Eliminar función
        </h3>
      </div>
      <div className="modal-body">
        <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--c-text)' }}>
          ¿Seguro que quieres eliminar esta función? Esta acción se puede deshacer durante unos segundos.
        </p>
        {funcion && (
          <div style={{
            padding: '10px 12px', background: 'var(--c-bg-zebra)',
            border: '1px solid var(--c-border)', borderRadius: 8,
            fontSize: 12.5, color: 'var(--c-text-muted)', fontStyle: 'italic',
          }}>
            "{funcion.texto}"
          </div>
        )}
      </div>
      <div className="modal-foot" style={{ justifyContent: 'flex-end', gap: 8 }}>
        <button className="btn btn-ghost" onClick={onClose}>Cancelar</button>
        <button className="btn btn-primary" style={{ background: 'var(--c-danger)', borderColor: 'var(--c-danger)' }} onClick={() => { onConfirm(); onClose(); }}>
          <i className="fas fa-trash"></i> Eliminar
        </button>
      </div>
    </Modal>
  );
}

// ============================================================
// Modal: duplicar funciones de un cargo a otro
// ============================================================
function DuplicateModal({ open, onClose, cargos, onConfirm }) {
  const [from, setFrom] = useState('');
  const [to, setTo]     = useState('');

  useEffect(() => {
    if (open) {
      const withFns = cargos.find(c => c.funciones.length > 0);
      const empty   = cargos.find(c => c.funciones.length === 0 && c.id !== withFns?.id);
      setFrom(withFns?.id || cargos[0]?.id || '');
      setTo(empty?.id || cargos[1]?.id || '');
    }
  }, [open]);

  const cFrom = cargos.find(c => c.id === from);
  const cTo   = cargos.find(c => c.id === to);
  const valid = from && to && from !== to && cFrom && cFrom.funciones.length > 0;

  return (
    <Modal open={open} onClose={onClose} width={520}>
      <div className="modal-head">
        <h3><i className="fas fa-copy"></i> Duplicar funciones entre cargos</h3>
        <button className="btn-icon" onClick={onClose}><i className="fas fa-xmark"></i></button>
      </div>
      <div className="modal-body">
        <div className="field-row">
          <div className="field">
            <label>Copiar desde</label>
            <select value={from} onChange={e => setFrom(e.target.value)}>
              {cargos.map(c => (<option key={c.id} value={c.id}>{c.nombre} ({c.funciones.length})</option>))}
            </select>
          </div>
          <div className="field">
            <label>Copiar hacia</label>
            <select value={to} onChange={e => setTo(e.target.value)}>
              {cargos.filter(c => c.id !== from).map(c => (
                <option key={c.id} value={c.id}>{c.nombre} ({c.funciones.length})</option>
              ))}
            </select>
          </div>
        </div>
        <div style={{
          padding: '12px 14px', background: 'var(--c-primary-50)',
          border: '1px solid var(--c-primary-100)', borderRadius: 8, fontSize: 12.5,
        }}>
          <div style={{ fontWeight: 600, color: 'var(--c-primary)', marginBottom: 4 }}>
            <i className="fas fa-arrow-right-arrow-left"></i> Resumen
          </div>
          <div style={{ color: 'var(--c-text-muted)' }}>
            Se copiarán <strong style={{ color: 'var(--c-primary)' }}>{cFrom?.funciones.length || 0} funciones</strong> de <strong>{cFrom?.nombre}</strong> al final de las funciones de <strong>{cTo?.nombre}</strong>.
            Las funciones existentes en el destino no se modifican.
          </div>
        </div>
      </div>
      <div className="modal-foot" style={{ justifyContent: 'flex-end', gap: 8 }}>
        <button className="btn btn-ghost" onClick={onClose}>Cancelar</button>
        <button className="btn btn-primary" disabled={!valid} onClick={() => { onConfirm(from, to); onClose(); }}>
          <i className="fas fa-copy"></i> Duplicar funciones
        </button>
      </div>
    </Modal>
  );
}

// ============================================================
// Filter helper
// ============================================================
function filterFunciones(funciones, status, query) {
  const q = (query || '').trim().toLowerCase();
  return funciones.filter(f => {
    if (status === 'active'   && !f.activa) return false;
    if (status === 'inactive' &&  f.activa) return false;
    if (q && !f.texto.toLowerCase().includes(q)) return false;
    return true;
  });
}

// ============================================================
// Drag & drop hook (HTML5 native)
// ============================================================
function useDnD(onReorder) {
  const dragIndex = useRef(null);
  const overIndex = useRef(null);

  const handleDragStart = (idx) => (e) => {
    dragIndex.current = idx;
    e.currentTarget.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    try { e.dataTransfer.setData('text/plain', String(idx)); } catch(_) {}
  };
  const handleDragOver = (idx) => (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    overIndex.current = idx;
  };
  const handleDrop = (idx) => (e) => {
    e.preventDefault();
    if (dragIndex.current == null) return;
    if (dragIndex.current !== idx) onReorder(dragIndex.current, idx);
    dragIndex.current = null;
  };
  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove('dragging');
    dragIndex.current = null;
  };

  return { handleDragStart, handleDragOver, handleDrop, handleDragEnd };
}

// expose
Object.assign(window, {
  useFuncionesState, Switch, ToastStack, Modal, FuncionModal,
  ConfirmDeleteModal, DuplicateModal, filterFunciones, useDnD,
});
