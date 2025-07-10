import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function User2() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white">
        <div className="bg-green-500 h-12" />
        <div className="flex items-center justify-between px-6 py-3 bg-white shadow-md relative">
          <div className="flex items-center space-x-4">
            <img
              src="./src/assets/Logo Kejaksaan.png"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="text-black">
              <h1 className="text-lg font-semibold leading-tight">
                Kejaksaan Negeri
              </h1>
              <h2 className="text-2xl font-bold">Bandar Lampung</h2>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-20">
            <a href="/User1" className="text-black font-medium">
              Home
            </a>
            <span className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white">
              Template Surat
            </span>
            <a href="/User3" className="text-black font-medium">
              Surat M/K
            </a>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">
              User
            </button>
          </nav>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden absolute top-4 right-4">
            <button onClick={() => setMenuOpen(true)} className="text-2xl font-bold text-black">
              ☰
            </button>
          </div>
        </div>
        <div className="bg-green-500 h-12" />
      </header>

      {/* Sidebar Menu (Mobile) */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-green-600 font-bold text-lg">MENU</h2>
            <button onClick={() => setMenuOpen(false)} className="text-xl font-bold">
              ×
            </button>
          </div>
          <ul className="space-y-4">
            <li><a href="/User1" className="block text-black">Home</a></li>
            <li><span className="block font-bold text-green-600">Template Surat</span></li>
            <li><a href="/User3" className="block text-black">Surat M/K</a></li>
            <li><button className="w-full bg-black text-white px-4 py-2 rounded-full">User</button></li>
          </ul>
        </div>
      )}

      {/* Content */}
      <main className="px-8 py-10 text-center">
        <h2 className="font-bold text-lg mb-10">“Template Surat”</h2>

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
