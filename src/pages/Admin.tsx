import { useState, useEffect } from "react";
import { getCerpenById, saveCerpen } from "../data/storage";
import { Language } from "../contexts/LanguageContext";

const LANGUAGES: Language[] = ['id', 'en', 'ar'];

export default function Admin() {
  const [day, setDay] = useState("1");
  const [editLang, setEditLang] = useState<Language>('id');
  
  const [titles, setTitles] = useState<Record<Language, string>>({ id: '', en: '', ar: '' });
  const [contents, setContents] = useState<Record<Language, string>>({ id: '', en: '', ar: '' });
  const [dalils, setDalils] = useState<Record<Language, string>>({ id: '', en: '', ar: '' });

  // Load data ketika hari dipilih
  useEffect(() => {
    const existing = getCerpenById(day);
    if (existing) {
      setTitles(existing.title);
      setContents(existing.content);
      setDalils(existing.dalil);
    } else {
      setTitles({ id: '', en: '', ar: '' });
      setContents({ id: '', en: '', ar: '' });
      setDalils({ id: '', en: '', ar: '' });
    }
  }, [day]);

  function handleTitleChange(val: string) {
    setTitles(prev => ({ ...prev, [editLang]: val }));
  }

  function handleContentChange(val: string) {
    setContents(prev => ({ ...prev, [editLang]: val }));
  }

  function handleDalilChange(val: string) {
    setDalils(prev => ({ ...prev, [editLang]: val }));
  }

  function simpan() {
    if (!titles.id || !contents.id) {
      alert("Judul dan Isi (Bahasa Indonesia) wajib diisi");
      return;
    }

    saveCerpen({
      id: day,
      title: titles,
      content: contents,
      dalil: dalils
    });
    alert(`Berhasil menyimpan materi untuk Ramadhan hari ke-${day}`);
  }

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div style={styles.container}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1>Admin — Isi Materi</h1>

        <div style={styles.formGroup}>
          <label style={styles.label}>Pilih Hari Ramadhan:</label>
          <select 
            style={styles.select} 
            value={day} 
            onChange={(e) => setDay(e.target.value)}
          >
            {days.map(d => (
              <option key={d} value={d}>Ramadhan Hari ke-{d}</option>
            ))}
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Bahasa yang diedit:</label>
          <div style={{ display: 'flex', gap: 10 }}>
            {LANGUAGES.map(lang => (
              <button 
                key={lang}
                onClick={() => setEditLang(lang)}
                style={{
                  ...styles.langBtn,
                  backgroundColor: editLang === lang ? '#38bdf8' : '#1e293b',
                  color: editLang === lang ? '#0f172a' : '#fff'
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Judul Materi ({editLang.toUpperCase()}):</label>
          <input
            style={{...styles.input, direction: editLang === 'ar' ? 'rtl' : 'ltr'}}
            placeholder={`Judul dalam bahasa ${editLang}`}
            value={titles[editLang]}
            onChange={e => handleTitleChange(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Isi Cerpen/Materi ({editLang.toUpperCase()}):</label>
          <textarea
            style={{...styles.textarea, direction: editLang === 'ar' ? 'rtl' : 'ltr'}}
            placeholder={`Isi materi dalam bahasa ${editLang}...`}
            value={contents[editLang]}
            onChange={e => handleContentChange(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Dalil (HTML/Teks) ({editLang.toUpperCase()}):</label>
          <div style={styles.hint}>
            Gunakan format ini untuk Arab: <br/>
            <code>&lt;div class="arab"&gt;teks arab&lt;/div&gt;</code>
          </div>
          <textarea
            style={{...styles.textarea, direction: editLang === 'ar' ? 'rtl' : 'ltr'}}
            placeholder={`Dalil dalam bahasa ${editLang}...`}
            value={dalils[editLang]}
            onChange={e => handleDalilChange(e.target.value)}
          />
        </div>

        <button style={styles.button} onClick={simpan}>
          Simpan Materi Hari ke-{day}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 24,
    color: '#e2e8f0',
    minHeight: '100vh',
    paddingBottom: 100
  },
  formGroup: {
    marginBottom: 24
  },
  label: {
    display: 'block',
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#38bdf8'
  },
  select: {
    width: '100%',
    padding: 12,
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    color: '#fff',
    borderRadius: 8
  },
  input: {
    width: '100%',
    padding: 12,
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    color: '#fff',
    borderRadius: 8
  },
  textarea: {
    width: '100%',
    padding: 12,
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    color: '#fff',
    borderRadius: 8,
    minHeight: 200,
    fontFamily: 'inherit'
  },
  hint: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 8,
    fontStyle: 'italic'
  },
  button: {
    width: '100%',
    padding: 16,
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    border: 'none',
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 16,
    cursor: 'pointer'
  },
  langBtn: {
    padding: '8px 16px',
    borderRadius: 6,
    border: '1px solid #334155',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};
