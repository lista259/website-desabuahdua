import data from "../../data/profilDesa.json"

export default function ProfilDesa() {
  if (!data || !data.deskripsi) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 bg-gray-50 text-gray-800">

      {/* HEADER & TENTANG DESA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>🌾</span> Tentang Desa Buahdua
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            {data.deskripsi.map((text, i) => <p key={i}>{text}</p>)}
          </div>
        </section>
        
        <section className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-blue-600 h-fit">
          <h2 className="font-bold text-xl mb-6">Info Cepat</h2>
          {Object.entries(data.identitas).map(([key, val]) => (
            <div key={key} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
              <span className="text-gray-500 capitalize text-sm">{key.replace("_", " ")}</span>
              <span className="font-bold text-gray-800 text-right">{val}</span>
            </div>
          ))}
        </section>
      </div>

      {/* PEMBAGIAN WILAYAH DUSUN */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">🏘️ Wilayah Administrasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.pembagian_wilayah.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{item.dusun}</h3>
              <p className="text-xs font-semibold text-gray-400 uppercase mb-4">
                {item.rt} RT • {item.rw} RW
              </p>
              <ul className="space-y-2">
                {item.kampung.map((km, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-blue-300">•</span> {km}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FASILITAS PENDIDIKAN & KESEHATAN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white p-8 rounded-3xl shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-blue-700">🏫 Pendidikan Formal</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
                <tr>
                  <th className="p-3">Sekolah</th>
                  <th className="p-3 text-center">Guru</th>
                  <th className="p-3 text-center">Siswa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.fasilitas_publik.pendidikan_formal.map((sekolah, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="p-3 font-medium">{sekolah.nama}</td>
                    <td className="p-3 text-center">{sekolah.guru}</td>
                    <td className="p-3 text-center">{sekolah.siswa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white p-8 rounded-3xl shadow-sm h-fit">
          <h3 className="text-xl font-bold mb-6 text-green-700">🏥 Layanan Kesehatan</h3>
          <div className="p-4 bg-green-50 rounded-xl mb-6">
            <p className="text-xs text-green-600 font-bold uppercase">Puskesmas Utama</p>
            <p className="font-semibold">{data.fasilitas_publik.kesehatan.puskesmas}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {data.fasilitas_publik.kesehatan.sarana.map((s, idx) => (
              <div key={idx} className="border-l-4 border-green-200 pl-4 py-2">
                <p className="text-lg font-bold">{s.jumlah}</p>
                <p className="text-xs text-gray-500">{s.jenis}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* EKONOMI & TTG */}
      <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] shadow-xl overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span>⚙️</span> Ekonomi & Teknologi Tepat Guna
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-2">Mata Pencaharian Utama</p>
              <p className="text-3xl font-bold mb-6">{data.ekonomi_ketenagakerjaan.mata_pencaharian_utama}</p>
              <div className="flex flex-wrap gap-2">
                {data.ekonomi_ketenagakerjaan.teknologi_tepat_guna.map((tool, i) => (
                  <span key={i} className="bg-blue-800 px-3 py-1 rounded-full text-xs border border-blue-700">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-blue-200 text-sm font-bold uppercase tracking-wider">Industri & UMKM</p>
              {data.ekonomi_ketenagakerjaan.umkm.map((item, i) => (
                <div key={i} className="flex justify-between border-b border-blue-800 pb-2">
                  <span>{item.jenis}</span>
                  <span className="font-bold">{item.jumlah} Unit</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-800 rounded-full blur-3xl opacity-50" />
      </section>

      {/* ORBITASI & AKSES */}
      <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span>🚗</span> Akses & Konektivitas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {data.orbitasi.map((item, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group">
              <p className="text-[10px] text-gray-400 font-bold uppercase group-hover:text-blue-400 transition-colors">Ke {item.tujuan}</p>
              <p className="text-lg font-bold">{item.jarak}</p>
              <p className="text-xs text-gray-500">{item.waktu}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}