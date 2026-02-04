import { Link } from "react-router-dom";
import { getCerpen } from "../data/storage";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import OneSignal from 'react-onesignal';
import { useState, useEffect } from "react";
import "../styles/Home.css";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const cerpenList = getCerpen();
  const dayIds = ["intro", ...Array.from({ length: 30 }, (_, i) => (i + 1).toString()), "outro"];
  const [notifEnabled, setNotifEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIds = dayIds.filter(id => {
    if (!searchQuery) return true;
    
    const cerpen = cerpenList.find(c => c.id === id);
    
    if (!cerpen) return false;
    
    const query = searchQuery.toLowerCase();
    const title = cerpen.title[language].toLowerCase();
    const content = cerpen.content[language].toLowerCase();
    
    return title.includes(query) || content.includes(query);
  });

  return (
    <div className="home-container">
      <div className="lang-btn-group" style={{ alignItems: 'center' }}>
        <button onClick={() => setLanguage('id')} className="lang-btn" style={{ opacity: language === 'id' ? 1 : 0.5 }}>🇮🇩 ID</button>
        <button onClick={() => setLanguage('en')} className="lang-btn" style={{ opacity: language === 'en' ? 1 : 0.5 }}>🇬🇧 EN</button>
        <button onClick={() => setLanguage('ar')} className="lang-btn" style={{ opacity: language === 'ar' ? 1 : 0.5 }}>🇸🇦 AR</button>
        
        <div style={{ width: 1, height: 20, background: 'var(--border)', margin: '0 8px' }}></div>
        
        <button onClick={toggleTheme} className="theme-toggle" title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <img 
        src="/logo_mitas.png" 
        alt="Logo Mitas" 
        className="logo-img" 
      />
      <h1 className="mushaf-title">{t('app_title')}</h1>
      <p className="mushaf-subtitle">
        {t('home_welcome')}
      </p>

      {/* Search Input */}
      <div className="search-container">
        <input 
          type="text" 
          placeholder={language === 'en' ? "Search topic..." : (language === 'ar' ? "بحث في المواضيع..." : "Cari topik...")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <p className="home-subtitle">{t('home_subtitle')}</p>
      <p className="author-text">{t('author_label')} : Lucky Zamaludin Malik</p>

      {/* Tadarus Tracker Button */}
      <Link to="/tadarus" style={{ textDecoration: 'none', display: 'block', margin: '10px auto', width: 'fit-content' }}>
        <button className="notif-btn" style={{ background: 'var(--accent)', width: 'auto', padding: '10px 20px' }}>
          📖 {language === 'ar' ? 'متتبع التدارس' : (language === 'en' ? 'Tadarus Tracker' : 'Target Tadarus')}
        </button>
      </Link>

      <div className="grid-container">
        {filteredIds.length > 0 ? (
          filteredIds.map((id) => {
            const existingData = cerpenList.find(c => c.id === id);
            const readDays = JSON.parse(localStorage.getItem("read_days") || "[]");
            const isRead = readDays.includes(id);
            
            let label = "RAMADHAN";
            let displayId = id;
            let numberStyle = {};

            if (id === "intro") {
              label = language === 'ar' ? "مقدمة" : (language === 'en' ? "PREFACE" : "PENGANTAR");
              displayId = "📖";
              numberStyle = { fontSize: '4rem' };
            } else if (id === "outro") {
              label = language === 'ar' ? "خاتمة" : (language === 'en' ? "CLOSING" : "PENUTUP");
              displayId = "🏁";
              numberStyle = { fontSize: '4rem' };
            }

            return (
              <Link key={id} to={`/read/${id}`} style={{ textDecoration: 'none' }}>
                <div className={`day-card ${isRead ? 'read' : ''}`}>
                  <div className="day-label">{label}</div>
                  <div className="day-number" style={numberStyle}>{displayId}</div>
                  
                  {existingData ? (
                    <div className="card-title">{existingData.title[language]}</div>
                  ) : (
                    <div className="card-empty">-</div>
                  )}
                </div>
              </Link>
            );
          })
        ) : (
          <div style={{ gridColumn: '1/-1', color: 'var(--text-soft)', marginTop: 20 }}>
            {language === 'en' ? "No topics found." : (language === 'ar' ? "لم يتم العثور على مواضيع." : "Tidak ada topik yang ditemukan.")}
          </div>
        )}
      </div>


      <div className="home-footer">
        <div>{t('footer_text')}</div>
        <div className="footer-email">{t('contact_email')} : mitas.digitalsolution@gmail.com</div>
      </div>
    </div>
  );
}
