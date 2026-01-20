import { useParams, Link } from "react-router-dom";
import { getCerpenById } from "../data/storage";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";

export default function Reader() {
  const { id } = useParams();
  const { t, language, dir } = useLanguage();
  const cerpen = getCerpenById(id || "1");

  const sequence = ["intro", ...Array.from({ length: 30 }, (_, i) => (i + 1).toString()), "outro"];
  const currentIndex = sequence.indexOf(id || "1");
  const nextId = sequence[currentIndex + 1];

  // State untuk ukuran font
  const [fontSize, setFontSize] = useState(() => {
    return parseInt(localStorage.getItem("reader_font_size") || "18");
  });

  // Effect untuk 'Mark as Read' dan Update Title
  useEffect(() => {
    if (id) {
      // 1. Simpan status 'sudah dibaca'
      const readDays = JSON.parse(localStorage.getItem("read_days") || "[]");
      if (!readDays.includes(id)) {
        const newReadDays = [...readDays, id];
        localStorage.setItem("read_days", JSON.stringify(newReadDays));
      }

      // 2. Update Judul Browser
      if (cerpen) {
        document.title = `Hari ${id}: ${cerpen.title[language]} - Ramadhan Book`;
      }
    }
  }, [id, cerpen, language]);

  const updateFontSize = (newSize: number) => {
    if (newSize < 12 || newSize > 32) return;
    setFontSize(newSize);
    localStorage.setItem("reader_font_size", newSize.toString());
  };

  const handleShare = async () => {
    if (!cerpen) return;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: cerpen.title[language],
          text: `Baca renungan Ramadhan hari ke-${id}: "${cerpen.title[language]}"`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(language === 'en' ? "Link copied to clipboard!" : "Link telah disalin!");
    }
  };

  const controlBtnStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    color: 'var(--text-main)',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  };

  return (
    <div className="reader" style={{ padding: '24px 24px 80px 24px', maxWidth: 800, margin: '0 auto' }}>
      {/* Controls Bar */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 24,
        position: 'sticky',
        top: 10,
        zIndex: 10,
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(8px)',
        padding: '10px',
        borderRadius: '12px',
        border: '1px solid var(--border)'
      }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => updateFontSize(fontSize - 2)} style={controlBtnStyle}>A-</button>
          <button onClick={() => updateFontSize(fontSize + 2)} style={controlBtnStyle}>A+</button>
        </div>
        <button onClick={handleShare} style={{...controlBtnStyle, background: 'var(--accent)', color: '#fff', border: 'none'}}>
          📤 Share
        </button>
      </div>

      {cerpen ? (
        <>
          <div style={{ textAlign: 'center', color: 'var(--accent)', marginBottom: 8, letterSpacing: 2 }}>
             {id === 'intro' ? (language === 'ar' ? "مقدمة" : (language === 'en' ? "PREFACE" : "PENGANTAR")) :
             id === 'outro' ? (language === 'ar' ? "خاتمة" : (language === 'en' ? "CLOSING" : "PENUTUP")) :
             `${t('day')} ${id}`}
          </div>
          <h1 style={{ textAlign: "center", marginTop: 0 }}>{cerpen.title[language]}</h1>

          <div className="reader-content" style={{ 
            textAlign: language === 'ar' ? 'justify' : 'left', 
            whiteSpace: 'pre-wrap',
            fontSize: `${fontSize}px`,
            lineHeight: '1.8',
            transition: 'font-size 0.2s ease'
          }}>
            {cerpen.content[language]}
          </div>

          <h3 style={{ textAlign: language === 'ar' ? 'right' : 'left', marginTop: 32 }}>
              {language === 'ar' ? 'دليل القرآن والحديث' : (language === 'en' ? 'Quran & Hadith Evidence' : "Dalil Al-Qur'an & Hadits")}
          </h3>

          <div 
            className="dalil-box"
            dangerouslySetInnerHTML={{ __html: cerpen.dalil[language] }}
          />
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <h2 style={{ color: 'var(--text-soft)' }}>{language === 'en' ? 'Content Not Available' : (language === 'ar' ? 'المحتوى غير متوفر' : 'Belum Ada Materi')}</h2>
          <p>{language === 'en' ? `Content for Ramadhan Day ${id} is not yet uploaded.` : (language === 'ar' ? `لم يتم تحميل محتوى اليوم ${id} من رمضان.` : `Materi untuk Ramadhan hari ke-${id} belum diupload.`)}</p>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, flexDirection: dir === 'rtl' ? 'row-reverse' : 'row' }}>
        <Link className="mushaf-link" to="/">
           {dir === 'rtl' ? '→' : '←'} {t('back_home')}
        </Link>
        
        {nextId && (
          <Link className="mushaf-link" to={`/read/${nextId}`}>
             {language === 'ar' ? 'التالي' : (language === 'en' ? 'Next' : 'Berikutnya')} {dir === 'rtl' ? '←' : '→'}
          </Link>
        )}
      </div>
    </div>
  );
}
