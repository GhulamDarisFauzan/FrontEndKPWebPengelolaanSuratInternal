import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TSA1() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // ← untuk sidebar mobile

  const handleSimpan = () => {
    // Tambahkan validasi / penyimpanan di sini jika diperlukan
    navigate("/TSA2");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white">
        <div className="bg-green-500 h-12" />

        {/* Header Bar */}
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

          {/* Menu Desktop */}
          <nav className="hidden md:flex flex-wrap items-center gap-6 text-sm">
            <a href="/DashboardAdmin1" className="text-black font-medium">Home</a>
            <a href="#" className="bg-green-500 px-4 py-1 rounded-full text-white font-semibold">Template Surat</a>
            <a href="/DashboardAdmin3" className="text-black font-medium">Surat M/K</a>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">Admin</button>
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

      {/* Content */}
      <main className="px-6 pt-4 pb-10">
        <div className="bg-gray-100 px-6 md:px-10 pt-4 pb-8 rounded">
          {/* Judul dan Tombol Simpan */}
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

          {/* Isi Konten */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Form Input */}
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

            {/* Upload File */}
            <div className="flex justify-center items-center">
              <div className="bg-gray-300 w-60 h-60 flex items-center justify-center rounded-md">
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
