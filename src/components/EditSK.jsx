import { useNavigate } from "react-router-dom";

export default function EditSK() {
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
              href="DashboardAdmin2"
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
          <div className="bg-gray-100 px-10 pt-4 pb-8">

 

          <div className="flex justify-between items-center mb-6">
              {/* Judul kiri */}
              <h1 className="text-2xl text-red-600 font-bold border-b-4 border-black inline-block pb-1">
              Surat Keluar
              </h1>

                {/* Subjudul tengah */}
                 <h2 className="text-center font-bold text-black">
                “Masukkan Surat Keluar”
                </h2>
            {/* Tombol Simpan */}
            <div className="flex justify-end mb-4">
              <a href="/BerhasilEditSK">
              <button className="bg-black text-white px-4 py-1 rounded-full font-semibold">
                Simpan
              </button>
              </a>
            </div>

         </div>

          {/* Isi Konten */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Form Input */}
            <div className="space-y-6">
              
              <div>
                <label className="block text-gray-800 mb-1">Nama Surat</label>
                <input
                  type="text"
                  className="w-full border border-gray-400 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-800 mb-1">Tanggal:</label>
                <input
                  type="date"
                  className="w-full border border-gray-400 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-gray-800 mb-1">Keterangan:</label>
                <textarea
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
