import { create } from 'zustand';

type Language = 'en' | 'th';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.signin': 'Sign In',
    'nav.dashboard': 'Dashboard',
    'nav.general': 'Extract Documents',
    'nav.templates': 'Document Types',
    'nav.history': 'Your Documents',
    'nav.settings': 'Preferences',
    'nav.logout': 'Sign Out',

    // Home - Emotional, pain-focused copy
    'hero.title': 'Stop Wasting Hours on Manual Data Entry',
    'hero.subtitle': 'AI extracts structured data from your documents in seconds, so you can focus on what matters. Works in Thai & English.',
    'hero.cta': 'Start Free - 100 Pages',
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.free': 'Free Starter',
    'pricing.pro': 'Pro Business',
    'pricing.pages_month': 'pages/month',
    'pricing.most_popular': 'Most Popular',

    // Auth
    'auth.welcome': 'Welcome Back',
    'auth.login_subtitle': 'Sign in to your account to continue',
    'auth.continue_line': 'Continue with LINE',
    'auth.continue_google': 'Continue with Google',
    'auth.continue_facebook': 'Continue with Facebook',
    'auth.continue_apple': 'Continue with Apple',

    // Dashboard - Personal & welcoming
    'dash.welcome': 'Welcome back!',
    'dash.quick_start': 'New Extraction',
    'dash.recent': 'Pick up where you left off',
    'dash.template_bank': 'Bank Statement',
    'dash.template_invoice': 'Invoice',
    'dash.template_po': 'Purchase Order',
    'dash.template_contract': 'Contract',
    'dash.general_desc': "Any document, any format - we'll figure it out",

    // Extraction - Supportive language
    'extract.upload_title': 'Drop your document here',
    'extract.upload_desc': 'PDF, JPG, or PNG - we handle them all',
    'extract.processing': 'Working on it...',
    'extract.processing_sub': 'This usually takes just a few seconds',
    'extract.results': "Here's what we found",
    'extract.confidence': 'Confidence',
    'extract.export': 'Export',
    'extract.field': 'Field',
    'extract.value': 'Value',
    'extract.success': 'All done! Your data is ready',

    // Empty states
    'empty.no_history': 'No documents yet',
    'empty.no_history_desc': "Upload your first document and we'll remember it here",
    'empty.get_started': "Let's extract something",

    // Common
    'common.upgrade': 'Upgrade Plan',
    'common.usage': 'Monthly Usage',
  },
  th: {
    // Navigation
    'nav.home': 'หน้าแรก',
    'nav.pricing': 'ราคา',
    'nav.about': 'เกี่ยวกับเรา',
    'nav.signin': 'เข้าสู่ระบบ',
    'nav.dashboard': 'แดชบอร์ด',
    'nav.general': 'ดึงข้อมูลเอกสาร',
    'nav.templates': 'ประเภทเอกสาร',
    'nav.history': 'เอกสารของคุณ',
    'nav.settings': 'ตั้งค่า',
    'nav.logout': 'ออกจากระบบ',

    // Home - Emotional, pain-focused copy
    'hero.title': 'หยุดเสียเวลากรอกข้อมูลด้วยมือ',
    'hero.subtitle': 'AI ดึงข้อมูลจากเอกสารของคุณในไม่กี่วินาที ให้คุณมีเวลากับสิ่งที่สำคัญกว่า รองรับทั้งภาษาไทยและอังกฤษ',
    'hero.cta': 'เริ่มใช้ฟรี - 100 หน้า',
    'pricing.title': 'ราคาที่โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง',
    'pricing.free': 'เริ่มต้นฟรี',
    'pricing.pro': 'สำหรับธุรกิจ',
    'pricing.pages_month': 'หน้า/เดือน',
    'pricing.most_popular': 'ยอดนิยม',

    // Auth
    'auth.welcome': 'ยินดีต้อนรับกลับ',
    'auth.login_subtitle': 'ลงชื่อเข้าใช้บัญชีของคุณเพื่อดำเนินการต่อ',
    'auth.continue_line': 'ดำเนินการต่อด้วย LINE',
    'auth.continue_google': 'ดำเนินการต่อด้วย Google',
    'auth.continue_facebook': 'ดำเนินการต่อด้วย Facebook',
    'auth.continue_apple': 'ดำเนินการต่อด้วย Apple',

    // Dashboard - Personal & welcoming
    'dash.welcome': 'ยินดีต้อนรับกลับมา!',
    'dash.quick_start': 'ดึงข้อมูลใหม่',
    'dash.recent': 'ทำงานต่อจากที่ค้างไว้',
    'dash.template_bank': 'รายการเดินบัญชี',
    'dash.template_invoice': 'ใบแจ้งหนี้',
    'dash.template_po': 'ใบสั่งซื้อ',
    'dash.template_contract': 'สัญญา',
    'dash.general_desc': 'เอกสารอะไรก็ได้ รูปแบบไหนก็ได้ เราจัดการให้',

    // Extraction - Supportive language
    'extract.upload_title': 'วางเอกสารของคุณที่นี่',
    'extract.upload_desc': 'PDF, JPG หรือ PNG - เราจัดการได้ทั้งหมด',
    'extract.processing': 'กำลังทำงาน...',
    'extract.processing_sub': 'ปกติใช้เวลาไม่กี่วินาที',
    'extract.results': 'นี่คือข้อมูลที่เราพบ',
    'extract.confidence': 'ความเชื่อมั่น',
    'extract.export': 'ส่งออก',
    'extract.field': 'ฟิลด์',
    'extract.value': 'ค่า',
    'extract.success': 'เสร็จแล้ว! ข้อมูลพร้อมใช้งาน',

    // Empty states
    'empty.no_history': 'ยังไม่มีเอกสาร',
    'empty.no_history_desc': 'อัปโหลดเอกสารแรกของคุณ แล้วเราจะจดจำไว้ที่นี่',
    'empty.get_started': 'เริ่มดึงข้อมูลกันเถอะ',

    // Common
    'common.upgrade': 'อัปเกรดแผน',
    'common.usage': 'การใช้งานเดือนนี้',
  }
};

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const useLanguage = create<LanguageState>((set, get) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  t: (key) => {
    const lang = get().language;
    return translations[lang][key] || key;
  }
}));
