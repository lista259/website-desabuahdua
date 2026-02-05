import React from "react";
import budayaData from "../../data/potensi.json";

const BudayaSection = () => {
  const budaya = budayaData.budaya;
  const tabel = budaya.tabel;
  const kudaRenggong = budaya.detail_khusus.kuda_renggong;

  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-lg space-y-8">
      {/* ================= HEADER ================= */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">
          Potensi Seni dan Budaya Desa Buahdua
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {budaya.deskripsi_umum}
        </p>
      </div>

      {/* ================= TABEL BUDAYA ================= */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-purple-700 text-white">
              <th className="px-4 py-3 text-left">No</th>
              <th className="px-4 py-3 text-left">Nama Kesenian</th>
              <th className="px-4 py-3 text-center">Jumlah Grup / Unit</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {tabel.map((item, index) => (
              <tr key={index} className="border-b hover:bg-purple-50 transition">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 font-medium">{item.nama}</td>
                <td className="px-4 py-2 text-center">
                  {item.jumlah} {item.satuan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= DETAIL KUDA RENGGONG ================= */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h3 className="text-xl font-bold text-purple-800">
          {kudaRenggong.nama}
        </h3>

        <p className="text-gray-700 leading-relaxed">
          {kudaRenggong.sejarah}
        </p>

        {/* Fungsi budaya */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">
            Fungsi Budaya
          </h4>
          <ul className="list-disc list-inside text-gray-700">
            {kudaRenggong.fungsi_budaya.map((fungsi, index) => (
              <li key={index}>{fungsi}</li>
            ))}
          </ul>
        </div>

        {/* Video Youtube */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">
            Dokumentasi Video
          </h4>

          <div className="grid md:grid-cols-3 gap-4">
            {kudaRenggong.youtube.map((video, index) => {
              // Membersihkan URL agar benar-benar menjadi format embed
              const videoId = video.url.includes("v=") 
                ? video.url.split("v=")[1].split("&")[0] 
                : video.url.split("/").pop();

              return (
                <div key={index} className="w-full aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg shadow"
                    src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                    title={video.judul}
                    // 'allow' tanpa kata 'autoplay' akan membantu mencegah auto-play liar
                    allow="accelerometer; borderless; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= SUMBER ================= */}
      <p className="text-xs text-gray-500 italic text-right">
        * {budaya.sumber}
      </p>
    </div>
  );
};

export default BudayaSection;