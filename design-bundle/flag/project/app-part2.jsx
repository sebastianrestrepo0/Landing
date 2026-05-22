/* global React, I */
const { useState: useS2, useEffect: useE2, useRef: useR2 } = React;

// ======== PER-PAGE HOOK (responsive carousel) ========
function usePerPage() {
  const [n, setN] = useS2(() => typeof window !== 'undefined' ? (window.innerWidth < 560 ? 2 : window.innerWidth < 900 ? 3 : 5) : 5);
  useE2(() => {
    const fn = () => setN(window.innerWidth < 560 ? 2 : window.innerWidth < 900 ? 3 : 5);
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, []);
  return n;
}

// ======== COUNTER HOOK ========
function useCounter(target, duration = 1600) {
  const [val, setVal] = useS2(0);
  const ref = useR2(null);
  useE2(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(Math.floor(ease * target));
        if (p < 1) requestAnimationFrame(tick);
        else setVal(target);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);
  return [val, ref];
}

// ======== METHODOLOGY ========
const STEPS = [
  { n:1, t:"Diagnóstico",         d:"Entendemos su situación actual, necesidades y oportunidades de mejora." },
  { n:2, t:"Diseño de solución",  d:"Definimos la arquitectura, alcance y plan de valor para su proyecto SAP." },
  { n:3, t:"Implementación",      d:"Configuramos, desarrollamos e integramos la solución con metodología probada." },
  { n:4, t:"Soporte y operación", d:"Acompañamos la operación diaria con soporte funcional y mesa de ayuda." },
  { n:5, t:"Optimización",        d:"Evolucionamos continuamente su ecosistema SAP hacia mayor eficiencia." },
];
function Methodology() {
  return (
    <section className="section method">
      <div className="wrap">
        <div className="reveal" style={{textAlign:"center",maxWidth:640,margin:"0 auto 0"}}>
          <div className="eyebrow"><span className="eyebrow-dot"></span>Cómo trabajamos</div>
          <h2 style={{fontSize:"clamp(24px,2.8vw,38px)",marginTop:16,color:"var(--navy)"}}>Un modelo de acompañamiento de extremo a extremo</h2>
        </div>
        <div className="method-track">
          <div className="method-line"></div>
          <div className="method-grid">
            {STEPS.map((s,i) => (
              <div key={s.n} className="method-step reveal" style={{transitionDelay:(i*.08)+"s"}}>
                <div className="method-node">
                  <div className="method-node-inner">{s.n}</div>
                </div>
                <div className="method-step-body">
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ======== TESTIMONIALS ========
const TESTIS = [
  { text:"Flag Soluciones es una empresa muy comprometida con el cliente, entiende sus necesidades y demuestra interés constante por mejorar el servicio. Se nota el alto grado de responsabilidad y dedicación al realizar sus actividades.", name:"Martha Ballesteros", role:"Especialista en Informática · Intercolombia", ini:"MB" },
  { text:"Lo que más valoro de Flag Soluciones es la proactividad y las respuestas acertadas del equipo de desarrollo para BW y BI, y el cumplimiento de los compromisos establecidos en los términos acordados.", name:"Cristian David Giraldo Castro", role:"Equipo Gestión de la Información · ISAGEN", ini:"CG" },
  { text:"Flag Soluciones S.A.S. es una compañía que se preocupa por conocer a fondo los procesos y necesidades del cliente para brindar un servicio óptimo con soluciones personalizadas, adecuadas y oportunas.", name:"Juan David Martínez Pavony", role:"Director Aplicaciones de Tecnología · Grupo Familia", ini:"JM" },
];
function Testimonials() {
  return (
    <section className="section testi-section">
      <div className="wrap">
        <div className="reveal" style={{textAlign:"center",maxWidth:640,margin:"0 auto 48px"}}>
          <div className="eyebrow"><span className="eyebrow-dot"></span>Testimonios</div>
          <h2 style={{fontSize:"clamp(24px,2.8vw,38px)",marginTop:16,color:"var(--navy)"}}>Lo que dicen nuestros clientes</h2>
        </div>
        <div className="testi-grid">
          {TESTIS.map((t,i) => (
            <div key={t.name} className="testi-card reveal" style={{transitionDelay:(i*.1)+"s"}}>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.ini}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======== CONTACT MODAL ========
const SOL_OPTIONS = ["GROW with SAP","RISE with SAP","SAP BTP","SAP SuccessFactors","Analítica SAP","Seguridad SAP","Soporte funcional","Aceleradores / RPA","Otro"];

function ContactModal({ open, onClose, preselect }) {
  const [form, setForm] = useS2({nombre:"",empresa:"",cargo:"",correo:"",celular:"",solucion:"",mensaje:""});
  const [errors, setErrors] = useS2({});
  const [sent, setSent] = useS2(false);
  const [loading, setLoading] = useS2(false);

  useE2(() => {
    if (preselect) setForm(p => ({...p, solucion: preselect}));
  }, [preselect]);

  useE2(() => {
    const fn = e => { if(e.key === "Escape") onClose(); };
    if (open) { document.addEventListener("keydown", fn); document.body.style.overflow = "hidden"; }
    else { document.body.style.overflow = ""; }
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [open, onClose]);

  const set = (k,v) => { setForm(p => ({...p,[k]:v})); if(errors[k]) setErrors(p => ({...p,[k]:""})); };

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Requerido";
    if (!form.empresa.trim()) e.empresa = "Requerido";
    if (!form.correo.trim() || !/\S+@\S+\.\S+/.test(form.correo)) e.correo = "Correo inválido";
    return e;
  };

  const submit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1300);
  };

  const reset = () => { setSent(false); setErrors({}); setForm({nombre:"",empresa:"",cargo:"",correo:"",celular:"",solucion:"",mensaje:""}); };

  if (!open) return null;

  return (
    <div className={"modal-overlay open"} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" role="dialog" aria-modal="true" aria-label="Solicitar asesoría SAP">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
        {/* Left panel */}
        <div className="modal-left">
          <img src="assets/flag_logo.png" alt="Flag Soluciones" className="modal-left-logo"/>
          <h3>Hablemos sobre la evolución de su ecosistema SAP</h3>
          <p>Cuéntenos su necesidad y nuestro equipo de consultores SAP se comunicará con usted para revisar cómo podemos acompañarlo.</p>
          <div className="modal-trust">
            <div className="modal-trust-item"><I.check style={{width:15,height:15}}/> Más de 30 años de experiencia SAP</div>
            <div className="modal-trust-item"><I.star style={{width:15,height:15}}/> SAP Silver Partner</div>
            <div className="modal-trust-item"><I.map style={{width:15,height:15}}/> Colombia y Paraguay</div>
            <div className="modal-trust-item"><I.mail style={{width:15,height:15}}/> contacto@flagsoluciones.com</div>
          </div>
        </div>
        {/* Right panel — form */}
        <div className="modal-right">
          {sent ? (
            <div className="success-anim">
              <div className="success-ring"><I.check style={{width:30,height:30}}/></div>
              <h3>¡Solicitud enviada!</h3>
              <p>Gracias por contactarnos. Nuestro equipo revisará tu solicitud y se comunicará contigo próximamente.</p>
              <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
                <button className="btn btn-primary" onClick={reset}>Enviar otra solicitud</button>
                <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
              </div>
            </div>
          ) : (
            <>
              <h3>Solicitar asesoría SAP</h3>
              <form onSubmit={submit} noValidate style={{display:"flex",flexDirection:"column",gap:0}}>
                <div className="form-grid" style={{marginBottom:0}}>
                  {[["nombre","Nombre",true,"text","Su nombre completo"],
                    ["empresa","Empresa",true,"text","Nombre de la empresa"],
                    ["cargo","Cargo",false,"text","Su cargo o rol"],
                    ["correo","Correo corporativo",true,"email","correo@empresa.com"],
                    ["celular","Celular",false,"tel","+57 300 000 0000"]
                  ].map(([id,label,req,type,ph]) => (
                    <div key={id} className="form-field">
                      <label htmlFor={"m-"+id}>{label}{req&&" *"}</label>
                      <input id={"m-"+id} type={type} value={form[id]} placeholder={ph}
                        className={errors[id]?"has-error":""} onChange={e => set(id,e.target.value)}/>
                      {errors[id] && <div className="field-err">{errors[id]}</div>}
                    </div>
                  ))}
                  <div className="form-field">
                    <label htmlFor="m-solucion">Solución de interés</label>
                    <select id="m-solucion" value={form.solucion} onChange={e => set("solucion",e.target.value)}>
                      <option value="">Seleccione una opción</option>
                      {SOL_OPTIONS.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="form-field full">
                    <label htmlFor="m-mensaje">Necesidad o mensaje</label>
                    <textarea id="m-mensaje" value={form.mensaje} placeholder="Cuéntenos brevemente su necesidad o el contexto de su proyecto SAP..."
                      onChange={e => set("mensaje",e.target.value)}/>
                  </div>
                </div>
                <button type="submit" className={"btn btn-primary " + (loading?"btn-loading":"")}
                  style={{marginTop:18,justifyContent:"center",width:"100%"}} disabled={loading}>
                  {loading ? <span className="btn-spinner"/> : <>Enviar solicitud <I.arrow style={{width:14,height:14}} className="arr"/></>}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ======== CTA + CONTACT (modal trigger) ========
function CtaAndContact() {
  const [open, setOpen] = useS2(false);
  const [preselect, setPreselect] = useS2("");

  useE2(() => {
    window.openContactModal = (sol="") => { setPreselect(sol||""); setOpen(true); };
    return () => { delete window.openContactModal; };
  }, []);

  return (
    <>
      {/* CTA section */}
      <section id="contacto" className="cta-final">
        <div className="cta-final-inner">
          <div className="cta-orb cta-orb-1"></div>
          <div className="cta-orb cta-orb-2"></div>
          <div className="cta-grid-bg"></div>
          <div className="wrap">
            <div className="cta-badge-dark"><span style={{width:7,height:7,borderRadius:99,background:"var(--cyan)",display:"inline-block"}}></span>¿Listo para el siguiente paso?</div>
            <h2>Hablemos sobre la <em>evolución</em> de su ecosistema SAP</h2>
            <p className="cta-final-sub">Identifiquemos juntos las oportunidades de mejora, automatización, analítica y seguridad que pueden generar valor real en su organización.</p>
            <div className="cta-buttons">
              <button className="btn btn-dark cta-pulse" style={{position:"relative"}} onClick={() => setOpen(true)}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l7 19 2-8 8-2z"/></svg>
                Solicitar asesoría SAP
              </button>
              <a href="#soluciones" className="btn btn-outline-light">Ver soluciones</a>
            </div>
            <div className="cta-trust-row">
              <span><I.star style={{width:14,height:14}}/> SAP Silver Partner</span>
              <span><I.clock style={{width:14,height:14}}/> Más de 30 años</span>
              <span><I.map style={{width:14,height:14}}/> Colombia · Paraguay</span>
            </div>
          </div>
        </div>
      </section>
      <ContactModal open={open} onClose={() => setOpen(false)} preselect={preselect}/>
    </>
  );
}


// ======== SOLUTIONS ACCORDION ========
const ACC_DATA = [
  {
    id:"grow", label:"GROW with SAP", num:"01",
    tag:"ERP Cloud ágil",
    desc:"Implementación de SAP S/4HANA Cloud para empresas que buscan modernizar operaciones con mejores prácticas de industria preconstruidas.",
    impl:["Análisis y mapeo de procesos","Configuración SAP S/4HANA","Migración y depuración de datos","Pruebas integrales y puesta en marcha","Capacitación y adopción"],
    supp:["Soporte funcional post-go live","Resolución de incidentes","Mejoras y optimizaciones","Actualizaciones de versión"],
    kpis:[{v:"S/4HANA",l:"Plataforma"},{v:"Cloud",l:"Despliegue"},{v:"Ágil",l:"Método"}],
    ico: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12"/><path d="M5 12a7 7 0 0 1 7-7 7 7 0 0 1 7 7"/><path d="m9 9 3-3 3 3"/></svg>
  },
  {
    id:"rise", label:"RISE with SAP", num:"02",
    tag:"Transformación integral",
    desc:"Oferta completa para la transformación digital: ERP inteligente en la nube, procesos del sector y plataforma tecnológica SAP como servicio.",
    impl:["Arquitectura cloud y roadmap","SAP S/4HANA Cloud Public","Integración con sistemas actuales","Gestión del cambio organizacional","Gobierno y KPIs del proyecto"],
    supp:["Soporte funcional y técnico","Monitoreo de procesos críticos","Gestión de niveles de servicio","Evolución y extensiones"],
    kpis:[{v:"ERP",l:"Inteligente"},{v:"BTP",l:"Incluido"},{v:"Cloud",l:"Nativo"}],
    ico: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 0 1 0 9Z"/></svg>
  },
  {
    id:"btp", label:"SAP BTP", num:"03",
    tag:"Integración y extensión",
    desc:"Business Technology Platform: capa de integración, extensión y datos para conectar sistemas, construir soluciones personalizadas y explotar IA a escala.",
    impl:["Arquitectura de integración","Desarrollo de extensiones y apps","Configuración APIs e iPaaS","Gobierno y seguridad de datos","Conexión sistemas no-SAP"],
    supp:["Administración de plataforma","Soporte a integraciones críticas","Monitoreo de flujos","Desarrollo de nuevas extensiones"],
    kpis:[{v:"iPaaS",l:"Integración"},{v:"Low-code",l:"Desarrollo"},{v:"API",l:"Conectividad"}],
    ico: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 10 6.5-10 6.5L2 8.5z"/><path d="m2 14.5 10 6.5 10-6.5"/></svg>
  },
  {
    id:"sf", label:"SuccessFactors", num:"04",
    tag:"Gestión humana cloud",
    desc:"Suite HCM en la nube para talento, nómina, desempeño y aprendizaje, con experiencia de empleado moderna y mejores prácticas integradas.",
    impl:["Configuración módulos HCM","Migración datos de empleados","Integración SAP ERP/S4","Flujos de aprobación","Capacitación usuarios RRHH"],
    supp:["Soporte post-implementación","Administración de módulos","Actualizaciones semianuales","Nuevas configuraciones"],
    kpis:[{v:"HCM",l:"Gestión humana"},{v:"Cloud",l:"SaaS nativo"},{v:"360°",l:"Talento"}],
    ico: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  },
  {
    id:"ana", label:"Analítica SAP", num:"05",
    tag:"Datos al servicio del negocio",
    desc:"Integración, transformación y consolidación de datos para poner información confiable y oportuna al servicio de decisiones estratégicas.",
    impl:["Diseño de modelos de datos","SAP BW/4HANA","SAP Analytics Cloud","Power BI integrado con SAP","Gobierno y calidad de datos"],
    supp:["Mantenimiento modelos BW","Nuevos reportes e informes","Soporte usuarios analíticos","Evolución de dashboards"],
    kpis:[{v:"SAC",l:"Plataforma"},{v:"BW/4",l:"Data layer"},{v:"Real-time",l:"Datos"}],
    ico: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m7 14 4-4 4 4 5-5"/></svg>
  },
];

function Solutions() {
  const [active, setActive] = useS2("grow");
  return (
    <section id="soluciones" className="sol-section">
      <div className="wrap">
        <div className="sol-section-head reveal">
          <div className="eyebrow"><span className="eyebrow-dot"></span>Soluciones SAP</div>
          <h2 style={{fontSize:"clamp(28px,3.4vw,44px)",marginTop:16,marginBottom:14,color:"var(--navy)"}}>
            Soluciones SAP para modernizar, integrar y escalar su operación
          </h2>
          <p style={{fontSize:17,color:"var(--slate)",lineHeight:1.55,maxWidth:640,margin:"0 auto"}}>
            Acompañamos la implementación y soporte de soluciones SAP cloud, plataformas de integración, gestión humana y analítica empresarial.
          </p>
        </div>
        <div className="sol-accordion reveal" style={{transitionDelay:".1s"}}>
          {ACC_DATA.map(s => (
            <div
              key={s.id}
              className={"sol-acc-card " + (active===s.id?"on":"")}
              onClick={() => setActive(s.id)}
              onMouseEnter={() => setActive(s.id)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key==="Enter" && setActive(s.id)}
              aria-expanded={active===s.id}
            >
              {/* collapsed view */}
              <div className="sol-acc-collapsed">
                <div className="sol-acc-num">{s.num}</div>
                <div className="sol-acc-ico">{s.ico}</div>
                <div className="sol-acc-vtext">{s.label}</div>
              </div>
              {/* expanded view */}
              <div className="sol-acc-content">
                <span className="sol-acc-tag"><span className="sol-acc-tag-dot"></span>{s.tag}</span>
                <div className="sol-acc-h">{s.label}</div>
                <div className="sol-acc-desc">{s.desc}</div>
                <div className="sol-acc-lists">
                  <div className="sol-acc-list">
                    <div className="sol-acc-list-h">Implementación</div>
                    <ul>{s.impl.map(i => <li key={i}>{i}</li>)}</ul>
                  </div>
                  <div className="sol-acc-list">
                    <div className="sol-acc-list-h">Soporte</div>
                    <ul>{s.supp.map(i => <li key={i}>{i}</li>)}</ul>
                  </div>
                </div>
                <div className="sol-acc-footer">
                  <div className="sol-acc-kpis">
                    {s.kpis.map(k => (
                      <div key={k.l} className="sol-acc-kpi">
                        <div className="sol-acc-kpi-v">{k.v}</div>
                        <div className="sol-acc-kpi-l">{k.l}</div>
                      </div>
                    ))}
                  </div>
                  <button className="btn btn-sm" style={{background:"rgba(255,255,255,.15)",color:"#fff",border:"1px solid rgba(255,255,255,.3)",backdropFilter:"blur(8px)"}}
                    onClick={e=>{e.stopPropagation();window.openContactModal && window.openContactModal(s.label)}}>
                    Solicitar asesoría <I.arrow style={{width:13,height:13}} className="arr"/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======== SERVICES ========
const SVCS = [
  { ico:<I.bolt style={{width:22,height:22}}/>, cls:"svc-ico-1", t:"Implementación", d:"Acompañamos proyectos de implementación SAP con metodología probada, gestión del cambio y enfoque en la generación de valor para el negocio.", tag:"Proyectos" },
  { ico:<I.clock style={{width:22,height:22}}/>, cls:"svc-ico-2", t:"Soporte funcional", d:"Equipo especializado para la atención de incidentes, dudas y requerimientos funcionales del día a día del ecosistema SAP.", tag:"Operación" },
  { ico:<I.grow style={{width:22,height:22}}/>, cls:"svc-ico-3", t:"Mejoras y evolución", d:"Identificamos y ejecutamos oportunidades de mejora, nuevas funcionalidades y optimizaciones continuas sobre los sistemas SAP existentes.", tag:"Evolución" },
  { ico:<I.cpu style={{width:22,height:22}}/>, cls:"svc-ico-4", t:"Fábrica de soluciones", d:"Desarrollo y configuración de soluciones SAP a la medida de los requerimientos del negocio, bajo metodologías ágiles y gobierno de calidad.", tag:"Desarrollo" },
  { ico:<I.shield style={{width:22,height:22}}/>, cls:"svc-ico-5", t:"Seguridad SAP", d:"Diagnóstico, gestión y mejora continua de la seguridad SAP: roles, autorizaciones, segregación de funciones y cumplimiento normativo.", tag:"Seguridad" },
  { ico:<I.chart style={{width:22,height:22}}/>, cls:"svc-ico-6", t:"Analítica y datos", d:"Diseño e implementación de modelos de datos, reportes y dashboards para poner información confiable al servicio de la toma de decisiones.", tag:"Datos" },
];
function Services() {
  return (
    <section id="servicios" className="section services">
      <div className="wrap">
        <div className="reveal" style={{textAlign:"center",maxWidth:680,margin:"0 auto"}}>
          <div className="eyebrow"><span className="eyebrow-dot"></span>Servicios</div>
          <h2 style={{fontSize:"clamp(26px,3vw,40px)",marginTop:16,color:"var(--navy)"}}>Servicios que acompañan cada etapa de su ecosistema SAP</h2>
          <p style={{fontSize:16,color:"var(--slate)",marginTop:12,lineHeight:1.55}}>Desde la implementación inicial hasta el soporte funcional, la seguridad, las mejoras y la evolución continua.</p>
        </div>
        <div className="svc-grid">
          {SVCS.map((s,i) => (
            <div key={s.t} className="svc-card reveal" style={{transitionDelay:(i%3*.06)+"s"}}>
              <div className={"svc-ico "+s.cls}>{s.ico}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="svc-tag">{s.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======== ACCELERATORS ========
const ACCS = [
  { featured:true, tag:"Datos maestros", ico:<I.layers style={{width:24,height:24}}/>, name:"Flag Master Materials®", desc:"Solución orientada al gobierno, normalización y trazabilidad de datos maestros de materiales en SAP. Reglas de calidad, flujos de aprobación y visibilidad completa para áreas de abastecimiento y operaciones." },
  { tag:"Seguridad", ico:<I.bolt style={{width:22,height:22}}/>, name:"Flag Risk Alerts®", desc:"Acelerador para identificar, priorizar y monitorear riesgos dentro del ecosistema SAP con alertas tempranas y visibilidad ejecutiva." },
  { tag:"Seguridad", ico:<I.shield style={{width:22,height:22}}/>, name:"Flag Security Assistant®", desc:"Herramienta de apoyo para la gestión de roles, autorizaciones, controles y segregación de funciones en SAP." },
  { tag:"Automatización", ico:<I.cpu style={{width:22,height:22}}/>, name:"RPA sobre procesos SAP", desc:"Automatización de tareas repetitivas sobre procesos SAP para reducir carga operativa, errores manuales y tiempos de ejecución." },
  { tag:"Conversacional", ico:<I.users style={{width:22,height:22}}/>, name:"Bots conversacionales", desc:"Asistentes para orientar usuarios, resolver dudas frecuentes, apoyar el soporte SAP y facilitar la captura de necesidades." },
];
function Accelerators() {
  return (
    <section id="aceleradores" className="section acc">
      <div className="wrap">
        <div className="reveal" style={{textAlign:"center",maxWidth:680,margin:"0 auto"}}>
          <div className="eyebrow"><span className="eyebrow-dot"></span>Aceleradores FLAG</div>
          <h2 style={{fontSize:"clamp(26px,3vw,40px)",marginTop:16,color:"var(--navy)"}}>Aceleradores FLAG para optimizar procesos SAP</h2>
          <p style={{fontSize:16,color:"var(--slate)",marginTop:12,lineHeight:1.55}}>Herramientas y capacidades desarrolladas a partir de nuestra experiencia para mejorar gobierno, seguridad, automatización y eficiencia operativa.</p>
        </div>
        <div className="acc-grid">
          {ACCS.map((a,i) => (
            <div key={a.name} className={"acc-card reveal " + (a.featured?"featured":"")} style={{transitionDelay:(i*.06)+"s"}}>
              <div className="acc-shine"></div>
              <span className="acc-tag">{a.tag}</span>
              <div className="acc-ico">{a.ico}</div>
              <div className="acc-name">{a.name}</div>
              <div className="acc-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======== CLIENTS MARQUEE v2 ========
const CLIENTS_ALL = ["Grupo Nutresa","ISAGEN","Grupo Familia","SURA","Tigo UNE","Metro de Medellín","Corona","Celsia","Sofasa","Uniban","ISA Intercolombia","Cerro Matoso","Crystal","Auteco","Imusa"];
function ini2(n){ return n.split(" ").map(w=>w[0]).filter(Boolean).slice(0,2).join("").toUpperCase(); }
function ClientsV2() {
  const half = Math.ceil(CLIENTS_ALL.length / 2);
  const row1 = [...CLIENTS_ALL.slice(0,half), ...CLIENTS_ALL.slice(0,half)];
  const row2 = [...CLIENTS_ALL.slice(half), ...CLIENTS_ALL.slice(half)];
  return (
    <section id="clientes" className="clients-v2">
      <div className="wrap">
        <div className="clients-v2-head reveal">
          <div className="eyebrow" style={{justifyContent:"center",display:"flex",marginBottom:14}}><span className="eyebrow-dot"></span>Clientes</div>
          <h2 style={{fontSize:"clamp(24px,2.8vw,38px)",color:"var(--navy)",marginBottom:12}}>Empresas que han confiado en FLAG</h2>
          <p style={{fontSize:16,color:"var(--slate)",lineHeight:1.55,maxWidth:560,margin:"0 auto"}}>Organizaciones de diferentes sectores que confían en nuestro acompañamiento para operar, soportar y evolucionar sus soluciones SAP.</p>
        </div>
      </div>
      <div className="clients-marquee reveal" style={{transitionDelay:".1s"}}>
        <div className="clients-row r1">
          {row1.map((n,i) => (
            <div key={n+i} className="cl2-card">
              <div className="cl2-ava">{ini2(n)}</div>
              <div className="cl2-name">{n}</div>
            </div>
          ))}
        </div>
        <div className="clients-row r2">
          {row2.map((n,i) => (
            <div key={n+i} className="cl2-card">
              <div className="cl2-ava">{ini2(n)}</div>
              <div className="cl2-name">{n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======== NOSOTROS ========
function Nosotros() {
  const [y1995, ref1] = useCounter(1995, 1800);
  const [y30, ref2] = useCounter(30, 1400);
  return (
    <section id="nosotros" className="section about">
      <div className="wrap">
        <div className="about-wrap">
          <div className="reveal">
            <div className="eyebrow"><span className="eyebrow-dot"></span>Trayectoria</div>
            <h2 style={{fontSize:"clamp(26px,3vw,40px)",marginTop:16,marginBottom:18,color:"var(--navy)"}}>Más de 30 años acompañando la evolución SAP de las empresas</h2>
            <p style={{fontSize:16,color:"var(--slate)",lineHeight:1.65,marginBottom:16}}>Desde 1995, FLAG Soluciones acompaña a organizaciones de diferentes sectores en la implementación, soporte y evolución de soluciones SAP.</p>
            <p style={{fontSize:16,color:"var(--slate)",lineHeight:1.65,marginBottom:28}}>Nuestra trayectoria nos permite combinar conocimiento funcional, experiencia técnica y cercanía consultiva para entregar soluciones confiables y sostenibles.</p>
            <a href="#contacto" className="btn btn-primary">Hablar con un consultor <I.arrow style={{width:14,height:14}} className="arr"/></a>
          </div>
          <div className="about-stats reveal" style={{transitionDelay:".1s"}}>
            <div className="astat" ref={ref1}><div className="astat-val"><span>{y1995 < 1995 ? y1995 : 1995}</span></div><div className="astat-lbl">Año de fundación</div></div>
            <div className="astat" ref={ref2}><div className="astat-val">{y30 < 30 ? y30 : 30}<span>+</span></div><div className="astat-lbl">Años de experiencia SAP</div></div>
            <div className="astat"><div className="astat-val">Multi<span>-</span></div><div className="astat-lbl">sectorial: manufactura, energía, alimentos y más</div></div>
            <div className="astat"><div className="astat-val"><span>CO</span>+PY</div><div className="astat-lbl">Colombia y Paraguay</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ======== FOOTER ========
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave"><svg viewBox="0 0 1440 48" preserveAspectRatio="none"><path d="M0,24 C360,48 720,0 1440,24 L1440,48 L0,48 Z" fill="#071B4D"/></svg></div>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <img src="assets/flag_logo.png" alt="Flag Soluciones" className="footer-logo"/>
            <p className="footer-tag">La confianza que da la experiencia. Consultoría SAP, analítica, seguridad y aceleradores digitales desde 1995.</p>
            <div className="footer-badges">
              <span className="f-badge">SAP Silver Partner</span>
              <span className="f-badge">Desde 1995</span>
              <span className="f-badge">CO · PY</span>
            </div>
            <div className="f-soc">
              <a href="#" aria-label="LinkedIn"><I.linkedin style={{width:16,height:16}}/></a>
              <a href="#" aria-label="Facebook"><I.fb style={{width:16,height:16}}/></a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Soluciones</h5>
            <ul>
              <li><a href="#soluciones">GROW with SAP</a></li>
              <li><a href="#soluciones">RISE with SAP</a></li>
              <li><a href="#soluciones">SAP BTP</a></li>
              <li><a href="#soluciones">SAP SuccessFactors</a></li>
              <li><a href="#soluciones">Analítica SAP</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Compañía</h5>
            <ul>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#aceleradores">Aceleradores</a></li>
              <li><a href="#clientes">Clientes</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="Trabaja con nosotros.html">Trabaja con nosotros</a></li>
              <li><a href="#">PQRSF</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contacto</h5>
            <ul className="f-contact-list">
              <li>
                <span className="f-ico"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
                <span>Medellín · El Poblado<br/><span style={{color:"rgba(255,255,255,.45)",fontSize:12}}>Cra. 42 N° 3 Sur-81 · Torre 1 · Piso 15</span></span>
              </li>
              <li>
                <span className="f-ico"><I.phone style={{width:13,height:13}}/></span>
                <span>+57 (604) 444 6609<br/><span style={{color:"rgba(255,255,255,.45)",fontSize:12}}>+57 314 589 7949</span></span>
              </li>
              <li>
                <span className="f-ico"><I.mail style={{width:13,height:13}}/></span>
                <span>contacto@flagsoluciones.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Flag Soluciones S.A.S. · NIT 811.003.463-2</div>
          <div className="footer-legal">
            <a href="#">Aviso de privacidad</a><span className="sep">·</span>
            <a href="#">Protección de datos</a><span className="sep">·</span>
            <a href="#">PQRSF</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Solutions, Services, Methodology, Accelerators, ClientsV2, Testimonials, Nosotros, CtaAndContact, Footer });
