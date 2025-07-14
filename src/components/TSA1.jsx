import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function TSA1() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSimpan = () => {
    navigate("/TSA2");
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className="bg-green-500 text-white z-50 relative">
        <div className="bg-green-500 h-12" />

        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 bg-white gap-4 md:gap-0 relative z-50">
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
          <nav className="hidden md:flex flex-row items-center space-x-10">
            <a href="/DashboardAdmin1" className="text-black font-medium">Home</a>
            <a href="#" className="bg-green-500 px-4 py-1 rounded-full text-white font-semibold">Template Surat</a>
            <a href="/DashboardAdmin3" className="text-black font-medium">Surat M/K</a>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">Admin</button>
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

        <div className="flex flex-col p-6 gap-4">
          <a href="/DashboardAdmin1" className="text-black font-medium">Home</a>
          <a href="#" className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white">Template Surat</a>
          <a href="/DashboardAdmin3" className="text-black font-medium">Surat M/K</a>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full font-bold w-full text-left">
            Admin
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="px-4 md:px-8 pt-4 pb-10">
        <div className="bg-white px-6 md:px-10 pt-4 pb-8 rounded shadow">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h1 className="text-2xl text-red-600 font-bold border-b-4 border-black inline-block">
              Template Surat
            </h1>
            <h2 className="text-center font-bold text-black">
              “Masukkan Template Surat Baru”
            </h2>
            <button
              onClick={handleSimpan}
              className="bg-black text-white px-4 py-1 rounded-full font-semibold"
            >
              Simpan
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <label htmlFor="nama" className="block text-gray-800 mb-1">
                  Nama Surat:
                </label>
                <input
                  id="nama"
                  type="text"
                  className="w-full border border-gray-400 rounded px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="tanggal" className="block text-gray-800 mb-1">
                  Tanggal:
                </label>
                <input
                  id="tanggal"
                  type="date"
                  className="w-full border border-gray-400 rounded px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="keterangan" className="block text-gray-800 mb-1">
                  Keterangan:
                </label>
                <textarea
                  id="keterangan"
                  rows="4"
                  className="w-full border border-gray-400 rounded px-3 py-2"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="bg-gray-300 w-full max-w-sm h-60 flex items-center justify-center rounded-md">
                <form
                  action="/upload"
                  method="POST"
                  encType="multipart/form-data"
                  className="flex flex-col items-center space-y-4"
                >
                  <label className="block text-gray-800 font-medium">
                    Upload Template:
                  </label>
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
