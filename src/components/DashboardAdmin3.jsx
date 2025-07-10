import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DashboardAdmin3() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Overlay saat drawer aktif */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Header */}
      <header className="bg-green-500 text-white z-50 relative">
        <div className="bg-green-500 h-12" />
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 bg-white gap-4 md:gap-0 relative">
          {/* Logo */}
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

          {/* Hamburger Menu (mobile only) */}
          <div className="absolute right-4 top-3 md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Nav Desktop */}
          <nav className="hidden md:flex flex-row items-center space-x-10">
            <a href="/DashboardAdmin1" className="text-black font-medium text-sm md:text-base">
              Home
            </a>
            <a href="/DashboardAdmin2" className="text-black font-medium text-sm md:text-base">
              Template Surat
            </a>
            <a
              href="#"
              className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white hover:bg-green-600"
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

      {/* Drawer Menu - mobile */}
      <nav
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h1 className="text-green-600 font-bold text-sm">MENU</h1>
          <button onClick={() => setIsOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-6 py-4 gap-3">
          <a href="/DashboardAdmin1" className="text-black text-sm font-medium w-full text-left">
            Home
          </a>
          <a href="/DashboardAdmin2" className="text-black text-sm font-medium w-full text-left">
            Template Surat
          </a>
          <a
            href="#"
            className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold w-full text-left"
          >
            Surat M/K
          </a>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full font-bold w-full text-left">
            Admin
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="px-4 md:px-8 py-10 text-center">
        <h2 className="font-bold text-base md:text-lg mb-10">
          “Selamat Datang di Website Surat Divisi Intelijen”
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <button onClick={() => navigate("/LSMK1")} className="w-full">
            <div className="bg-gray-300 rounded shadow hover:shadow-lg transition">
              <img
                src="./src/assets/Gambar Surat 5.png"
                alt="Lihat Surat Masuk dan Keluar"
                className="h-64 md:h-72 w-full object-contain rounded-t"
              />
              <div className="h-20 md:h-24 flex items-center justify-center rounded-b">
                <p className="font-bold text-sm md:text-lg">Lihat Surat Masuk dan Keluar</p>
              </div>
            </div>
          </button>

          {/* Card 2 */}
          <button onClick={() => navigate("/ISM1")} className="w-full">
            <div className="bg-gray-300 rounded shadow hover:shadow-lg transition">
              <img
                src="./src/assets/Gambar Surat 6.png"
                alt="Input Surat Masuk"
                className="h-64 md:h-72 w-full object-contain rounded-t"
              />
              <div className="h-20 md:h-24 flex items-center justify-center rounded-b">
                <p className="font-bold text-sm md:text-lg">Input Surat Masuk</p>
              </div>
            </div>
          </button>

          {/* Card 3 */}
          <button onClick={() => navigate("/ISK1")} className="w-full">
            <div className="bg-gray-300 rounded shadow hover:shadow-lg transition">
              <img
                src="./src/assets/Gambar Surat 7.png"
                alt="Input Surat Keluar"
                className="h-64 md:h-72 w-full object-contain rounded-t"
              />
              <div className="h-20 md:h-24 flex items-center justify-center rounded-b">
                <p className="font-bold text-sm md:text-lg">Input Surat Keluar</p>
              </div>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}
