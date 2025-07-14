import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function LSMK1() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className="bg-green-500 text-white z-50 relative">
        <div className="bg-green-500 h-12" />
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 bg-white gap-4 md:gap-0 relative z-50">
          <div className="flex items-center space-x-4">
            <img
              src="./src/assets/Logo Kejaksaan.png"
              alt="Logo"
              className="w-12 h-12"
            />
            <div className="text-black">
              <h1 className="text-base md:text-lg font-semibold">Kejaksaan Negeri</h1>
              <h2 className="text-xl md:text-2xl font-bold">Bandar Lampung</h2>
            </div>
          </div>

          {/* Hamburger Mobile */}
          <div className="md:hidden absolute top-3 right-4 z-50">
            <button onClick={() => setMenuOpen(true)}>
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>

          {/* Nav Desktop */}
          <nav className="hidden md:flex gap-4 text-sm items-center">
            <a href="/DashboardAdmin1" className="text-black font-medium">Home</a>
            <a href="/DashboardAdmin2" className="text-black font-medium">Template Surat</a>
            <a
              href="#"
              className="bg-green-500 px-4 py-1 rounded-full text-white font-semibold hover:bg-green-600"
            >
              Surat M/K
            </a>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">
              Admin
            </button>
          </nav>
        </div>
        <div className="bg-green-500 h-12" />
      </header>

      {/* Sidebar Mobile */}
      <nav
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span
            onClick={() => setMenuOpen(false)}
            className="text-green-600 font-semibold cursor-pointer text-lg"
          >
            MENU
          </span>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="flex flex-col p-6 gap-4">
          <a href="/DashboardAdmin1" className="text-black font-medium text-base w-full text-left">
            Home
          </a>
          <a href="/DashboardAdmin2" className="text-black font-medium text-base w-full text-left">
            Template Surat
          </a>
          <a href="#" className="bg-green-500 px-4 py-2 rounded-full text-sm font-semibold text-white w-full text-left">
            Surat M/K
          </a>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full font-bold w-full text-left">
            Admin
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="px-4 sm:px-8 py-10 text-center">
        <h2 className="font-bold text-lg sm:text-xl mb-10">“Lihat Surat Masuk & Keluar”</h2>

        <div className="w-full pt-6">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {/* Card - Surat Masuk */}
            <button
              onClick={() => navigate("/LSA1")}
              className="w-full focus:outline-none"
            >
              <div className="bg-gray-300 rounded shadow hover:shadow-lg transition">
                <img
                  src="./src/assets/Gambar Surat 2.png"
                  alt="Lihat Surat Masuk"
                  className="h-64 sm:h-72 w-full object-contain rounded-t"
                />
                <div className="h-20 sm:h-24 flex items-center justify-center rounded-b">
                  <p className="font-bold text-base sm:text-lg">Lihat Surat Masuk</p>
                </div>
              </div>
            </button>

            {/* Card - Surat Keluar */}
            <button
              onClick={() => navigate("/LSA2")}
              className="w-full focus:outline-none"
            >
              <div className="bg-gray-300 rounded shadow hover:shadow-lg transition">
                <img
                  src="./src/assets/Gambar Surat 3.png"
                  alt="Lihat Surat Keluar"
                  className="h-64 sm:h-72 w-full object-contain rounded-t"
                />
                <div className="h-20 sm:h-24 flex items-center justify-center rounded-b">
                  <p className="font-bold text-base sm:text-lg">Lihat Surat Keluar</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
