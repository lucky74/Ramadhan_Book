import { useState, useEffect } from 'react';

const SURAH_LIST = [
  "1. Al-Fatihah", "2. Al-Baqarah", "3. Ali 'Imran", "4. An-Nisa'", "5. Al-Ma'idah",
  "6. Al-An'am", "7. Al-A'raf", "8. Al-Anfal", "9. At-Taubah", "10. Yunus",
  "11. Hud", "12. Yusuf", "13. Ar-Ra'd", "14. Ibrahim", "15. Al-Hijr",
  "16. An-Nahl", "17. Al-Isra'", "18. Al-Kahf", "19. Maryam", "20. Taha",
  "21. Al-Anbiya'", "22. Al-Hajj", "23. Al-Mu'minun", "24. An-Nur", "25. Al-Furqan",
  "26. Asy-Syu'ara'", "27. An-Naml", "28. Al-Qasas", "29. Al-Ankabut", "30. Ar-Rum",
  "31. Luqman", "32. As-Sajdah", "33. Al-Ahzab", "34. Saba'", "35. Fatir",
  "36. Ya Sin", "37. As-Saffat", "38. Sad", "39. Az-Zumar", "40. Al-Ghafir",
  "41. Fussilat", "42. Asy-Syura", "43. Az-Zukhruf", "44. Ad-Dukhan", "45. Al-Jasiyah",
  "46. Al-Ahqaf", "47. Muhammad", "48. Al-Fath", "49. Al-Hujurat", "50. Qaf",
  "51. Az-Zariyat", "52. At-Tur", "53. An-Najm", "54. Al-Qamar", "55. Ar-Rahman",
  "56. Al-Waqi'ah", "57. Al-Hadid", "58. Al-Mujadilah", "59. Al-Hasyr", "60. Al-Mumtahanah",
  "61. As-Saff", "62. Al-Jumu'ah", "63. Al-Munafiqun", "64. At-Taghabun", "65. At-Talaq",
  "66. At-Tahrim", "67. Al-Mulk", "68. Al-Qalam", "69. Al-Haqqah", "70. Al-Ma'arij",
  "71. Nuh", "72. Al-Jinn", "73. Al-Muzzammil", "74. Al-Muddassir", "75. Al-Qiyamah",
  "76. Al-Insan", "77. Al-Mursalat", "78. An-Naba'", "79. An-Nazi'at", "80. 'Abasa",
  "81. At-Takwir", "82. Al-Infitar", "83. Al-Mutaffifin", "84. Al-Insyiqaq", "85. Al-Buruj",
  "86. At-Tariq", "87. Al-A'la", "88. Al-Ghasyiyah", "89. Al-Fajr", "90. Al-Balad",
  "91. Asy-Syams", "92. Al-Lail", "93. Ad-Duha", "94. Al-Insyirah", "95. At-Tin",
  "96. Al-'Alaq", "97. Al-Qadr", "98. Al-Bayyinah", "99. Az-Zalzalah", "100. Al-'Adiyat",
  "101. Al-Qari'ah", "102. At-Takasur", "103. Al-'Asr", "104. Al-Humazah", "105. Al-Fil",
  "106. Quraisy", "107. Al-Ma'un", "108. Al-Kausar", "109. Al-Kafirun", "110. An-Nasr",
  "111. Al-Lahab", "112. Al-Ikhlas", "113. Al-Falaq", "114. An-Nas"
];

export default function MurotalPlayer() {
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    async function fetchAudio() {
      setLoading(true);
      try {
        const response = await fetch(`https://api.quran.com/api/v4/chapter_recitations/7/${selectedSurah}`);
        const data = await response.json();
        if (data.audio_file && data.audio_file.audio_url) {
          setAudioUrl(data.audio_file.audio_url);
        }
      } catch (error) {
        console.error("Gagal memuat audio:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAudio();
  }, [selectedSurah]);

  return (
    <div style={styles.container}>
      {/* Header / Toggle Button */}
      <div 
        style={styles.header} 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 18 }}>🎧</span>
          <span style={{ fontWeight: 'bold', fontSize: 14 }}>Murotal Player (Mishary Rashid)</span>
        </div>
        <div>{isExpanded ? '▼' : '▲'}</div>
      </div>

      {/* Content */}
      <div style={{ 
        ...styles.content, 
        maxHeight: isExpanded ? 200 : 0,
        opacity: isExpanded ? 1 : 0,
        padding: isExpanded ? 16 : 0
      }}>
        <div style={{ marginBottom: 12 }}>
          <label style={styles.label}>Pilih Surat:</label>
          <select 
            style={styles.select}
            value={selectedSurah}
            onChange={(e) => {
              setSelectedSurah(Number(e.target.value));
              setIsPlaying(false);
            }}
          >
            {SURAH_LIST.map((name, index) => (
              <option key={index} value={index + 1}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div style={{ color: '#94a3b8', fontSize: 12 }}>Memuat audio...</div>
        ) : (
          <audio 
            controls 
            src={audioUrl || ""} 
            style={styles.audio}
          />
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed' as const,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0f172a',
    borderTop: '1px solid #1e293b',
    zIndex: 1000,
    boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  },
  header: {
    padding: '12px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: '#1e293b',
    color: '#38bdf8'
  },
  content: {
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    backgroundColor: '#0f172a'
  },
  label: {
    display: 'block',
    marginBottom: 8,
    color: '#94a3b8',
    fontSize: 12
  },
  select: {
    width: '100%',
    padding: 8,
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    color: '#e5e7eb',
    borderRadius: 6,
    outline: 'none',
    cursor: 'pointer'
  },
  audio: {
    width: '100%',
    height: 36,
    marginTop: 8
  }
};
