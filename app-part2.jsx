/* global React */
const { useState: useState2 } = React;

// ============ SERVICES ============
function Services() {
  const services = [
    {
      letter: "A · Consultoría",
      ico: <I.briefcase style={{width:30,height:30}}/>,
      title: "Consultoría SAP",
      desc: "Profesionales con alta experiencia para el acompañamiento de la evolución del negocio a través de iniciativas de innovación, llevando su compañía al “state of the art” de su industria.",
      bullets: ["Mesa de Ayuda SAP","Soporte funcional SAP","Proyectos SAP","Fábrica de soluciones","Formación"],
    },
    {
      letter: "B · Analítica",
      ico: <I.chart style={{width:30,height:30}}/>,
      title: "Analítica SAP",
      desc: "Integración, transformación y consolidación de datos para disminuir riesgos en la toma de decisiones y poner información confiable al servicio del negocio.",
      bullets: ["SAP Analytics Cloud","SAP BusinessObjects","Power BI","SAP BW / S4HANA","Seguridad analítica"],
    },
    {
      letter: "C · Seguridad",
      ico: <I.shield style={{width:30,height:30}}/>,
      title: "Seguridad SAP",
      desc: "Soporte end-to-end en la cadena de gestión de la seguridad corporativa SAP, con asesoría, consultoría funcional y soporte bajo una metodología de gobierno, riesgos y controles.",
      bullets: ["Diagnóstico de seguridad","Gestión de hallazgos","Consultoría en Seguridad SAP","Flag Risk Alerts®","Flag Security Assistant®"],
    },
    {
      letter: "D · Aceleradores",
      ico: <I.cpu style={{width:30,height:30}}/>,
      title: "Aceleradores digitales",
      desc: "Aplicamos tecnología de aplicaciones para automatizar procesos de negocio SAP con la mayor velocidad y precisión, al menor costo.",
      bullets: ["Flag Master Materials®","Robotización RPA","Bots conversacionales","Gobierno RPA","Plantillas aceleradoras"],
    },
  ];
  return (
    <section id="servicios" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Capacidades</span>
          <h2 className="h-section">Servicios especializados para el <span className="gradient-text">ecosistema SAP</span></h2>
          <p className="lead">Diseñamos, implementamos y operamos servicios SAP de acuerdo con niveles de especialización, necesidades del cliente y buenas prácticas de gestión.</p>
        </div>
        <div className="svc-grid">
          {services.map((s) => (
            <div key={s.title} className="svc-card">
              <div className="svc-head">
                <div>
                  <div className="svc-letter">{s.letter}</div>
                  <h3 style={{marginTop:10}}>{s.title}</h3>
                </div>
                <div className="svc-ico-wrap">{s.ico}</div>
              </div>
              <p>{s.desc}</p>
              <div className="svc-bullets">
                {s.bullets.map(b => <span key={b} className="svc-chip">{b}</span>)}
              </div>
              <div className="svc-foot">
                <span style={{fontSize:13,color:"var(--c-slate)"}}>5 capacidades</span>
                <a href="#contacto" className="svc-link">Ver detalle <I.arrow style={{width:14,height:14}}/></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ MODEL ============
function Model() {
  const [active, setActive] = useState2(2);
  const steps = [
    { t:"Diagnóstico", d:"Entendimiento AS-IS, necesidades y oportunidades del negocio." },
    { t:"Diseño de solución", d:"Definición TO-BE, arquitectura, alcance y plan de valor." },
    { t:"Implementación", d:"Desarrollo, configuración, integración y pruebas controladas." },
    { t:"Operación y soporte", d:"Mesa de ayuda, continuidad operativa y SLAs medibles." },
    { t:"Optimización continua", d:"Mejora continua, automatización y analítica empresarial." },
  ];
  return (
    <section className="section model">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Modelo de trabajo</span>
          <h2 className="h-section" style={{color:"#fff"}}>Un modelo de acompañamiento <span style={{background:"linear-gradient(135deg,#fff,#74D1EA)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}}>de extremo a extremo</span></h2>
          <p className="lead">Cinco fases conectadas que llevan a las organizaciones desde el diagnóstico inicial hasta la mejora continua de su ecosistema SAP.</p>
        </div>
        <div className="model-track">
          {steps.map((s,i) => (
            <div key={s.t} className={"step " + (i===active?"active":"")} onMouseEnter={() => setActive(i)}>
              <div className="node">0{i+1}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ ACCELERATORS ============
function Accelerators() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Productos propios</span>
          <h2 className="h-section">Aceleradores que convierten <span className="gradient-text">experiencia en eficiencia</span></h2>
          <p className="lead">Más allá de los servicios, hemos capitalizado 25+ años de conocimiento en herramientas, metodologías y aceleradores propios para procesos SAP.</p>
        </div>
        <div className="acc-grid">
          <div className="acc-card acc-feature">
            <span className="acc-tag">Producto destacado</span>
            <div className="acc-name">Flag Master Materials®</div>
            <p className="acc-sub">Gobierno y normalización del maestro de materiales SAP. Reglas de calidad, flujos de aprobación y trazabilidad para áreas de abastecimiento y operaciones.</p>
            <div className="acc-viz" style={{flex:1,minHeight:140}}>
              <svg viewBox="0 0 320 160" width="100%" height="100%" style={{maxHeight:180}}>
                <defs>
                  <linearGradient id="cyanLine" x1="0" x2="1"><stop offset="0" stopColor="#74D1EA"/><stop offset="1" stopColor="#74D1EA" stopOpacity="0"/></linearGradient>
                </defs>
                {[40,80,120,160,200,240,280].map((x,i) => <line key={i} x1={x} y1="20" x2={x} y2="140" stroke="rgba(255,255,255,.08)"/>)}
                <path d="M20 110 L60 95 L100 100 L140 70 L180 75 L220 50 L260 55 L300 30" fill="none" stroke="#74D1EA" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M20 110 L60 95 L100 100 L140 70 L180 75 L220 50 L260 55 L300 30 L300 140 L20 140 Z" fill="url(#cyanLine)" opacity=".5"/>
                {[[60,95],[140,70],[220,50],[300,30]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="4" fill="#fff"/>)}
              </svg>
            </div>
            <div className="acc-meta"><span style={{width:6,height:6,borderRadius:99,background:"#74D1EA"}}></span> 12 reglas activas · 4 flujos de aprobación</div>
          </div>

          <div className="acc-card">
            <span className="acc-tag" style={{background:"rgba(250,98,56,.1)",color:"#FA6238",borderColor:"rgba(250,98,56,.25)"}}>Seguridad</span>
            <div className="acc-name">Flag Risk Alerts®</div>
            <p className="acc-sub">Monitoreo continuo de hallazgos y alertas tempranas sobre el ecosistema SAP.</p>
            <div className="acc-meta">7 categorías de riesgo</div>
          </div>

          <div className="acc-card">
            <span className="acc-tag">Seguridad</span>
            <div className="acc-name">Flag Security Assistant®</div>
            <p className="acc-sub">Asistente operativo para gobierno de roles, autorizaciones y segregación de funciones.</p>
            <div className="acc-meta">Roles · SoD · Auditoría</div>
          </div>

          <div className="acc-card">
            <span className="acc-tag">Automatización</span>
            <div className="acc-name">RPA sobre procesos SAP</div>
            <p className="acc-sub">Robotización de tareas operativas con gobierno corporativo y trazabilidad end-to-end.</p>
            <div className="acc-meta">UiPath · Power Automate</div>
          </div>

          <div className="acc-card">
            <span className="acc-tag">Conversacional</span>
            <div className="acc-name">Bots conversacionales</div>
            <p className="acc-sub">Asistentes para mesa de ayuda y autoservicio sobre flujos SAP críticos.</p>
            <div className="acc-meta">NLP · Integración SAP</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ TIMELINE / COMPANY ============
function Company() {
  const items = [
    { y:"1996", t:"Inicio de operaciones", d:"Flag Soluciones nace con foco en SAP Business Suite y procesos empresariales." },
    { y:"2015", t:"Reconocimientos de proveedores", d:"Premios a la trayectoria, calidad y desarrollo de proveedores estratégicos." },
    { y:"2018", t:"Clúster TI 4.0 · modelo EOLO", d:"Reconocimiento por adopción de I+D+i y modelo de operación EOLO." },
    { y:"Hoy", t:"Consultoría · analítica · seguridad · aceleradores", d:"Operación regional con cerca de 90 especialistas SAP." },
  ];
  return (
    <section id="trayectoria" className="section timeline-section">
      <div className="container">
        <div className="tl-wrap">
          <div>
            <span className="eyebrow">Trayectoria</span>
            <h2 className="h-section" style={{marginTop:16}}>Experiencia, respaldo y <span className="gradient-text">conocimiento acumulado</span></h2>
            <p className="lead" style={{marginTop:20}}>Desde 1996, Flag Soluciones se ha dedicado a perfeccionar el apoyo a organizaciones en procesos de implementación, operación y post implementación de SAP Business Suite.</p>
            <p className="lead" style={{marginTop:16}}>La experiencia acumulada en cientos de procesos empresariales, configuraciones y desarrollos a la medida es la base del servicio que hoy entregamos a nuestros clientes.</p>
            <div style={{display:"flex",gap:12,marginTop:28,flexWrap:"wrap"}}>
              <span className="badge"><span className="dot"></span>+25 años</span>
              <span className="badge"><span className="dot"></span>+90 especialistas</span>
              <span className="badge"><span className="dot"></span>Colombia · Centroamérica</span>
            </div>
          </div>
          <div className="tl-list">
            {items.map((it,i) => (
              <div key={it.y} className={"tl-item " + (i===items.length-1?"now":"")}>
                <div className="tl-year">{it.y}</div>
                <h4>{it.t}</h4>
                <p>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ AWARDS ============
function Awards() {
  const items = [
    { t:"Proveedor Ejemplar · Grupo Nutresa", d:"Premio en categoría Servicios PYME por trayectoria y calidad." },
    { t:"Nominación Grupo Nutresa", d:"Reconocimiento como proveedor ejemplar dentro del programa de aliados estratégicos." },
    { t:"Reconocimiento ISAGEN", d:"Por el compromiso con el desarrollo y la mejora continua de proveedores." },
    { t:"Clúster TI 4.0", d:"Reconocimiento por adopción del modelo EOLO e implementación de procesos I+D+i." },
  ];
  return (
    <section id="certificaciones" className="section awards">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Reconocimientos</span>
          <h2 className="h-section">Reconocimientos que respaldan <span className="gradient-text">nuestra trayectoria</span></h2>
        </div>
        <div className="awards-grid">
          {items.map(a => (
            <div key={a.t} className="award">
              <div className="seal"><I.award style={{width:24,height:24}}/></div>
              <h4>{a.t}</h4>
              <p>{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIALS ============
function Testimonials() {
  const items = [
    {
      text: "Flag Soluciones es una empresa muy comprometida con el cliente, entiende sus necesidades y demuestra interés constante por mejorar el servicio. Se nota el alto grado de responsabilidad y dedicación al realizar sus actividades.",
      name: "Martha Ballesteros",
      role: "Especialista en Informática · Intercolombia",
      ini: "MB",
    },
    {
      text: "Lo que más valoro de Flag Soluciones es la proactividad y las respuestas acertadas que he recibido del equipo de desarrollo para BW y BI, y el cumplimiento de los compromisos establecidos en los términos acordados.",
      name: "Cristian David Giraldo Castro",
      role: "Equipo Gestión de la Información · ISAGEN",
      ini: "CG",
    },
    {
      text: "Flag Soluciones S.A.S. es una compañía que se preocupa por conocer a fondo los procesos y necesidades del cliente para brindar un servicio óptimo en calidad con soluciones personalizadas, adecuadas y oportunas.",
      name: "Juan David Martínez Pavony",
      role: "Director Aplicaciones de Tecnología · Grupo Familia",
      ini: "JM",
    },
  ];
  return (
    <section id="testimonios" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Testimonios</span>
          <h2 className="h-section">Relaciones construidas <span className="gradient-text">desde la confianza</span></h2>
        </div>
        <div className="tst-grid">
          {items.map(t => (
            <div key={t.name} className="tst-card">
              <div className="tst-quote">“</div>
              <div className="tst-text">{t.text}</div>
              <div className="tst-author">
                <div className="tst-avatar">{t.ini}</div>
                <div>
                  <div className="tst-name">{t.name}</div>
                  <div className="tst-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CTA FINAL ============
function CtaFinal() {
  return (
    <section id="contacto" className="section cta-final">
      <div className="container">
        <div className="cta-final-inner">
          <div className="cta-orb cta-orb-1"></div>
          <div className="cta-orb cta-orb-2"></div>
          <div className="cta-orb cta-orb-3"></div>
          <div className="cta-grid"></div>
          <span className="badge cta-badge"><span className="dot"></span>Conversemos</span>
          <h2>Conversemos sobre la <span className="accent">evolución</span> de su ecosistema SAP</h2>
          <p>Identifiquemos oportunidades de mejora, automatización, analítica y seguridad para generar valor real en su organización.</p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-dark cta-pulse">
              <span className="cta-cursor">
                <svg viewBox="0 0 24 24" fill="none" width="14" height="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l7 19 2-8 8-2z"/></svg>
              </span>
              Agendar conversación
              <I.arrow style={{width:14,height:14}}/>
            </a>
            <a href="#" className="btn btn-outline-light">Solicitar diagnóstico</a>
          </div>
          <div className="cta-trust">
            <div className="cta-trust-item"><I.check style={{width:14,height:14}}/> Respuesta en menos de 24h</div>
            <div className="cta-trust-item"><I.shield style={{width:14,height:14}}/> Sin compromiso</div>
            <div className="cta-trust-item"><I.users style={{width:14,height:14}}/> Equipo consultor experto</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0,40 C320,80 720,0 1440,40 L1440,80 L0,80 Z" fill="#071B4D"/></svg>
      </div>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="assets/flag-logo.png" alt="Flag Soluciones" className="logo-img"/>
            <p className="footer-tag">La confianza que da la experiencia. Consultoría SAP, analítica, seguridad y aceleradores digitales desde 1996.</p>
            <div className="footer-badges">
              <span className="footer-badge">30 años SAP</span>
              <span className="footer-badge">+90 especialistas</span>
              <span className="footer-badge">CO · Centroamérica</span>
            </div>
          </div>
          <div className="footer-col">
            <h5>Servicios</h5>
            <ul>
              <li><a href="#servicios">Consultoría SAP</a></li>
              <li><a href="#servicios">Analítica SAP</a></li>
              <li><a href="#servicios">Seguridad SAP</a></li>
              <li><a href="#servicios">Aceleradores digitales</a></li>
              <li><a href="#servicios">Mesa de ayuda SAP</a></li>
              <li><a href="#servicios">Fábrica de soluciones</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Compañía</h5>
            <ul>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#clientes">Clientes</a></li>
              <li><a href="#certificaciones">Certificaciones</a></li>
              <li><a href="#trabaje">Trabaje con nosotros</a></li>
              <li><a href="#">Flag Networking</a></li>
              <li><a href="#">PQRSF</a></li>
            </ul>
          </div>
          <div className="footer-col footer-contact-col">
            <h5>Contacto</h5>
            <ul className="footer-contact-list">
              <li>
                <span className="fc-ico"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
                <span>Medellín · El Poblado<br/><span className="fc-sub">Cra. 42 N° 3 Sur-81 · Torre 1 · Piso 15</span></span>
              </li>
              <li>
                <span className="fc-ico"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
                <span>+57 (604) 444 6609<br/><span className="fc-sub">+57 314 589 7949</span></span>
              </li>
              <li>
                <span className="fc-ico"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg></span>
                <span>contacto@flagsoluciones.com</span>
              </li>
            </ul>
            <div className="footer-soc">
              <a href="#" aria-label="LinkedIn"><I.linkedin style={{width:16,height:16}}/></a>
              <a href="#" aria-label="Facebook"><I.fb style={{width:16,height:16}}/></a>
              <a href="#" aria-label="X"><I.x style={{width:14,height:14}}/></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Flag Soluciones S.A.S. · NIT 811.003.463-2 · Todos los derechos reservados.</div>
          <div className="footer-legal">
            <a href="#">Aviso de privacidad</a>
            <span className="sep">·</span>
            <a href="#">Protección de datos</a>
            <span className="sep">·</span>
            <a href="#">PQRSF</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Services, Model, Accelerators, Company, Awards, Testimonials, CtaFinal, Footer });
