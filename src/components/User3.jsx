import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function User3() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger state

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white">
        <div className="bg-green-500 h-12" />
        <div className="flex items-center justify-between px-6 py-3 bg-white shadow-md relative">
          <div className="flex items-center space-x-4">
            <img
              src="./src/assets/Logo Kejaksaan.png"
              alt="Logo Kejaksaan"
              className="w-12 h-12 object-contain"
            />
            <div className="text-black">
              <h1 className="text-lg font-semibold leading-tight">Kejaksaan Negeri</h1>
              <h2 className="text-2xl font-bold">Bandar Lampung</h2>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-20">
            <a href="/User1" className="text-black font-medium">Home</a>
            <a href="/User2" className="text-black font-medium">Template Surat</a>
            <span className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white">
              Surat M/K
            </span>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">
              User
            </button>
          </nav>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden absolute top-4 right-4">
            <button onClick={() => setMenuOpen(true)} className="text-2xl font-bold text-black">☰</button>
          </div>
        </div>
        <div className="bg-green-500 h-12" />
      </header>

      {/* Sidebar Menu (Mobile Only) */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-green-600 font-bold text-lg">MENU</h2>
            <button onClick={() => setMenuOpen(false)} className="text-xl font-bold">×</button>
          </div>
          <ul className="space-y-4">
            <li><a href="/User1" className="block text-black">Home</a></li>
            <li><a href="/User2" className="block text-black">Template Surat</a></li>
            <li><span className="block font-bold text-green-600">Surat M/K</span></li>
            <li><button className="w-full bg-black text-white px-4 py-2 rounded-full">User</button></li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <main className="px-8 py-10 text-center">
        <h2 className="font-bold text-lg mb-10">
          “Surat Masuk dan Surat Keluar”
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {/* Surat Masuk */}
          <button onClick={() => navigate("/LSU1")} className="w-full">
            <div className="bg-gray-300 rounded-lg shadow hover:shadow-xl transition">
              <img
                src="./src/assets/Gambar Surat 2.png"
                alt="Surat Masuk"
                className="h-72 w-full object-contain rounded-t-lg"
              />
              <div className="h-24 flex items-center justify-center rounded-b-lg">
                <p className="font-bold text-lg">Surat Masuk</p>
              </div>
            </div>
          </button>

          {/* Surat Keluar */}
          <button onClick={() => navigate("/LSU2")} className="w-full">
            <div className="bg-gray-300 rounded-lg shadow hover:shadow-xl transition">
              <img
                src="./src/assets/Gambar Surat 3.png"
                alt="Surat Keluar"
                className="h-72 w-full object-contain rounded-t-lg"
              />
              <div className="h-24 flex items-center justify-center rounded-b-lg">
                <p className="font-bold text-lg">Surat Keluar</p>
              </div>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}
