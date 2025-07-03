import { useNavigate } from "react-router-dom";

export default function BerhasilEditSM() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white">
        <div className="bg-green-500 h-12" />
        <div className="flex items-center justify-between px-6 py-3 bg-white">
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

          {/* Nav Buttons */}
          <nav className="flex items-center space-x-20">
            <a
              href="/DashboardAdmin1"
              className="text-black font-medium "
            >
              Home
            </a>
            <a
              href="/DashboardAdmin2"
              className="text-black font-medium "
            >
              Template Surat
            </a>
            <a
              href="#"     
              className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white hover:bg-green-500"
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
      <main className="px-8 pt-4 pb-10">
      <div className="bg-gray-100 flex flex-col items-center mt-16 mb-10">
      <div className="bg-white border-4 border-black rounded-lg p-10 shadow-lg text-center">
        <h1 className="text-xl font-bold mb-6">Berhasil dirubah !</h1>
        
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

