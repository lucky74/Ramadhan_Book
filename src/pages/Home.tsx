import { Link } from "react-router-dom";
import { getCerpen } from "../data/storage";

export default function Home() {
  const cerpen = getCerpen();

  return (
    <div style={{ padding: 24, textAlign: 'center' }}>
      <img 
        src="/logo_mitas.png" 
        alt="Logo Mitas" 
        style={{ width: 120, height: 120, borderRadius: '50%', marginBottom: 16, border: '2px solid #38bdf8' }} 
      />
      <h1 className="mushaf-title">E-Book Ramadhan Abadi</h1>
      <p className="mushaf-subtitle">
        Jejak Kejayaan Islam & Peradaban yang Dilupakan
      </p>

      {cerpen.length === 0 && <p>Belum ada cerpen.</p>}

      {cerpen.map(c => (
        <div key={c.id} className="mushaf-card">
          <h3>{c.title}</h3>
          <Link className="mushaf-link" to={`/read/${c.id}`}>
            Baca Kisah →
          </Link>
        </div>
      ))}
    </div>
  );
}
