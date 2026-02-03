
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/umkm/${product.id}`}
      className="block bg-white border border-black rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 w-full flex md:flex-col flex-row"
    >
      {/* Gambar produk */}
      <div className="md:h-40 md:w-full h-20 w-20 flex items-center justify-center bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="md:w-28 md:h-28 w-16 h-16 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Detail produk */}
      <div className="md:p-4 p-2 text-center text-black md:text-center text-left md:ml-0 ml-2">
        <h3 className="text-base font-semibold mb-1 truncate">{product.name}</h3>
        <p className="text-sm font-medium mb-1">
          {product.price}
          {product.discount && (
            <span className="text-xs text-red-600 font-semibold ml-1">
              ({product.discount}% off)
            </span>
          )}
        </p>
        {product.location && (
          <p className="text-xs text-black opacity-90">{product.location}</p>
        )}
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    discount: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};
