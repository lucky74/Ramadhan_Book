import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

type Amalan = {
  id: string;
  label: { id: string; en: string; ar: string };
  category: 'wajib' | 'sunnah';
};

const AMALAN_LIST: Amalan[] = [
  { id: 'puasa', label: { id: 'Puasa Ramadhan', en: 'Fasting', ar: 'صوم رمضان' }, category: 'wajib' },
  { id: 'sahur', label: { id: 'Makan Sahur', en: 'Suhoor', ar: 'السحور' }, category: 'sunnah' },
  { id: 'subuh', label: { id: 'Sholat Subuh', en: 'Fajr Prayer', ar: 'صلاة الفجر' }, category: 'wajib' },
  { id: 'dzuhur', label: { id: 'Sholat Dzuhur', en: 'Dhuhr Prayer', ar: 'صلاة الظهر' }, category: 'wajib' },
  { id: 'ashar', label: { id: 'Sholat Ashar', en: 'Asr Prayer', ar: 'صلاة العصر' }, category: 'wajib' },
  { id: 'maghrib', label: { id: 'Sholat Maghrib', en: 'Maghrib Prayer', ar: 'صلاة المغرب' }, category: 'wajib' },
  { id: 'isya', label: { id: 'Sholat Isya', en: 'Isha Prayer', ar: 'صلاة العشاء' }, category: 'wajib' },
  { id: 'tarawih', label: { id: 'Sholat Tarawih', en: 'Tarawih Prayer', ar: 'صلاة التراويح' }, category: 'sunnah' },
  { id: 'witir', label: { id: 'Sholat Witir', en: 'Witr Prayer', ar: 'صلاة الوتر' }, category: 'sunnah' },
  { id: 'tilawah', label: { id: 'Tilawah Al-Quran', en: 'Quran Recitation', ar: 'تلاوة القرآن' }, category: 'sunnah' },
  { id: 'sedekah', label: { id: 'Sedekah', en: 'Charity', ar: 'صدقة' }, category: 'sunnah' },
  { id: 'dzikir', label: { id: 'Dzikir Pagi/Petang', en: 'Morning/Evening Dhikr', ar: 'أذكار الصباح والمساء' }, category: 'sunnah' },
];

export default function AmalanTracker() {
  const { language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const [selectedDay, setSelectedDay] = useState<number>(() => {
    // Default to today's date relative to Ramadhan start if possible, otherwise 1
    // For simplicity, default to 1
    return 1;
  });

  // Data structure: { "1": ["subuh", "dzuhur"], "2": [...] }
  const [history, setHistory] = useState<Record<string, string[]>>(() => {
    const saved = localStorage.getItem('amalan_progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('amalan_progress', JSON.stringify(history));
  }, [history]);

  const toggleAmalan = (amalanId: string) => {
    const dayKey = selectedDay.toString();
    const currentDayAmalan = history[dayKey] || [];
    
    let newDayAmalan;
    if (currentDayAmalan.includes(amalanId)) {
      newDayAmalan = currentDayAmalan.filter(id => id !== amalanId);
    } else {
      newDayAmalan = [...currentDayAmalan, amalanId];
    }

    setHistory(prev => ({
      ...prev,
      [dayKey]: newDayAmalan
    }));
  };

  const calculateProgress = (day: number) => {
    const dayKey = day.toString();
    const completed = (history[dayKey] || []).length;
    return Math.round((completed / AMALAN_LIST.length) * 100);
  };

  const currentAmalan = history[selectedDay.toString()] || [];

  return (
    <div className={`home-container ${theme}`}>
      <div className="lang-btn-group" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <button className="lang-btn">🏠 {language === 'ar' ? 'الصفحة الرئيسية' : 'Home'}</button>
        </Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <h1 className="mushaf-title" style={{ marginTop: 20 }}>
        {language === 'ar' ? 'سجل العبادة' : (language === 'en' ? 'Worship Journal' : 'Jurnal Amalan')}
      </h1>
      
      <p className="mushaf-subtitle" style={{ marginBottom: 30 }}>
        {language === 'ar' ? 'تتبع عبادتك اليومية' : (language === 'en' ? 'Track your daily worship' : 'Catat ibadah harianmu')}
      </p>

      {/* Day Selector */}
      <div style={{ overflowX: 'auto', paddingBottom: 10, marginBottom: 20, display: 'flex', gap: 8 }}>
        {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            style={{
              padding: '8px 16px',
              borderRadius: 20,
              border: 'none',
              background: selectedDay === day ? 'var(--accent)' : 'var(--bg-card)',
              color: selectedDay === day ? '#fff' : 'var(--text-main)',
              border: selectedDay === day ? 'none' : '1px solid var(--border)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              minWidth: 60
            }}
          >
            {language === 'ar' ? `اليوم ${day}` : (language === 'en' ? `Day ${day}` : `Hari ${day}`)}
            <div style={{ fontSize: 10, opacity: 0.8, marginTop: 4 }}>
              {calculateProgress(day)}%
            </div>
          </button>
        ))}
      </div>

      <div className="grid-container" style={{ display: 'block', maxWidth: 600, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 20 }}>
          {language === 'ar' ? `عبادة اليوم ${selectedDay}` : (language === 'en' ? `Worship for Day ${selectedDay}` : `Amalan Hari ke-${selectedDay}`)}
        </h2>

        {AMALAN_LIST.map(amalan => {
          const isCompleted = currentAmalan.includes(amalan.id);
          return (
            <div 
              key={amalan.id}
              onClick={() => toggleAmalan(amalan.id)}
              style={{
                background: isCompleted ? 'rgba(16, 185, 129, 0.1)' : 'var(--bg-card)',
                border: `1px solid ${isCompleted ? '#10b981' : 'var(--border)'}`,
                padding: '16px',
                marginBottom: 12,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  border: `2px solid ${isCompleted ? '#10b981' : 'var(--text-secondary)'}`,
                  background: isCompleted ? '#10b981' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 14
                }}>
                  {isCompleted && '✓'}
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: 16 }}>
                    {amalan.label[language as keyof typeof amalan.label]}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
                    {amalan.category === 'wajib' 
                      ? (language === 'en' ? 'Mandatory' : (language === 'ar' ? 'واجب' : 'Wajib'))
                      : (language === 'en' ? 'Sunnah' : (language === 'ar' ? 'سنة' : 'Sunnah'))
                    }
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
