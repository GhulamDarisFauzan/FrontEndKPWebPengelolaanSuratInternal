import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LSMK1() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white">
        <div className="bg-green-500 h-12" />
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-6 py-3 bg-white gap-4 relative">
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

          {/* Hamburger Mobile */}
          <div className="md:hidden absolute top-4 right-4">
            <button onClick={() => setMenuOpen(true)} className="text-2xl font-bold text-black">☰</button>
          </div>
        </div>
        <div className="bg-green-500 h-12" />
      </header>

      {/* Sidebar Mobile */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-green-600 font-bold text-lg">MENU</h2>
            <button onClick={() => setMenuOpen(false)} className="text-xl font-bold">×</button>
          </div>
          <ul className="space-y-4">
            <li><a href="/DashboardAdmin1" className="block text-black">Home</a></li>
            <li><a href="/DashboardAdmin2" className="block text-black">Template Surat</a></li>
            <li><a href="#" className="block font-bold text-green-600">Surat M/K</a></li>
            <li><button className="w-full bg-black text-white px-4 py-2 rounded-full">Admin</button></li>
          </ul>
        </div>
      )}

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
