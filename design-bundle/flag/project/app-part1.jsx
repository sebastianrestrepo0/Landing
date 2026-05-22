/* global React */
const { useState, useEffect } = React;

// ======== ICONS ========
const I = {
  arrow:   p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
  menu:    p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  close:   p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M18 6 6 18M6 6l12 12"/></svg>,
  check:   p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6 9 17l-5-5"/></svg>,
  shield:  p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>,
  chart:   p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 3v18h18"/><path d="m7 14 4-4 4 4 5-5"/></svg>,
  cloud:   p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 0 1 0 9Z"/></svg>,
  users:   p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  layers:  p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m12 2 10 6.5-10 6.5L2 8.5z"/><path d="m2 14.5 10 6.5 10-6.5"/><path d="m2 11.5 10 6.5 10-6.5"/></svg>,
  grow:    p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22V12"/><path d="M5 12a7 7 0 0 1 7-7 7 7 0 0 1 7 7"/><path d="m9 9 3-3 3 3"/></svg>,
  bolt:    p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  cpu:     p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>,
  map:     p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  clock:   p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  star:    p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.123 2.123 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>,
  mail:    p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>,
  phone:   p => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  linkedin:p => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>,
  fb:      p => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/></svg>,
};

// ======== SCROLL PROGRESS ========
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      setPct(Math.round((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100));
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return <div className="scroll-progress" style={{ width: pct + "%" }} aria-hidden="true"/>;
}

// ======== BACK TO TOP ========
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button className={"btt " + (show ? "show" : "")} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Volver arriba">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
    </button>
  );
}

// ======== HEADER ========
function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    const sections = ["inicio","soluciones","servicios","aceleradores","clientes","nosotros","contacto"];
    const fn = () => {
      setScrolled(window.scrollY > 20);
      const cur = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 90 && r.bottom > 90;
      });
      if (cur) setActive(cur);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const nav = [["Soluciones","soluciones"],["Servicios","servicios"],["Aceleradores","aceleradores"],["Clientes","clientes"],["Nosotros","nosotros"],["Contacto","contacto"]];
  return (
    <header className={"header " + (scrolled ? "scrolled" : "")}>
      <div className="wrap hdr">
        <a href="#inicio" className="hdr-logo"><img src="assets/flag_logo.png" alt="Flag Soluciones"/></a>
        <nav className="hdr-nav">
          {nav.map(([l,h]) => <a key={l} href={"#"+h} className={active===h?"on":""}>{l}</a>)}
        </nav>
        <div className="hdr-cta">
          <a href="#contacto" className="btn btn-primary btn-sm">Solicitar asesoría SAP <I.arrow style={{width:14,height:14}} className="arr"/></a>
          <button className="ham" onClick={() => setMenuOpen(true)} aria-label="Menú"><I.menu/></button>
        </div>
      </div>
    </header>
  );
}

// ======== MOBILE MENU ========
function MobileMenu({ open, onClose }) {
  const nav = ["Soluciones","Servicios","Aceleradores","Clientes","Nosotros","Contacto"];
  return (
    <div className={"mmenu " + (open ? "open" : "")}>
      <div className="mmenu-head">
        <img src="assets/flag_logo.png" alt="Flag Soluciones"/>
        <button onClick={onClose} style={{color:"#fff"}}><I.close style={{width:24,height:24}}/></button>
      </div>
      <nav>{nav.map(n => <a key={n} href={"#" + n.toLowerCase()} onClick={onClose}>{n}</a>)}</nav>
      <div className="mmenu-cta">
        <a href="#contacto" className="btn btn-primary" style={{justifyContent:"center"}} onClick={onClose}>Solicitar asesoría SAP</a>
        <a href="#contacto" className="btn btn-outline-light" style={{justifyContent:"center"}} onClick={onClose}>Conocer soluciones</a>
      </div>
    </div>
  );
}

// ======== HERO ========
const BAR_HEIGHTS = [55, 70, 48, 88, 75, 60, 40];

function Hero() {
  const [live, setLive] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLive(true), 80); return () => clearTimeout(t); }, []);
  return (
    <section id="inicio" className="hero">
      <div className="hero-grid-bg"></div>
      <div className="wrap">
        <div className="hero-wrap">
          {/* ——— LEFT COPY ——— */}
          <div className={"hero-copy " + (live ? "hero-animated" : "")}>
            <div className="hero-badge"><span className="hero-badge-dot"></span>SAP Silver Partner · Colombia y Paraguay</div>
            <h1>Evolucione su ecosistema SAP con un <span className="gradient-text">partner experto</span></h1>
            <p className="hero-sub">Implementamos, soportamos y optimizamos soluciones SAP para empresas que buscan modernizar sus procesos, integrar nuevas capacidades digitales y tomar mejores decisiones con datos confiables.</p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => window.openContactModal && window.openContactModal()}>
                Solicitar asesoría SAP <I.arrow style={{width:14,height:14}} className="arr"/>
              </button>
              <a href="#soluciones" className="btn btn-secondary">Conocer soluciones</a>
            </div>
            <div className="hero-trust">
              <span className="trust-chip"><I.star style={{width:14,height:14}}/> Más de 30 años de experiencia</span>
              <span className="trust-chip"><I.map style={{width:14,height:14}}/> Colombia y Paraguay</span>
              <span className="trust-chip"><I.clock style={{width:14,height:14}}/> Implementación · Soporte · Mejoras</span>
            </div>
          </div>

          {/* ——— RIGHT VISUAL ——— */}
          <div className="hero-visual reveal" style={{transitionDelay:".15s"}}>
            {/* Main dashboard card */}
            <div className="hv-main">
              <div className="hv-head">
                <div className="hv-head-l">
                  <div className="hv-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m7 14 4-4 4 4 5-5"/></svg>
                  </div>
                  <div>
                    <div className="hv-title">Ecosistema SAP</div>
                    <div className="hv-sub">FLAG Soluciones · Dashboard</div>
                  </div>
                </div>
                <div className="hv-status">Activo</div>
              </div>
              <div className="hv-chart">
                <svg viewBox="0 0 320 110" preserveAspectRatio="none" className="hv-line-svg">
                  <defs>
                    <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#1E22AA"/><stop offset="100%" stopColor="#74D1EA"/></linearGradient>
                    <linearGradient id="hg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#74D1EA" stopOpacity=".4"/><stop offset="100%" stopColor="#74D1EA" stopOpacity="0"/></linearGradient>
                  </defs>
                  {[20,65,110,155,200,245,290].map(x => <line key={x} x1={x} y1="5" x2={x} y2="100" stroke="rgba(30,34,170,.06)"/>)}
                  {[20,45,70,95].map(y => <line key={y} x1="10" y1={y} x2="310" y2={y} stroke="rgba(30,34,170,.06)"/>)}
                  <path d="M10,85 C50,70 70,75 100,55 C130,35 155,42 185,28 C215,14 240,20 270,10 C285,6 300,8 310,5"
                    fill="none" stroke="url(#hg1)" strokeWidth="2.2" strokeLinecap="round"/>
                  <path d="M10,85 C50,70 70,75 100,55 C130,35 155,42 185,28 C215,14 240,20 270,10 C285,6 300,8 310,5 L310,100 L10,100 Z"
                    fill="url(#hg2)"/>
                  {[[100,55],[185,28],[270,10]].map(([x,y],i) => (
                    <circle key={i} cx={x} cy={y} r="4" fill="#fff" stroke="#1E22AA" strokeWidth="2"/>
                  ))}
                </svg>
                <div className="hv-bars">
                  {BAR_HEIGHTS.map((h,i) => <div key={i} className="hv-bar" style={{height:h+"%"}}></div>)}
                </div>
              </div>
              <div className="hv-stats">
                <div className="hv-stat"><div className="hv-stat-v">GROW</div><div className="hv-stat-l">S/4HANA Cloud</div></div>
                <div className="hv-stat"><div className="hv-stat-v">BTP</div><div className="hv-stat-l">Integración</div></div>
                <div className="hv-stat"><div className="hv-stat-v">SAC</div><div className="hv-stat-l">Analítica</div></div>
              </div>
            </div>

            {/* Floating card 1: Soporte funcional */}
            <div className="hv-float f1">
              <div className="hv-float-ico green">
                <I.check style={{width:16,height:16}}/>
              </div>
              <div>
                <div className="hv-float-t">Soporte funcional</div>
                <div className="hv-float-s">Equipo SAP disponible</div>
              </div>
            </div>

            {/* Floating card 2: SuccessFactors */}
            <div className="hv-float f2">
              <div className="hv-float-ico blue">
                <I.users style={{width:16,height:16}}/>
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div className="hv-float-t">SAP SuccessFactors</div>
                <div className="hv-float-bar"><i style={{"--w":"82%"}}></i></div>
              </div>
            </div>

            {/* Floating card 3: Security */}
            <div className="hv-float f3">
              <div className="hv-float-ico orange">
                <I.shield style={{width:16,height:16}}/>
              </div>
              <div>
                <div className="hv-float-t">Flag Risk Alerts®</div>
                <div className="hv-float-s">Monitoreo activo</div>
              </div>
            </div>

            {/* Floating card 4: Analytics */}
            <div className="hv-float f4">
              <div className="hv-float-ico cyan">
                <I.chart style={{width:16,height:16}}/>
              </div>
              <div>
                <div className="hv-float-t">Analítica SAP</div>
                <div className="hv-float-s">Datos en tiempo real</div>
              </div>
            </div>

            {/* Metrics strip */}
            <div className="hv-strip">
              <div className="hv-strip-grid">
                <div className="hv-sitem">
                  <div className="hv-sval">30<span>+</span></div>
                  <div className="hv-slbl">Años de experiencia</div>
                </div>
                <div className="hv-sitem">
                  <div className="hv-sval"><span>CO</span>+PY</div>
                  <div className="hv-slbl">Colombia y Paraguay</div>
                </div>
                <div className="hv-sitem">
                  <div className="hv-sval"><span>SAP</span></div>
                  <div className="hv-slbl">Silver Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ======== SILVER PARTNER ========
function SilverPartner() {
  return (
    <section className="silver">
      <div className="wrap">
        <div className="silver-inner reveal">
          <div className="silver-badge">
            <div className="silver-seal"><img src="assets/flag_symbol.png" alt="Flag Symbol"/></div>
            <div className="silver-badge-label">SAP Silver Partner</div>
          </div>
          <div>
            <div className="eyebrow" style={{marginBottom:16}}><span className="eyebrow-dot"></span>Partner certificado</div>
            <h2>SAP Silver Partner</h2>
            <p style={{marginTop:12}}>Como partner SAP, acompañamos a las organizaciones en la adopción, implementación, soporte y evolución de soluciones del ecosistema SAP, con enfoque en continuidad operativa, buenas prácticas y generación de valor para el negocio. Nuestra condición de partner nos permite acceder a los recursos, herramientas y actualizaciones del ecosistema SAP para trasladar ese valor a nuestros clientes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { I, ScrollProgress, BackToTop, Header, MobileMenu, Hero, SilverPartner });
