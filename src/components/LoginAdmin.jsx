import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function LoginAdmin() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/DashboardAdmin1");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white relative px-4">
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Tombol Admin (Desktop) */}
      <div className="absolute top-4 right-4 hidden md:block z-50">
        <button className="bg-green-500 text-black font-bold px-4 py-2 rounded-full hover:bg-green-600 text-sm md:text-base">
          Admin
        </button>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="absolute top-4 right-4 md:hidden z-50">
        <button onClick={() => setMenuOpen(true)} className="text-black">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar (Mobile) */}
      <nav
        className={`fixed top-0 right-0 h-full w-[260px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h1 className="text-green-600 font-bold text-sm">MENU</h1>
          <button onClick={() => setMenuOpen(false)}>
            <X className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="flex flex-col px-6 py-4 gap-3">
          <button className="w-full bg-green-500 text-black font-bold px-4 py-2 rounded-full">
            Admin
          </button>
        </div>
      </nav>

      {/* Gambar Gedung */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-5">
        <img
          src="../src/assets/kejaksaanBL.jpg"
          alt="Kejaksaan Negeri"
          className="w-full max-w-md h-auto object-contain"
        />
      </div>

      {/* Form Login */}
      <div className="md:w-1/2 w-full px-6 md:px-10 py-4">
        <div className="max-w-md w-full mx-auto">
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

          <p className="text-gray-600 mb-4 text-sm">Masukkan akun anda</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none text-sm"
            />

            {/* Login + Lupa Password */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-2">
              <button
                type="submit"
                className="bg-green-500 text-white w-full sm:w-auto px-6 py-2 rounded hover:bg-green-600 font-semibold shadow-sm text-sm"
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => navigate("/ResetPWA1")}
                className="text-sm text-green-500 hover:underline"
              >
                Lupa password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
