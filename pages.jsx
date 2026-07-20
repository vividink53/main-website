// Vividink site — page-level scenes.
const { useState: usePS, useEffect: useEffP } = React;

// ============ HOME =================================================
const HomePage = ({ lang, onNav }) => {
  return (
    <div className="scene">
      <Hero lang={lang} onNav={onNav} videoOpacity={window.__heroOpacity || 0.78} />

      <Metrics lang={lang} />

      <Manifesto lang={lang} />

      <section className="section" data-screen-label="Services">
        <SecHead
          eyebrow={T('services_section.eyebrow', lang)}
          title={lang === 'ar' ? window.I18N.services_section.title.ar : window.I18N.services_section.title.en}
          num={T('services_section.num', lang)}
        />
        <ServiceRows lang={lang} onNav={onNav} />
      </section>

      <section className="section" data-screen-label="Work">
        <SecHead
          eyebrow={T('work_section.eyebrow', lang)}
          title={lang === 'ar' ? window.I18N.work_section.title.ar : window.I18N.work_section.title.en}
          num={T('work_section.num', lang)}
        />
        <WorkGrid lang={lang} columns={3} onOpen={(id) => { window.__pendingCase = id; onNav('work'); }} />
        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'center' }}>
          <button className="btn btn--quiet" onClick={() => onNav('work')}>{T('work_section.seeAll', lang)}</button>
        </div>
      </section>
    </div>
  );
};

// ============ ABOUT ================================================
const AboutPage = ({ lang }) => {
  const titleHTML = lang === 'ar' ? window.I18N.about.title_ar : window.I18N.about.title_en;
  return (
    <div className="scene">
      <header className="page-hero" data-screen-label="About">
        <p className="page-hero__eye">
          <span className="ln"></span>
          <span>{T('about.eyebrow', lang)}</span>
        </p>
        <h1 className="page-hero__title" dangerouslySetInnerHTML={{ __html: titleHTML }}></h1>
        <p className="page-hero__lede">{T('about.lede', lang)}</p>
      </header>

      <section className="about-split" data-screen-label="About-Story">
        <div className="about-split__img">
          <img src="assets/portfolio-spread-statue.png" alt="" />
        </div>
        <div className="about-split__txt">
          <h3>{T('about.splitTitle', lang)}</h3>
          <p>{T('about.splitP1', lang)}</p>
          <p>{T('about.splitP2', lang)}</p>
        </div>
      </section>

      <section className="pillars" data-screen-label="Pillars">
        {window.I18N.about.pillars.map((p, i) => (
          <div key={i} className="pillar">
            <div className="pillar__num">{i === 0 ? '·' : i === 1 ? '◼' : '●'}</div>
            <p className="pillar__role">{lang === 'ar' ? p.role.ar : p.role.en}</p>
            <h3 className="pillar__title">{lang === 'ar' ? p.title.ar : p.title.en}</h3>
            <p className="pillar__desc">{lang === 'ar' ? p.desc.ar : p.desc.en}</p>
          </div>
        ))}
      </section>

      <Metrics lang={lang} />
      <Manifesto lang={lang} />
    </div>
  );
};

// ============ SERVICES =============================================
const ServicesPage = ({ lang, onNav }) => {
  const titleHTML = lang === 'ar' ? window.I18N.services_page.title_ar : window.I18N.services_page.title_en;
  const list = window.I18N.services;
  const visuals = [
    'assets/portfolio-fabric-essence.png',
    'assets/portfolio-cover.png',
    'assets/portfolio-philosophy.png',
    'assets/portfolio-chess.png',
  ];
  return (
    <div className="scene">
      <header className="page-hero" data-screen-label="Services">
        <p className="page-hero__eye">
          <span className="ln"></span>
          <span>{T('services_page.eyebrow', lang)}</span>
        </p>
        <h1 className="page-hero__title" dangerouslySetInnerHTML={{ __html: titleHTML }}></h1>
        <p className="page-hero__lede">{T('services_page.lede', lang)}</p>
      </header>

      {list.map((s, i) => {
        const reverse = i % 2 === 1;
        return (
          <section key={i} className={`svc-detail ${reverse ? 'alt' : ''}`} data-screen-label={`Service-${i+1}`}>
            <div className={reverse ? 'order-2' : ''} style={{ order: reverse ? 2 : 1 }}>
              <div className="svc-detail__num">/ {lang === 'ar' ? s.num_ar : s.num_en} — 04</div>
              <p className="svc-detail__role">{lang === 'ar' ? s.role.ar : s.role.en}</p>
              <h2 className="svc-detail__title">{lang === 'ar' ? s.title.ar : s.title.en}</h2>
              <p className="svc-detail__lede">{lang === 'ar' ? s.desc.ar : s.desc.en}</p>
              <ul className="svc-detail__list">
                {(lang === 'ar' ? s.points_ar : s.points_en).map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
              <button className="btn btn--quiet" onClick={() => onNav('contact')}>
                {lang === 'ar' ? 'ابدأ مع هذه الخدمة ←' : 'Start with this service →'}
              </button>
            </div>
            <div className="svc-detail__visual" style={{ order: reverse ? 1 : 2 }}>
              <img src={visuals[i % visuals.length]} alt="" />
            </div>
          </section>
        );
      })}

      <Metrics lang={lang} />
    </div>
  );
};

// ============ WORK =================================================
const WorkPage = ({ lang, onNav }) => {
  const [filter, setFilter] = usePS('all');
  const [openCase, setOpenCase] = usePS(null);
  const titleHTML = lang === 'ar' ? window.I18N.work_page.title_ar : window.I18N.work_page.title_en;
  const filters = ['all', 'identity', 'package', 'graphic'];
  const counts = window.I18N.clients.reduce((a, c) => { a[c.tag] = (a[c.tag]||0)+1; return a; }, {});
  counts.all = window.I18N.clients.length;
  return (
    <div className="scene">
      <header className="page-hero" data-screen-label="Work">
        <p className="page-hero__eye">
          <span className="ln"></span>
          <span>{T('work_page.eyebrow', lang)}</span>
        </p>
        <h1 className="page-hero__title" dangerouslySetInnerHTML={{ __html: titleHTML }}></h1>
        <p className="page-hero__lede">{T('work_page.lede', lang)}</p>
      </header>

      <section className="section">
        <div className="filters">
          {filters.map(f => (
            <button key={f} className={`filter ${filter === f ? 'on' : ''}`} onClick={() => setFilter(f)}>
              {T(`filters.${f}`, lang)} <span style={{ opacity: 0.55, marginInlineStart: 6 }}>· {counts[f] || 0}</span>
            </button>
          ))}
        </div>
        <WorkGrid lang={lang} filter={filter} columns={3} onOpen={(id) => setOpenCase(id)} />
      </section>
      {openCase && <CaseStudy id={openCase} lang={lang} onClose={() => setOpenCase(null)} />}
    </div>
  );
};

// ============ CONTACT =============================================
const ContactPage = ({ lang }) => {
  const titleHTML = lang === 'ar' ? window.I18N.contact.title_ar : window.I18N.contact.title_en;
  const f = window.I18N.contact.form;
  const d = window.I18N.contact.direct;
  return (
    <div className="scene">
      <header className="page-hero" data-screen-label="Contact">
        <p className="page-hero__eye">
          <span className="ln"></span>
          <span>{T('contact.eyebrow', lang)}</span>
        </p>
        <h1 className="page-hero__title" dangerouslySetInnerHTML={{ __html: titleHTML }}></h1>
        <p className="page-hero__lede">{T('contact.lede', lang)}</p>
      </header>

      <section className="contact-block">
        <div className="contact-block__form">
          <div className="field">
            <label>{lang === 'ar' ? f.name.ar : f.name.en}</label>
            <input placeholder="—" />
          </div>
          <div className="field">
            <label>{lang === 'ar' ? f.brand.ar : f.brand.en}</label>
            <input placeholder="—" />
          </div>
          <div className="field">
            <label>{lang === 'ar' ? f.type.ar : f.type.en}</label>
            <input placeholder={lang === 'ar' ? f.typeP.ar : f.typeP.en} />
          </div>
          <div className="field">
            <label>{lang === 'ar' ? f.frame.ar : f.frame.en}</label>
            <textarea rows="3" placeholder={lang === 'ar' ? f.frameP.ar : f.frameP.en}></textarea>
          </div>
          <button className="btn btn--primary contact-block__send">{lang === 'ar' ? f.send.ar : f.send.en}</button>
        </div>

        <aside className="contact-block__aside">
          <h4>{lang === 'ar' ? d.eyebrow.ar : d.eyebrow.en}</h4>
          <a className="contact-line-big" href="tel:+963991636710">
            <span className="lbl">{lang === 'ar' ? d.phone_lbl.ar : d.phone_lbl.en}</span>
            +963 991 636 710
          </a>
          <a className="contact-line-big" href="mailto:vividink53@gmail.com">
            <span className="lbl">{lang === 'ar' ? d.email_lbl.ar : d.email_lbl.en}</span>
            vividink53@gmail.com
          </a>
          <a className="contact-line-big" href="https://www.instagram.com/vividink53" target="_blank" rel="noopener">
            <span className="lbl">{lang === 'ar' ? d.ig_lbl.ar : d.ig_lbl.en}</span>
            @vividink53
          </a>
          <div className="contact-line-big" style={{ cursor: 'default' }}>
            <span className="lbl">{lang === 'ar' ? d.hours_lbl.ar : d.hours_lbl.en}</span>
            <span style={{ fontSize: '0.55em', fontFamily: 'var(--font-sans)', fontWeight: 300, letterSpacing: '0.04em' }}>
              {lang === 'ar' ? d.hours.ar : d.hours.en}
            </span>
          </div>
        </aside>
      </section>
    </div>
  );
};

Object.assign(window, { HomePage, AboutPage, ServicesPage, WorkPage, ContactPage });
