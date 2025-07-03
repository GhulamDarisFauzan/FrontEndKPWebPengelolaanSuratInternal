import { useNavigate } from "react-router-dom";

export default function DashboardAdmin1() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white">
        <div className="bg-green-500 h-12" />
        <div className="flex items-center justify-between px-6 py-3 bg-white">
          <div className="flex items-center space-x-4">
            <img src="./src/assets/Logo Kejaksaan.png" alt="Logo" className="w-12 h-12" />
            <div className="text-black">
              <h1 className="text-lg font-semibold">Kejaksaan Negeri</h1>
              <h2 className="text-2xl font-bold">Bandar Lampung</h2>
            </div>
          </div>

          <nav className="flex items-center space-x-20">
            <a href="#" className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white">
              Home
            </a>
            <a href="/DashboardAdmin2" className="text-black font-medium">Template Surat</a>
            <a href="/DashboardAdmin3" className="text-black font-medium">Surat M/K</a>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">
              Admin
            </button>
          </nav>
        </div>
        <div className="bg-green-500 h-12" />
      </header>

      {/* Content */}
      <main className="px-8 py-10 text-center">
        <h2 className="font-bold text-lg mb-10">
          “Selamat Datang di Website Surat Divisi Intelijen”
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Template Surat */}
          <button onClick={() => navigate("/DashboardAdmin2")} className="w-full">
            <img
              src="./src/assets/Gambar Surat 1.png"
              alt="Template Surat"
              className="h-72 w-full object-contain bg-gray-300 rounded-t"
            />
            <div className="bg-gray-300 h-24 flex items-center justify-center rounded-b shadow">
              <p className="font-bold">Template Surat</p>
            </div>
          </button>

          {/* Surat Masuk */}
          <button onClick={() => navigate("/LSA1")} className="w-full">
            <img
              src="./src/assets/Gambar Surat 2.png"
              alt="Surat Masuk"
              className="h-72 w-full object-contain bg-gray-300 rounded-t"
            />
            <div className="bg-gray-300 h-24 flex items-center justify-center rounded-b shadow">
              <p className="font-bold">Surat Masuk</p>
            </div>
          </button>

          {/* Surat Keluar */}
          <button onClick={() => navigate("/LSA2")} className="w-full">
            <img
              src="./src/assets/Gambar Surat 3.png"
              alt="Surat Keluar"
              className="h-72 w-full object-contain bg-gray-300 rounded-t"
            />
            <div className="bg-gray-300 h-24 flex items-center justify-center rounded-b shadow">
              <p className="font-bold">Surat Keluar</p>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}
