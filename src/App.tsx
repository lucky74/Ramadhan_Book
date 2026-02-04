import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reader from "./pages/Reader";
import TadarusTracker from "./pages/TadarusTracker";
import AmalanTracker from "./pages/AmalanTracker";
import ZakatCalculator from "./pages/ZakatCalculator";
import Admin from "./pages/Admin";
import MurotalPlayer from "./components/MurotalPlayer";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import OneSignal from 'react-onesignal';

export default function App() {
  useEffect(() => {
    // Inisialisasi OneSignal
    const initOneSignal = async () => {
      try {
        await OneSignal.init({
          appId: "1817f5d4-757d-418f-9926-f94ca84fa720",
          allowLocalhostAsSecureOrigin: true,
        });

        // Event listener untuk notifikasi saat aplikasi sedang dibuka (Foreground)
        OneSignal.Notifications.addEventListener('foregroundWillDisplay', (event) => {
          console.log("Notifikasi diterima saat aplikasi terbuka:", event);
          // Pastikan notifikasi tetap muncul
          // event.preventDefault(); // Jangan panggil ini jika ingin notifikasi tampil
        });

        console.log("OneSignal initialized");
      } catch (error) {
        console.log("OneSignal init error:", error);
      }
    };

    initOneSignal();
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tadarus" element={<TadarusTracker />} />
            <Route path="/amalan" element={<AmalanTracker />} />
            <Route path="/zakat" element={<ZakatCalculator />} />
            <Route path="/read/:id" element={<Reader />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <MurotalPlayer />
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}
