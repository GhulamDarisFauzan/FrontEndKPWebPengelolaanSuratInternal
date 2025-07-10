import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditSM() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white">
        <div className="bg-green-500 h-12" />
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-3 bg-white space-y-4 md:space-y-0 relative">
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

          {/* Hamburger icon (mobile) */}
          <button
            className="md:hidden absolute top-0 right-0 mt-2 mr-4 text-2xl text-black"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

          {/* Menu (desktop) */}
          <nav className="hidden md:flex flex-wrap justify-center md:justify-end items-center space-x-4 md:space-x-8">
            <a href="/DashboardAdmin1" className="text-black font-medium text-sm">Home</a>
            <a href="/DashboardAdmin2" className="text-black font-medium text-sm">Template Surat</a>
            <a href="#" className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white">Surat M/K</a>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">Admin</button>
          </nav>
        </div>
        <div className="bg-green-500 h-12" />
      </header>

      {/* Sidebar (mobile) */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-green-600 font-bold text-lg">MENU</h2>
            <button onClick={() => setMenuOpen(false)} className="text-xl font-bold">
              ×
            </button>
          </div>
          <ul className="space-y-4">
            <li>
              <a href="/DashboardAdmin1" className="text-black text-sm font-medium">Home</a>
            </li>
            <li>
              <a href="/DashboardAdmin2" className="text-black text-sm font-medium">Template Surat</a>
            </li>
            <li>
              <a href="#" className="block bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full text-center">Surat M/K</a>
            </li>
            <li>
              <button className="w-full bg-black text-white text-sm px-4 py-1 rounded-full font-bold">Admin</button>
            </li>
          </ul>
        </div>
      )}

      {/* Content */}
      <main className="px-4 md:px-10 pt-4 pb-10">
        <div className="bg-gray-100 px-4 md:px-10 pt-4 pb-8">
          {/* Judul dan tombol */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 gap-2">
            <h1 className="text-2xl text-red-600 font-bold border-b-4 border-black pb-1">
              Surat Masuk
            </h1>

            <h2 className="text-center font-bold text-black text-sm md:text-base">
              “Masukkan Surat Masuk”
            </h2>

            <div>
              <a href="/BerhasilEditSM">
                <button className="bg-black text-white px-4 py-1 rounded-full font-semibold">
                  Simpan
                </button>
              </a>
            </div>
          </div>

          {/* Form Input */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-800 mb-1">Nama Surat</label>
                <input
                  type="text"
                  className="w-full border border-gray-400 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-800 mb-1">Tanggal:</label>
                <input
                  type="date"
                  className="w-full border border-gray-400 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-800 mb-1">Keterangan:</label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-400 rounded px-3 py-2"
                ></textarea>
              </div>
            </div>

            {/* Upload File */}
            <div className="flex justify-center items-center">
              <div className="bg-gray-300 w-full max-w-sm h-60 flex items-center justify-center rounded-md">
                <button className="bg-gray-500 text-white px-4 py-2 rounded shadow">
                  Upload File
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
