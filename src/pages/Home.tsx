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
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const [notifEnabled, setNotifEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDays = days.filter(day => {
    if (!searchQuery) return true;
    
    const id = day.toString();
    const cerpen = cerpenList.find(c => c.id === id);
    
    if (!cerpen) return false;
    
    const query = searchQuery.toLowerCase();
    const title = cerpen.title[language].toLowerCase();
    const content = cerpen.content[language].toLowerCase();
    
    return title.includes(query) || content.includes(query);
  });

  useEffect(() => {
    // Cek status notifikasi
    const checkStatus = async () => {
      try {
        if (OneSignal.Notifications) {
          setNotifEnabled(OneSignal.Notifications.permission);
        }
      } catch (e) {
        console.log("OneSignal status check failed", e);
      }
    };
    
    // Delay sedikit untuk memastikan OneSignal init
    setTimeout(checkStatus, 1000);
  }, []);

  const enableNotifications = async () => {
    try {
      await OneSignal.Notifications.requestPermission();
      setNotifEnabled(OneSignal.Notifications.permission);
      alert("Terima kasih! Anda akan mendapatkan notifikasi update materi baru.");
    } catch (error) {
      console.error("Gagal mengaktifkan notifikasi", error);
      alert("Gagal mengaktifkan notifikasi. Pastikan browser Anda mengizinkan notifikasi.");
    }
  };

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

      {/* Tombol Notifikasi */}
      {!notifEnabled && (
        <button onClick={enableNotifications} className="notif-btn">
          🔔 Aktifkan Notifikasi Update
        </button>
      )}

      <div className="grid-container">
        {filteredDays.length > 0 ? (
          filteredDays.map((day) => {
            const id = day.toString();
            const existingData = cerpenList.find(c => c.id === id);
            const readDays = JSON.parse(localStorage.getItem("read_days") || "[]");
            const isRead = readDays.includes(id);
            
            return (
              <Link key={day} to={`/read/${day}`} style={{ textDecoration: 'none' }}>
                <div className={`day-card ${isRead ? 'read' : ''}`}>
                  <div className="day-label">RAMADHAN</div>
                  <div className="day-number">{day}</div>
                  
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
        <div className="footer-email">{t('contact_email')} : mitas.digitalsolution@email.com</div>
      </div>
    </div>
  );
}
