import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function TSA2() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Overlay saat sidebar aktif */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className="bg-green-500 text-white z-50 relative">
        <div className="bg-green-500 h-12" />
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 bg-white gap-4 relative z-50">
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
            <button onClick={() => setMenuOpen(true)}>
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex flex-row items-center space-x-10 text-sm">
            <a href="/DashboardAdmin1" className="text-black font-medium">Home</a>
            <a href="#" className="bg-green-500 px-4 py-1 rounded-full text-white font-semibold">Template Surat</a>
            <a href="/DashboardAdmin3" className="text-black font-medium">Surat M/K</a>
            <button className="bg-black text-white px-4 py-1 rounded-full font-bold">Admin</button>
          </nav>
        </div>
        <div className="bg-green-500 h-12" />
      </header>

      {/* Menu Mobile (Slide dari kanan) */}
      <nav
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Header menu */}
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

        {/* Isi menu */}
        <div className="flex flex-col p-6 gap-4">
          <a href="/DashboardAdmin1" className="text-black text-base">Home</a>
          <a href="#" className="bg-green-500 px-4 py-2 rounded-full text-sm font-semibold text-white">Template Surat</a>
          <a href="/DashboardAdmin3" className="text-black text-base">Surat M/K</a>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full font-bold">Admin</button>
        </div>
      </nav>

      {/* Konten Utama */}
      <main className="px-4 md:px-8 pt-4 pb-10">
        <div className="flex flex-col items-center mt-16 mb-10">
          <div className="bg-white border-4 border-black rounded-lg p-6 md:p-10 shadow-lg text-center w-full max-w-md">
            <h1 className="text-xl font-bold mb-6">Berhasil disimpan !</h1>
            <div className="flex justify-center mb-6">
              <div className="bg-red-500 rounded-full p-4">
                <span className="text-white text-4xl">✔️</span>
              </div>
            </div>
            <button
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold"
              onClick={() => navigate("/DashboardAdmin1")}
            >
              Kembali ke Menu
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
