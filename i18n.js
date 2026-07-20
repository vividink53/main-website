window.I18N = {
  hero: {
    kicker: { ar: '', en: '' }, // إزالة "هوية · سوشل · سينما"
    title: { ar: 'صُنّاع الأَثَر الخالد .', en: 'Creators of the Immortal Mark.' },
    sub: {
      ar: 'فريق إبداعي متكامل لصياغة هويات بصرية لا تُنسى . جذور كلاسيكية ، حدّة معاصرة — عقودٌ بصرية بين علامتك وجمهورها .',
      en: 'A full-service creative team crafting unforgettable visual identities.'
    },
    ctaWork: { ar: 'شاهد الأعمال', en: 'View Work' },
    ctaTalk: { ar: 'ابدأ مشروعاً ←', en: 'Start a Project ←' },
    immortalMark: { ar: 'صناع الأثر الخالد', en: 'Creators of the Immortal Mark' }
  },
  services_section: {
    eyebrow: { ar: 'الخدمات', en: 'SERVICES' },
    title: { ar: 'خدمات إبداعية متكاملة .', en: 'End-to-End Creative Services.' },
    num: '01'
  },
  work_section: {
    eyebrow: { ar: 'الأعمال', en: 'SELECTED WORK' },
    title: { ar: 'علامات صُنعت لتخلد .', en: 'Marks Crafted to Endure.' },
    num: '02'
  },
  about_page: {
    kicker: { ar: 'عن الوكالة', en: 'ABOUT VIVIDINK' },
    title: { ar: 'صُنّاع الأثر الخالد .', en: 'Creators of the Immortal Mark.' },
    sub: { ar: 'نؤمن أن الهوية ليست مجرد شعار، بل هي عهد بصري بين العلامة التجارية وجمهورها.', en: 'We believe identity is an immortal mark.' },
    manifestoTitle: { ar: 'بيان الوكالة', en: 'OUR MANIFESTO' },
    manifestoLead: { ar: 'نحن لا نتبع الصيحات السريعة، بل نبني هويات تصمد أمام اختبار الزمن.', en: 'We build identities built to last.' },
    manifestoP1: { ar: 'نعتمد في عملنا على المبادئ الهندسية الدقيقة والجماليات البصرية الكلاسيكية.', en: 'Grounded in timeless design principles.' },
    manifestoP2: { ar: 'كل مشروع نعمل عليه هو تحفة فنية مصممة لتحقيق نتائج استراتيجية استثنائية.', en: 'Crafted for exceptional strategic outcomes.' },
    pillars: [
      { title: { ar: 'الدقة الهندسية', en: 'GEOMETRIC PRECISION' }, desc: { ar: 'توازن دقيق بين العناصر البصرية لضمان وضوح الهوية.', en: 'Perfect visual balance.' } },
      { title: { ar: 'السرد القصصي', en: 'STORYTELLING' }, desc: { ar: 'بناء معنوي عميق يربط العلامة التجارية بجمهورها.', en: 'Connecting brands to humans.' } }
    ]
  },
  services_page: {
    kicker: { ar: 'خدماتنا', en: 'OUR SERVICES' },
    title: { ar: 'حلول بصرية وإستراتيجية متكاملة .', en: 'Complete Visual & Strategic Solutions.' },
    sub: { ar: 'نرافقك من الفكرة الأولى وحتى الإطلاق الكامل لهويتك.', en: 'From initial concept to full execution.' },
    list: [
      { id: 'branding', title: { ar: 'الهويات البصرية الشاملة', en: 'Visual Identity & Branding' }, desc: { ar: 'صياغة الهوية البصرية من الشعار وحتى الدليل التنفيذي الكامل.', en: 'Full identity design.' }, bullets: [{ ar: 'تصميم الشعار', en: 'Logo Design' }] },
      { id: 'video', title: { ar: 'الإنتاج المرئي والسينمائي', en: 'Video & Film Production' }, desc: { ar: 'إنتاج إعلانات وسرد بصري عالي الجودة باستخدام أحدث الأدوات.', en: 'Cinematic ads.' }, bullets: [{ ar: 'إعلانات تجارية', en: 'Commercial Ads' }] }
    ]
  },
  work_page: {
    kicker: { ar: 'معرض الأعمال', en: 'OUR PORTFOLIO' },
    title: { ar: 'مشاريع نعتز بصناعتها .', en: 'Projects We Are Proud Of.' },
    sub: { ar: 'استكشف بعضاً من أعمالنا في صياغة الهويات والإنتاج البصري.', en: 'Explore our selected projects.' }
  },
  portfolio: [
    { id: 'anzu', title: { ar: 'أنزو — Anzu', en: 'Anzu' }, cat: { ar: 'هوية بصرية', en: 'Visual Identity' }, img: 'assets/anzu/01-cave.png' },
    { id: 'nasma', title: { ar: 'نسمة — Nasma', en: 'Nasma' }, cat: { ar: 'حملات بصرية', en: 'Visual Campaign' }, img: 'assets/nasma/cover.png' },
    { id: 'exhibition', title: { ar: 'المعرض المعماري', en: 'Exhibition' }, cat: { ar: 'تصميم مساحي', en: 'Spatial Design' }, img: 'portfolio-exhibition.png' },
    { id: 'chess', title: { ar: 'استراتيجية الشطرنج', en: 'Chess Strategy' }, cat: { ar: 'هوية مفاهيمية', en: 'Concept' }, img: 'portfolio-chess.png' },
    { id: 'fabric', title: { ar: 'جوهر النسيج', en: 'Fabric Essence' }, cat: { ar: 'إنتاج إعلاني', en: 'Production' }, img: 'portfolio-fabric-essence.png' }
  ]
};

function T(key, lang = 'ar') {
  const parts = key.split('.');
  let curr = window.I18N;
  for (const p of parts) {
    if (curr && curr[p] !== undefined) {
      curr = curr[p];
    } else {
      return key;
    }
  }
  if (typeof curr === 'object' && curr !== null) {
    return curr[lang] || curr['ar'] || key;
  }
  return curr || key;
}
