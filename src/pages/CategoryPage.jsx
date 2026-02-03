import { useMemo } from "react";
import { useParams } from "react-router-dom";
import UMKMCarousel from "../components/Organisms/UMKMCarousel";
import umkmProductsData from "../data/umkmProducts.json";
import umkmServicesData from "../data/umkmServices.json";

export default function CategoryPage() {
  const { category = "all" } = useParams();

  const filteredProducts = useMemo(() => {
    if (category === "all") {
      return [...umkmProductsData, ...umkmServicesData];
    } else {
      return [
        ...umkmProductsData.filter(p => p.category === category),
        ...umkmServicesData.filter(s => s.category === category),
      ];
    }
  }, [category]);

  const title =
    category === "all"
      ? "Semua UMKM"
      : `Kategori: ${category.charAt(0).toUpperCase() + category.slice(1)}`;

  return (
    <>
      <section className="px-8 md:px-20 py-8 bg-white">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
          {title}
        </h2>
      </section>

      <UMKMCarousel products={filteredProducts} />
    </>
  );
}
