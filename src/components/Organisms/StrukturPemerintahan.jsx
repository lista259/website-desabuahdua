import data from "../../data/strukturpemerintahan.json";
import { Users } from "lucide-react";

const pemerintah = data.pemerintahan_desa;

const Card = ({ nama, jabatan, foto }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 text-center hover:shadow-md transition">
    <img
      src={foto}
      alt={nama}
      className="w-28 h-28 mx-auto rounded-full object-cover border"
    />
    <h4 className="font-bold text-gray-800 mt-3">{nama}</h4>
    <p className="text-sm text-gray-500">{jabatan}</p>
  </div>
);

export default function StrukturPemerintahan() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Struktur Pemerintahan Desa
          </h1>
          <p className="text-gray-500 italic">
            {pemerintah.desa}, Kecamatan {pemerintah.kecamatan}, Kabupaten {pemerintah.kabupaten}
          </p>
        </div>

        {/* KEPALA DESA */}
        <div className="flex justify-center">
          <Card {...pemerintah.kepala_desa} />
        </div>

        {/* SEKRETARIS DESA */}
        <div className="flex justify-center">
          <Card {...pemerintah.sekretaris_desa} />
        </div>

        {/* KAUR */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-700 mb-4">
            <Users size={20} /> Kepala Urusan (KAUR)
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {pemerintah.sekretaris_desa.kaur.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </div>

        {/* KASI */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-700 mb-4">
            <Users size={20} /> Kepala Seksi (KASI)
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {pemerintah.kasi.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </div>

        {/* KADUS */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-700 mb-4">
            <Users size={20} /> Kepala Dusun
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {pemerintah.kadus.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
