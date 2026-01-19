import { useState } from "react";
import { getCerpen, saveCerpen } from "../data/storage";

export default function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [dalil, setDalil] = useState("");

  function simpan() {
    const data = getCerpen();
    data.push({
      id: Date.now().toString(),
      title,
      content,
      dalil
    });
    saveCerpen(data);
    alert("Cerpen berhasil disimpan (abadi)");
    setTitle("");
    setContent("");
    setDalil("");
  }

  return (
    <div style={styles.container}>
      <h1>Admin — Upload Cerpen</h1>

      <input
        style={styles.input}
        placeholder="Judul Cerpen"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        style={styles.textarea}
        placeholder="Isi Cerpen"
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <textarea
        style={styles.textarea}
        placeholder="Dalil Al-Qur'an & Hadits"
        value={dalil}
        onChange={e => setDalil(e.target.value)}
      />

      <button style={styles.button} onClick={simpan}>
        Simpan Cerpen
      </button>
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
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    borderRadius: 6
  } as React.CSSProperties,
  textarea: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    minHeight: 120,
    borderRadius: 6
  } as React.CSSProperties,
  button: {
    padding: "10px 16px",
    background: "#38bdf8",
    border: "none",
    borderRadius: 6,
    cursor: "pointer"
  } as React.CSSProperties
};
