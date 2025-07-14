import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function ISM2() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className="bg-green-500 text-white z-50 relative">
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

          {/* Hamburger (mobile) */}
          <div className="md:hidden absolute top-3 right-4 z-50">
            <button onClick={() => setMenuOpen(true)} className="text-black">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/DashboardAdmin1" className="text-black font-medium text-sm">Home</a>
            <a href="/DashboardAdmin2" className="text-black font-medium text-sm">Template Surat</a>
            <a href="#" className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white">
              Surat M/K
            </a>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">Admin</button>
          </nav>
        </div>
        <div className="bg-green-500 h-12" />
      </header>

      {/* Sidebar (mobile) */}
      <nav
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h1 className="text-green-600 font-bold text-sm">MENU</h1>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="flex flex-col px-6 py-4 gap-3">
          <a href="/DashboardAdmin1" className="text-black text-sm font-medium">Home</a>
          <a href="/DashboardAdmin2" className="text-black text-sm font-medium">Template Surat</a>
          <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold w-full text-left">
            Surat M/K
          </a>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full font-bold w-full text-left">
            Admin
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="px-4 md:px-10 pt-10 pb-10">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white border-4 border-black rounded-lg p-8 md:p-10 shadow-lg w-full max-w-md text-center">
            <h1 className="text-xl md:text-2xl font-bold mb-6">Berhasil Disimpan!</h1>

            <div className="flex justify-center mb-6">
              <div className="bg-red-500 rounded-full p-4">
                <span className="text-white text-3xl">✔️</span>
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
