import beritaData from "../../../data/berita.json";
import { InstagramEmbed } from 'react-social-media-embed';

export default function Berita() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-24">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            📸 Kabar Terkini Desa
          </h2>
          <p className="text-gray-500 mt-2">
            Update langsung dari akun media sosial resmi Desa Buahdua.
          </p>
        </div>
        <a 
          href="https://www.instagram.com/" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-sm font-bold shadow-lg hover:opacity-90 transition-opacity"
        >
          Ikuti Instagram Kami
        </a>
      </div>

      {/* GRID BERITA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {beritaData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-all hover:shadow-xl"
          >
            {/* EMBED INSTAGRAM */}
            <div className="w-full bg-gray-50 p-2 sm:p-4 flex justify-center border-b border-gray-50">
              <div className="w-full max-w-[450px]">
                <InstagramEmbed 
                  url={item.instagram_url} 
                  width="100%"
                  captioned={false}
                />
              </div>
            </div>

            {/* INFO POSTINGAN */}
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-8 bg-pink-500"></span>
                  <span className="text-xs font-bold text-pink-600 uppercase tracking-widest">
                    {item.tanggal}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 leading-tight mb-4">
                  {item.judul}
                </h3>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <a 
                  href={item.instagram_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group"
                >
                  Lihat Postingan Lengkap 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                
                {/* Badge Verifikasi Simpel */}
                <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Official Post
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER INFO */}
      <div className="mt-12 p-6 bg-gray-50 rounded-3xl border border-dashed border-gray-300 text-center">
        <p className="text-sm text-gray-500 italic">
          * Konten di atas otomatis terhubung dengan server Instagram. Pastikan koneksi internet Anda stabil untuk melihat gambar.
        </p>
      </div>
    </section>
  );
}