import { Link } from "react-router-dom";
import { getCerpen } from "../data/storage";

export default function Home() {
  const cerpenList = getCerpen();
  // Buat array 1 sampai 30
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div style={{ padding: 24, textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
      <img 
        src="/logo_mitas.png" 
        alt="Logo Mitas" 
        style={{ width: 120, height: 120, borderRadius: '50%', marginBottom: 16, border: '2px solid #38bdf8' }} 
      />
      <h1 className="mushaf-title">E-Book Ramadhan Abadi</h1>
      <p className="mushaf-subtitle" style={{ marginBottom: 8 }}>
        Jejak Kejayaan Islam & Peradaban yang Dilupakan
      </p>
      <p style={styles.author}>Penulis : Lucky Zamaludin Malik</p>

      <div style={styles.grid}>
        {days.map((day) => {
          const id = day.toString();
          const existingData = cerpenList.find(c => c.id === id);
          
          return (
            <Link key={day} to={`/read/${day}`} style={{ textDecoration: 'none' }}>
              <div className="mushaf-card" style={styles.card}>
                <div style={styles.dayLabel}>RAMADHAN</div>
                <div style={styles.dayNumber}>{day}</div>
                
                {existingData ? (
                  <div style={styles.title}>{existingData.title}</div>
                ) : (
                  <div style={styles.empty}>Belum ada isi</div>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div style={styles.footer}>
        <div>@2026 Mitas Digital Solution</div>
        <div style={styles.email}>mitas.digitalsolution@email.com</div>
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: 16,
    marginTop: 32
  },
  card: {
    padding: 16,
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    minHeight: 140
  },
  dayLabel: {
    fontSize: 12,
    color: '#94a3b8',
    letterSpacing: 1,
    marginBottom: 4
  },
  dayNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#38bdf8',
    lineHeight: 1,
    marginBottom: 8,
    fontFamily: 'Georgia, serif'
  },
  title: {
    fontSize: 14,
    color: '#e5e7eb',
    marginTop: 8,
    lineHeight: 1.4
  },
  empty: {
    fontSize: 12,
    color: '#475569',
    fontStyle: 'italic'
  },
  author: {
    color: '#38bdf8',
    fontSize: 16,
    marginBottom: 32,
    fontStyle: 'italic'
  },
  footer: {
    marginTop: 60,
    borderTop: '1px solid #1e293b',
    paddingTop: 24,
    paddingBottom: 40,
    color: '#64748b',
    fontSize: 14
  },
  email: {
    color: '#94a3b8',
    marginTop: 4
  }
};
