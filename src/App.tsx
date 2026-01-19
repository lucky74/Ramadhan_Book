import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reader from "./pages/Reader";
import Admin from "./pages/Admin";
import MurotalPlayer from "./components/MurotalPlayer";
import { LanguageProvider } from "./contexts/LanguageContext";
import OneSignal from 'react-onesignal';

export default function App() {
  useEffect(() => {
    // Inisialisasi OneSignal
    // Catatan: Ganti 'YOUR-ONESIGNAL-APP-ID' dengan App ID asli Anda dari dashboard OneSignal
    try {
      OneSignal.init({
        appId: "YOUR-ONESIGNAL-APP-ID", // User harus mengganti ini
        allowLocalhostAsSecureOrigin: true,
      });
    } catch (error) {
      console.log("OneSignal init error (expected if no App ID provided):", error);
    }
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read/:id" element={<Reader />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <MurotalPlayer />
      </BrowserRouter>
    </LanguageProvider>
  );
}
