import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function User2() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Overlay Mobile */}
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
            <img
              src="./src/assets/Logo Kejaksaan.png"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="text-black">
              <h1 className="text-base md:text-lg font-semibold leading-tight">
                Kejaksaan Negeri
              </h1>
              <h2 className="text-xl md:text-2xl font-bold">Bandar Lampung</h2>
            </div>
          </div>

          {/* Hamburger Mobile */}
          <div className="md:hidden absolute right-4 top-3 z-50">
            <button onClick={() => setIsMenuOpen(true)}>
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex flex-row items-center space-x-10">
            <a href="/User1" className="text-black font-medium">Home</a>
            <span className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white">
              Template Surat
            </span>
            <a href="/User3" className="text-black font-medium">Surat M/K</a>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">
              User
            </button>
          </nav>
        </div>

        <div className="bg-green-500 h-12" />
      </header>

      {/* Sidebar Mobile */}
      <nav
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-green-600 font-semibold text-lg">MENU</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="flex flex-col p-6 gap-4">
          <a href="/User1" className="text-black font-medium text-base">Home</a>
          <span className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white">Template Surat</span>
          <a href="/User3" className="text-black font-medium text-base">Surat M/K</a>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full font-bold">
            User
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 md:px-8 py-10 text-center">
        <h2 className="font-bold text-base md:text-lg mb-10">“Template Surat”</h2>

        <div className="flex justify-center">
          <button onClick={() => navigate("/TSU1")} className="w-full max-w-lg">
            <div className="bg-gray-300 rounded-lg shadow hover:shadow-xl transition">
              <img
                src="./src/assets/Gambar Surat 1.png"
                alt="Template Surat"
                className="h-72 w-full object-contain rounded-t-lg"
              />
              <div className="h-24 flex items-center justify-center rounded-b-lg">
                <p className="font-bold text-lg">Lihat Template Surat</p>
              </div>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}
