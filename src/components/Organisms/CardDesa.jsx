import data from "../../data/desa.json";
import kantorDesa from "../../assets/kantor-desa.jpg";

export default function CardDesa() {
  const { desa } = data;

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
        {/* Image Header */}
        <div className="relative">
          <img
            src={kantorDesa}
            alt="Kantor Desa Buahdua"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              {desa.nama}
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Kecamatan {desa.kecamatan}, Kabupaten {desa.kabupaten}
            </p>
          </div>

          {/* Divider */}
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>

          {/* Slogan */}
          <div className="text-center">
            <p className="text-xl text-blue-700 font-semibold italic">
              “{desa.slogan}”
            </p>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-center text-lg">
              {desa.deskripsi}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
