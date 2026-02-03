import { useState } from "react";
import data from "../../data/profilDesa.json";
import { ChevronDown } from "lucide-react";

export default function VisiMisiDesa() {
  const [openIndex, setOpenIndex] = useState(null);
  const { visi, misi } = data.visiMisi;

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 space-y-10">

      {/* ===== JUDUL ===== */}
      <div className="text-center space-y-1">
        <h1 className="text-xl font-semibold">
          Visi dan Misi Desa Buahdua
        </h1>
        <p className="text-sm text-gray-500">
          RPJM Desa
        </p>
      </div>

      {/* ===== VISI ===== */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
        <h2 className="font-semibold text-blue-700 mb-3">
          Visi Desa
        </h2>
        <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
          “{visi}”
        </p>
      </div>

      {/* ===== MISI ===== */}
      <div className="space-y-4">
        <h2 className="font-semibold text-center">
          Misi Desa
        </h2>

        {misi.map((item, index) => (
          <div
            key={item.id}
            className="border rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left text-sm font-medium bg-gray-50 hover:bg-gray-100 transition"
            >
              <span>Misi {item.id}</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="p-4 text-sm text-gray-700 leading-relaxed bg-white">
                {item.isi}
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
