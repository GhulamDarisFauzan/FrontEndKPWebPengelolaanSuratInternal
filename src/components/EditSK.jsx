import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function EditSK() {
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
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-3 bg-white relative gap-4 md:gap-0">
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

          {/* Hamburger - Mobile */}
          <div className="md:hidden absolute right-4 top-3 z-50">
            <button onClick={() => setMenuOpen(true)} className="text-black">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Nav - Desktop */}
          <nav className="hidden md:flex flex-wrap items-center space-x-8">
            <a href="/DashboardAdmin1" className="text-black font-medium text-sm">
              Home
            </a>
            <a href="/DashboardAdmin2" className="text-black font-medium text-sm">
              Template Surat
            </a>
            <a href="#" className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white">
              Surat M/K
            </a>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">
              Admin
            </button>
          </nav>
        </div>
        <div className="bg-green-500 h-12" />
      </header>

      {/* Drawer - Mobile */}
      <nav className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}>
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h1 className="text-green-600 font-bold text-sm">MENU</h1>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="flex flex-col px-6 py-4 gap-3">
          <a href="/DashboardAdmin1" className="text-black text-sm font-medium w-full text-left">Home</a>
          <a href="/DashboardAdmin2" className="text-black text-sm font-medium w-full text-left">Template Surat</a>
          <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold w-full text-left">Surat M/K</a>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full font-bold w-full text-left">Admin</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 md:px-10 pt-4 pb-10">
        <div className="bg-gray-100 px-4 md:px-10 pt-4 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6">
            <h1 className="text-2xl text-red-600 font-bold border-b-4 border-black pb-1 mb-2 md:mb-0">
              Surat Keluar
            </h1>
            <h2 className="text-center font-bold text-black mb-2 md:mb-0">
              “Masukkan Surat Keluar”
            </h2>
            <div>
              <a href="/BerhasilEditSK">
                <button className="bg-black text-white px-4 py-1 rounded-full font-semibold">
                  Simpan
                </button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form Input */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-800 mb-1">Nama Surat</label>
                <input
                  type="text"
                  className="w-full border border-gray-400 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-1">Tanggal</label>
                <input
                  type="date"
                  className="w-full border border-gray-400 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-1">Keterangan</label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-400 rounded px-3 py-2"
                ></textarea>
              </div>
            </div>

            {/* Upload File */}
            <div className="flex justify-center items-center">
              <div className="bg-gray-300 w-full max-w-sm h-60 flex items-center justify-center rounded-md">
                <form
                  action="/upload"
                  method="POST"
                  encType="multipart/form-data"
                  className="flex flex-col items-center space-y-4"
                >
                  <label className="block text-gray-800 font-medium">Upload Template:</label>
                  <input type="file" name="file" className="text-sm" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
