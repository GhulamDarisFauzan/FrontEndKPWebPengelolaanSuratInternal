import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TSA2() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // ← untuk sidebar mobile

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white">
        <div className="bg-green-500 h-12" />

        {/* Header Bar */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-6 py-3 bg-white shadow-md relative">
          <div className="flex items-center space-x-4">
            <img
              src="./src/assets/Logo Kejaksaan.png"
              alt="Logo"
              className="w-12 h-12"
            />
            <div className="text-black">
              <h1 className="text-lg font-semibold">Kejaksaan Negeri</h1>
              <h2 className="text-2xl font-bold">Bandar Lampung</h2>
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="/DashboardAdmin1" className="text-black font-medium">Home</a>
            <a href="#" className="bg-green-500 px-4 py-1 rounded-full text-white font-semibold">Template Surat</a>
            <a href="/DashboardAdmin3" className="text-black font-medium">Surat M/K</a>
            <button className="bg-black text-white px-4 py-1 rounded-full font-bold">Admin</button>
          </nav>

          {/* Hamburger Menu Button (Mobile) */}
          <div className="md:hidden absolute top-4 right-4">
            <button onClick={() => setMenuOpen(true)} className="text-2xl font-bold text-black">
              ☰
            </button>
          </div>
        </div>

        <div className="bg-green-500 h-12" />
      </header>

      {/* Sidebar Menu Mobile */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-green-600 font-bold text-lg">MENU</h2>
            <button onClick={() => setMenuOpen(false)} className="text-xl font-bold">×</button>
          </div>
          <ul className="space-y-4">
            <li><a href="/DashboardAdmin1" className="block text-black">Home</a></li>
            <li><a href="#" className="block font-bold text-green-600">Template Surat</a></li>
            <li><a href="/DashboardAdmin3" className="block text-black">Surat M/K</a></li>
            <li><button className="w-full bg-black text-white px-4 py-2 rounded-full">Admin</button></li>
          </ul>
        </div>
      )}

      {/* Main Content */}
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
