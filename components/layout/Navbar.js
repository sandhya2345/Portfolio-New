"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

 
  const isHome = pathname === "/";
  const navBg = isHome ? "bg-black text-white" : "bg-white text-black";
  const linkHover = isHome ? "hover:text-gray-300" : "hover:text-gray-600";

  return (
    <nav className={`relative flex items-center justify-between px-6 py-4 ${navBg} z-50 transition-colors`}>

      <div className="flex items-center gap-2 text-lg">
        <Image
          src="/logo.png"
          alt="Sandhya Timalsena"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-semibold mt-2">Sandhya Timalsena</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-8">
        <Link
          href="/"
          className={`px-4 py-1 rounded-full ${isHome ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-black hover:bg-black/20"} transition`}
        >
          Home
        </Link>
        <Link href="/about" className={`${linkHover} transition`}>
          About
        </Link>
        <Link href="/projects" className={`${linkHover} transition`}>
          Projects
        </Link>
        <Link href="/contact" className={`${linkHover} transition`}>
          Contact
        </Link>
      </div>

     
      <div className="hidden lg:block">
        <button
          className={`px-5 py-2 rounded-full font-medium transition ${
            isHome
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Download me
        </button>
      </div>

     
      <button
        className="lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

     
      {menuOpen && (
        <div
          className={`absolute top-16 right-0 w-full ${isHome ? "bg-black/95 text-white" : "bg-white/95 text-black"} rounded-b-xl shadow-lg p-6 flex flex-col gap-4 lg:hidden z-50`}
        >
          <Link href="/" className={linkHover} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={linkHover} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/projects" className={linkHover} onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" className={linkHover} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <button
            className={`px-5 py-2 rounded-full font-medium transition ${
              isHome
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Download me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
