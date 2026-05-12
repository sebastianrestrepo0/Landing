/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

// ============ ICONS ============
const I = {
  arrow: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
  menu: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>,
  close: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M18 6 6 18M6 6l12 12"/></svg>,
  users: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  handshake: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>,
  check: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/></svg>,
  flow: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>,
  bolt: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  shield: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>,
  chart: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 3v18h18"/><path d="m7 14 4-4 4 4 5-5"/></svg>,
  cpu: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>,
  briefcase: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  award: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="8" r="6"/><path d="M15.5 12.5 17 22l-5-3-5 3 1.5-9.5"/></svg>,
  bell: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
  bot: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 8V4M8 4h8M8 14h.01M16 14h.01M10 18h4"/></svg>,
  linkedin: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>,
  fb: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/></svg>,
  x: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.244 2H21l-6.52 7.45L22.5 22h-6.84l-5.36-7L4.1 22H1.34l6.99-7.97L1.5 2h7l4.84 6.43L18.24 2zM17.2 20h1.7L7.86 4h-1.8z"/></svg>,
};

// ============ HEADER ============
function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const nav = [
    ["Servicios", "#servicios"],
    ["Nosotros", "#nosotros"],
    ["Clientes", "#clientes"],
    ["Reconocimientos", "#certificaciones"],
    ["Testimonios", "#testimonios"],
  ];
  return (
    <header className={"header " + (scrolled ? "scrolled" : "")}>
      <div className="container header-inner">
        <a href="#inicio" aria-label="Flag Soluciones" className="brand">
          <img src="assets/flag-logo.png" alt="Flag Soluciones" className="logo-img" />
        </a>
        <nav className="nav">
          {nav.map(([label, href]) => (
            <a key={label} href={href} className={href.replace("#","") === active ? "active" : ""}
               onClick={() => setActive(href.replace("#",""))}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a href="#contacto" className="btn btn-primary btn-sm">Agendar conversación <I.arrow style={{width:13,height:13}}/></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Abrir menú"><I.menu/></button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  const nav = ["Inicio","Servicios","Nosotros","Clientes","Certificaciones","Testimonios","Contacto"];
  return (
    <div className={"mobile-menu " + (open ? "open" : "")}>
      <div className="mobile-menu-head">
        <img src="assets/flag-logo.png" alt="Flag" style={{height:30,filter:"brightness(0) invert(1)"}}/>
        <button onClick={onClose} className="menu-toggle" style={{borderColor:"rgba(255,255,255,.2)",color:"#fff"}}><I.close/></button>
      </div>
      <nav>
        {nav.map(n => <a key={n} href={"#" + n.toLowerCase().split(" ")[0]} onClick={onClose}>{n}</a>)}
      </nav>
      <div className="mobile-menu-cta">
        <a href="#contacto" className="btn btn-primary" onClick={onClose} style={{justifyContent:"center"}}>Agendar conversación</a>
        <a href="#contacto" className="btn btn-outline-light" onClick={onClose} style={{justifyContent:"center"}}>Hablar con un consultor</a>
      </div>
    </div>
  );
}

// ============ HERO ============
function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="pill"><span style={{width:6,height:6,borderRadius:99,background:"var(--c-cyan)"}}></span> 30 años SAP · desde 1996</span>
            </div>
            <h1>La <span className="accent">confianza</span> que da la experiencia en soluciones <span className="accent">SAP</span></h1>
            <p className="hero-sub">Acompañamos la implementación, operación, optimización y evolución de ecosistemas SAP con consultoría especializada, analítica, seguridad y aceleradores digitales.</p>
            <div className="hero-cta">
              <a href="#servicios" className="btn btn-primary">Conocer servicios <I.arrow style={{width:14,height:14}}/></a>
              <a href="#contacto" className="btn btn-secondary">Hablar con un consultor</a>
            </div>
            <div className="hero-stats">
              <div className="stat"><div className="n">+25</div><div className="l">años de experiencia</div></div>
              <div className="stat"><div className="n">+90</div><div className="l">especialistas SAP</div></div>
              <div className="stat"><div className="n">CO · CA</div><div className="l">Colombia y Centroamérica</div></div>
              <div className="stat"><div className="n">end-to-end</div><div className="l">servicios SAP</div></div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="dash dash-main">
              <div className="dash-head">
                <div>
                  <div className="dash-title">Salud del ecosistema SAP</div>
                  <div className="dash-sub">Operación · últimos 30 días</div>
                </div>
                <div className="dash-dots"><span></span><span></span><span></span></div>
              </div>
              <div className="dash-tabs">
                <div className="dash-tab on">Consultoría</div>
                <div className="dash-tab">Analítica</div>
                <div className="dash-tab">Seguridad</div>
                <div className="dash-tab">RPA</div>
              </div>
              <div className="dash-chart">
                <div className="dash-rows">
                  {[62,78,55,90,72].map((h,i) => (
                    <div key={i} className="dash-bar" style={{height:h+"%",animationDelay:(i*.08)+"s"}}></div>
                  ))}
                </div>
              </div>
              <div className="dash-legend">
                <span>SLA cumplido · 98.6%</span>
                <span>Tickets resueltos · 1.284</span>
              </div>
            </div>

            <div className="float float-1">
              <div className="float-ico ok"><I.check style={{width:20,height:20}}/></div>
              <div>
                <div className="float-t">Mesa de Ayuda SAP</div>
                <div className="float-s">Tiempo medio · 2h 14m</div>
              </div>
            </div>
            <div className="float float-2">
              <div className="float-ico"><I.chart style={{width:20,height:20}}/></div>
              <div style={{flex:1}}>
                <div className="float-t">SAP Analytics Cloud</div>
                <div className="float-bar"><i></i></div>
              </div>
            </div>
            <div className="float float-3">
              <div className="float-ico warn"><I.bell style={{width:20,height:20}}/></div>
              <div>
                <div className="float-t">Flag Risk Alerts®</div>
                <div className="float-s">3 hallazgos priorizados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ TRUST BAND ============
function Trust() {
  const featured = [
    { id:"nutresa",  n:"Grupo Nutresa",     s:"Alimentos",   since:"2008", note:"Holding multilatino · +45.000 colaboradores" },
    { id:"sura",     n:"SURA",              s:"Servicios",   since:"2007", note:"Servicios financieros y seguros · Latam" },
    { id:"isagen",   n:"ISAGEN",            s:"Energía",     since:"2010", note:"Generación de energía limpia" },
    { id:"tigoune",  n:"Tigo UNE",          s:"Telecom",     since:"2012", note:"Operador líder de telecomunicaciones" },
    { id:"familia",  n:"Grupo Familia",     s:"Manufactura", since:"2005", note:"Cuidado personal e higiene" },
    { id:"metro",    n:"Metro de Medellín", s:"Transporte",  since:"2009", note:"Operador masivo del Valle de Aburrá" },
  ];
  const others = [
    { id:"corona",   n:"Corona",            s:"Manufactura", since:"2004" },
    { id:"celsia",   n:"Celsia",            s:"Energía",     since:"2013" },
    { id:"sofasa",   n:"Sofasa",            s:"Manufactura", since:"2006" },
    { id:"uniban",   n:"Uniban",            s:"Alimentos",   since:"2011" },
    { id:"isa",      n:"ISA Intercolombia", s:"Energía",     since:"2008" },
    { id:"cerro",    n:"Cerro Matoso",      s:"Manufactura", since:"2010" },
    { id:"crystal",  n:"Crystal",           s:"Manufactura", since:"2014" },
    { id:"auteco",   n:"Auteco",            s:"Manufactura", since:"2009" },
    { id:"imusa",    n:"Imusa",             s:"Manufactura", since:"2012" },
  ];
  const loop = [...others, ...others];
  return (
    <section id="clientes" className="clients-wall">
      <div className="cw-bg-orb cw-bg-orb-1"></div>
      <div className="cw-bg-orb cw-bg-orb-2"></div>
      <div className="cw-grid-bg"></div>
      <div className="container">
        <div className="section-head" style={{textAlign:"center"}}>
          <span className="eyebrow">Aliados estratégicos</span>
          <h2 className="h-section">Las organizaciones más sólidas de la región <span className="gradient-text">confían en Flag</span></h2>
          <p className="lead" style={{marginTop:18,maxWidth:680,marginLeft:"auto",marginRight:"auto"}}>Tres décadas acompañando a líderes de industria en la evolución de sus procesos SAP. Empresas que mueven millones de personas, productos y decisiones cada día.</p>
        </div>

        <div className="cw-stats">
          <div className="cw-stat"><div className="cw-stat-num">15<span className="cw-stat-plus">+</span></div><div className="cw-stat-lbl">Clientes corporativos</div></div>
          <div className="cw-divider"></div>
          <div className="cw-stat"><div className="cw-stat-num">30</div><div className="cw-stat-lbl">Años de relaciones</div></div>
          <div className="cw-divider"></div>
          <div className="cw-stat"><div className="cw-stat-num">98<span className="cw-stat-plus">%</span></div><div className="cw-stat-lbl">Retención de clientes</div></div>
          <div className="cw-divider"></div>
          <div className="cw-stat"><div className="cw-stat-num">7</div><div className="cw-stat-lbl">Industrias atendidas</div></div>
        </div>

        <div className="cw-featured-label">
          <span className="cw-line"></span>
          <span className="cw-label-text">Aliados destacados</span>
          <span className="cw-line"></span>
        </div>

        <div className="cw-featured">
          {featured.map(t => (
            <article key={t.id} className="cw-card cw-featured-card">
              <div className="cw-card-inner">
                <div className="cw-logo-wrap">
                  <image-slot
                    id={"client-" + t.id}
                    placeholder={"Logo " + t.n}
                    shape="rounded"
                    radius="12"
                    style={{width:"100%",height:"100%"}}
                  ></image-slot>
                </div>
                <div className="cw-meta">
                  <div className="cw-name">{t.n}</div>
                  <div className="cw-tags">
                    <span className="cw-sector"><span className="cw-dot"></span>{t.s}</span>
                    <span className="cw-since">Desde {t.since}</span>
                  </div>
                  <div className="cw-note">{t.note}</div>
                </div>
              </div>
              <div className="cw-shine"></div>
            </article>
          ))}
        </div>

        <div className="cw-featured-label" style={{marginTop:64}}>
          <span className="cw-line"></span>
          <span className="cw-label-text">Y muchos más</span>
          <span className="cw-line"></span>
        </div>

        <div className="cw-marquee">
          <div className="cw-marquee-track">
            {loop.map((t, i) => (
              <div key={t.id + "-" + i} className="cw-mini">
                <div className="cw-mini-logo">
                  <image-slot
                    id={"client-" + t.id}
                    placeholder={t.n}
                    shape="rounded"
                    radius="10"
                    style={{width:"100%",height:"100%"}}
                  ></image-slot>
                </div>
                <div className="cw-mini-meta">
                  <div className="cw-mini-name">{t.n}</div>
                  <div className="cw-mini-sub"><span className="cw-dot"></span>{t.s} · Desde {t.since}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="cw-marquee-fade cw-marquee-fade-l"></div>
          <div className="cw-marquee-fade cw-marquee-fade-r"></div>
        </div>

        <div className="cw-trust-strip">
          <div className="cw-trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg> Confidencialidad NDA</div>
          <div className="cw-trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> SLA garantizados</div>
          <div className="cw-trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg> Operación 24/7</div>
          <div className="cw-trust-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7 9 18l-5-5"/></svg> Consultores certificados SAP</div>
        </div>
      </div>
    </section>
  );
}

// ============ WHY ============
function Why() {
  const cards = [
    { ico: <I.users style={{width:22,height:22}}/>, t: "Nuestra gente", d: "Contamos con un equipo humano cuidadosamente seleccionado y rigurosamente entrenado en funcionalidades SAP, alineado con nuestra misión dentro de una cultura colaborativa." },
    { ico: <I.handshake style={{width:22,height:22}}/>, t: "Relaciones cercanas y de largo plazo", d: "Cada cliente es una entidad única sobre la cual trabajamos en distinguir necesidades e insatisfacciones, y desarrollar servicios y programas continuos de evolución para el mediano y largo plazo." },
    { ico: <I.check style={{width:22,height:22}}/>, t: "Cumplimiento de la promesa", d: "Construimos relaciones de confianza con nuestros clientes en base a la credibilidad y la confiabilidad sostenidas en el cumplimiento indeclinable de nuestras promesas de valor." },
    { ico: <I.flow style={{width:22,height:22}}/>, t: "Método de trabajo", d: "Nuestro desempeño se basa en metodologías de clase mundial y mejores prácticas empresariales." },
    { ico: <I.bolt style={{width:22,height:22}}/>, t: "Soluciones ágiles y efectivas", d: "Brindamos soluciones de negocio sobre plataforma SAP, oportunas, adecuadas y acertadas." },
    { ico: <I.shield style={{width:22,height:22}}/>, t: "Respaldo", d: "Contamos con más de 30 años de experiencia brindando servicios de implementación y operación de soluciones SAP en clientes de primer nivel regional." },
  ];
  return (
    <section id="nosotros" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Diferenciales</span>
          <h2 className="h-section">¿Por qué elegir <span className="gradient-text">Flag Soluciones</span>?</h2>
          <p className="lead">Un socio SAP con método, respaldo y cercanía, construido sobre la confianza de organizaciones líderes de Colombia y Centroamérica.</p>
        </div>
        <div className="why-grid">
          {cards.map((c,i) => (
            <div key={c.t} className="why-card">
              <div className="num">0{i+1}</div>
              <div className="ico">{c.ico}</div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { I, Header, MobileMenu, Hero, Trust, Why });
