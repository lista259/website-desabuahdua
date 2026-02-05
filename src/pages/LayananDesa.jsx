import React, { useState } from "react";
import data from "../data/layanan.json";
import { Phone, Book, GraduationCap, Smartphone, ExternalLink, Instagram, MessageCircle, ArrowLeft, HeartPulse, Utensils } from "lucide-react";
import KatalogBuku from "../components/molecules/KatalogBuku";

export default function LayananDesa() {
  const [showKatalog, setShowKatalog] = useState(false);

  if (showKatalog) {
    return (
      <div className="relative">
        <button 
          onClick={() => setShowKatalog(false)}
          className="fixed top-24 left-8 z-50 flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md border border-gray-100 font-bold text-gray-700 hover:bg-gray-50 transition-all"
        >
          <ArrowLeft size={20} /> Kembali
        </button>
        <KatalogBuku />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 space-y-12">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* HEADER */}
        <div className="text-center bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Pusat Layanan & Informasi</h1>
          <p className="text-gray-500 text-lg italic">Akses informasi kesehatan, pendidikan, dan layanan darurat Desa Buahdua</p>
        </div>

        {/* JADWAL KESEHATAN & MBG */}
        <section className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-pink-600 p-3 rounded-2xl text-white shadow-lg shadow-pink-200">
              <HeartPulse size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Jadwal Kesehatan Desa</h2>
              <p className="text-sm text-gray-500">Rutin setiap bulan di setiap Dusun</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="font-bold text-gray-700 flex items-center gap-2">
                <Utensils size={18} className="text-orange-500" /> Jadwal Makan Bergizi Gratis (MBG):
              </p>
              <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                <p className="text-orange-800 font-bold text-lg">Hari {data.layanan_kesehatan.jadwal_mbg}</p>
                <p className="text-sm text-orange-600 italic">Tersedia di lokasi Posyandu masing-masing</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-gray-700">Jadwal Rutin Posyandu:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.layanan_kesehatan.posyandu.map((pos, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex justify-between items-center text-sm">
                    <span className="font-medium text-gray-600">{pos.nama}</span>
                    <span className="bg-white px-2 py-1 rounded-lg shadow-sm font-bold text-pink-600">Tgl {pos.tanggal.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* DARURAT: DAMKAR */}
          <section className="bg-red-50 p-8 rounded-[3rem] border border-red-100 relative h-fit">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-600 p-3 rounded-2xl text-white shadow-lg shadow-red-200">
                <Phone size={28} />
              </div>
              <h2 className="text-2xl font-bold text-red-800">Darurat Damkar</h2>
            </div>
            <div className="space-y-5">
              <div className="bg-white p-5 rounded-3xl shadow-sm text-center">
                <p className="text-xs text-red-500 font-bold uppercase mb-1">Pusat Sumedang</p>
                <p className="text-2xl font-black text-red-700">{data.layanan_darurat.kontak_pusat}</p>
              </div>
              <div className="space-y-2">
                {data.layanan_darurat.pos_wilayah.map((pos, i) => (
                  <div key={i} className="bg-white/60 p-3 rounded-xl flex justify-between items-center text-sm">
                    <span className="font-bold text-gray-700">{pos.nama}</span>
                    <span className="text-red-600">{pos.telp}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* KEPENDUDUKAN: IKD */}
          <section className="bg-blue-50 p-8 rounded-[3rem] border border-blue-100 h-fit">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg shadow-blue-200">
                <Smartphone size={28} />
              </div>
              <h2 className="text-2xl font-bold text-blue-800">Layanan IKD</h2>
            </div>
            <div className="bg-white p-6 rounded-3xl mb-6 shadow-sm">
              <ul className="space-y-3">
                {data.layanan_online.langkah_aktivasi.map((step, i) => (
                  <li key={i} className="flex gap-3 text-xs text-gray-600">
                    <span className="bg-blue-100 text-blue-600 font-bold rounded-md w-5 h-5 flex items-center justify-center flex-shrink-0">{i+1}</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <a href={data.layanan_online.link_ikd} target="_blank" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
              Download Aplikasi IKD <ExternalLink size={18} />
            </a>
          </section>

          {/* PERPUSTAKAAN */}
          <section className="bg-amber-50 p-8 rounded-[3rem] border border-amber-100 h-fit">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-amber-500 p-3 rounded-2xl text-white shadow-lg shadow-amber-200">
                <Book size={28} />
              </div>
              <h2 className="text-2xl font-bold text-amber-800">Perpustakaan</h2>
            </div>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">Akses koleksi buku fisik dan literasi digital Desa Buahdua untuk seluruh warga.</p>
            <div className="grid grid-cols-2 gap-4 mb-6 text-center">
              <div className="bg-white p-4 rounded-3xl border border-amber-100">
                <p className="text-2xl font-black text-amber-600">300+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Koleksi</p>
              </div>
              <div className="bg-white p-4 rounded-3xl border border-amber-100">
                <p className="text-2xl font-black text-amber-600">RW 12</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Lokasi</p>
              </div>
            </div>
            <button onClick={() => setShowKatalog(true)} className="w-full bg-amber-500 text-white py-4 rounded-2xl font-bold shadow-lg shadow-amber-200 hover:bg-amber-600 transition-all">
              Buka Katalog Buku
            </button>
          </section>
        </div>

        {/* PENDIDIKAN SECTION */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 px-6">
            <div className="bg-green-600 p-2 rounded-xl text-white shadow-lg shadow-green-200"><GraduationCap size={24} /></div>
            <h2 className="text-2xl font-bold text-gray-800">Direktori Pendidikan Desa</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.pendidikan.map((sekolah, i) => (
              <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group text-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-green-50 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{sekolah.jenjang}</span>
                  <div className="flex gap-2">
                    {sekolah.ig !== "#" && <a href={`https://instagram.com/${sekolah.ig}`} target="_blank" className="text-pink-500 hover:scale-110 transition-transform"><Instagram size={18} /></a>}
                    {sekolah.wa && <a href={`https://wa.me/${sekolah.wa}`} target="_blank" className="text-green-500 hover:scale-110 transition-transform"><MessageCircle size={18} /></a>}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-green-600 transition-colors">{sekolah.nama}</h3>
                <p className="text-xs text-gray-400 mb-4">{sekolah.status}</p>
                <p className="text-xs text-gray-500 flex items-start gap-1">📍 {sekolah.alamat}</p>
                {sekolah.web && (
                  <a href={sekolah.web} target="_blank" className="mt-4 block text-center text-xs font-bold text-blue-600 border border-blue-100 py-2 rounded-xl hover:bg-blue-50">Kunjungi Website</a>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}