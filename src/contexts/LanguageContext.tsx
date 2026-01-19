import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'id' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  id: {
    app_title: "Ramadhan Book",
    home_welcome: "Jejak Kejayaan Islam",
    home_subtitle: "Perjalanan spiritual menelusuri hikmah dan sejarah keagungan Islam.",
    start_reading: "Mulai Membaca",
    footer_text: "© 2026 Mitas Digital Solution",
    author_label: "Penulis",
    read_more: "Baca Selengkapnya",
    back_home: "Kembali ke Beranda",
    day: "Hari ke-",
    murotal_player: "Pemutar Murotal (Mishary Rashid)",
    select_surah: "Pilih Surat:",
    loading_audio: "Memuat audio...",
    contact_email: "Email",
  },
  en: {
    app_title: "Ramadhan Book",
    home_welcome: "Traces of Islamic Glory",
    home_subtitle: "A spiritual journey tracing the wisdom and history of Islamic greatness.",
    start_reading: "Start Reading",
    footer_text: "© 2026 Mitas Digital Solution",
    author_label: "Author",
    read_more: "Read More",
    back_home: "Back to Home",
    day: "Day",
    murotal_player: "Murotal Player (Mishary Rashid)",
    select_surah: "Select Surah:",
    loading_audio: "Loading audio...",
    contact_email: "Email",
  },
  ar: {
    app_title: "كتاب رمضان",
    home_welcome: "آثار مجد الإسلام",
    home_subtitle: "رحلة روحية تتبع حكمة وتاريخ عظمة الإسلام.",
    start_reading: "ابدأ القراءة",
    footer_text: "© 2026 ميتاس للحلول الرقمية",
    author_label: "المؤلف",
    read_more: "اقرأ المزيد",
    back_home: "العودة إلى الصفحة الرئيسية",
    day: "اليوم",
    murotal_player: "مشغل التلاوة (مشاري راشد)",
    select_surah: "اختر السورة:",
    loading_audio: "جارٍ تحميل الصوت...",
    contact_email: "البريد الإلكتروني",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to get language from localStorage or default to 'id'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved as Language) || 'id';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
