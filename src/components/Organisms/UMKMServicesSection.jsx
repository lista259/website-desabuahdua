import React, { useState } from "react";
import ProductCard from "../molecules/ProductCard";
import umkmServicesData from "../../data/umkmServices.json";

export default function UMKMServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = umkmServicesData;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 5 >= services.length ? 0 : prevIndex + 5
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 5 < 0 ? Math.max(0, services.length - 5) : prevIndex - 5
    );
  };

  const visibleServices = services.slice(currentIndex, currentIndex + 5);

  return (
    <section className="px-6 md:px-16 pt-12 pb-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Cari UMKM yang Kamu Butuhkan Di Sini
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Temukan berbagai jasa dan layanan dari UMKM lokal terpercaya untuk memenuhi kebutuhan Anda.
        </p>
      </div>

      <div className="relative">
        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {visibleServices.map((service) => (
            <ProductCard key={service.id} product={service} />
          ))}
        </div>

        {/* Tombol Navigasi */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:scale-110 transition-all disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:scale-110 transition-all disabled:opacity-50"
          disabled={currentIndex + 5 >= services.length}
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {Array.from({ length: Math.ceil(services.length / 5) }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * 5)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                i === Math.floor(currentIndex / 5)
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