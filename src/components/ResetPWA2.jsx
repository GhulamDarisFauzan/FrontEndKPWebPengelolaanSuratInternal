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
    alert("Password telah direset");
    setTimeout(() => {
      navigate("/LoginAdmin");
    }, 1000);
  };

  return (
    <>
      {showNotification && (
        <div className="w-full bg-green-100 text-green-800 text-center py-3 font-semibold shadow z-10">
          Berhasil terkirim, cek email kamu!
        </div>
      )}

      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white relative px-4">
        {/* Tombol Admin */}
        <div className="absolute top-4 right-4">
          <button className="bg-green-500 text-black font-bold px-4 py-2 rounded-full hover:bg-green-600 text-sm">
            Admin
          </button>
        </div>

        {/* Gambar Gedung */}
        <div className="md:w-1/2 w-full flex justify-center items-center p-4">
          <img
            src="../src/assets/kejaksaanBL.jpg"
            alt="Kejaksaan Negeri"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Form Reset */}
        <div className="md:w-1/2 w-full px-4 sm:px-8">
          <div className="max-w-md w-full mx-auto">
            {/* Logo & Judul */}
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
              Masukkan kode yang telah dikirimkan ke email Anda
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
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 font-semibold shadow-sm w-full"
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
