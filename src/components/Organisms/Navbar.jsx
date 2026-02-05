import { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "../molecules/SearchBar";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const closeTimer = useRef(null);

  const baseLink = "transition pb-1 font-medium";
  const activeLink = "text-blue-600 border-b-2 border-blue-600";
  const inactiveLink = "text-gray-600 hover:text-blue-600";

  const dropdownClass =
    "absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border z-50";

  const itemClass =
    "block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600";

  const openMenu = (name) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 400);
  };

  const toggleMobileDropdown = (name) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-semibold text-blue-600 text-lg">
              Desa Buahdua
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              Beranda
            </NavLink>

            {/* PROFIL DESA */}
            <div
              className="relative"
              onMouseEnter={() => openMenu("pemerintahan")}
              onMouseLeave={closeMenu}
            >
              <button className={`${baseLink} ${inactiveLink} flex items-center gap-1`}>
                Profil Desa <span className="text-xs">▾</span>
              </button>

              {openDropdown === "pemerintahan" && (
                <div
                  className={dropdownClass}
                  onMouseEnter={() => openMenu("pemerintahan")}
                  onMouseLeave={closeMenu}
                >
                  <Link to="/pemerintahan-desa/perkenalan" className={itemClass}>Mengenal Desa Buahdua</Link>
                  <Link to="/pemerintahan-desa/visi-misi" className={itemClass}>Visi & Misi</Link>
                  <Link to="/pemerintahan-desa/sejarah" className={itemClass}>Sejarah Desa Buahdua</Link>
                  <Link to="/pemerintahan-desa/perangkat" className={itemClass}>Struktur Pemerintahan</Link>
                </div>
              )}
            </div>

            <NavLink
              to="/layanan-desa"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              Layanan Desa
            </NavLink>

            {/* POTENSI DESA */}
            <div
              className="relative"
              onMouseEnter={() => openMenu("potensi")}
              onMouseLeave={closeMenu}
            >
              <button className={`${baseLink} ${inactiveLink} flex items-center gap-1`}>
                Potensi Desa <span className="text-xs">▾</span>
              </button>

              {openDropdown === "potensi" && (
                <div
                  className={dropdownClass}
                  onMouseEnter={() => openMenu("potensi")}
                  onMouseLeave={closeMenu}
                >
                  <Link to="/potensi-desa/umkm" className={itemClass}>UMKM</Link>
                  <Link to="/potensi-desa/budaya" className={itemClass}>Budaya</Link>
                  <Link to="/potensi-desa/peternakan" className={itemClass}>Peternakan</Link>
                  <Link to="/potensi-desa/pertanian" className={itemClass}>Pertanian</Link>
                </div>
              )}
            </div>

            {/* ✅ LEMBAGA DESA TANPA DROPDOWN */}
            <NavLink
              to="/lembaga-desa"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              Lembaga Desa
            </NavLink>

          </nav>

          {/* HAMBURGER BUTTON */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t">
            <nav className="px-6 py-4 space-y-4">

              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `block py-2 font-medium ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`
                }
                onClick={closeMobileMenu}
              >
                Beranda
              </NavLink>

              {/* PROFIL DESA MOBILE */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 font-medium text-gray-600 hover:text-blue-600"
                  onClick={() => toggleMobileDropdown("profil")}
                >
                  Profil Desa
                  <span className={`transform transition-transform ${openMobileDropdown === "profil" ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>

                {openMobileDropdown === "profil" && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/pemerintahan-desa/perkenalan" className="block py-1 text-sm text-gray-600 hover:text-blue-600" onClick={closeMobileMenu}>Mengenal Desa Buahdua</Link>
                    <Link to="/pemerintahan-desa/visi-misi" className="block py-1 text-sm text-gray-600 hover:text-blue-600" onClick={closeMobileMenu}>Visi & Misi</Link>
                    <Link to="/pemerintahan-desa/sejarah" className="block py-1 text-sm text-gray-600 hover:text-blue-600" onClick={closeMobileMenu}>Sejarah Desa Buahdua</Link>
                    <Link to="/pemerintahan-desa/perangkat" className="block py-1 text-sm text-gray-600 hover:text-blue-600" onClick={closeMobileMenu}>Struktur Pemerintahan</Link>
                  </div>
                )}
              </div>

              <NavLink
                to="/layanan-desa"
                className={({ isActive }) =>
                  `block py-2 font-medium ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`
                }
                onClick={closeMobileMenu}
              >
                Layanan Desa
              </NavLink>

              {/* POTENSI DESA MOBILE */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 font-medium text-gray-600 hover:text-blue-600"
                  onClick={() => toggleMobileDropdown("potensi")}
                >
                  Potensi Desa
                  <span className={`transform transition-transform ${openMobileDropdown === "potensi" ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>

                {openMobileDropdown === "potensi" && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link to="/potensi-desa/umkm" className="block py-1 text-sm text-gray-600 hover:text-blue-600" onClick={closeMobileMenu}>UMKM</Link>
                    <Link to="/potensi-desa/budaya" className="block py-1 text-sm text-gray-600 hover:text-blue-600" onClick={closeMobileMenu}>Budaya</Link>
                    <Link to="/potensi-desa/peternakan" className="block py-1 text-sm text-gray-600 hover:text-blue-600" onClick={closeMobileMenu}>Peternakan</Link>
                    <Link to="/potensi-desa/pertanian" className="block py-1 text-sm text-gray-600 hover:text-blue-600" onClick={closeMobileMenu}>Pertanian</Link>
                  </div>
                )}
              </div>

              
              <NavLink
                to="/lembaga-desa"
                className={({ isActive }) =>
                  `block py-2 font-medium ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`
                }
                onClick={closeMobileMenu}
              >
                Lembaga Desa
              </NavLink>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
