import { useParams, Link } from "react-router-dom";
import { getCerpen } from "../data/storage";

export default function Reader() {
  const { id } = useParams();
  const cerpen = getCerpen().find(c => c.id === id);

  if (!cerpen) {
    return <p style={{ padding: 24 }}>Cerpen tidak ditemukan.</p>;
  }

  return (
    <div className="reader" style={{ padding: 24 }}>
      <h1 style={{ textAlign: "center" }}>{cerpen.title}</h1>

      <div className="reader-content">
        {cerpen.content}
      </div>

      <h3>Dalil Al-Qur'an & Hadits</h3>

      <div 
        className="dalil-box"
        dangerouslySetInnerHTML={{ __html: cerpen.dalil }}
      />

      <Link className="mushaf-link" to="/">
        ← Kembali
      </Link>
    </div>
  );
}
