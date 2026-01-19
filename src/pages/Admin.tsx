import { useState, useEffect } from "react";
import { getCerpenById, saveCerpen } from "../data/storage";

export default function Admin() {
  const [day, setDay] = useState("1");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [dalil, setDalil] = useState("");

  // Load data ketika hari dipilih
  useEffect(() => {
    const existing = getCerpenById(day);
    if (existing) {
      setTitle(existing.title);
      setContent(existing.content);
      setDalil(existing.dalil);
    } else {
      setTitle("");
      setContent("");
      setDalil("");
    }
  }, [day]);

  function simpan() {
    if (!title || !content) {
      alert("Judul dan Isi wajib diisi");
      return;
    }

    saveCerpen({
      id: day,
      title,
      content,
      dalil
    });
    alert(`Berhasil menyimpan materi untuk Ramadhan hari ke-${day}`);
  }

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div style={styles.container}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
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
          <label style={styles.label}>Judul Materi:</label>
          <input
            style={styles.input}
            placeholder="Contoh: Keagungan Al-Quran"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Isi Cerpen/Materi:</label>
          <textarea
            style={styles.textarea}
            placeholder="Tulis isi materi di sini..."
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Dalil (HTML/Teks):</label>
          <div style={styles.hint}>
            Gunakan format ini untuk Arab: <br/>
            <code>&lt;div class="arab"&gt;teks arab&lt;/div&gt;</code>
          </div>
          <textarea
            style={styles.textarea}
            placeholder="Masukkan dalil..."
            value={dalil}
            onChange={e => setDalil(e.target.value)}
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
    background: "#020617",
    color: "#e5e7eb",
    minHeight: "100vh"
  } as React.CSSProperties,
  formGroup: {
    marginBottom: 20
  } as React.CSSProperties,
  label: {
    display: 'block',
    marginBottom: 8,
    color: '#94a3b8',
    fontWeight: 'bold'
  } as React.CSSProperties,
  select: {
    width: "100%",
    padding: 12,
    borderRadius: 6,
    background: '#1e293b',
    color: 'white',
    border: '1px solid #334155'
  } as React.CSSProperties,
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 6,
    background: '#1e293b',
    color: 'white',
    border: '1px solid #334155'
  } as React.CSSProperties,
  textarea: {
    width: "100%",
    padding: 12,
    minHeight: 150,
    borderRadius: 6,
    background: '#1e293b',
    color: 'white',
    border: '1px solid #334155',
    fontFamily: 'inherit'
  } as React.CSSProperties,
  hint: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 8,
    fontFamily: 'monospace'
  } as React.CSSProperties,
  button: {
    width: '100%',
    padding: "14px",
    background: "#38bdf8",
    color: '#0f172a',
    fontWeight: 'bold',
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 16
  } as React.CSSProperties
};
