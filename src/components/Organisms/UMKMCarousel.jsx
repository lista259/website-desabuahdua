import React, { useState } from "react";
import ProductCard from "../molecules/ProductCard";

export default function UMKMCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerSlide = 5;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= products.length ? 0 : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerSlide < 0
        ? (totalSlides - 1) * itemsPerSlide
        : prevIndex - itemsPerSlide
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerSlide);

  return (
    <section className="px-6 md:px-16 pt-12 pb-16 bg-white">
      <div className="text-center mb-12">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Temukan produk dan jasa terbaik dari pelaku UMKM lokal pilihan masyarakat.
        </p>
      </div>

      <div className="relative">
        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Tombol Navigasi */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:scale-110 transition-all disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:scale-110 transition-all disabled:opacity-50"
          disabled={currentIndex + itemsPerSlide >= products.length}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * itemsPerSlide)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                i === Math.floor(currentIndex / itemsPerSlide)
                  ? "bg-[#4BA0E0] scale-110 shadow-md"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}