import { useParams, Link } from "react-router-dom";
import { getCerpenById } from "../data/storage";

export default function Reader() {
  const { id } = useParams();
  const cerpen = getCerpenById(id || "1");

  return (
    <div className="reader" style={{ padding: 24 }}>
      {cerpen ? (
        <>
          <div style={{ textAlign: 'center', color: '#38bdf8', marginBottom: 8, letterSpacing: 2 }}>
            RAMADHAN HARI KE-{id}
          </div>
          <h1 style={{ textAlign: "center", marginTop: 0 }}>{cerpen.title}</h1>

          <div className="reader-content">
            {cerpen.content}
          </div>

          <h3>Dalil Al-Qur'an & Hadits</h3>

          <div 
            className="dalil-box"
            dangerouslySetInnerHTML={{ __html: cerpen.dalil }}
          />
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <h2 style={{ color: '#94a3b8' }}>Belum Ada Materi</h2>
          <p>Materi untuk Ramadhan hari ke-{id} belum diupload.</p>
          <p>Silakan hubungi Admin.</p>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40 }}>
        <Link className="mushaf-link" to="/">
          ← Daftar Isi
        </Link>
        
        {/* Navigasi Next/Prev sederhana */}
        {parseInt(id || "0") < 30 && (
          <Link className="mushaf-link" to={`/read/${parseInt(id || "0") + 1}`}>
            Hari Berikutnya →
          </Link>
        )}
      </div>
    </div>
  );
}
