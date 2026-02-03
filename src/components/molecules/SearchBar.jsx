import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import { Search } from "lucide-react";
import umkmProductsData from "../../data/umkmProducts.json";

export default function SearchBar({ mobile = false }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const allItems = [...umkmProductsData];
    const filtered = allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );
    // Remove duplicates based on id
    const uniqueFiltered = filtered.filter((item, index, self) =>
      index === self.findIndex((t) => t.id === item.id)
    );
    setSearchResults(uniqueFiltered);
    setShowResults(true);
  };

  const handleResultClick = (item) => {
    navigate(`/umkm/${item.id}`);
    setShowResults(false);
    setSearchQuery("");
  };

  return (
    <div
      className={`flex items-center gap-2 ${
        mobile ? "px-4 w-full" : ""
      } relative`}
    >
      <div className="relative w-full md:w-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Cari nama toko atau menu..."
          className={`${
            mobile ? "w-48 pr-8" : "w-56"
          } bg-white px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4BA0E0]`}
        />
        {mobile && (
          <Search
            className="absolute right-3 top-2.5 text-gray-400"
            size={18}
          />
        )}
        {showResults && searchResults.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            {searchResults.map((item) => (
              <div
                key={item.id}
                onClick={() => handleResultClick(item)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
              >
                <div className="font-medium text-gray-900">{item.name}</div>
                <div className="text-sm text-gray-600">{item.category} • {item.location}</div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}