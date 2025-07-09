import { useNavigate } from "react-router-dom";

export default function LSMK1() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white">
        <div className="bg-green-500 h-12" />
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-6 py-3 bg-white gap-4">
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

          <nav className="flex flex-wrap gap-4 text-sm items-center">
            <a href="/DashboardAdmin1" className="text-black font-medium">
              Home
            </a>
            <a href="/DashboardAdmin2" className="text-black font-medium">
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

      {/* Content */}
      <main className="px-4 sm:px-8 py-10 text-center">
        <h2 className="font-bold text-lg sm:text-xl mb-10">“Lihat Surat Masuk & Keluar”</h2>

        <div className="w-full pt-6">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card - Surat Masuk */}
            <button onClick={() => navigate("/LSA1")} className="w-full">
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
            <button onClick={() => navigate("/LSA2")} className="w-full">
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
