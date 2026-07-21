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
            <img src="v-mark.png" alt="Vividink" className="about-split__mark" />
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
  const c = window.I18N.contact_page;
  const [submitted, setSubmitted] = usePS(false);
  const [formData, setFormData] = usePS({ name: '', company: '', email: '', phone: '', scope: '', budget: '', brief: '' });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="scene page-contact">
      <PageHero
        kicker={c.kicker[lang]}
        title={c.title[lang]}
        sub={c.sub[lang]}
      />

      <section className="section contact-grid-sec">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info__block">
              <span className="contact-info__lbl">{c.labels.direct[lang]}</span>
              <a href="mailto:info@vividinkmedia.com" className="contact-info__val">info@vividinkmedia.com</a>
              <a href="tel:+963946976617" className="contact-info__val">+963 946 976 617</a>
            </div>

            <div className="contact-info__block">
              <span className="contact-info__lbl">{c.labels.studio[lang]}</span>
              <p className="contact-info__txt">{c.labels.location[lang]}</p>
            </div>

            <div className="contact-info__block">
              <span className="contact-info__lbl">{c.labels.social[lang]}</span>
              <div className="contact-info__links">
                <a href="#" target="_blank" rel="noreferrer">Instagram ↗</a>
                <a href="#" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="#" target="_blank" rel="noreferrer">Behance ↗</a>
                <a href="#" target="_blank" rel="noreferrer">X (Twitter) ↗</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__mark">✓</div>
                <h3>{c.success.title[lang]}</h3>
                <p>{c.success.sub[lang]}</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>{c.form.name[lang]}</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>{c.form.company[lang]}</label>
                    <input type="text" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>{c.form.email[lang]}</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>{c.form.phone[lang]}</label>
                    <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                </div>

                <div className="form-group">
                  <label>{c.form.scope[lang]}</label>
                  <select value={formData.scope} onChange={e => setFormData({ ...formData, scope: e.target.value })}>
                    <option value="">— {lang === 'ar' ? 'اختر النطاق' : 'Select'} —</option>
                    {c.scopes.map((s, i) => (
                      <option key={i} value={s.en}>{s[lang]}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>{c.form.budget[lang]}</label>
                  <select value={formData.budget} onChange={e => setFormData({ ...formData, budget: e.target.value })}>
                    <option value="">— {lang === 'ar' ? 'اختر الميزانية' : 'Select'} —</option>
                    {c.budgets.map((b, i) => (
                      <option key={i} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>{c.form.brief[lang]}</label>
                  <textarea rows="4" value={formData.brief} onChange={e => setFormData({ ...formData, brief: e.target.value })}></textarea>
                </div>

                <button type="submit" className="btn btn--primary btn--full">
                  {c.form.submit[lang]}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
