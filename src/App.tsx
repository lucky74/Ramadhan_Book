import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reader from "./pages/Reader";
import Admin from "./pages/Admin";
import MurotalPlayer from "./components/MurotalPlayer";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
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
