import data from "../../data/profilDesa.json"

export default function ProfilDesa() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      {/* HERO */}
      <div
        className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/desa-buahdua.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        <div className="relative z-10 h-full flex items-center px-6 sm:px-10">
          <div className="text-white max-w-xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
              🌾 {data.judul}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg opacity-90">
              {data.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* DESKRIPSI */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Tentang Desa</h2>
        <div className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg space-y-4">
          {data.deskripsi.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </section>

      {/* IDENTITAS */}
      <section className="bg-blue-50 rounded-2xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Identitas Desa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(data.identitas).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="capitalize font-medium text-gray-700 text-sm sm:text-base">
                {key.replace("_", " ")}
              </span>
              <span className="text-gray-600 text-sm sm:text-base">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GEOGRAFIS */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">📍 Letak Geografis</h2>
        <p className="text-gray-700 mb-6 text-sm sm:text-base lg:text-lg">
          {data.geografis.deskripsi}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {Object.entries(data.geografis.batas).map(([arah, wilayah]) => (
            <div
              key={arah}
              className="bg-gray-50 rounded-xl p-4 text-center"
            >
              <p className="font-semibold text-gray-800 text-sm sm:text-base">{arah}</p>
              <p className="text-xs sm:text-sm text-gray-600">{wilayah}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-sm sm:text-base">
          Sungai utama: <span className="font-medium">{data.geografis.sungai.join(", ")}</span>
        </p>
        {/* MAP PLACEHOLDER */}
        <div className="mt-6 h-48 sm:h-64 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm sm:text-base">
          Peta Lokasi Desa
        </div>
      </section>

      {/* MATA PENCAHARIAN & BUDAYA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">🌾 Mata Pencaharian</h2>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
            {data.mataPencaharian.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-500">✔</span> {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">🎭 Seni & Budaya</h2>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
            {data.budaya.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-purple-500">🎨</span> {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* POTENSI DESA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-6 sm:p-8 text-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">🌱 Potensi & Arah Pengembangan Desa</h2>
        <ul className="space-y-3 text-sm sm:text-base">
          {data.potensi.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span>•</span> {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}