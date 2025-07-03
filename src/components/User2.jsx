import { useNavigate } from "react-router-dom";

export default function User2() {
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
            <a href="/User1" className="text-black font-medium">
              Home
            </a>
            <a
              href="#"
              className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white hover:bg-green-600"
            >
              Template Surat
            </a>
            <a href="/User3" className="text-black font-medium">
              Surat M/K
            </a>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">
              User
            </button>
          </nav>
        </div>
        <div className="bg-green-500 h-12" />
      </header>

      {/* Content */}
      <main className="px-8 py-10 text-center">
        <h2 className="font-bold text-lg mb-10">“Template Surat”</h2>

        <div className="flex justify-center">
          <button onClick={() => navigate("/TSU1")} className="w-full max-w-lg">
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
        </div>
      </main>
    </div>
  );
}
