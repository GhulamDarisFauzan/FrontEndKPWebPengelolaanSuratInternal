import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install dengan: npm install lucide-react

export default function DashboardAdmin1() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Overlay ketika menu terbuka */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className="bg-green-500 text-white z-50 relative">
        <div className="bg-green-500 h-12" />

        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 bg-white gap-4 md:gap-0 relative z-50">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src="./src/assets/Logo Kejaksaan.png" alt="Logo" className="w-12 h-12" />
            <div className="text-black">
              <h1 className="text-base md:text-lg font-semibold">Kejaksaan Negeri</h1>
              <h2 className="text-xl md:text-2xl font-bold">Bandar Lampung</h2>
            </div>
          </div>

          {/* Icon Hamburger Mobile */}
          <div className="md:hidden absolute right-4 top-3 z-50">
            <button onClick={() => setIsMenuOpen(true)}>
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex flex-row items-center space-x-10">
            <a href="#" className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white">
              Home
            </a>
            <a href="/DashboardAdmin2" className="text-black font-medium text-sm md:text-base">
              Template Surat
            </a>
            <a href="/DashboardAdmin3" className="text-black font-medium text-sm md:text-base">
              Surat M/K
            </a>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">
              Admin
            </button>
          </nav>
        </div>
        <div className="bg-green-500 h-12" />
      </header>

      {/* Menu Mobile (Slide dari kanan) */}
      <nav
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Header menu */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span
            onClick={() => setIsMenuOpen(false)}
            className="text-green-600 font-semibold cursor-pointer text-lg"
          >
            MENU
          </span>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Isi menu */}
        <div className="flex flex-col p-6 gap-4">
          <a href="#" className="bg-green-500 px-4 py-2 rounded-full text-sm font-semibold text-white w-full text-left">
            Home
          </a>
          <a href="/DashboardAdmin2" className="text-black font-medium text-base w-full text-left">
            Template Surat
          </a>
          <a href="/DashboardAdmin3" className="text-black font-medium text-base w-full text-left">
            Surat M/K
          </a>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full font-bold w-full text-left">
            Admin
          </button>
        </div>
      </nav>

      {/* Konten Utama */}
      <main className="px-4 md:px-8 py-10 text-center">
        <h2 className="font-bold text-base md:text-lg mb-10">
          “Selamat Datang di Website Surat Divisi Intelijen”
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Template Surat */}
          <button onClick={() => navigate("/DashboardAdmin2")} className="w-full">
            <img
              src="./src/assets/Gambar Surat 1.png"
              alt="Template Surat"
              className="h-64 md:h-72 w-full object-contain bg-gray-300 rounded-t"
            />
            <div className="bg-gray-300 h-20 md:h-24 flex items-center justify-center rounded-b shadow">
              <p className="font-bold text-sm md:text-base">Template Surat</p>
            </div>
          </button>

          {/* Surat Masuk */}
          <button onClick={() => navigate("/LSA1")} className="w-full">
            <img
              src="./src/assets/Gambar Surat 2.png"
              alt="Surat Masuk"
              className="h-64 md:h-72 w-full object-contain bg-gray-300 rounded-t"
            />
            <div className="bg-gray-300 h-20 md:h-24 flex items-center justify-center rounded-b shadow">
              <p className="font-bold text-sm md:text-base">Surat Masuk</p>
            </div>
          </button>

          {/* Surat Keluar */}
          <button onClick={() => navigate("/LSA2")} className="w-full">
            <img
              src="./src/assets/Gambar Surat 3.png"
              alt="Surat Keluar"
              className="h-64 md:h-72 w-full object-contain bg-gray-300 rounded-t"
            />
            <div className="bg-gray-300 h-20 md:h-24 flex items-center justify-center rounded-b shadow">
              <p className="font-bold text-sm md:text-base">Surat Keluar</p>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}
