import { useNavigate } from "react-router-dom";

export default function BerhasilEditSK() {
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

          {/* Nav Buttons */}
          <nav className="flex flex-col md:flex-row items-center md:space-x-10 gap-2 md:gap-0">
            <a
              href="/DashboardAdmin1"
              className="text-black font-medium text-sm md:text-base"
            >
              Home
            </a>
            <a
              href="/DashboardAdmin2"
              className="text-black font-medium text-sm md:text-base"
            >
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
      <main className="px-4 md:px-8 pt-4 pb-10">
        <div className="bg-gray-100 flex flex-col items-center mt-12 md:mt-16 mb-10 px-2">
          <div className="bg-white border-4 border-black rounded-lg p-6 md:p-10 shadow-lg text-center w-full max-w-md">
            <h1 className="text-lg md:text-xl font-bold mb-6">Berhasil dirubah !</h1>

            <div className="flex justify-center mb-6">
              <div className="bg-red-500 rounded-full p-4">
                <span className="text-white text-3xl md:text-4xl">✔️</span>
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
