// Vividink site – page-level scenes.
const { useState: usePS, useEffect: useEffP } = React;

// ============= HOME =================================
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
        <WorkGrid lang={lang} onNav={onNav} limit={4} />
      </section>

      <FounderQuote lang={lang} />

      <CtaStrip lang={lang} onNav={onNav} />
    </div>
  );
};

// ============= ABOUT ================================
const AboutPage = ({ lang }) => {
  const p = window.I18N.about_page;

  return (
    <div className="scene page-about">
      <PageHero
        kicker={p.kicker[lang]}
        title={p.title[lang]}
        sub={p.sub[lang]}
      />

      <section className="section about-split">
        <div className="about-split__grid">
          <div className="about-split__visual">
            <img src="assets/v-mark.png" alt="Vividink" className="about-split__mark" />
            <div className="about-split__glow"></div>
          </div>
          <div className="about-split__txt">
            <h3>{p.manifestoTitle[lang]}</h3>
            <p className="lead">{p.manifestoLead[lang]}</p>
            <p>{p.manifestoP1[lang]}</p>
            <p>{p.manifestoP2[lang]}</p>
          </div>
        </div>
      </section>

      <section className="section pillars-sec">
        <SecHead
          eyebrow={lang === 'ar' ? 'الركائز' : 'PILLARS'}
          title={lang === 'ar' ? 'مبادئٌ لا حِيادَ عنها .' : 'Principles We Never Compromise.'}
          num="01"
        />
        <div className="pillars-grid">
          {p.pillars.map((item, idx) => (
            <div key={idx} className="pillar-card">
              <span className="pillar-card__num">0{idx + 1}</span>
              <h4 className="pillar-card__title">{item.title[lang]}</h4>
              <p className="pillar-card__desc">{item.desc[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      <FounderQuote lang={lang} />
    </div>
  );
};

// ============= SERVICES =============================
const ServicesPage = ({ lang, onNav }) => {
  const p = window.I18N.services_page;

  return (
    <div className="scene page-services">
      <PageHero
        kicker={p.kicker[lang]}
        title={p.title[lang]}
        sub={p.sub[lang]}
      />

      <section className="section services-list">
        {p.list.map((item, idx) => (
          <div key={item.id} className="svc-detail">
            <div className="svc-detail__num">0{idx + 1}</div>
            <div className="svc-detail__main">
              <h3 className="svc-detail__title">{item.title[lang]}</h3>
              <p className="svc-detail__desc">{item.desc[lang]}</p>
              <ul className="svc-detail__bullets">
                {item.bullets.map((b, bi) => (
                  <li key={bi}>{b[lang]}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <CtaStrip lang={lang} onNav={onNav} />
    </div>
  );
};

// ============= WORK =================================
const WorkPage = ({ lang, onNav }) => {
  const p = window.I18N.work_page;

  return (
    <div className="scene page-work">
      <PageHero
        kicker={p.kicker[lang]}
        title={p.title[lang]}
        sub={p.sub[lang]}
      />

      <section className="section">
        <WorkGrid lang={lang} onNav={onNav} limit={99} />
      </section>

      <CtaStrip lang={lang} onNav={onNav} />
    </div>
  );
};

// ============= CONTACT ==============================
const ContactPage = ({ lang }) => {
  return (
    <main className="page-contact" style={{ padding: '140px 20px 80px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="sec-head__title" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
        دعنا نصنع أثراً يخلد.
      </h1>
      <p style={{ opacity: 0.8, fontSize: '1.2rem', marginBottom: '40px' }}>
        نحن جاهزون لبدء مشروعك القادم وصناعة أثر لا يُنسى لعلامتك التجارية.
      </p>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '40px', borderRadius: '24px', marginBottom: '40px' }}>
        <div style={{ marginBottom: '25px' }}>
          <div style={{ opacity: 0.5, fontSize: '0.9rem', marginBottom: '5px' }}>البريد الإلكتروني</div>
          <a href="mailto:info@vividinkmedia.com" style={{ fontSize: '1.4rem', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
            info@vividinkmedia.com
          </a>
        </div>

        <div style={{ marginBottom: '35px' }}>
          <div style={{ opacity: 0.5, fontSize: '0.9rem', marginBottom: '5px' }}>التواصل عبر الواتساب</div>
          <a href="https://wa.me/963946976617" target="_blank" style={{ fontSize: '1.4rem', color: '#25D366', textDecoration: 'none', fontWeight: 'bold' }}>
            0946976617
          </a>
        </div>

        <a href="http://survey.vividinkmedia.com" className="btn btn--primary" style={{ display: 'inline-block', padding: '18px 36px', fontSize: '1.2rem', textDecoration: 'none' }}>
          الانتقال إلى استبيان العميل (Client Brief) ←
        </a>
      </div>
    </main>
  );
};
