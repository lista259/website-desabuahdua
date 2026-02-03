import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Semua", icon: "/src/assets/Filter/All.webp", value: "all" },
  { name: "Makanan", icon: "/src/assets/Filter/Food.webp", value: "makanan" },
  { name: "Minuman", icon: "/src/assets/Filter/Drink.webp", value: "minuman" },
  { name: "Jasa", icon: "/src/assets/Filter/Service.webp", value: "jasa" },
];

export default function CategorySection() {
  const navigate = useNavigate();

  const handleCategoryClick = (value) => {
    if (value === "all") {
      navigate("/potensi-desa/umkm");
    } else {
      navigate(`/potensi-desa/umkm/${value}`);
    }
  };

  return (
    <section className="py-2">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
          Kategori UMKM
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleCategoryClick(cat.value)}
              className="flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              {/* Gambar kategori bulat penuh */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-gray-300">
                <img
                  src={cat.icon}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-3 font-semibold text-gray-800 text-sm sm:text-base">
                {cat.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}