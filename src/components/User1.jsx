import { useNavigate } from "react-router-dom";

export default function User1() {
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

          {/* Nav Buttons */}
          <nav className="flex items-center space-x-20">
            <a href="#" className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white hover:bg-green-600">
              Home
            </a>
            <a href="/User2" className="text-black font-medium">Template Surat</a>
            <a href="/User3" className="text-black font-medium">Surat M/K</a>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">
              User
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {/* Template Surat */}
          <button onClick={() => navigate("/User2")} className="w-full">
            <div className="bg-gray-300 rounded shadow hover:shadow-lg transition">
              <img
                src="./src/assets/Gambar Surat 1.png"
                alt="Template Surat"
                className="h-72 w-full object-contain rounded-t"
              />
              <div className="h-24 flex items-center justify-center rounded-b">
                <p className="font-bold text-lg">Template Surat</p>
              </div>
            </div>
          </button>

          {/* Surat Masuk */}
          <button onClick={() => navigate("/LSU1")} className="w-full">
            <div className="bg-gray-300 rounded shadow hover:shadow-lg transition">
              <img
                src="./src/assets/Gambar Surat 2.png"
                alt="Surat Masuk"
                className="h-72 w-full object-contain rounded-t"
              />
              <div className="h-24 flex items-center justify-center rounded-b">
                <p className="font-bold text-lg">Surat Masuk</p>
              </div>
            </div>
          </button>

          {/* Surat Keluar */}
          <button onClick={() => navigate("/LSU2")} className="w-full">
            <div className="bg-gray-300 rounded shadow hover:shadow-lg transition">
              <img
                src="./src/assets/Gambar Surat 3.png"
                alt="Surat Keluar"
                className="h-72 w-full object-contain rounded-t"
              />
              <div className="h-24 flex items-center justify-center rounded-b">
                <p className="font-bold text-lg">Surat Keluar</p>
              </div>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}
