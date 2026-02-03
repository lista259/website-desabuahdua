import { useParams } from "react-router-dom";
import data from "../../data/umkmProducts.json";
import { Star, MapPin } from "lucide-react";

export default function UMKMDetail() {
  const { id } = useParams();
  const umkm = data.find((item) => item.id === parseInt(id));

  if (!umkm) {
    return (
      <div className="p-10 text-center text-gray-500">
        UMKM tidak ditemukan
      </div>
    );
  }

  const waLink = `https://wa.me/${umkm.contact?.replace(/\D/g, "")}`;

  return (
    <section className="max-w-6xl mx-auto px-4 pb-24 space-y-8">

      {/* ===== FOTO TOKO + MAPS ===== */}
      <div className="grid grid-cols-2 gap-3">
        <div className="h-32 sm:h-36 rounded-xl overflow-hidden bg-gray-200">
          <img
            src={umkm.image}
            alt={umkm.name}
            className="w-full h-full object-cover"
          />
        </div>

        <iframe
          title="maps"
          className="w-full h-32 sm:h-36 rounded-xl border"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            umkm.location
          )}&output=embed`}
          loading="lazy"
        />
      </div>

      {/* ===== INFO TOKO ===== */}
      <div className="space-y-1">
        <h1 className="text-lg font-semibold">{umkm.name}</h1>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <MapPin size={12} />
          <span>{umkm.location}</span>
        </div>

        <div className="flex items-center gap-1 text-xs">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="font-medium">4.6</span>
          <span className="text-gray-400">(120 ulasan)</span>
        </div>
      </div>

      {/* ===== DESKRIPSI TOKO ===== */}
      <div>
        <h2 className="font-semibold mb-2">Deskripsi Toko</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          {umkm.description}
        </p>
      </div>

      {/* ===== MENU ===== */}
      {umkm.menu && (
        <div>
          <h2 className="font-semibold mb-3">Menu</h2>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {umkm.menu.map((item, index) => (
              <div
                key={index}
                className="min-w-[120px] flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gray-200 mb-2 overflow-hidden">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <p className="text-sm font-medium leading-tight">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== SUASANA TOKO ===== */}
      <div>
        <h2 className="font-semibold mb-3">Suasana Toko</h2>

        <div className="flex gap-4 overflow-x-auto">
          {(umkm.gallery?.length ? umkm.gallery : [1, 2, 3]).map((img, index) => (
            <div
              key={index}
              className="min-w-[180px] h-28 rounded-xl bg-gray-200 overflow-hidden"
            >
              {typeof img === "string" && (
                <img
                  src={img}
                  alt="Suasana toko"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== CATATAN PELANGGAN ===== */}
      <div>
        <h2 className="font-semibold mb-3">Catatan Pelanggan</h2>

        <div className="space-y-3">
          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-700">
              “Mie ayam enak, tapi porsinya kurang banyak.”
            </p>
            <span className="text-xs text-gray-400">Anonim</span>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-700">
              “Harga sesuai dan pelayanannya ramah.”
            </p>
            <span className="text-xs text-gray-400">Anonim</span>
          </div>

          <button className="text-sm text-blue-600 font-medium">
            Show more →
          </button>
        </div>
      </div>

      {/* ===== FLOATING WHATSAPP ===== */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg text-sm"
      >
        Chat WA
      </a>

    </section>
  );
}
