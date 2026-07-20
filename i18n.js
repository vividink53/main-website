window.__VIVIDINK_I18N__ = {
  ar: {
    // Nav
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الوكالة',
    'nav.services': 'خدماتنا',
    'nav.work': 'أعمالنا',
    'nav.contact': 'تواصل معنا',
    'nav.start': 'ابدأ مشروعك',

    // Hero
    'hero.kicker': '', // تم إزالة "هوية · سوشل · سينما"
    'hero.title': 'صُنّاع الأَثَر الخالد .',
    'hero.sub': 'فريق إبداعي متكامل لصياغة هويات بصرية لا تُنسى . جذور كلاسيكية ، حدّة معاصرة — عقودٌ بصرية بين علامتك وجمهورها .',
    'hero.ctaWork': 'شاهد الأعمال',
    'hero.ctaTalk': 'ابدأ مشروعاً ←',
    'hero.immortalMark': 'صناع الأثر الخالد',

    // Contact Page & Info
    'contact.title': 'دعنا نصنع أثراً يخلد.',
    'contact.sub': 'نحن جاهزون لبدء مشروعك القادم عبر فريقنا الإبداعي.',
    'contact.emailLabel': 'البريد الإلكتروني',
    'contact.email': 'info@vividinkmedia.com',
    'contact.phoneLabel': 'واتساب / هاتف',
    'contact.phone': '0946976617',
    'contact.surveyBtn': 'الانتقال إلى استبيان العميل (Client Brief) ←',

    // Portfolio Items Media Paths (Fixed relative paths)
    'work.anzu.img': 'assets/anzu/01-cave.png',
    'work.nasma.img': 'assets/nasma/cover.png',
    'work.exhibition.img': 'portfolio-exhibition.png',
    'work.chess.img': 'portfolio-chess.png',
    'work.fabric.img': 'portfolio-fabric-essence.png'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    'nav.start': 'Start Project',

    'hero.kicker': '',
    'hero.title': 'Creators of the Immortal Mark.',
    'hero.sub': 'A full-service creative agency crafting unforgettable visual identities.',
    'hero.ctaWork': 'View Work',
    'hero.ctaTalk': 'Start a Project ←',
    'hero.immortalMark': 'Creators of the Immortal Mark',

    'contact.title': 'Let’s Create an Immortal Mark.',
    'contact.sub': 'Ready to elevate your brand with our creative team.',
    'contact.emailLabel': 'Email Us',
    'contact.email': 'info@vividinkmedia.com',
    'contact.phoneLabel': 'WhatsApp / Phone',
    'contact.phone': '0946976617',
    'contact.surveyBtn': 'Go to Client Survey (Brief) ←',

    'work.anzu.img': 'assets/anzu/01-cave.png',
    'work.nasma.img': 'assets/nasma/cover.png',
    'work.exhibition.img': 'portfolio-exhibition.png',
    'work.chess.img': 'portfolio-chess.png',
    'work.fabric.img': 'portfolio-fabric-essence.png'
  }
};

function T(key, lang = 'ar') {
  const dict = window.__VIVIDINK_I18N__;
  return (dict[lang] && dict[lang][key]) || (dict['ar'] && dict['ar'][key]) || key;
}
