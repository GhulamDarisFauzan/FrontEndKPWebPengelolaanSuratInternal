import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ISM2() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white">
        <div className="bg-green-500 h-12" />
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-3 bg-white gap-4 relative">
          <div className="flex items-center space-x-4">
            <img
              src="./src/assets/Logo Kejaksaan.png"
              alt="Logo"
              className="w-12 h-12"
            />
            <div className="text-black text-center md:text-left">
              <h1 className="text-lg font-semibold">Kejaksaan Negeri</h1>
              <h2 className="text-xl md:text-2xl font-bold">Bandar Lampung</h2>
            </div>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden absolute top-0 right-0 mt-2 mr-4 text-2xl text-black"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap justify-center md:justify-end items-center gap-4">
            <a href="/DashboardAdmin1" className="text-black font-medium text-sm">
              Home
            </a>
            <a href="/DashboardAdmin2" className="text-black font-medium text-sm">
              Template Surat
            </a>
            <a
              href="#"
              className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white"
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
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-green-600 font-bold text-lg">MENU</h2>
            <button onClick={() => setMenuOpen(false)} className="text-xl font-bold">×</button>
          </div>
          <ul className="space-y-4">
            <li>
              <a href="/DashboardAdmin1" className="text-black text-sm font-medium">Home</a>
            </li>
            <li>
              <a href="/DashboardAdmin2" className="text-black text-sm font-medium">Template Surat</a>
            </li>
            <li>
              <a href="#" className="block bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full text-center">
                Surat M/K
              </a>
            </li>
            <li>
              <button className="w-full bg-black text-white text-sm px-4 py-1 rounded-full font-bold">
                Admin
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Content */}
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
