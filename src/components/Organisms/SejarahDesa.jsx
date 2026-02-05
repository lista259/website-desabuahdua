import { useEffect } from "react";
import dataSejarah from "../../data/SejarahDesa.json";

export default function SejarahDesa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Legenda & Sejarah Desa Buahdua
            </h1>
            <p className="text-blue-600 text-lg font-medium">
              Menelusuri Jejak Asal-usul "Jogyadua"
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
              🏛️
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-1">Cagar Budaya</h2>
              <p className="text-gray-500 text-sm leading-snug">
                Melestarikan kisah Rd. Agus Salam dan situs bersejarah Lapang Darongdong sebagai identitas desa.
              </p>
            </div>
          </div>
        </div>

        {/* TIMELINE / GRID ISI SEJARAH */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {dataSejarah.sejarah.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all hover:border-blue-200 hover:shadow-md group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-blue-100"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-200">
                  {item.id}
                </div>
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                  {item.judul}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed relative z-10 text-sm sm:text-base">
                {item.isi}
              </p>
            </div>
          ))}
        </div>

        {/* SECTION SIMBOL PERJUANGAN */}
        <div className="bg-blue-600 p-8 md:p-12 rounded-3xl shadow-xl text-white relative overflow-hidden mb-12">
          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <span>🇮🇩</span> Monumen & Jejak Sejarah
              </h2>
              <div className="space-y-4 text-blue-50">
                <p className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></span>
                  <span>Tugu Peringatan Siliwangi di Lapang Darongdong menjadi bukti fisik peristiwa 10 November 1949.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></span>
                  <span>Makam Buyut Malandang menjadi destinasi ziarah yang melambangkan penghormatan pada leluhur.</span>
                </p>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-32 h-32 border-4 border-blue-400 rounded-full flex items-center justify-center text-5xl bg-blue-500 shadow-2xl animate-pulse">
                🛡️
              </div>
            </div>
          </div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-700 rounded-full blur-3xl opacity-30"></div>
        </div>

        {/* SECTION VIDEO YOUTUBE (TAMBAHAN TERBARU) */}
        <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-red-600 text-3xl">🎥</span> Dokumentasi Video Situs Buyut Malandang
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataSejarah.video_dokumentasi.map((video) => (
              <div key={video.id} className="overflow-hidden rounded-2xl shadow-sm border border-gray-100 bg-gray-50">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src={video.url}
                    title={video.judul}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-gray-700 text-center">
                    {video.judul}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}