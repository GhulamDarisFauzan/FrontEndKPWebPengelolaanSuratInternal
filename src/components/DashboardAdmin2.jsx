import { useNavigate } from "react-router-dom";

export default function DashboardAdmin2() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white">
        <div className="bg-green-500 h-12" />
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 bg-white gap-4 md:gap-0">
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

          <nav className="flex flex-col md:flex-row items-center md:space-x-10 gap-2 md:gap-0">
            <a href="/DashboardAdmin1" className="text-black font-medium text-sm md:text-base">
              Home
            </a>
            <a
              href="#"
              className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white hover:bg-green-600"
            >
              Template Surat
            </a>
            <a href="/DashboardAdmin3" className="text-black font-medium text-sm md:text-base">
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
      <main className="px-4 md:px-8 py-10 text-center">
        <h2 className="font-bold text-base md:text-lg mb-10">“Template Surat”</h2>

        <div className="w-full pt-6">
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 md:px-6">
            {/* Card 1 */}
            <button onClick={() => navigate("/TSA1")} className="w-full">
              <div className="bg-gray-300 rounded shadow hover:shadow-lg transition">
                <img
                  src="./src/assets/Gambar Surat 4.png"
                  alt="Masukkan Template Surat Baru"
                  className="h-64 md:h-72 w-full object-contain rounded-t"
                />
                <div className="h-20 md:h-24 flex items-center justify-center rounded-b">
                  <p className="font-bold text-sm md:text-lg">Masukkan Template Surat Baru</p>
                </div>
              </div>
            </button>

            {/* Card 2 */}
            <button onClick={() => navigate("/TSA3")} className="w-full">
              <div className="bg-gray-300 rounded shadow hover:shadow-lg transition">
                <img
                  src="./src/assets/Gambar Surat 1.png"
                  alt="Surat yang Telah Diinput"
                  className="h-64 md:h-72 w-full object-contain rounded-t"
                />
                <div className="h-20 md:h-24 flex items-center justify-center rounded-b">
                  <p className="font-bold text-sm md:text-lg">Surat yang Telah Diinput</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
