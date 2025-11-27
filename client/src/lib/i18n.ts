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
    'nav.general': 'General Extraction',
    'nav.templates': 'Templates',
    'nav.history': 'History',
    'nav.settings': 'Settings',
    'nav.logout': 'Sign Out',

    // Home
    'hero.title': 'Intelligent Document Extraction',
    'hero.subtitle': 'Extract structured data from any document instantly with AI. Bilingual support for English and Thai.',
    'hero.cta': 'Start for Free',
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

    // Dashboard
    'dash.welcome': 'Good Morning, User',
    'dash.quick_start': 'Quick Extraction',
    'dash.recent': 'Recent Documents',
    'dash.template_bank': 'Bank Statement',
    'dash.template_invoice': 'Invoice',
    'dash.template_po': 'Purchase Order',
    'dash.template_contract': 'Contract',
    'dash.general_desc': 'Extract data from any document type',
    
    // Extraction
    'extract.upload_title': 'Upload Document',
    'extract.upload_desc': 'Drag & drop your file here, or click to browse',
    'extract.processing': 'Processing...',
    'extract.results': 'Extraction Results',
    'extract.confidence': 'Confidence',
    'extract.export': 'Export',
    'extract.field': 'Field',
    'extract.value': 'Value',
    
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
    'nav.general': 'ดึงข้อมูลทั่วไป',
    'nav.templates': 'แม่แบบ',
    'nav.history': 'ประวัติ',
    'nav.settings': 'ตั้งค่า',
    'nav.logout': 'ออกจากระบบ',

    // Home
    'hero.title': 'ระบบดึงข้อมูลเอกสารอัจฉริยะ',
    'hero.subtitle': 'ดึงข้อมูลที่มีโครงสร้างจากเอกสารใดก็ได้ทันทีด้วย AI รองรับทั้งภาษาอังกฤษและภาษาไทย',
    'hero.cta': 'เริ่มต้นใช้งานฟรี',
    'pricing.title': 'ราคาที่โปร่งใสและคุ้มค่า',
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

    // Dashboard
    'dash.welcome': 'สวัสดีตอนเช้า',
    'dash.quick_start': 'เริ่มดึงข้อมูลด่วน',
    'dash.recent': 'เอกสารล่าสุด',
    'dash.template_bank': 'รายการเดินบัญชี',
    'dash.template_invoice': 'ใบแจ้งหนี้',
    'dash.template_po': 'ใบสั่งซื้อ',
    'dash.template_contract': 'สัญญา',
    'dash.general_desc': 'ดึงข้อมูลจากเอกสารทุกประเภท',

    // Extraction
    'extract.upload_title': 'อัปโหลดเอกสาร',
    'extract.upload_desc': 'ลากและวางไฟล์ที่นี่ หรือคลิกเพื่อเลือกไฟล์',
    'extract.processing': 'กำลังประมวลผล...',
    'extract.results': 'ผลลัพธ์การดึงข้อมูล',
    'extract.confidence': 'ความเชื่อมั่น',
    'extract.export': 'ส่งออก',
    'extract.field': 'ฟิลด์',
    'extract.value': 'ค่า',

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
