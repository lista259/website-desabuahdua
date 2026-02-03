export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* DESA INFO */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo-desa.png"
                alt="Desa Buahdua"
                className="h-10 w-10"
              />
              <h3 className="text-lg font-semibold text-white">
                Desa Buahdua
              </h3>
            </div>

            <p className="text-sm leading-relaxed">
              Website resmi Pemerintah Desa Buahdua sebagai sarana informasi,
              pelayanan, dan transparansi publik kepada masyarakat.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Beranda</a></li>
              <li><a href="/profil-desa" className="hover:text-white">Profil Desa</a></li>
              <li><a href="/layanan-desa" className="hover:text-white">Layanan Desa</a></li>
              <li><a href="/potensi-desa/umkm" className="hover:text-white">Potensi Desa</a></li>
            </ul>
          </div>

          {/* KONTAK */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 Desa Buahdua, Kecamatan Buahdua</li>
              <li>📞 08xxxxxxxxxx</li>
              <li>✉️ desabuahdua@email.com</li>
            </ul>
          </div>

          {/* JAM LAYANAN */}
          <div>
            <h4 className="text-white font-semibold mb-4">Jam Pelayanan</h4>
            <ul className="space-y-2 text-sm">
              <li>Senin – Jumat</li>
              <li>08.00 – 15.00 WIB</li>
              <li>Sabtu & Minggu Libur</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Pemerintah Desa Buahdua.  
          <span className="block md:inline">
            {" "}All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
