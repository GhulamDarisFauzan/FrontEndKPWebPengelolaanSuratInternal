import { useNavigate } from "react-router-dom";

export default function LoginAdmin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/DashboardAdmin1");
  };

  return (
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

      {/* Form Login */}
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

          <p className="text-gray-600 mb-4">Masukkan akun anda</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none"
            />

            {/* Login + Lupa Password */}
            <div className="flex items-center justify-between mt-2">
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 font-semibold shadow-sm"
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
