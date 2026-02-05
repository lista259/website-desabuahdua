import React, { useState } from "react";
import dataBuku from "../../data/katalogBuku.json";
import { Search, BookOpen, Hash, User, Building2 } from "lucide-react";

export default function KatalogBuku() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("Semua");

  const filteredBuku = dataBuku.buku.filter((b) => {
    const matchesSearch = (b.judul && b.judul.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          (b.pengarang && b.pengarang.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesKategori = selectedKategori === "Semua" || b.kategori === selectedKategori;
    return matchesSearch && matchesKategori;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* HEADER */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">📚 Katalog Perpustakaan Desa</h1>
          <p className="text-gray-500 italic">Meningkatkan literasi masyarakat Desa Buahdua melalui koleksi buku berkualitas</p>
        </div>

        {/* SEARCH & FILTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari judul buku atau pengarang..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-amber-500 outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            className="w-full py-4 px-6 rounded-2xl border-none shadow-sm bg-white text-gray-600 outline-none"
            onChange={(e) => setSelectedKategori(e.target.value)}
          >
            <option value="Semua">Semua Kategori</option>
            {dataBuku.kategori.map((kat) => (
              <option key={kat.kode} value={kat.kode}>{kat.nama}</option>
            ))}
          </select>
        </div>

        {/* BUKU GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBuku.map((buku, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-amber-50 rounded-bl-[2rem] flex items-center justify-center text-amber-600 font-bold group-hover:bg-amber-500 group-hover:text-white transition-colors">
                {buku.kategori}
              </div>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <BookOpen className="text-amber-500 mt-1 flex-shrink-0" size={22} />
                  <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-amber-600 transition-colors">
                    {buku.judul}
                  </h3>
                </div>

                <div className="space-y-2 border-t border-gray-50 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Hash size={16} className="text-gray-300" />
                    <span className="font-mono">{buku.kode}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User size={16} className="text-gray-300" />
                    <span>{buku.pengarang}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Building2 size={16} className="text-gray-300" />
                    <span>{buku.penerbit}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredBuku.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400">Buku tidak ditemukan. Coba gunakan kata kunci lain.</p>
          </div>
        )}
      </div>
    </div>
  );
}