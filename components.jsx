// Vividink site — shared components.

const { useState, useEffect, useRef } = React;
const T = (k, lang) => {
  // helper: read I18N path "a.b.c" with lang fallback
  const parts = k.split('.');
  let v = window.I18N;
  for (const p of parts) v = v?.[p];
  if (!v) return k;
  if (typeof v === 'string') return v;
  if (v[lang] != null) return v[lang];
  return v.en || k;
};

// === Loader =========================================================
const Loader = ({ done, lang }) => (
  <div className={`loader ${done ? 'gone' : ''}`}>
    <img className="loader__mark" src="assets/v-mark.png" alt="V" />
    <div className="loader__bar"></div>
    <div className="loader__label">
      {lang === 'ar' ? 'فيفيدنك · يحضّر المشهد' : 'VIVIDINK · LOADING THE FRAME'}
    </div>
  </div>
);

// === Scroll progress rule ==========================================
const ScrollRule = () => {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setW(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="scroll-rule" style={{ width: `${w}%` }}></div>;
};

// === Nav ===========================================================
const Nav = ({ onMenu, onNav, lang, setLang, scrolled }) => (
  <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
    <div className="nav__brand" onClick={() => onNav('home')}>
      <img src="assets/v-mark.png" alt="V" />
      <span>VIVIDINK</span>
    </div>
    <div className="nav__right">
      <button className="nav__lang" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>
        <span className={lang === 'en' ? 'active' : ''}>EN</span>
        <span className="sep"></span>
        <span className={lang === 'ar' ? 'active' : ''}>ع</span>
      </button>
      <button className="nav__menu-btn" onClick={onMenu}>
        <span className="lines"><span></span><span></span></span>
        <span>{T('nav.menu', lang)}</span>
      </button>
    </div>
  </nav>
);

// === Menu Overlay ==================================================
const MenuOverlay = ({ open, onClose, onNav, lang }) => {
  useEffect(() => {
    document.body.classList.toggle('lock', open);
    return () => document.body.classList.remove('lock');
  }, [open]);
  const items = [
    { k: 'home',     n: '01' },
    { k: 'about',    n: '02' },
    { k: 'services', n: '03' },
    { k: 'work',     n: '04' },
    { k: 'contact',  n: '05' },
  ];
  return (
    <div className={`menu ${open ? 'open' : ''}`}>
      <div className="menu__top">
        <div className="nav__brand" onClick={() => { onNav('home'); onClose(); }}>
          <img src="assets/v-mark.png" alt="V" />
          <span>VIVIDINK</span>
        </div>
        <button className="menu__close" onClick={onClose}>
          <span>{T('nav.close', lang)}</span>
          <span className="x">×</span>
        </button>
      </div>
      <div className="menu__body">
        <div className="menu__nav">
          {items.map(it => (
            <a key={it.k} onClick={() => { onNav(it.k); onClose(); }}>
              <span className="num">{it.n}</span>
              <span>{T(`nav.${it.k}`, lang)}</span>
            </a>
          ))}
        </div>
        <aside className="menu__aside">
          <div>
            <h4>{lang === 'ar' ? 'فلسفتنا' : 'OUR PHILOSOPHY'}</h4>
            <p>{T('manifesto.body1', lang)}</p>
          </div>
          <div>
            <h4>{lang === 'ar' ? 'تواصلْ معنا' : 'GET IN TOUCH'}</h4>
            <a className="contact-line" href="tel:+963991636710">+963 991 636 710</a>
            <a className="contact-line" href="mailto:vividink53@gmail.com">vividink53@gmail.com</a>
            <a className="contact-line" href="https://www.instagram.com/vividink53" target="_blank" rel="noopener">@vividink53</a>
          </div>
        </aside>
      </div>
      <div className="menu__base">
        <span>{T('brand.onAir', lang)}</span>
        <span>{T('footer.city', lang)}</span>
      </div>
    </div>
  );
};

// === Hero ==========================================================
const Hero = ({ lang, onNav, videoOpacity }) => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    // After curtain delay, mark hero entered & start video
    const t1 = setTimeout(() => {
      heroRef.current?.classList.add('entered');
      const v = videoRef.current;
      if (v) {
        v.classList.add('live');
        v.play().catch(() => {});
      }
    }, 600);
    return () => clearTimeout(t1);
  }, []);
  const titleHTML = lang === 'ar'
    ? window.I18N.hero.title_ar
    : window.I18N.hero.title_en;
  return (
    <section className="hero" ref={heroRef} data-screen-label="Hero">
      <div className="hero__video-wrap">
        <video
          ref={videoRef}
          className="hero__video"
          src="assets/hand-ink.mp4"
          autoPlay muted loop playsInline
          style={{ '--hero-video-opacity': videoOpacity }}
        ></video>
      </div>
      <div className="curtain"></div>

      <div className="hero__corner-tl"><span className="tick"></span><span>{T('hero.cornerTL', lang)}</span></div>
      <div className="hero__corner-tr"><span>{T('hero.cornerTR', lang)}</span><span className="tick"></span></div>

      <div className="hero__inner">
        <p className="hero__eyebrow">
          <span className="ln"></span>
          <span>{T('hero.eyebrow', lang)}</span>
        </p>
        <h1 className="hero__display" dangerouslySetInnerHTML={{ __html: titleHTML }}></h1>
        <p className="hero__lede">{T('hero.lede', lang)}</p>
        <div className="hero__cta">
          <button className="btn btn--primary" onClick={() => onNav('work')}>{T('hero.cta1', lang)}</button>
          <button className="btn btn--ghost" onClick={() => onNav('contact')}>{T('hero.cta2', lang)}</button>
        </div>
      </div>

      <div className="hero__corner-bl"><span className="tick"></span><span>{T('hero.cornerBL', lang)}</span></div>
      <div className="hero__corner-br"><span>{T('hero.cornerBR', lang)}</span><span className="tick"></span></div>

      <div className="hero__scroll-hint">{T('hero.scroll', lang)} ↓</div>
    </section>
  );
};

// === Section Head =================================================
const SecHead = ({ eyebrow, title, num }) => (
  <div className="sec-head">
    <p className="sec-head__eye">{eyebrow}</p>
    <h2 className="sec-head__title" style={{ whiteSpace: 'pre-line' }}>{title}</h2>
    <span className="sec-head__num">{num}</span>
  </div>
);

// === Manifesto Strip ==============================================
const Manifesto = ({ lang }) => {
  const big = lang === 'ar' ? window.I18N.manifesto.big_ar : window.I18N.manifesto.big_en;
  return (
    <section className="manifesto" data-screen-label="Manifesto">
      <div className="manifesto__inner">
        <p className="manifesto__big" dangerouslySetInnerHTML={{ __html: big }}></p>
        <div className="manifesto__body">
          <p>{T('manifesto.body1', lang)}</p>
          <p>{T('manifesto.body2', lang)}</p>
          <div className="manifesto__sig">
            <img src="assets/v-mark.png" alt="" />
            <span>{T('manifesto.sig', lang)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// === Service Rows (home + services page) =========================
const ServiceRows = ({ lang, onNav }) => {
  const list = window.I18N.services;
  return (
    <div className="svc">
      {list.map((s, i) => (
        <div key={i} className="svc__row" onClick={() => onNav && onNav('services')}>
          <span className="svc__num">{lang === 'ar' ? s.num_ar : s.num_en}</span>
          <h3 className="svc__ttl">{lang === 'ar' ? s.title.ar : s.title.en}</h3>
          <p className="svc__desc">{lang === 'ar' ? s.desc.ar : s.desc.en}</p>
          <span className="svc__arrow">{lang === 'ar' ? 'اطّلع ←' : 'READ →'}</span>
        </div>
      ))}
    </div>
  );
};

// === Metrics row ==================================================
const Metrics = ({ lang }) => {
  const items = lang === 'ar' ? window.I18N.metrics.items_ar : window.I18N.metrics.items_en;
  return (
    <section className="metrics" data-screen-label="Metrics">
      <div className="metrics__inner">
        {items.map((m, i) => (
          <div key={i} className="metric">
            <div className="metric__big">
              <span className="plus">{m.u}</span>
              <span>{m.v}</span>
            </div>
            <div className="metric__lbl">{m.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// === Work Card / Grid =============================================
const WorkCard = ({ data, lang, onOpen, columns }) => {
  // give cards varying aspect ratios for masonry feel
  const variants = [
    { ar: '4/5' }, { ar: '3/4' }, { ar: '1/1' }, { ar: '4/3' }, { ar: '5/7' },
  ];
  const v = variants[(parseInt(data.num, 10) - 1) % variants.length];
  return (
    <div className="work-card" onClick={() => onOpen && onOpen(data.id)}>
      <div className="work-card__frame" style={{ aspectRatio: v.ar, background: data.accent }}>
        <img src={data.img} alt="" />
        <div className="work-card__overlay">
          <span className="work-card__client">{lang === 'ar' ? data.name_ar : data.name_en}</span>
          <span className="work-card__tag">{T(`filters.${data.tag}`, lang)}</span>
        </div>
      </div>
      <div className="work-card__body">
        <span className="work-card__num">/ {data.num}</span>
        <span className="work-card__meta">{lang === 'ar' ? data.sector_ar : data.sector_en}</span>
      </div>
    </div>
  );
};

const WorkGrid = ({ lang, onOpen, filter = 'all', columns = 3 }) => {
  const list = window.I18N.clients.filter(c => filter === 'all' || c.tag === filter);
  return (
    <div className={`work-grid cols-${columns}`}>
      {list.map(c => <WorkCard key={c.id} data={c} lang={lang} onOpen={onOpen} columns={columns} />)}
    </div>
  );
};

// === Footer =======================================================
const Footer = ({ onNav, lang }) => (
  <footer className="foot">
    <div className="foot__grid">
      <div>
        <p className="foot__lede">{T('footer.lede', lang)}</p>
        <div className="foot__brand">
          <img src="assets/v-mark.png" alt="" />
          <span>VIVIDINK</span>
        </div>
      </div>
      <div className="foot__col">
        <h4>{T('footer.cols.work', lang)}</h4>
        <a onClick={() => onNav('work')}>{T('filters.all', lang)}</a>
        <a onClick={() => onNav('work')}>{T('filters.identity', lang)}</a>
        <a onClick={() => onNav('work')}>{T('filters.package', lang)}</a>
        <a onClick={() => onNav('work')}>{T('filters.graphic', lang)}</a>
      </div>
      <div className="foot__col">
        <h4>{T('footer.cols.studio', lang)}</h4>
        <a onClick={() => onNav('about')}>{T('nav.about', lang)}</a>
        <a onClick={() => onNav('services', lang)}>{T('nav.services', lang)}</a>
      </div>
      <div className="foot__col">
        <h4>{T('footer.cols.contact', lang)}</h4>
        <a href="tel:+963991636710">+963 991 636 710</a>
        <a href="mailto:vividink53@gmail.com">vividink53@gmail.com</a>
        <a href="https://www.instagram.com/vividink53" target="_blank" rel="noopener">@vividink53</a>
      </div>
    </div>
    <div className="foot__base">
      <span>{T('footer.rights', lang)}</span>
    </div>
  </footer>
);

// === Case Study Modal ============================================
const CaseStudy = ({ id, lang, onClose }) => {
  const cs = window.I18N.caseStudies?.[id];
  useEffect(() => {
    if (!cs) return;
    document.body.classList.add('lock');
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.classList.remove('lock'); window.removeEventListener('keydown', onKey); };
  }, [cs]);
  if (!cs) return null;
  return (
    <div className="case" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="case__shell">
        <button className="case__close" onClick={onClose}>
          <span>{lang === 'ar' ? 'إغلاق' : 'Close'}</span><span className="x">×</span>
        </button>
        <div className="case__hero">
          <img src={cs.hero} alt="" />
          <div className="case__hero-overlay">
            <p className="case__kicker">{lang === 'ar' ? cs.kicker.ar : cs.kicker.en}</p>
            <h1 className="case__name">{lang === 'ar' ? cs.name.ar : cs.name.en}</h1>
            <p className="case__tag">{lang === 'ar' ? cs.tag.ar : cs.tag.en} · {cs.year}</p>
          </div>
        </div>
        <div className="case__intro">
          <p className="case__role">{lang === 'ar' ? cs.role.ar : cs.role.en}</p>
          <p className="case__lede">{lang === 'ar' ? cs.lede.ar : cs.lede.en}</p>
          <div className="case__stats">
            {cs.stats.map((s, i) => (
              <div key={i} className="case__stat">
                <span className="case__stat-v">{s.v}</span>
                <span className="case__stat-l">{lang === 'ar' ? s.l_ar : s.l_en}</span>
              </div>
            ))}
          </div>
        </div>
        {cs.sections.map((sec, i) => (
          <section key={i} className="case__section">
            <div className="case__section-img"><img src={sec.img} alt="" /></div>
            <div className="case__section-txt">
              <h3>{lang === 'ar' ? sec.heading_ar : sec.heading_en}</h3>
              <p>{lang === 'ar' ? sec.body_ar : sec.body_en}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

// === Page Hero (shared header for About / Services / Work / Contact) =====
const PageHero = ({ kicker, title, sub }) => (
  <header className="page-hero" data-screen-label="Page Hero">
    <p className="page-hero__eye">
      <span className="ln"></span>
      <span>{kicker}</span>
    </p>
    <h1 className="page-hero__title">{title}</h1>
    {sub && <p className="page-hero__lede">{sub}</p>}
  </header>
);

// === Founder Quote =========================================================
const FounderQuote = ({ lang }) => {
  const f = window.I18N.founder_quote;
  return (
    <section className="founder-quote" data-screen-label="Founder Quote">
      <div className="founder-quote__inner">
        <span className="founder-quote__mark">”</span>
        <p className="founder-quote__text">{f.quote[lang]}</p>
        <div className="founder-quote__attrib">
          <span className="founder-quote__author">{f.author[lang]}</span>
          <span className="founder-quote__role">{f.role[lang]}</span>
        </div>
      </div>
    </section>
  );
};

// === CTA Strip ==============================================================
const CtaStrip = ({ lang }) => {
  const c = window.I18N.cta_strip;
  return (
    <section className="cta-strip" data-screen-label="CTA Strip">
      <div className="cta-strip__inner">
        <h2 className="cta-strip__title">{c.title[lang]}</h2>
        <p className="cta-strip__sub">{c.sub[lang]}</p>
        <a
          className="btn btn--primary"
          href="https://brief.vividinkmedia.com"
          target="_blank"
          rel="noopener"
        >
          {c.btn[lang]}
        </a>
      </div>
    </section>
  );
};

Object.assign(window, {
  Loader, ScrollRule, Nav, MenuOverlay, Hero, SecHead,
  Manifesto, ServiceRows, Metrics, WorkCard, WorkGrid, Footer, CaseStudy, T,
  PageHero, FounderQuote, CtaStrip,
});
