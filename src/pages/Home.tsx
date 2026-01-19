import { Link } from "react-router-dom";
import { getCerpen } from "../data/storage";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const cerpenList = getCerpen();
  // Buat array 1 sampai 30
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

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
  }
};
