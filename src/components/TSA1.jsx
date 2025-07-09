import { useNavigate } from "react-router-dom";

export default function TSA1() {
  const navigate = useNavigate();

  const handleSimpan = () => {
    // Tambahkan validasi / penyimpanan di sini jika diperlukan
    navigate("/TSA2");
  };

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

          <nav className="flex items-center space-x-20">
            <a href="/DashboardAdmin1" className="text-black font-medium">
              Home
            </a>
            <a
              href="#"
              className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white"
            >
              Template Surat
            </a>
            <a href="/DashboardAdmin3" className="text-black font-medium">
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
