import { useMemo } from "react";
import { useParams } from "react-router-dom";
import UMKMCarousel from "../components/Organisms/UMKMCarousel";
import CategorySection from "../components/molecules/Filter";
import SearchBar from "../components/molecules/SearchBar";
import umkmProductsData from "../data/umkmProducts.json";

export default function UMKM() {
  const { category } = useParams();

  const filteredProducts = useMemo(() => {
    if (!category || category === "all") {
      return [...umkmProductsData];
    }

    return [
      ...umkmProductsData.filter(p => p.category === category),
    ];
  }, [category]);

  return (
    <>
      <SearchBar />
      <CategorySection />
      <UMKMCarousel products={filteredProducts} />
    </>
  );
}
