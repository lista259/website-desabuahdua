export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* 1. IDENTITAS DESA */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-desa.png" 
                alt="Logo Desa Buahdua"
                className="h-12 w-auto brightness-90"
              />
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Desa Buahdua
                </h3>
                <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
                  Kabupaten Sumedang
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Situs informasi resmi Pemerintah Desa Buahdua. Berkomitmen dalam transparansi tata kelola dan kemudahan akses layanan bagi seluruh elemen masyarakat.
            </p>
          </div>

          {/* 2. KONTAK & ALAMAT */}
          <div>
            <h4 className="text-white font-bold mb-5 border-b border-gray-700 pb-2 inline-block">
              Kantor Desa
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <span>Jl. Raya Buahdua No.1, Buahdua, Kec. Buahdua, Kabupaten Sumedang, Jawa Barat 45392</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <span>+62 821-1547-8414</span>
              </li>
            </ul>
          </div>

          {/* 3. LAYANAN & OPERASIONAL */}
          <div>
            <h4 className="text-white font-bold mb-5 border-b border-gray-700 pb-2 inline-block">
              Jam Operasional
            </h4>
            <div className="space-y-3 bg-gray-800/50 p-4 rounded-2xl border border-gray-700/50">
              <div className="flex justify-between text-sm">
                <span>Senin – Jumat</span>
                <span className="text-white font-medium">08.00 – 16.00 WIB</span>
              </div>
              <div className="flex justify-between text-sm text-red-400">
                <span>Sabtu & Minggu</span>
                <span className="font-medium italic">Tutup</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-wide">
            © {new Date().getFullYear()} Pemerintah Desa Buahdua dan KKN UNSAP 2026. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <span>Sumedang Larang</span>
            <span className="text-gray-700">|</span>
            <span>Jogyadua</span>
          </div>
        </div>

      </div>
    </footer>
  );
}