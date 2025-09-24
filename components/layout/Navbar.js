"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 bg-black z-50">
      <div className="flex items-center gap-2 text-white text-lg">
        <Image
          src="/logo.png"
          alt="Sandhya Timalsena"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-semibold mt-2">Sandhya Timalsena</span>
      </div>

      
      <div className="hidden lg:flex items-center gap-8 text-white">
        <Link
          href="/"
          className="px-4 py-1 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
        >
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition">
          About
        </Link>
        <Link href="/projects" className="hover:text-gray-300 transition">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition">
          Contact
        </Link>
      </div>

    
      <div className="hidden lg:block">
        <button className="px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
          Download me
        </button>
      </div>

      
      <button
        className="lg:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      
      {menuOpen && (
        <div className="absolute top-16 right-0 w-full bg-black/95 rounded-b-xl shadow-lg p-6 flex flex-col gap-4 text-white lg:hidden z-50">
          <Link href="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <button className="px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
            Download me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
