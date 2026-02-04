import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Reusing Home styles for consistency

export default function TadarusTracker() {
  const { language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  // Initialize state from localStorage or default to empty array
  const [completedJuz, setCompletedJuz] = useState<number[]>(() => {
    const saved = localStorage.getItem('tadarus_progress');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('tadarus_progress', JSON.stringify(completedJuz));
  }, [completedJuz]);

  const toggleJuz = (juz: number) => {
    setCompletedJuz(prev => {
      if (prev.includes(juz)) {
        return prev.filter(j => j !== juz);
      } else {
        return [...prev, juz];
      }
    });
  };

  const getTitle = () => {
    switch(language) {
      case 'ar': return 'متتبع التدارس';
      case 'en': return 'Tadarus Tracker';
      default: return 'Target Tadarus';
    }
  };

  const getSubtitle = () => {
    switch(language) {
      case 'ar': return 'سجل تقدمك في قراءة القرآن';
      case 'en': return 'Track your Quran reading progress';
      default: return 'Catat perkembangan membaca Al-Quranmu';
    }
  };

  const getJuzLabel = (num: number) => {
    switch(language) {
      case 'ar': return `الجزء ${num}`;
      case 'en': return `Juz ${num}`;
      default: return `Juz ${num}`;
    }
  };

  const calculateProgress = () => {
    return Math.round((completedJuz.length / 30) * 100);
  };

  return (
    <div className="home-container" style={{ minHeight: '100vh', padding: '20px' }}>
       <div className="lang-btn-group" style={{ alignItems: 'center', marginBottom: '20px' }}>
        <Link to="/" className="lang-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
          {language === 'ar' ? '← العودة' : (language === 'en' ? '← Back' : '← Kembali')}
        </Link>
        <div style={{ flex: 1 }}></div>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <h1 className="mushaf-title" style={{ marginTop: '0' }}>{getTitle()}</h1>
      <p className="mushaf-subtitle">{getSubtitle()}</p>

      {/* Progress Bar */}
      <div style={{ 
        background: 'var(--bg-card)', 
        padding: '20px', 
        borderRadius: '15px', 
        marginBottom: '30px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: 'var(--text-main)' }}>
          <span>Progress</span>
          <span>{calculateProgress()}%</span>
        </div>
        <div style={{ 
          width: '100%', 
          height: '10px', 
          background: 'var(--border)', 
          borderRadius: '5px', 
          overflow: 'hidden' 
        }}>
          <div style={{ 
            width: `${calculateProgress()}%`, 
            height: '100%', 
            background: 'var(--accent)', 
            transition: 'width 0.3s ease' 
          }}></div>
        </div>
        <div style={{ marginTop: '10px', textAlign: 'center', color: 'var(--text-soft)', fontSize: '0.9rem' }}>
          {completedJuz.length} / 30 {language === 'ar' ? 'مكتمل' : (language === 'en' ? 'Completed' : 'Selesai')}
        </div>
      </div>

      <div className="grid-container" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '15px' }}>
        {Array.from({ length: 30 }, (_, i) => i + 1).map((juz) => {
          const isCompleted = completedJuz.includes(juz);
          return (
            <div 
              key={juz}
              onClick={() => toggleJuz(juz)}
              style={{
                background: isCompleted ? 'var(--accent)' : 'var(--bg-card)',
                color: isCompleted ? 'var(--bg-dark)' : 'var(--text-main)',
                padding: '15px',
                borderRadius: '10px',
                cursor: 'pointer',
                textAlign: 'center',
                border: `2px solid ${isCompleted ? 'var(--accent)' : 'var(--border)'}`,
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80px'
              }}
            >
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>{juz}</div>
              <div style={{ fontSize: '0.8rem' }}>{getJuzLabel(juz)}</div>
              {isCompleted && <div style={{ marginTop: '5px' }}>✓</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
