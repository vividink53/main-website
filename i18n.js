// Bilingual content for Vividink site
// Each string has en + ar.

const I18N = {
  nav: {
    home:     { en: 'Home',     ar: 'الرئيسية' },
    about:    { en: 'About',    ar: 'من نحن' },
    services: { en: 'Services', ar: 'الخدمات' },
    work:     { en: 'Work',     ar: 'الأعمال' },
    contact:  { en: 'Contact',  ar: 'تواصل' },
    menu:     { en: 'Menu',     ar: 'القائمة' },
    close:    { en: 'Close',    ar: 'إغلاق' },
    start:    { en: 'Start a project', ar: 'ابدأ مشروعاً' },
  },

  brand: {
    onAir:    { en: 'ON AIR · MMXXVI', ar: 'البث المباشر · ٢٠٢٦' },
    studio:   { en: 'Vividink Studio', ar: 'استوديو فيفيدنك' },
  },

  hero: {
    eyebrow:  { en: 'Brand · Social · Cinema', ar: 'هوية · سوشل · سينما' },
    title_en: 'Creators of the<br/><em>Immortal Mark.</em>',
    title_ar: 'صُنّاع<br/><em>الأثر الخالد.</em>',
    lede: {
      en: 'An integrated creative team crafting unforgettable visual identities. Classical roots, modern edge — visual contracts between your brand and its audience.',
      ar: 'فريق إبداعي متكامل لصياغة هويات بصرية لا تُنسى. جذور كلاسيكية، حدّة معاصرة — عقودٌ بصرية بين علامتك وجمهورها.',
    },
    cta1: { en: 'View the work',     ar: 'شاهد الأعمال' },
    cta2: { en: 'Start a project →', ar: 'ابدأ مشروعاً ←' },
    scroll: { en: 'Scroll',          ar: 'تمرير' },
    cornerTL: { en: 'EST. MMXXVI · DAMASCUS',     ar: 'تأسست ٢٠٢٦ · دمشق' },
    cornerTR: { en: 'A STUDIO FOR THE IMMORTAL MARK', ar: 'استوديو للأثر الخالد' },
    cornerBL: { en: '01 / OPENING FRAME', ar: '٠١ / المشهد الأول' },
    cornerBR: { en: 'INK · NEVER FADES',  ar: 'حبرٌ · لا يبهت' },
  },

  manifesto: {
    eyebrow: { en: 'Philosophy · 02', ar: 'فلسفة · ٠٢' },
    title: { en: 'Title', ar: 'العنوان' },
    big_en: 'We don\'t design temporary shapes. We <em>sculpt</em> visual identities — infused with the spirit of the modern era.',
    big_ar: 'نحن لا نصمّم أشكالاً عابرة. نحن <em>ننحت</em> هويات بصرية — مفعمةً بروح العصر الحديث.',
    body1: {
      en: 'In a world overwhelmed by fleeting messages and visual noise, we refuse temporary aesthetics. Instead, we build solid, direct visual contracts between your brand and its audience.',
      ar: 'في عالمٍ يغمره الضجيج البصري والرسائل العابرة، نرفض الجماليات المؤقتة. بدلاً من ذلك، نصنع عقوداً بصرية صلبةً ومباشرةً بين علامتك وجمهورها.',
    },
    body2: {
      en: 'The Vividink team writes your story with ink that never fades — anatomical precision, sharp composition, the pulse that cuts through silence.',
      ar: 'يكتب فريق فيفيدنك قصّتك بحبرٍ لا يبهت — دقّةٌ تشريحية، وتكوينٌ حادّ، ونبضٌ يخترق الصمت.',
    },
    sig: { en: 'Vividink — The Immortal Mark', ar: 'فيفيدنك — الأثر الخالد' },
  },

  services_section: {
    eyebrow: { en: 'Services · 03', ar: 'الخدمات · ٠٣' },
    num:     { en: '01 — 04', ar: '٠١ — ٠٤' },
    title: {
      en: 'Four disciplines.\nOne signature.',
      ar: 'أربع تخصّصات.\nتوقيع واحد.',
    },
  },

  services: [
    {
      num_en: '01', num_ar: '٠١',
      title: {
        en: 'Visual Identity Design',
        ar: 'صناعة الهوية البصرية',
      },
      desc: {
        en: 'Designing complete visual entities that carry the philosophy of sustainability — logos, brand systems, guidelines that survive a decade.',
        ar: 'تصميم كيانات بصرية متكاملة تحمل فلسفة الاستدامة — شعاراتٌ وأنظمةٌ ودليل علامة يصمد لعقد كامل.',
      },
      role:  { en: 'Formation · Branding', ar: 'التكوين · العلامة' },
      points_en: ['Brand strategy & positioning', 'Logo & wordmark systems', 'Color, type, photographic direction', 'Brand guidelines & launch kits'],
      points_ar: ['الاستراتيجية والتموقع', 'أنظمة الشعار والعلامة', 'اللون والخط والإخراج البصري', 'دليل العلامة وحزم الإطلاق'],
    },
    {
      num_en: '02', num_ar: '٠٢',
      title: {
        en: 'Social Media Management',
        ar: 'إدارة منصات التواصل',
      },
      desc: {
        en: 'Strategic content that gives your brand an impactful presence — every post a small directorial choice, every week a chapter.',
        ar: 'صناعة محتوى استراتيجي يمنح علامتك حضوراً مؤثراً — كلّ منشور قرارٌ إخراجي صغير، وكلّ أسبوع فصل.',
      },
      role:  { en: 'Reach · Conversation', ar: 'الوصول · الحوار' },
      points_en: ['Content strategy & monthly plans', 'Art direction & post design', 'Community management', 'Paid campaigns & analytics'],
      points_ar: ['استراتيجية المحتوى والخطط الشهرية', 'الإخراج الفني وتصميم المنشورات', 'إدارة المجتمع', 'الحملات الممولة والتحليلات'],
    },
    {
      num_en: '03', num_ar: '٠٣',
      title: {
        en: 'Professional Video Production',
        ar: 'إنتاج وتحرير الفيديو',
      },
      desc: {
        en: 'Turning vision into dynamic experiences that pulse with life — anthems, reels, long-form. Written on paper, shot on film, cut for attention.',
        ar: 'تحويل الرؤية إلى تجارب ديناميكية تنبض بالحياة — أناشيدُ علامة، ريلاتٌ، ومحتوى طويل. مكتوبٌ على ورق، مصوّرٌ بعينٍ سينمائية، مُنتجٌ للانتباه.',
      },
      role:  { en: 'Cinematic Craft', ar: 'الحرفة السينمائية' },
      points_en: ['Concept & script', 'Direction & cinematography', 'Editing, grading & sound', 'Reels & social cut-downs'],
      points_ar: ['الفكرة والسيناريو', 'الإخراج والتصوير', 'المونتاج والتدرّج اللوني والصوت', 'ريلات ونسخ السوشل'],
    },
    {
      num_en: '04', num_ar: '٠٤',
      title: {
        en: 'AI-Driven Content Production',
        ar: 'إنتاج محتوى الذكاء الاصطناعي',
      },
      desc: {
        en: 'Crafting innovative content that meets quality standards in the field of artificial intelligence — generative imagery, AI-assisted motion, prompt-engineered worlds.',
        ar: 'صياغة محتوى مبتكر يلبّي معايير الجودة في مجال الذكاء الاصطناعي — صورٌ توليدية، حركةٌ بمساعدة الذكاء، وعوالمُ من هندسة المُوجِّهات.',
      },
      role:  { en: 'Generative · Frontier', ar: 'توليدي · حدّ العصر' },
      points_en: ['AI-generated stills & motion', 'Prompt engineering & art direction', 'Hybrid live + generative shoots', 'Brand-safe model fine-tuning'],
      points_ar: ['صور وفيديو توليدي', 'هندسة المُوجِّهات والإخراج الفني', 'تصوير هجين: حيّ + توليدي', 'تدريب نماذج آمنة للعلامة'],
    },
  ],

  metrics: {
    eyebrow: { en: 'Track Record', ar: 'الإنجاز' },
    items_en: [
      { v: '30',     u: '+', l: 'Logos & commercial identities' },
      { v: '100',    u: '+', l: 'Reels for a single client' },
      { v: '1M',     u: '+', l: 'Views on client video content' },
      { v: '90K',    u: '~', l: 'Reach on single campaigns' },
    ],
    items_ar: [
      { v: '٣٠',     u: '+', l: 'شعار وإعلان تجاري' },
      { v: '١٠٠',    u: '+', l: 'ريل لعميل واحد' },
      { v: '١م',     u: '+', l: 'مشاهدة على محتوى العملاء' },
      { v: '٩٠ك',    u: '~', l: 'وصول لحملة واحدة' },
    ],
  },

  work_section: {
    eyebrow: { en: 'Selected Work · 04', ar: 'أعمال مختارة · ٠٤' },
    num: { en: '2026 · MMXXVI', ar: '٢٠٢٦' },
    title: { en: 'Not a lookbook.\nA point of view.', ar: 'ليست مجرد معرض.\nبل وجهة نظر.' },
    seeAll: { en: 'See all projects →', ar: 'كلّ المشاريع ←' },
  },

  // Real client roster as provided
  clients: [
    // Identity-design clients
    { id: 'anzu',    name_en: 'Anzu',     name_ar: 'أنزو',     tag: 'identity', sector_en: 'Beauty / Cosmetics',     sector_ar: 'تجميل ومستحضرات',  num: '01', accent: '#d2a373', img: 'assets/anzu/01-cave.png' },
    { id: 'artemis', name_en: 'Artemis',  name_ar: 'أرتيمس',   tag: 'identity', sector_en: 'Tennis / Streetwear',    sector_ar: 'رياضة وستريت وير', num: '02', accent: '#3a7d44', img: 'assets/portfolio-spread-statue.png' },
    { id: 'grillo',  name_en: 'Grillo',   name_ar: 'غريللو',   tag: 'identity', sector_en: 'QSR · Restaurants',      sector_ar: 'مطاعم وجبات سريعة', num: '03', accent: '#c5161d', img: 'assets/grillo/01-hero.png' },
    { id: 'quasar',  name_en: 'Quasar',   name_ar: 'كوازار',   tag: 'identity', sector_en: 'Sports / Fitness',       sector_ar: 'رياضة ولياقة',     num: '04', accent: '#173b6c', img: 'assets/portfolio-chess.png' },
    { id: 'bld',     name_en: 'B.L.D',    name_ar: 'بي.إل.دي', tag: 'identity', sector_en: 'Medical / Wellness',     sector_ar: 'طبّي ولياقة',       num: '05', accent: '#0f3d2e', img: 'assets/portfolio-exhibition.png' },
    // Full-package (social + content) clients
    { id: 'quark',   name_en: 'Quark',    name_ar: 'كوارك',    tag: 'package',  sector_en: 'Football Academy · Lattakia', sector_ar: 'أكاديمية كرة قدم · اللاذقية',  num: '06', accent: '#5e2d8a', img: 'assets/quark/01-hero.png' },
    { id: 'axis',    name_en: 'Axis',     name_ar: 'أكسس',     tag: 'package',  sector_en: 'Interior Design · Riyadh', sector_ar: 'تصميم داخلي · الرياض', num: '07', accent: '#5547e3', img: 'assets/axis/01-hero.png' },
    { id: 'nassma',  name_en: 'Nassmeh',  name_ar: 'نسمة',     tag: 'package',  sector_en: 'Consumer · Tissues',     sector_ar: 'استهلاكي · مناديل', num: '08', accent: '#1e3a8a', img: 'assets/nassma/01-hero.png' },
    // Graphic-only clients
    { id: 'worldgate', name_en: 'World Gate', name_ar: 'بوابة العالم', tag: 'graphic', sector_en: 'Logistics',           sector_ar: 'لوجستيات',          num: '09', accent: '#0c2340', img: 'assets/still-hands.svg' },
    { id: 'drlana',  name_en: 'Dr. Lana',  name_ar: 'د. لانا',  tag: 'graphic',  sector_en: 'Healthcare',              sector_ar: 'رعاية صحية',        num: '10', accent: '#d83a7a', img: 'assets/portfolio-fabric-essence.png' },
  ],

  filters: {
    all:      { en: 'All work',         ar: 'كلّ الأعمال' },
    identity: { en: 'Visual identity',  ar: 'هويات بصرية' },
    package:  { en: 'Full package',     ar: 'باقة شاملة' },
    graphic:  { en: 'Graphic design',   ar: 'تصاميم غرافيك' },
  },

  // About page
  about: {
    eyebrow: { en: 'Who We Are · 02', ar: 'من نحن · ٠٢' },
    title_en: 'A studio for the<br/><em>immortal mark.</em>',
    title_ar: 'استوديو<br/><em>للأثر الخالد.</em>',
    lede: {
      en: 'Vividink is the bridge between the precision of classical sculpture and the fluidity of contemporary arts. We work in two languages and one signature.',
      ar: 'فيفيدنك جسرٌ بين دقّة النحت الكلاسيكي وسيولة الفنون المعاصرة. نعمل بلغتين وتوقيع واحد.',
    },
    splitTitle: {
      en: 'The Philosophy of Eternity — Modern Legacy Through Classical Roots.',
      ar: 'فلسفة الخلود — إرثٌ حديث من جذور كلاسيكية.',
    },
    splitP1: {
      en: 'The name carries our method. Vivid — the pulsating clarity, the moment an idea emerges from the silence of stone. Ink — the essence of documentation, the enduring pigment that turns a fleeting concept into a lasting imprint in memory.',
      ar: 'يحمل الاسم منهجنا. فيفيد — الوضوح النابض، اللحظةُ التي تخرج فيها الفكرة من صمت الحجر. إنك — جوهر التوثيق، الصبغةُ الباقية التي تحوّل الفكرة العابرة إلى أثرٍ راسخ في الذاكرة.',
    },
    splitP2: {
      en: 'We treat each engagement as an exhibition: from ruin to renewal. We hold the silence before the brush. Then we commit — anatomically precise, sharply composed, infused with the spirit of our era.',
      ar: 'نتعامل مع كلّ مشروع كأنه معرض: من الخراب إلى التجدّد. نحتفظ بالصمت قبل الفرشاة. ثم نلتزم — بدقّةٍ تشريحية، وتكوينٍ حادّ، مفعمٍ بروح عصرنا.',
    },
    pillars: [
      { role: { en: 'White · Clarity', ar: 'الأبيض · الوضوح' }, title: { en: 'Formation & Branding', ar: 'التكوين والعلامة' }, desc: { en: 'The starting point. The blank page where identity is born — purity, origin, the field of intention.', ar: 'نقطة البداية. الصفحة البيضاء حيث تُولد الهوية — نقاء، أصل، وحقل النيّة.' } },
      { role: { en: 'Black · Eternity', ar: 'الأسود · الخلود' }, title: { en: 'Strategy & Trust', ar: 'الاستراتيجية والثقة' }, desc: { en: 'The silent foundation. Depth, gravity, the ink that endures — the ground beneath every visible mark.', ar: 'الأساس الصامت. عمقٌ وجاذبية والحبر الذي يبقى — الأرض تحت كلّ أثرٍ مرئي.' } },
      { role: { en: 'Red · Reach', ar: 'الأحمر · الانتشار' }, title: { en: 'Digital Execution', ar: 'التنفيذ الرقمي' }, desc: { en: 'Audacity. Energy. The pulse that cuts through the noise — where the immortal mark meets the live audience.', ar: 'جرأة. طاقة. النبضُ الذي يخترق الضجيج — حيث يلتقي الأثر الخالد بالجمهور الحيّ.' } },
    ],
  },

  // Services page
  services_page: {
    eyebrow: { en: 'Services · 03', ar: 'الخدمات · ٠٣' },
    title_en: 'Four disciplines.<br/><em>One signature.</em>',
    title_ar: 'أربعُ تخصّصات.<br/><em>توقيعٌ واحد.</em>',
    lede: {
      en: 'Each service stands on its own — and they compose into one cinematic system. Brand. Social. Cinema. AI.',
      ar: 'كلّ خدمةٍ تقف وحدها — وتؤلّف معاً نظاماً سينمائياً واحداً. هوية. سوشل. سينما. ذكاء.',
    },
  },

  // Work page
  work_page: {
    eyebrow: { en: 'The Work · 04', ar: 'الأعمال · ٠٤' },
    title_en: 'Selected<br/><em>portfolio.</em>',
    title_ar: 'مختاراتٌ<br/><em>من أعمالنا.</em>',
    lede: {
      en: 'Identities we sculpted. Audiences we earned. Films we shot. Filter by discipline.',
      ar: 'هوياتٌ نحتناها. جمهورٌ كسبناه. أفلامٌ صوّرناها. صفّ حسب التخصّص.',
    },
  },

  // Contact page
  contact: {
    eyebrow: { en: 'Start a Project · 05', ar: 'ابدأ مشروعاً · ٠٥' },
    title_en: 'Tell us the<br/><em>first frame.</em>',
    title_ar: 'احكِ لنا<br/><em>المشهد الأول.</em>',
    lede: {
      en: 'A short note is enough — the rest is craft. We reply within two working days.',
      ar: 'سطرٌ موجز يكفي — والباقي حِرفة. نردّ خلال يومَي عمل.',
    },
    form: {
      name:    { en: 'Your name',                     ar: 'اسمك' },
      brand:   { en: 'Studio or brand',               ar: 'الاستوديو أو العلامة' },
      type:    { en: 'Project type',                  ar: 'نوع المشروع' },
      typeP:   { en: 'Brand · Social · Cinema · AI',  ar: 'هوية · سوشل · سينما · ذكاء' },
      frame:   { en: 'The first frame',               ar: 'المشهد الأول' },
      frameP:  { en: 'In a sentence — what do you see?', ar: 'في جملة — ماذا ترى؟' },
      send:    { en: 'Send the note →',               ar: 'أرسل الرسالة ←' },
    },
    direct: {
      eyebrow: { en: 'Or reach us directly', ar: 'أو تواصلْ مباشرةً' },
      phone_lbl:    { en: 'Phone / WhatsApp',  ar: 'هاتف / واتساب' },
      email_lbl:    { en: 'Email',             ar: 'البريد الإلكتروني' },
      ig_lbl:       { en: 'Instagram',         ar: 'إنستغرام' },
      hours_lbl:    { en: 'Hours',             ar: 'ساعات العمل' },
      hours:        { en: 'Sat — Thu · 10:00 — 19:00', ar: 'السبت — الخميس · ١٠:٠٠ — ١٩:٠٠' },
    },
  },

  caseStudies: {
    anzu: {
      hero: 'assets/anzu/01-cave.png',
      kicker: { en: 'Case Study · 01', ar: 'دراسة حالة · ٠١' },
      name:   { en: 'Anzu', ar: 'أنزو' },
      tag:    { en: 'Beauty · Cosmetics', ar: 'تجميل · مستحضرات' },
      year:   '2026',
      role:   { en: 'Visual Identity · Art Direction', ar: 'هوية بصرية · إخراج فنّي' },
      lede: {
        en: 'A cosmetics house carved from stone and light. We sculpted a brand whose mark feels excavated — sandstone caves, golden hour, a wing that cuts both ways.',
        ar: 'دارُ تجميل منحوتةٌ من الحجر والضوء. نحتنا علامةً تبدو كأنها مُستخرَجةٌ من باطن الأرض — كهوفُ الحجر الرمليّ، وضوء الذهب، وجناحٌ يقطع في الاتجاهين.',
      },
      stats: [
        { v: '1', l_en: 'Master mark', l_ar: 'علامة رئيسية' },
        { v: '3', l_en: 'Color directions', l_ar: 'اتّجاهات لونية' },
        { v: '12+', l_en: 'Product mockups', l_ar: 'نماذج منتجات' },
      ],
      sections: [
        { img: 'assets/anzu/02-mark.png', heading_en: 'The Mark', heading_ar: 'العلامة', body_en: 'A monolithic Z carved into a square — half wing, half blade. Three colorways: rose-stone, ivory, ember.', body_ar: 'حرف Z متجانس منحوتٌ في مربّع — نصفٌ جناح، نصفٌ نصلة. ثلاثة اتجاهات لونية: حجر ورديّ، عاجيّ، جمرة.' },
        { img: 'assets/anzu/03-products.png', heading_en: 'The Range', heading_ar: 'المجموعة', body_en: 'Serums, compacts, lipsticks, mascara. Every package treated as an artifact — matte stone next to polished gold.', body_ar: 'سيرومات، باودر، أحمر شفاه، ماسكارا. كلّ عبوة معاملةٌ كقطعة أثرية — حجرٌ مطفّى بجانب ذهبٍ مصقول.' },
      ],
    },

    axis: {
      hero: 'assets/axis/01-hero.png',
      kicker: { en: 'Case Study · 02', ar: 'دراسة حالة · ٠٢' },
      name:   { en: 'Axis', ar: 'أكسس' },
      tag:    { en: 'Interior Design · Saudi Arabia', ar: 'تصميم داخلي · المملكة العربية السعودية' },
      year:   '2026',
      role:   { en: 'Full-Stack Social · Content Production', ar: 'إدارة كاملة للسوشل · إنتاج محتوى' },
      lede: {
        en: 'A four-month engagement with a Riyadh interior-design studio. We took on the full social stack — strategy, photography, reels, paid media, analytics — and rebuilt the technical backbone that had been holding the brand back.',
        ar: 'مشروعٌ بمدّة أربعة أشهرٍ مع استوديو تصميم داخلي في الرياض. تولّينا الباقة الشاملة لإدارة السوشل ميديا — الاستراتيجية، التصوير، الريلز، الإعلانات، التحليلات — وأعدنا بناء البنية التقنية التي كانت تكبح العلامة سابقاً.',
      },
      stats: [
        { v: '4', l_en: 'Months engagement', l_ar: 'أشهر من العمل' },
        { v: '50+', l_en: 'Reels produced', l_ar: 'ريل مُنتَج' },
        { v: '20+', l_en: 'Qualified leads / month', l_ar: 'عميل محتمل / شهر' },
      ],
      sections: [
        {
          img: 'assets/axis/01-hero.png',
          heading_en: 'The Brief',
          heading_ar: 'المهمّة',
          body_en: 'Axis came to us with a strong interior-design product but a fragmented digital presence — inconsistent visuals, irregular publishing, and unresolved technical issues across platforms. We took ownership end-to-end: management of every social channel, in-house content production, and a fix-list that closed every open technical gap from the start.',
          body_ar: 'وصل إلينا فريق أكسس بمنتجٍ قويّ في التصميم الداخلي، لكن بحضورٍ رقميٍّ مُجزّأ — هويةٌ بصرية غير مستقرّة، نشرٌ غير منتظم، ومشاكل تقنية متراكمة على المنصّات. تولّينا المشروع من البداية إلى النهاية: إدارة جميع منصّات التواصل، صناعة المحتوى داخلياً، وقائمةُ إصلاح أغلقت كلّ المشاكل التقنية التي كانت موجودة في السابق.',
        },
        {
          img: 'assets/axis/02-reels.png',
          heading_en: 'Fifty Reels, One Voice',
          heading_ar: 'خمسون ريلاً بصوتٍ واحد',
          body_en: 'Over the engagement we produced 50+ reels — educational shorts, behind-the-scenes, presenter-led explainers, and AI-assisted concept films. Each one cut to a single rhythm and voice so the feed reads as one continuous broadcast, not a stack of one-offs.',
          body_ar: 'خلال فترة المشروع أنتجنا أكثر من ٥٠ ريلاً — محتوى تعليمي قصير، كواليس، مقاطع مع مقدّمين، وأفلام مفاهيمية بمساعدة الذكاء الاصطناعي. كلّ مقطع قُصَّ على إيقاعٍ وصوتٍ واحد، حتى يُقرأ الحساب كبثٍّ متواصل لا كمجموعة منشوراتٍ مبعثرة.',
        },
        {
          img: 'assets/axis/03-grid.png',
          heading_en: 'A Feed That Composes',
          heading_ar: 'شبكةٌ تنسجم',
          body_en: 'Posts were designed in families — Founders Day, vision pieces, lighting guides, Ramadan moments, follow-prompts. Every artwork carries the same mark, the same blue, the same restraint. The grid stops feeling like a calendar and starts feeling like a magazine.',
          body_ar: 'صُمّمت المنشورات على شكل عائلات — يوم التأسيس، رؤية العلامة، أدلّة الإضاءة، لحظات رمضان، دعوات المتابعة. كلّ تصميم يحمل العلامة نفسها، والأزرق نفسه، والانضباط نفسه. تتوقّف الشبكة عن أن تبدو رزنامة، وتبدأ تشبه مجلّة.',
        },
        {
          img: 'assets/axis/04-studies.png',
          heading_en: 'Periodic Market Studies',
          heading_ar: 'دراسات سوقٍ دورية',
          body_en: 'Beyond the publishing cadence we delivered periodic analytical studies — competitor mapping, furniture price benchmarks across Saudi Arabia (2024 — 2025), and the most-requested design styles. Content stopped being decoration and started being a research channel for the studio.',
          body_ar: 'إلى جانب إيقاع النشر قدّمنا دراساتٍ تحليلية دورية — رسم خارطة المنافسين، مقارنات أسعار الأثاث في المملكة العربية السعودية (٢٠٢٤ — ٢٠٢٥)، وأكثر الأنماط التصميمية طلباً. توقّف المحتوى عن كونه زينة، وأصبح قناةَ بحثٍ للاستوديو نفسه.',
        },
        {
          img: 'assets/axis/02-reels.png',
          heading_en: 'Paid Media, Earned Pipeline',
          heading_ar: 'إعلانٌ مموَّل، أنبوبُ مبيعاتٍ مكتسب',
          body_en: 'Paid campaigns generated 20+ qualified leads — several of which were signed within a single month of contract. The work didn\'t stop at impressions; it landed on the calendar of the sales team.',
          body_ar: 'حقّقت الحملات الممولة أكثر من ٢٠ عميلاً محتملاً مؤهَّلاً — تمّ التعاقد مع عددٍ منهم لاحقاً خلال شهرٍ واحد. لم يتوقّف العمل عند رقم الانطباعات، بل وصل إلى رزنامة فريق المبيعات.',
        },
      ],
    },

    nassma: {
      hero: 'assets/nassma/01-hero.png',
      kicker: { en: 'Case Study · 03', ar: 'دراسة حالة · ٠٣' },
      name:   { en: 'Nassmeh', ar: 'نسمة' },
      tag:    { en: 'Consumer · Tissues · Damascus', ar: 'استهلاكي · مناديل · دمشق' },
      year:   '2026',
      role:   { en: 'Full-Stack Social · Content Production', ar: 'إدارة كاملة للسوشل · إنتاج محتوى' },
      lede: {
        en: 'A consumer tissue brand built on softness and trust. We took on the full content stack — professional product photography, AI-assisted reels, monthly publishing plans, and a permanent grading & scheduling rhythm on Facebook.',
        ar: 'علامةُ مناديل استهلاكية مبنيّة على النعومة والثقة. تولّينا الباقة الشاملة لصناعة المحتوى — تصويرٌ احترافي للمنتجات، ريلاتٌ بمساعدة الذكاء الاصطناعي، خططُ نشر شهرية، وإيقاعُ جدولةٍ وتقييمٍ دائم على منصّة فيسبوك.',
      },
      stats: [
        { v: '20+', l_en: 'AI-driven reels', l_ar: 'ريل بالذكاء الاصطناعي' },
        { v: '60+', l_en: 'Graphic designs', l_ar: 'تصميم غرافيكي' },
        { v: '∞', l_en: 'Ongoing engagement', l_ar: 'تعاونٌ مستمر' },
      ],
      sections: [
        {
          img: 'assets/nassma/01-hero.png',
          heading_en: 'A Continuous Brief',
          heading_ar: 'مهمّةٌ مستمرّة',
          body_en: 'Nassmeh is an open-ended engagement, not a one-off campaign. We handle every side of the brand\'s content: professional product photography, full-stack content creation including AI-driven reels, monthly publishing plans, and ongoing performance review across Facebook.',
          body_ar: 'نسمة ليست حملةً عابرة، بل تعاونٌ مفتوح. نتولّى كلّ جانبٍ من جوانب محتوى العلامة: التصوير الاحترافي للمنتجات، إنشاء المحتوى بجميع أشكاله — منشورات وريلز بما فيها محتوى الذكاء الاصطناعي — وجدولة المحتوى ونشره على منصّة فيسبوك مع تقييمٍ دائم.',
        },
        {
          img: 'assets/nassma/01-hero.png',
          heading_en: 'Twenty Reels, Generative Worlds',
          heading_ar: 'عشرون ريلاً، عوالمُ توليدية',
          body_en: 'More than 20 reels produced with AI-assisted production — characters, interiors, seasonal sets — all anchored to a single product and a consistent house tone. The grid below the reels reads as one continuous broadcast.',
          body_ar: 'أكثر من ٢٠ ريلاً أُنتجت باستخدام الذكاء الاصطناعي — شخصياتٌ، فضاءاتٌ داخلية، مشاهدُ موسمية — كلّها مرتبطةٌ بمنتجٍ واحد ولهجةٍ ثابتة للعلامة. الشبكة أسفل الريلز تُقرأ كبثٍّ متواصل.',
        },
        {
          img: 'assets/nassma/02-graphics.png',
          heading_en: 'Dozens of Designs, One Voice',
          heading_ar: 'عشراتُ التصاميم بصوتٍ واحد',
          body_en: 'A two-row design system carries the brand across moments — Ramadan, Jumbo line, family scenes, professional life. Different products, different moods, the same voice and the same blue running underneath.',
          body_ar: 'نظامُ تصميمٍ من صفّين يحمل العلامة عبر اللحظات — رمضان، خطّ Jumbo، مشاهد عائلية، حياةٌ مهنية. منتجاتٌ مختلفة، حالاتٌ مزاجية مختلفة، والصوتُ نفسه والأزرقُ نفسه يجريان تحتها جميعاً.',
        },
        {
          img: 'assets/nassma/03-and-more.png',
          heading_en: 'And More, Each Month',
          heading_ar: 'والمزيد، كلّ شهر',
          body_en: 'A new monthly plan, a new conceptual angle, a new wave of designs. Hyper-real product films, seasonal storylines, and surreal visual ideas — softness made cinematic. The work compounds month over month.',
          body_ar: 'خطّةٌ شهرية جديدة، زاويةٌ مفاهيمية جديدة، موجةٌ جديدة من التصاميم. أفلامُ منتجاتٍ شديدة الواقعية، خطوطٌ سرديّة موسمية، وأفكارٌ بصرية فوق الواقع — نعومةٌ صُنعت سينمائياً. العمل يتراكم شهراً بعد شهر.',
        },
      ],
    },

    quark: {
      hero: 'assets/quark/01-hero.png',
      kicker: { en: 'Case Study · 04', ar: 'دراسة حالة · ٠٤' },
      name:   { en: 'Quark Academy', ar: 'أكاديمية كوارك' },
      tag:    { en: 'Football Academy · Lattakia', ar: 'أكاديمية كرة قدم · اللاذقية' },
      year:   '2026',
      role:   { en: 'Full-Stack Social · Content · Events', ar: 'إدارة كاملة للسوشل · محتوى · فعاليات' },
      lede: {
        en: 'A football academy that reached beyond the field. We managed every social channel, produced 100+ reels, ran paid campaigns that generated 1,000+ direct messages, and supported the historic invitation of Quark players to Real Oviedo trials in Spain.',
        ar: 'أكاديميةٌ تتجاوز حدود الملعب. أدرنا جميع منصّات التواصل، أنتجنا أكثر من ١٠٠ ريل، شغّلنا حملاتٍ مموَّلة حقّقت أكثر من ١٠٠٠ رسالة، ودعمنا الدعوة التاريخية للاعبي كوارك إلى اختبارات نادي ريال أوفييدو في إسبانيا.',
      },
      stats: [
        { v: '100+', l_en: 'Reels produced', l_ar: 'ريل مُنتَج' },
        { v: '1M+', l_en: 'Views on a single reel', l_ar: 'مشاهدة لريلٍ واحد' },
        { v: '90K', l_en: 'Reach on a campaign', l_ar: 'وصول لحملة واحدة' },
      ],
      sections: [
        {
          img: 'assets/quark/01-hero.png',
          heading_en: 'The Brief — Beyond Limits',
          heading_ar: 'المهمّة — تخطّي الحدود',
          body_en: 'Quark Academy in Lattakia came to us for the full package: managing every social channel, producing the academy\'s content end-to-end, professional photography, AI-driven content, paid media, and the advertising & organisational side of academy events.',
          body_ar: 'وصلَنا فريقُ أكاديمية كوارك في اللاذقية لتقديم الباقة الشاملة: إدارة جميع منصّات التواصل الاجتماعي، صناعة المحتوى الخاص بالأكاديمية بالكامل، التصوير الاحترافي، محتوى الذكاء الاصطناعي، الإعلانات الممولة، والجانب الإعلاني والتنظيمي للفعاليات.',
        },
        {
          img: 'assets/quark/02-reels.png',
          heading_en: 'A Hundred Reels, A Thousand Messages',
          heading_ar: 'مئة ريل، ألف رسالة',
          body_en: 'Over 100 reels: presenter-led explainers, parent meetings, training cuts, and team highlights. Paid campaigns delivered 1,000+ direct messages on a measured budget — every dirham spent traceable back to a conversation.',
          body_ar: 'أكثر من ١٠٠ ريل: مقاطعُ تعليمية مع مقدّمين، لقاءاتُ الأهالي، قصاصاتُ التدريب، ولحظاتُ الفريق. الحملات المموَّلة حقّقت أكثر من ١٠٠٠ رسالة مباشرة بميزانيةٍ مدروسة — كلّ ليرةٍ صُرفت متتبَّعة حتى محادثة.',
        },
        {
          img: 'assets/quark/03-posts.png',
          heading_en: 'Posts That Reached 90K',
          heading_ar: 'منشوراتٌ بوصولٍ ٩٠ ألف',
          body_en: 'Educational nutrition cards, training-rhythm guides, and the headline moment — Syria reaching the doors of European football for the first time, with official invitations from Real Oviedo to Quark players in Lattakia. One post pulled ~92,000 views.',
          body_ar: 'بطاقاتٌ تعليمية حول التغذية، أدلّةُ إيقاع التمرين، واللحظةُ الكبرى — سورية تطرق أبواب أوروبا لأول مرة، بدعواتٍ رسمية من نادي ريال أوفييدو للاعبي أكاديمية كوارك في اللاذقية. منشورٌ واحد سحب نحو ٩٢ ألف مشاهدة.',
        },
        {
          img: 'assets/quark/04-photo.png',
          heading_en: 'A Reel Past One Million',
          heading_ar: 'ريلٌ تجاوز المليون',
          body_en: 'Photography services on the field — match days, training, team portraits — fed a content stream that produced an AI-led reel crossing 1,045,726 views and 760,000+ accounts reached. The academy stopped being a local club; it became a national story.',
          body_ar: 'خدماتُ التصوير على الميدان — أيام المباريات، التدريب، صور الفريق — غذّت تدفّقاً من المحتوى أنتج ريلاً بقيادة الذكاء الاصطناعي تجاوز ١٬٠٤٥٬٧٢٦ مشاهدة ووصل إلى أكثر من ٧٦٠٬٠٠٠ حساب. توقّفت الأكاديمية عن كونها نادياً محلياً، وأصبحت قصّةً وطنية.',
        },
      ],
    },

    grillo: {
      hero: 'assets/grillo/01-hero.png',
      kicker: { en: 'Case Study · 05', ar: 'دراسة حالة · ٠٥' },
      name:   { en: 'Grillo', ar: 'غريللو' },
      tag:    { en: 'QSR · Brand Identity', ar: 'مطاعم وجبات سريعة · هوية بصرية' },
      year:   '2026',
      role:   { en: 'Visual Identity · Brand System', ar: 'هوية بصرية · نظام علامة' },
      lede: {
        en: 'A flame-forward QSR brand built around one tagline — Where Flavor Meets Fire. We sculpted the wordmark, the mascot, the pattern language, and a full brand system ready for the floor, the bag, and the truck.',
        ar: 'علامةُ مطاعم وجبات سريعة مبنية على جملةٍ واحدة — Where Flavor Meets Fire. نحتنا الشعار، والشخصية المرسومة، ولغة النقش، ونظام هويةٍ كاملاً جاهزاً للصالة، والكيس، والشاحنة.',
      },
      stats: [
        { v: '1', l_en: 'Wordmark + mascot', l_ar: 'شعار + شخصية' },
        { v: '2', l_en: 'Color system', l_ar: 'نظام لوني' },
        { v: '15+', l_en: 'Brand applications', l_ar: 'تطبيق على الهوية' },
      ],
      sections: [
        {
          img: 'assets/grillo/01-hero.png',
          heading_en: 'The Mark',
          heading_ar: 'العلامة',
          body_en: 'A bold sans wordmark anchored by a black flame on the G — and a strolling mascot with a spatula and shades. Confident, friendly, unmistakably hot. The brand reads at twenty paces and at one centimetre on a sticker.',
          body_ar: 'شعارٌ بحروفٍ سانسٍ جريئة، ترسو على اللهبة السوداء في حرف G — وشخصيةٌ مرسومة تمشي بنظّارةٍ ومِلوقٍ في يدها. واثقةٌ ودودةٌ ساخنةٌ بلا لبس. تُقرأ العلامة من على بُعد عشرين خطوة، ومن سنتيمترٍ واحد على ملصق.',
        },
        {
          img: 'assets/grillo/02-system.png',
          heading_en: 'The System Lives Everywhere',
          heading_ar: 'النظام يعيش في كلّ مكان',
          body_en: 'Soda cup, burger box, apron, cap, t-shirt, paper bag, food truck. The flame pattern keeps the family together; black-and-cream variants give breathing room when the red would shout. A QSR identity that scales from sticker to street.',
          body_ar: 'كأسُ المشروب، علبةُ البرغر، المريول، القبّعة، التيشيرت، الكيس الورقي، الشاحنة. نقشُ اللهب يبقي العائلة متماسكة؛ والمتغيّرات السوداء والكريمية تمنح متّسعاً للتنفّس حين يكون الأحمر صاخباً. هويةُ مطاعمٍ تتوسّع من ملصقٍ صغير إلى واجهة شارع.',
        },
      ],
    },
  },
  footer: {
    lede: {
      en: 'We sculpt visual identities — infused with the spirit of the modern era.',
      ar: 'ننحتُ الهوياتِ البصرية — مفعمةً بروح العصر الحديث.',
    },
    cols: {
      work:    { en: 'Work',     ar: 'أعمال' },
      studio:  { en: 'Studio',   ar: 'الاستوديو' },
      contact: { en: 'Contact',  ar: 'تواصل' },
    },
    rights: { en: '© MMXXVI · Vividink. All rights reserved.', ar: '© ٢٠٢٦ · فيفيدنك. جميع الحقوق محفوظة.' },
    city:   { en: 'Damascus · Riyadh', ar: 'دمشق · الرياض' },
  },
};

window.I18N = I18N;
