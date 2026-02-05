import artikelData from "../../../data/artikel.json";

export default function Artikel() {
  // Menggabungkan kedua kategori agar semua materi muncul di mading
  const semuaMateri = [
    ...artikelData.materi_edukatif,
    ...artikelData.materi_sampah
  ];

  const handleKlikMedia = (item) => {
    // Menentukan URL mana yang akan dibuka
    const urlTujuan = item.tipe_media === "video" 
      ? item.referensi_yt 
      : item.sumber.url;

    // Membuka di tab baru
    if (urlTujuan) {
      window.open(urlTujuan, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-10 bg-white rounded-[3rem]">
      <div className="flex justify-between items-center px-8 mb-6">
        <h2 className="text-2xl font-bold">📢 Mading Digital Desa</h2>
        <span className="text-xs text-gray-400 font-medium">Geser untuk lihat lainnya →</span>
      </div>

      <div className="flex gap-6 overflow-x-auto px-8 pb-6 scrollbar-hide">
        {semuaMateri.map((item) => (
          <div 
            key={item.id} 
            className="min-w-[280px] md:min-w-[320px] p-6 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded-md">
                  {item.kategori}
                </span>
                {item.tipe_media === "video" && (
                  <span className="text-[10px] font-bold text-red-600 uppercase bg-red-50 px-2 py-1 rounded-md">
                    🎥 Video
                  </span>
                )}
              </div>
              
              <h3 className="font-bold mt-4 mb-3 leading-snug text-gray-800">
                {item.judul}
              </h3>
              
              <p className="text-sm text-gray-500 line-clamp-3 mb-6">
                {item.ringkasan}
              </p>
            </div>

            <button 
              onClick={() => handleKlikMedia(item)}
              className="w-full py-3 px-4 bg-white border border-blue-600 text-blue-600 rounded-2xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              {item.tipe_media === "video" ? "Tonton Video" : "Baca Artikel"}
              <span className="text-lg">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}