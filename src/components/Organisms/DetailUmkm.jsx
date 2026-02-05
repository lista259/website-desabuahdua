import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/umkmProducts.json";
import { Star, MapPin, User, Calendar, Users, ShoppingBag, MessageCircle } from "lucide-react";

export default function UMKMDetail() {
  const { id } = useParams();
  
  // Mencari data UMKM berdasarkan ID dari URL
  const umkm = data.find((item) => item.id.toString() === id);

  // Tampilan jika data tidak ditemukan
  if (!umkm) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-10 text-center">
        <div className="text-gray-300 mb-4">
          <ShoppingBag size={64} />
        </div>
        <h2 className="text-xl font-bold text-gray-800">UMKM Tidak Ditemukan</h2>
        <p className="text-gray-500 mt-2">Maaf, data yang Anda cari tidak tersedia atau telah dihapus.</p>
      </div>
    );
  }

  /* ===== LOGIKA WHATSAPP ===== */
  /* ===== LOGIKA FIX WHATSAPP (Sangat Penting) ===== */
  let waLink = null;
  if (umkm.contact) {
    // 1. Ambil angka saja
    let cleanNumber = umkm.contact.replace(/\D/g, "");
    
    // 2. Ubah 08... menjadi 628... agar standar internasional wa.me
    if (cleanNumber.startsWith("0")) {
      cleanNumber = "62" + cleanNumber.slice(1);
    }
    
    // 3. Pastikan nomor valid (min 10 digit)
    if (cleanNumber.length >= 10) {
      waLink = `https://wa.me/${cleanNumber}?text=Halo%20${encodeURIComponent(umkm.name)},%20saya%20tertarik%20dengan%20produk%20Anda.`;
    }
  }

  /* ===== LOGIKA RATING ===== */
  const rating =
    umkm.reviews && umkm.reviews.length > 0
      ? (4 + umkm.reviews.length * 0.1).toFixed(1)
      : null;

  return (
    <section className="max-w-6xl mx-auto px-4 pt-6 pb-24 space-y-8 animate-fadeIn">
      
      {/* ===== HEADER: FOTO TOKO & MAPS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Foto Utama UMKM */}
        <div className="h-56 sm:h-72 rounded-2xl overflow-hidden bg-gray-200 shadow-md">
          <img
            src={umkm.image.startsWith("/src/assets/") ? "https://via.placeholder.com/600x400?text=Foto+Toko+Tidak+Tersedia" : umkm.image}
            alt={umkm.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/600x400?text=Foto+Toko+Tidak+Tersedia";
            }}
          />
        </div>

        {/* Lokasi Maps */}
        <div className="h-56 sm:h-72 rounded-2xl overflow-hidden border shadow-md bg-white">
          <iframe
            title="Lokasi UMKM"
            className="w-full h-full"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              umkm.location
            )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            loading="lazy"
          />
        </div>
      </div>

      {/* ===== INFORMASI UTAMA ===== */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{umkm.name}</h1>
        
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={18} className="text-red-500 flex-shrink-0" />
          <span className="text-sm sm:text-base">{umkm.location}</span>
        </div>

        {rating && (
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-200">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="font-bold text-yellow-700">{rating}</span>
            </div>
            <span className="text-gray-400 text-sm">
              ({umkm.reviews.length} ulasan pelanggan)
            </span>
          </div>
        )}
      </div>

      {/* ===== GRID DETAIL INFORMASI ===== */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
          <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
            <User size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase">Pemilik</p>
            <p className="text-sm font-semibold text-gray-700">{umkm.owner}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
          <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
            <Calendar size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase">Tahun Berdiri</p>
            <p className="text-sm font-semibold text-gray-700">{umkm.year_established}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
          <div className="p-2 bg-green-100 text-green-600 rounded-lg">
            <Users size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase">Karyawan</p>
            <p className="text-sm font-semibold text-gray-700">{umkm.employees} Orang</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
          <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
            <ShoppingBag size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase">Produksi</p>
            <p className="text-sm font-semibold text-gray-700">{umkm.production_type}</p>
          </div>
        </div>
      </div>

      {/* ===== SERTIFIKAT (Opsional) ===== */}
      {umkm.certificates && umkm.certificates.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-gray-800">Sertifikasi & Izin</h2>
          <div className="flex flex-wrap gap-2">
            {umkm.certificates.map((cert, index) => (
              <span
                key={index}
                className="inline-flex items-center bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full border border-green-100"
              >
                ✓ {cert}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ===== DESKRIPSI ===== */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Tentang Usaha</h2>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic border-l-4 border-purple-200 pl-4">
          "{umkm.description}"
        </p>
      </div>

      {/* ===== MENU / KATALOG PRODUK ===== */}
      {umkm.menu && umkm.menu.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800">Katalog Produk</h2>
            <span className="text-xs text-gray-400">{umkm.menu.length} Produk</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {umkm.menu.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                {/* Foto Produk */}
                <div className="aspect-square bg-gray-50 overflow-hidden">
                  <img
                    src={item.image || "https://via.placeholder.com/150?text=Produk"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/150?text=Produk";
                    }}
                  />
                </div>

                {/* Info Produk */}
                <div className="p-3">
                  <h3 className="text-sm font-bold text-gray-800 line-clamp-1 group-hover:text-purple-700">
                    {item.name}
                  </h3>
                  <p className="text-xs font-bold text-purple-600 mt-1">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== REVIEW / ULASAN ===== */}
      {umkm.reviews && umkm.reviews.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-800">Apa Kata Mereka?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {umkm.reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 relative">
                <span className="absolute top-4 right-4 text-4xl text-gray-200 font-serif leading-none">“</span>
                <p className="text-sm text-gray-700 relative z-10 leading-relaxed italic">
                  {review}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-200" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pelanggan Terverifikasi</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== TOMBOL WHATSAPP FLOATING ===== */}
      {waLink && (
        <div className="fixed bottom-6 right-0 left-0 px-4 flex justify-center sm:justify-end sm:left-auto sm:right-8 z-50">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group w-full sm:w-auto justify-center"
          >
            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
            <span className="font-bold">Hubungi UMKM Sekarang</span>
          </a>
        </div>
      )}
    </section>
  );
}