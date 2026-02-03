import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Organisms/Navbar";
import Home from "./pages/Home";
import ProfileDesa from "./pages/ProfileDesa";
import Footer from "./pages/Footer";
import UMKM from "./pages/UMKM";
import UMKMDetail from "./components/Organisms/DetailUmkm";
import MengenalDesa from "./components/Organisms/MengenalDesa";
import VisiMisi from "./components/Organisms/VisiMisi";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil-desa" element={<ProfileDesa />} />

        {/* POTENSI DESA */}
        <Route path="/potensi-desa/umkm" element={<UMKM />} />
        <Route path="/potensi-desa/umkm/:category" element={<UMKM />} />
        <Route path="/pemerintahan-desa/perkenalan" element={<MengenalDesa />} />
        <Route path="/pemerintahan-desa/visi-misi" element={<VisiMisi />} />

        <Route path="/umkm/:id" element={<UMKMDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}
