import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // pastikan sudah: npm install lucide-react

export default function ResetPWA1() {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setShowNotification(true);
    const timer = setTimeout(() => setShowNotification(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Link reset telah dikirim ke email Anda.");
    setTimeout(() => {
      navigate("/ResetPWA2");
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-4">
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Hamburger Menu (Mobile) */}
      <div className="absolute top-4 right-4 md:hidden z-50">
        <button onClick={() => setMenuOpen(true)}>
          <Menu className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Menu Admin (Desktop) */}
      <div className="absolute top-4 right-4 hidden md:block">
        <button className="bg-green-500 text-black font-bold px-4 py-2 rounded-full hover:bg-green-600 text-sm">
          Admin
        </button>
      </div>

      {/* Sidebar Menu Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span
            onClick={() => setMenuOpen(false)}
            className="text-green-600 font-semibold cursor-pointer text-lg"
          >
            MENU
          </span>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="flex flex-col p-6 gap-4">
          <button className="w-full bg-green-500 text-black font-bold px-4 py-2 rounded-full">
            Admin
          </button>
        </div>
      </div>

      {/* Gambar Gedung */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-4">
        <img
          src="../src/assets/kejaksaanBL.jpg"
          alt="Kejaksaan Negeri"
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* Form Reset Password */}
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

          <p className="text-gray-600 mb-4">Masukkan email anda</p>

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
  );
}
