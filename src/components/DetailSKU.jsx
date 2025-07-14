import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function DetailSKU() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Overlay saat menu aktif */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Header */}
      <header className="bg-green-500 text-white z-50 relative">
        <div className="bg-green-500 h-12" />
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 bg-white gap-4 md:gap-0 relative z-50">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src="/src/assets/Logo Kejaksaan.png" alt="Logo" className="w-12 h-12" />
            <div className="text-black">
              <h1 className="text-base md:text-lg font-semibold">Kejaksaan Negeri</h1>
              <h2 className="text-xl md:text-2xl font-bold">Bandar Lampung</h2>
            </div>
          </div>

          {/* Hamburger - Mobile Only */}
          <div className="md:hidden absolute right-4 top-3 z-50">
            <button onClick={() => setIsOpen(true)} className="text-black focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Desktop */}
          <nav className="hidden md:flex flex-row items-center space-x-10">
            <a href="/User1" className="text-black font-medium text-sm md:text-base">Home</a>
            <a href="/User2" className="text-black font-medium text-sm md:text-base">Template Surat</a>
            <a href="#" className="bg-green-500 px-4 py-1 rounded-full text-sm font-semibold text-white hover:bg-green-600">
              Surat M/K
            </a>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full font-bold">User</button>
          </nav>
        </div>
        <div className="bg-green-500 h-12" />
      </header>

      {/* Drawer - Mobile */}
      <nav className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}>
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h1 className="text-green-600 font-bold text-sm">MENU</h1>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="flex flex-col px-6 py-4 gap-3">
          <a href="/User1" className="text-black text-sm font-medium w-full text-left">Home</a>
          <a href="/User2" className="text-black text-sm font-medium w-full text-left">Template Surat</a>
          <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold w-full text-left">Surat M/K</a>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full font-bold w-full text-left">User</button>
        </div>
      </nav>

      {/* Judul Halaman */}
      <div className="px-4 md:px-8 pt-6">
        <h1 className="text-xl md:text-2xl text-red-600 font-bold mb-2 border-b-4 border-black inline-block">
          Surat Keluar
        </h1>
        <h2 className="text-center font-semibold text-black mb-6 text-sm md:text-base">
          “Surat Keluar”
        </h2>
      </div>

      {/* Konten */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 md:px-10 pb-10">
        {/* Info Surat */}
        <div className="lg:col-span-2 bg-white p-4 md:p-6 rounded shadow">
          <h3 className="text-lg md:text-xl font-bold mb-6">Surat Gacor nih</h3>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div>
              <p className="font-semibold underline mb-2">File</p>
              <img src="/src/assets/amplop.jpg" alt="file" className="w-32 h-32 object-contain" />
            </div>
            <div>
              <p className="font-semibold underline mb-2">Tanggal</p>
              <p>8 Agustus 2025</p>
            </div>
          </div>

          {/* Tombol Download */}
          <button className="w-full bg-gray-200 text-black font-bold py-3 rounded-md mt-6 text-sm md:text-base">
            Download Template
          </button>
        </div>

        {/* Keterangan */}
        <div className="bg-white p-4 md:p-6 rounded shadow">
          <h3 className="font-bold text-base md:text-lg mb-2">Keterangan</h3>
          <textarea
            className="w-full h-64 md:h-80 border border-gray-300 rounded p-3 text-sm"
            value={"ini adalah surat untuk itu lah pokoknya jadi ini tu wkwk, mantapppp"}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
