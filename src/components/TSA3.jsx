import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function TSA3() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const itemsPerPage = 10;

  const dataSurat = [
    { id: 1, nama: "Surat A", tanggal: "2025-06-28", keterangan: "Surat masuk penting" },
    { id: 2, nama: "Surat B", tanggal: "2025-06-27", keterangan: "Perihal kerja sama" },
    { id: 3, nama: "Surat C", tanggal: "2025-06-26", keterangan: "Undangan resmi" },
    { id: 4, nama: "Surat D", tanggal: "2025-06-25", keterangan: "Internal" },
    { id: 5, nama: "Surat E", tanggal: "2025-06-24", keterangan: "Penting" },
    { id: 6, nama: "Surat F", tanggal: "2025-06-23", keterangan: "Nota dinas" },
    { id: 7, nama: "Surat G", tanggal: "2025-06-22", keterangan: "Rapat koordinasi" },
    { id: 8, nama: "Surat H", tanggal: "2025-06-21", keterangan: "Informasi penting" },
    { id: 9, nama: "Surat I", tanggal: "2025-06-20", keterangan: "Laporan tahunan" },
    { id: 10, nama: "Surat J", tanggal: "2025-06-19", keterangan: "Pengumuman" },
    { id: 11, nama: "Surat K", tanggal: "2025-06-18", keterangan: "Arahan pimpinan" },
  ];

  const filteredData = dataSurat.filter((surat, index) => {
    const no = index + 1;
    const tanggalFormatted = new Date(surat.tanggal).toLocaleDateString("id-ID");
    return (
      no.toString().includes(searchTerm.toLowerCase()) ||
      surat.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tanggalFormatted.includes(searchTerm.toLowerCase()) ||
      surat.keterangan.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Overlay saat sidebar aktif */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header className="bg-green-500 text-white z-50 relative">
        <div className="bg-green-500 h-12" />
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 bg-white gap-4 relative z-50">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src="./src/assets/Logo Kejaksaan.png" alt="Logo" className="w-12 h-12" />
            <div className="text-black">
              <h1 className="text-base md:text-lg font-semibold">Kejaksaan Negeri</h1>
              <h2 className="text-xl md:text-2xl font-bold">Bandar Lampung</h2>
            </div>
          </div>

          {/* Icon Hamburger Mobile */}
          <div className="md:hidden absolute right-4 top-3 z-50">
            <button onClick={() => setMenuOpen(true)}>
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex flex-row items-center space-x-10 text-sm">
            <Link to="/DashboardAdmin1" className="text-black font-medium">Home</Link>
            <span className="bg-green-500 px-4 py-1 rounded-full text-white font-semibold">Template Surat</span>
            <Link to="/DashboardAdmin3" className="text-black font-medium">Surat M/K</Link>
            <button className="bg-black text-white px-4 py-1 rounded-full font-bold">Admin</button>
          </nav>
        </div>
        <div className="bg-green-500 h-12" />
      </header>

      {/* Menu Mobile (Slide dari kanan) */}
      <nav
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Header menu */}
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

        {/* Isi menu */}
        <div className="flex flex-col p-6 gap-4">
          <Link to="/DashboardAdmin1" className="text-black text-base" onClick={() => setMenuOpen(false)}>Home</Link>
          <span className="bg-green-500 px-4 py-2 rounded-full text-sm font-semibold text-white">Template Surat</span>
          <Link to="/DashboardAdmin3" className="text-black text-base" onClick={() => setMenuOpen(false)}>Surat M/K</Link>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full">Admin</button>
        </div>
      </nav>

      {/* Konten Utama */}
      <main className="px-4 md:px-8 py-8">
        <h1 className="text-2xl text-red-600 font-bold mb-2 border-b-4 border-black inline-block">Template Surat</h1>
        <h2 className="text-center font-semibold text-black mb-6">“Template Surat”</h2>

        {/* Search */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Cari nomor, nama, tanggal, keterangan..."
            className="w-full max-w-xl px-4 py-2 border border-gray-400 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-500 text-white">
                <th className="p-3 text-left">No</th>
                <th className="p-3 text-left">Nama Surat</th>
                <th className="p-3 text-left">Tanggal</th>
                <th className="p-3 text-left">Keterangan</th>
                <th className="p-3 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((surat, index) => (
                <tr key={surat.id} className="bg-white border-b hover:bg-gray-200">
                  <td className="p-3">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="p-3">{surat.nama}</td>
                  <td className="p-3">{new Date(surat.tanggal).toLocaleDateString("id-ID")}</td>
                  <td className="p-3">{surat.keterangan}</td>
                  <td className="p-3">
                    <Link
                      to="/DetailTSA"
                      className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
                    >
                      Detail
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-1">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 5).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`px-3 py-1 border rounded ${page === currentPage ? "bg-blue-600 text-white" : ""}`}
            >
              {page}
            </button>
          ))}
          {totalPages > 5 && (
            <>
              <span className="px-2">...</span>
              <button
                onClick={() => goToPage(totalPages)}
                className="px-3 py-1 border rounded"
              >
                {totalPages}
              </button>
            </>
          )}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
