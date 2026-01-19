import { useParams, Link } from "react-router-dom";
import { getCerpenById } from "../data/storage";
import { useLanguage } from "../contexts/LanguageContext";

export default function Reader() {
  const { id } = useParams();
  const { t, language, dir } = useLanguage();
  const cerpen = getCerpenById(id || "1");

  return (
    <div className="reader" style={{ padding: '24px 24px 80px 24px' }}>
      {cerpen ? (
        <>
          <div style={{ textAlign: 'center', color: '#38bdf8', marginBottom: 8, letterSpacing: 2 }}>
            {t('day')} {id}
          </div>
          <h1 style={{ textAlign: "center", marginTop: 0 }}>{cerpen.title[language]}</h1>

          <div className="reader-content" style={{ textAlign: language === 'ar' ? 'justify' : 'left', whiteSpace: 'pre-wrap' }}>
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
          <h2 style={{ color: '#94a3b8' }}>{language === 'en' ? 'Content Not Available' : (language === 'ar' ? 'المحتوى غير متوفر' : 'Belum Ada Materi')}</h2>
          <p>{language === 'en' ? `Content for Ramadhan Day ${id} is not yet uploaded.` : (language === 'ar' ? `لم يتم تحميل محتوى اليوم ${id} من رمضان.` : `Materi untuk Ramadhan hari ke-${id} belum diupload.`)}</p>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, flexDirection: dir === 'rtl' ? 'row-reverse' : 'row' }}>
        <Link className="mushaf-link" to="/">
           {dir === 'rtl' ? '→' : '←'} {t('back_home')}
        </Link>
        
        {parseInt(id || "0") < 30 && (
          <Link className="mushaf-link" to={`/read/${parseInt(id || "0") + 1}`}>
             {language === 'ar' ? 'اليوم التالي' : (language === 'en' ? 'Next Day' : 'Hari Berikutnya')} {dir === 'rtl' ? '←' : '→'}
          </Link>
        )}
      </div>
    </div>
  );
}
