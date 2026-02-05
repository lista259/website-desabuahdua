import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Organisms/Navbar";
import Home from "./pages/Home";
import ProfileDesa from "./pages/ProfileDesa";
import Footer from "./pages/Footer";
import UMKM from "./pages/UMKM";
import UMKMDetail from "./components/Organisms/DetailUmkm";
import MengenalDesa from "./components/Organisms/MengenalDesa";
import VisiMisi from "./components/Organisms/VisiMisi";
import SejarahDesa from "./components/Organisms/SejarahDesa";
import StrukturPemerintahan from "./components/Organisms/StrukturPemerintahan";
import LembagaDesa from "./pages/Lembaga";
import LayananDesa from "./pages/LayananDesa";
import PotensiDesa from "./pages/PotensiDesa";

export default function App() {
  return (
      <div className="font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil-desa" element={<ProfileDesa />} />

          {/* PROFIL / PEMERINTAHAN DESA */}
          <Route path="/pemerintahan-desa/perkenalan" element={<MengenalDesa />} />
          <Route path="/pemerintahan-desa/visi-misi" element={<VisiMisi />} />
          <Route path="/lembaga-desa" element={<LembagaDesa />} />
          <Route path="/pemerintahan-desa/sejarah" element={<SejarahDesa />} />
          <Route path="/pemerintahan-desa/perangkat" element={<StrukturPemerintahan />} />
          <Route path="/layanan-desa" element={<LayananDesa />} />

          {/* POTENSI DESA */}
          <Route path="/potensi-desa" element={<PotensiDesa />} />
          <Route path="/potensi-desa/pertanian" element={<PotensiDesa />} />
          <Route path="/potensi-desa/peternakan" element={<PotensiDesa />} />
          <Route path="/potensi-desa/budaya" element={<PotensiDesa />} />
          <Route path="/potensi-desa/umkm" element={<UMKM />} />
          <Route path="/potensi-desa/umkm/:category" element={<UMKM />} />
          <Route path="/umkm/:id" element={<UMKMDetail />} />
        </Routes>

        <Footer />
      </div>
  );
}
