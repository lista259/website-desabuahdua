import { useState } from "react";
import data from "../../data/profilDesa.json";
import {
  ChevronDown,
  Target,
  Lightbulb,
  ClipboardList,
  ShieldCheck,
  Users,
  Construction,
} from "lucide-react";

// ================= HELPER NORMALIZER =================
// Mengubah object nested menjadi 1 array
const normalizeItems = (items) => {
  if (!items) return [];

  // Kalau sudah array → langsung return
  if (Array.isArray(items)) return items;

  // Kalau object → gabungkan semua array di dalamnya
  if (typeof items === "object") {
    return Object.values(items).flatMap((val) => normalizeItems(val));
  }

  return [];
};

// ================= RENDER TABLE =================
// eslint-disable-next-line no-unused-vars
const RenderProgramTable = ({ title, Icon, color, items }) => {
  const normalized = normalizeItems(items);

  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-center gap-2 px-2">
        <Icon size={20} className={color} />
        <h3 className="font-bold text-gray-700">{title}</h3>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-[10px] font-bold tracking-wider">
              <tr>
                <th className="px-4 py-3">Kegiatan</th>
                <th className="px-4 py-3">Lokasi</th>
                <th className="px-4 py-3">Waktu</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {normalized.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-gray-700 font-medium">
                    {Array.isArray(item.kegiatan)
                      ? item.kegiatan.join(", ")
                      : item.kegiatan}
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {item.lokasi || "-"}
                  </td>
                  <td className="px-4 py-3 text-gray-400">
                    {item.waktu}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ================= MAIN COMPONENT =================
export default function VisiMisiDesa() {
  const [openIndex, setOpenIndex] = useState(0);

  const { visi, misi } = data.visi_misi;
  const programData =
    data.program_dan_kegiatan_indikatif_desa_buahdua_2020_2028;

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* HEADER SECTION */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Visi & Misi Desa
          </h1>
          <p className="text-blue-600 font-medium italic">
            RPJM Desa Buahdua 2020 - 2028
          </p>
        </div>

        {/* VISI SECTION */}
        <div className="relative overflow-hidden bg-blue-600 p-8 md:p-12 rounded-[2.5rem] shadow-xl text-white text-center">
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-2xl mb-4 shadow-inner">
              <Target size={28} />
            </div>

            <h2 className="text-xl font-bold uppercase tracking-widest opacity-80 mb-4">
              Visi Desa
            </h2>

            <p className="text-2xl md:text-3xl font-extrabold leading-tight">
              “{visi}”
            </p>
          </div>

          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
        </div>

        {/* MISI SECTION */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 px-4 mb-2">
            <Lightbulb className="text-amber-500" />
            <h2 className="text-xl font-bold text-gray-800">
              Misi Strategis
            </h2>
          </div>

          {misi.map((teksMisi, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl transition-all border ${
                openIndex === index
                  ? "border-blue-200 shadow-md"
                  : "border-gray-100 shadow-sm"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-colors ${
                      openIndex === index
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </span>

                  <span
                    className={`font-bold ${
                      openIndex === index
                        ? "text-blue-700"
                        : "text-gray-700"
                    }`}
                  >
                    Misi Ke-{index + 1}
                  </span>
                </div>

                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform ${
                    openIndex === index
                      ? "rotate-180 text-blue-600"
                      : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-10 pb-8 text-gray-600 leading-relaxed text-lg border-t border-gray-50 pt-6">
                  {teksMisi}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PROGRAM INDIKATIF SECTION */}
        <div className="space-y-8 pt-6">
          <div className="flex items-center gap-3 px-4 border-l-4 border-blue-600">
            <ClipboardList className="text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Program Kerja Indikatif
            </h2>
          </div>

          {/* Bidang A */}
          <RenderProgramTable
            title="Penyelenggaraan Pemerintahan Desa"
            Icon={ShieldCheck}
            color="text-blue-600"
            items={programData.bidang_a_penyelenggaraan_pemerintah_desa}
          />

          {/* Bidang B - Pendidikan */}
          <RenderProgramTable
            title="Pembangunan Desa (Pendidikan)"
            Icon={Construction}
            color="text-green-600"
            items={
              programData.bidang_b_pembangunan.sub_bidang_pendidikan
            }
          />

          {/* Bidang B - Kesehatan */}
          <RenderProgramTable
            title="Pembangunan Desa (Kesehatan)"
            Icon={Construction}
            color="text-green-600"
            items={
              programData.bidang_b_pembangunan.sub_bidang_kesehatan
            }
          />

          {/* Bidang B - Pekerjaan Umum */}
          <RenderProgramTable
            title="Pembangunan Desa (Pekerjaan Umum & Penataan Ruang)"
            Icon={Construction}
            color="text-green-600"
            items={
              programData.bidang_b_pembangunan
                .sub_bidang_pekerjaan_umum_dan_penataan_ruang
            }
          />

          {/* Bidang B - Kawasan Pemukiman */}
          <RenderProgramTable
            title="Pembangunan Desa (Kawasan Pemukiman)"
            Icon={Construction}
            color="text-green-600"
            items={
              programData.bidang_b_pembangunan
                .sub_bidang_kawasan_pemukiman
            }
          />

          {/* Bidang C */}
          <RenderProgramTable
            title="Pembinaan Kemasyarakatan"
            Icon={Users}
            color="text-purple-600"
            items={programData.bidang_c_pembinaan_kemasyarakatan}
          />
        </div>

        <div className="text-center text-gray-400 text-sm italic pt-6 border-t border-gray-100">
          * Dasar dari manajemen inovasi adalah kreativitas untuk
          pengembangan desa yang berkesinambungan.
        </div>
      </div>
    </div>
  );
}
