import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ResetPWU1() {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ← Tambahan untuk hamburger

  useEffect(() => {
    setShowNotification(true);
    const timer = setTimeout(() => setShowNotification(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Link reset telah dikirim ke email Anda.");
    setTimeout(() => {
      navigate("/ResetPWU2");
    }, 1000);
  };

  return (
    <>
      {showNotification && (
        <div className="w-full bg-green-100 text-green-800 text-center py-3 font-semibold shadow z-10">
          Silakan periksa email Anda untuk reset password.
        </div>
      )}

      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white relative px-4">
        {/* Tombol User (Desktop) */}
        <div className="absolute top-4 right-4 hidden md:block">
          <button className="bg-green-500 text-black font-bold px-4 py-2 rounded-full hover:bg-green-600 text-sm">
            User
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="absolute top-4 right-4 md:hidden z-50">
          <button onClick={() => setMenuOpen(true)} className="text-2xl font-bold text-black">
            ☰
          </button>
        </div>

        {/* Sidebar Menu Mobile */}
        {menuOpen && (
          <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-green-600 font-bold text-lg">MENU</h2>
              <button onClick={() => setMenuOpen(false)} className="text-xl font-bold">×</button>
            </div>
            <ul className="space-y-4">
              <li>
                <button className="w-full bg-green-500 text-black font-bold px-4 py-2 rounded-full">
                  User
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Gambar Gedung */}
        <div className="md:w-1/2 w-full flex justify-center items-center p-4">
          <img
            src="../src/assets/kejaksaanBL.jpg"
            alt="Kejaksaan Negeri"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Form Reset Email */}
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

            <p className="text-gray-600 mb-4">Masukkan email Anda</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 font-semibold shadow-sm w-full"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
