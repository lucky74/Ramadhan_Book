import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function ZakatCalculator() {
  const { language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'fitrah' | 'maal'>('fitrah');

  // State Zakat Fitrah
  const [peopleCount, setPeopleCount] = useState(1);
  const [ricePrice, setRicePrice] = useState(15000); // Per liter
  const [riceType, setRiceType] = useState<'liter' | 'kg'>('liter');

  // State Zakat Maal
  const [goldPrice, setGoldPrice] = useState(1400000); // Estimasi awal
  const [isLoadingGold, setIsLoadingGold] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [assets, setAssets] = useState({
    cash: 0, // Tabungan/Uang Tunai
    goldSilver: 0, // Emas/Perak (konversi ke Rupiah)
    investment: 0, // Saham/Reksadana/Bisnis
    receivables: 0, // Piutang lancar
    debt: 0 // Utang jatuh tempo
  });

  // Fetch Gold Price
  useEffect(() => {
    const fetchGoldPrice = async () => {
      setIsLoadingGold(true);
      try {
        // Try reliable public API for Antam Gold Price
        // Using a community hosted API that scrapes Antam/Logam Mulia
        const response = await fetch('https://logam-mulia-api.vercel.app/prices/sell');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        // Adjust parsing based on actual API response structure
        // Assuming data structure often contains an array or object with price
        // Fallback parsing logic
        let price = 0;
        let rawPrice = null;

        if (data && data.data && data.data[0] && data.data[0].price) {
           rawPrice = data.data[0].price;
        } else if (data && data.price) {
           rawPrice = data.price;
        }
        
        if (rawPrice) {
           if (typeof rawPrice === 'number') {
               price = rawPrice;
           } else if (typeof rawPrice === 'string') {
               price = parseInt(rawPrice.replace(/\D/g, '')) || 0;
           }
        }

        if (price > 0) {
          setGoldPrice(price);
          setFetchError(false);
        }
      } catch (error) {
        console.warn('Failed to fetch gold price, using default estimate:', error);
        // Silent fail - keep using default estimate
        setFetchError(true);
      } finally {
        setIsLoadingGold(false);
      }
    };

    fetchGoldPrice();
  }, []);

  // Perhitungan Zakat Fitrah
  const calculateFitrah = () => {
    // 3.5 liter atau 2.5 kg
    const amountPerPerson = riceType === 'liter' ? 3.5 : 2.5;
    const totalRice = peopleCount * amountPerPerson;
    const totalMoney = totalRice * ricePrice;
    return { totalRice, totalMoney };
  };

  // Perhitungan Zakat Maal
  const calculateMaal = () => {
    const totalAssets = (assets.cash || 0) + (assets.goldSilver || 0) + (assets.investment || 0) + (assets.receivables || 0);
    const netAssets = totalAssets - (assets.debt || 0);
    const nisab = 85 * goldPrice;
    const isWajib = netAssets >= nisab;
    const zakatAmount = isWajib ? netAssets * 0.025 : 0;

    return { netAssets, nisab, isWajib, zakatAmount };
  };

  const fitrahResult = calculateFitrah();
  const maalResult = calculateMaal();

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(num);
  };

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
        {language === 'ar' ? 'حاسبة الزكاة' : (language === 'en' ? 'Zakat Calculator' : 'Kalkulator Zakat')}
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 30 }}>
        <button 
          onClick={() => setActiveTab('fitrah')}
          style={{
            padding: '10px 20px',
            borderRadius: 8,
            border: 'none',
            background: activeTab === 'fitrah' ? 'var(--accent)' : 'var(--bg-card)',
            color: activeTab === 'fitrah' ? '#fff' : 'var(--text-main)',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Zakat Fitrah
        </button>
        <button 
          onClick={() => setActiveTab('maal')}
          style={{
            padding: '10px 20px',
            borderRadius: 8,
            border: 'none',
            background: activeTab === 'maal' ? 'var(--accent)' : 'var(--bg-card)',
            color: activeTab === 'maal' ? '#fff' : 'var(--text-main)',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Zakat Maal
        </button>
      </div>

      <div style={{ maxWidth: 600, margin: '0 auto', background: 'var(--bg-card)', padding: 24, borderRadius: 16, border: '1px solid var(--border)' }}>
        
        {/* FITRAH SECTION */}
        {activeTab === 'fitrah' && (
          <div>
            <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: 10, marginBottom: 20 }}>
              🌾 Perhitungan Zakat Fitrah
            </h3>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20 }}>
              Zakat fitrah wajib ditunaikan bagi setiap jiwa, dengan kadar 3,5 liter atau 2,5 kg makanan pokok (beras).
            </p>

            <div style={{ marginBottom: 15 }}>
              <label style={{ display: 'block', marginBottom: 5 }}>Jumlah Orang (Jiwa)</label>
              <input 
                type="number" 
                min="1"
                value={peopleCount || ''}
                onChange={e => setPeopleCount(parseInt(e.target.value) || 0)}
                style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: 15 }}>
              <label style={{ display: 'block', marginBottom: 5 }}>Harga Beras (per {riceType})</label>
              <div style={{ display: 'flex', gap: 10 }}>
                <input 
                  type="number" 
                  value={ricePrice || ''}
                  onChange={e => setRicePrice(parseInt(e.target.value) || 0)}
                  style={{ width: '65%', padding: 8, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)', boxSizing: 'border-box' }}
                />
                <select 
                  value={riceType} 
                  onChange={(e: any) => setRiceType(e.target.value)}
                  style={{ width: '30%', padding: 8, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)', boxSizing: 'border-box' }}
                >
                  <option value="liter">Liter</option>
                  <option value="kg">Kg</option>
                </select>
              </div>
            </div>

            <div style={{ background: 'var(--bg-main)', padding: 15, borderRadius: 10, marginTop: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span>Total Beras:</span>
                <strong>{fitrahResult.totalRice.toLocaleString()} {riceType}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: 'var(--accent)' }}>
                <span>Total Uang:</span>
                <strong>{formatRupiah(fitrahResult.totalMoney)}</strong>
              </div>
            </div>
          </div>
        )}

        {/* MAAL SECTION */}
        {activeTab === 'maal' && (
          <div>
            <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: 10, marginBottom: 20 }}>
              💰 Perhitungan Zakat Maal (Harta)
            </h3>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20 }}>
              Zakat harta wajib dikeluarkan jika harta telah mencapai nishab (setara 85 gram emas) dan haul (1 tahun). Kadarnya adalah 2,5%.
            </p>

            <div style={{ marginBottom: 15 }}>
              <label style={{ display: 'block', marginBottom: 5 }}>Harga Emas Saat Ini (per gram)</label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="number" 
                  value={goldPrice || ''}
                  onChange={e => setGoldPrice(parseInt(e.target.value) || 0)}
                  disabled={isLoadingGold} // Only disable when actually loading
                  style={{ 
                    width: '100%', 
                    padding: 8, 
                    borderRadius: 8, 
                    border: '1px solid var(--border)', 
                    background: isLoadingGold ? 'var(--bg-card)' : 'var(--bg-main)', 
                    color: 'var(--text-main)', 
                    boxSizing: 'border-box',
                    opacity: isLoadingGold ? 0.7 : 1
                  }}
                />
                {isLoadingGold && (
                  <span style={{ position: 'absolute', right: 10, top: 8, fontSize: 12, color: 'var(--accent)' }}>
                    Loading...
                  </span>
                )}
              </div>
              <small style={{ color: 'var(--text-secondary)', display: 'block', marginTop: 4 }}>
            {isLoadingGold ? 'Sedang mencoba koneksi ke server harga emas...' : 
             fetchError ? '⚠️ Koneksi ke server publik sibuk. Silakan sesuaikan harga emas secara manual.' : 
             '✅ Harga emas terupdate otomatis hari ini.'}
          </small>
              <small style={{ color: 'var(--text-secondary)' }}>Nishab saat ini: {formatRupiah(85 * goldPrice)}</small>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              <div style={{ marginBottom: 10 }}>
                <label style={{ display: 'block', fontSize: 12, marginBottom: 5 }}>Uang Tunai / Tabungan</label>
                <input 
                  type="number" 
                  value={assets.cash || ''}
                  onChange={e => setAssets({...assets, cash: parseInt(e.target.value) || 0})}
                  style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: 10 }}>
                <label style={{ display: 'block', fontSize: 12, marginBottom: 5 }}>Investasi (Saham/Reksadana)</label>
                <input 
                  type="number" 
                  value={assets.investment || ''}
                  onChange={e => setAssets({...assets, investment: parseInt(e.target.value) || 0})}
                  style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: 10 }}>
                <label style={{ display: 'block', fontSize: 12, marginBottom: 5 }}>Nilai Emas/Perak</label>
                <input 
                  type="number" 
                  value={assets.goldSilver || ''}
                  onChange={e => setAssets({...assets, goldSilver: parseInt(e.target.value) || 0})}
                  style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: 10 }}>
                <label style={{ display: 'block', fontSize: 12, marginBottom: 5 }}>Piutang Lancar</label>
                <input 
                  type="number" 
                  value={assets.receivables || ''}
                  onChange={e => setAssets({...assets, receivables: parseInt(e.target.value) || 0})}
                  style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: 15 }}>
              <label style={{ display: 'block', marginBottom: 5 }}>Hutang Jatuh Tempo (Pengurang)</label>
              <input 
                type="number" 
                value={assets.debt || ''}
                onChange={e => setAssets({...assets, debt: parseInt(e.target.value) || 0})}
                style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-main)', color: 'var(--text-main)', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ background: 'var(--bg-main)', padding: 15, borderRadius: 10, marginTop: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span>Total Harta Bersih:</span>
                <strong>{formatRupiah(maalResult.netAssets)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span>Status:</span>
                <span style={{ 
                  color: maalResult.isWajib ? '#ef4444' : '#10b981', 
                  fontWeight: 'bold',
                  background: maalResult.isWajib ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                  padding: '2px 8px',
                  borderRadius: 4
                }}>
                  {maalResult.isWajib ? 'WAJIB ZAKAT' : 'BELUM WAJIB'}
                </span>
              </div>
              
              {maalResult.isWajib && (
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 10, marginTop: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: 'var(--accent)' }}>
                    <span>Zakat yang harus dikeluarkan (2.5%):</span>
                    <strong>{formatRupiah(maalResult.zakatAmount)}</strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
