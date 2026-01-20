import { Link } from "react-router-dom";
import { getCerpen } from "../data/storage";
import { useLanguage } from "../contexts/LanguageContext";
import OneSignal from 'react-onesignal';
import { useState, useEffect } from "react";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const cerpenList = getCerpen();
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const [notifEnabled, setNotifEnabled] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState<string | null>(null);

  useEffect(() => {
    // Cek status notifikasi
    const checkStatus = async () => {
      try {
        if (OneSignal.Notifications) {
          setNotifEnabled(OneSignal.Notifications.permission);
        }
        if (OneSignal.User && OneSignal.User.PushSubscription) {
            setSubscriptionId(OneSignal.User.PushSubscription.id);
            // Listen for changes
            OneSignal.User.PushSubscription.addEventListener("change", (event) => {
                setSubscriptionId(event.current.id);
            });
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
      if (OneSignal.User && OneSignal.User.PushSubscription) {
         setSubscriptionId(OneSignal.User.PushSubscription.id);
      }
      alert("Terima kasih! Anda akan mendapatkan notifikasi update materi baru.");
    } catch (error) {
      console.error("Gagal mengaktifkan notifikasi", error);
      alert("Gagal mengaktifkan notifikasi. Pastikan browser Anda mengizinkan notifikasi.");
    }
  };

  return (
    <div style={{ padding: 24, textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 20 }}>
        <button onClick={() => setLanguage('id')} style={{...styles.langBtn, opacity: language === 'id' ? 1 : 0.5}}>🇮🇩 ID</button>
        <button onClick={() => setLanguage('en')} style={{...styles.langBtn, opacity: language === 'en' ? 1 : 0.5}}>🇬🇧 EN</button>
        <button onClick={() => setLanguage('ar')} style={{...styles.langBtn, opacity: language === 'ar' ? 1 : 0.5}}>🇸🇦 AR</button>
      </div>

      <img 
        src="/logo_mitas.png" 
        alt="Logo Mitas" 
        style={{ width: 120, height: 120, borderRadius: '50%', marginBottom: 16, border: '2px solid #38bdf8' }} 
      />
      <h1 className="mushaf-title">{t('app_title')}</h1>
      <p className="mushaf-subtitle" style={{ marginBottom: 8 }}>
        {t('home_welcome')}
      </p>
      <p style={{ color: '#94a3b8', fontSize: 14, marginBottom: 8 }}>{t('home_subtitle')}</p>
      <p style={styles.author}>{t('author_label')} : Lucky Zamaludin Malik</p>

      {/* Tombol Notifikasi */}
      <div style={{ marginBottom: 20 }}>
        {!notifEnabled || !subscriptionId ? (
          <button onClick={enableNotifications} style={styles.notifBtn}>
            🔔 Aktifkan Notifikasi Update
          </button>
        ) : (
          <div style={{ color: '#4ade80', fontSize: 14, padding: 8, border: '1px solid #4ade80', borderRadius: 8, display: 'inline-block' }}>
            ✅ Notifikasi Aktif <br/>
            <span style={{ fontSize: 10, opacity: 0.7 }}>ID: {subscriptionId.substring(0, 8)}...</span>
          </div>
        )}
      </div>

      <div style={styles.grid}>
        {days.map((day) => {
          const id = day.toString();
          const existingData = cerpenList.find(c => c.id === id);
          
          return (
            <Link key={day} to={`/read/${day}`} style={{ textDecoration: 'none' }}>
              <div className="mushaf-card" style={styles.card}>
                <div style={styles.dayLabel}>RAMADHAN</div>
                <div style={styles.dayNumber}>{day}</div>
                
                {existingData ? (
                  <div style={styles.title}>{existingData.title[language]}</div>
                ) : (
                  <div style={styles.empty}>-</div>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div style={styles.footer}>
        <div>{t('footer_text')}</div>
        <div style={styles.email}>{t('contact_email')} : mitas.digitalsolution@email.com</div>
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: 16,
    marginTop: 32
  },
  card: {
    padding: 16,
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    minHeight: 140
  },
  dayLabel: {
    fontSize: 12,
    color: '#94a3b8',
    letterSpacing: 1,
    marginBottom: 4
  },
  dayNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#38bdf8',
    lineHeight: 1,
    marginBottom: 8,
    fontFamily: 'Georgia, serif'
  },
  title: {
    fontSize: 14,
    color: '#e5e7eb',
    marginTop: 8,
    lineHeight: 1.4
  },
  empty: {
    fontSize: 12,
    color: '#475569',
    fontStyle: 'italic'
  },
  author: {
    color: '#38bdf8',
    fontSize: 16,
    marginBottom: 32,
    fontStyle: 'italic'
  },
  footer: {
    marginTop: 60,
    borderTop: '1px solid #1e293b',
    paddingTop: 24,
    paddingBottom: 80,
    color: '#64748b',
    fontSize: 14
  },
  email: {
    color: '#94a3b8',
    marginTop: 4
  },
  langBtn: {
    padding: '8px 12px',
    borderRadius: 20,
    border: '1px solid #38bdf8',
    backgroundColor: '#0f172a',
    color: '#fff',
    cursor: 'pointer',
    fontSize: 14
  },
  notifBtn: {
    marginTop: 16,
    padding: '10px 20px',
    borderRadius: 20,
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(56, 189, 248, 0.3)'
  }
};
