import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ResetPWA2() {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setShowNotification(true);
    const timer = setTimeout(() => setShowNotification(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tampilkan alert terlebih dahulu
    alert("Password telah direset");

    // Delay 1 detik sebelum pindah ke halaman login
    setTimeout(() => {
      navigate("/LoginAdmin");
    }, 1000);
  };

  return (
    <>
      {showNotification && (
        <div className="w-full bg-green-100 text-green-800 text-center py-3 font-semibold shadow">
          Berhasil terkirim, cek email kamu!
        </div>
      )}

      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white relative">
        {/* Tombol Admin */}
        <div className="absolute top-5 right-5">
          <button className="bg-green-500 text-black font-bold px-4 py-2 rounded-full hover:bg-green-600">
            Admin
          </button>
        </div>

        {/* Gambar Gedung */}
        <div className="md:w-1/2 w-full flex justify-center items-center p-5">
          <img
            src="../src/assets/kejaksaanBL.jpg"
            alt="Kejaksaan Negeri"
            className="max-w-full max-h-[420px] object-contain"
          />
        </div>

        {/* Form Reset Password */}
        <div className="md:w-1/2 w-full px-10">
          <div className="max-w-md w-full">
            {/* Logo dan Judul */}
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="../src/assets/Logo Kejaksaan.png"
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-lg font-semibold text-black leading-tight">
                Kejaksaan Negeri <br />
                <span className="text-2xl font-bold">Bandar Lampung</span>
              </h1>
            </div>

            <p className="text-gray-600 mb-4">
              Masukkan Code yang telah dikirimkan ke email
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Code"
                required
                className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none"
              />
              <input
                type="password"
                placeholder="New Password"
                required
                className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none"
              />

              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 font-semibold shadow-sm"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
