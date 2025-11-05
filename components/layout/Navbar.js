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


  const isActive = (path) => pathname === path;

  return (
    <nav
      className={`relative flex items-center justify-between px-6 py-4 ${navBg} z-50 transition-colors`}
    >

      <div className="flex items-center gap-2 text-lg">
        <Image
          src="/images/logo.png"
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
          className={`px-4 py-1 rounded-full transition ${isActive("/")
              ? isHome
                ? "bg-white/20 text-white"
                : "bg-black/20 text-black"
              : isHome
                ? "text-white hover:text-gray-300"
                : "text-black hover:text-gray-600"
            }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`px-4 py-1 rounded-full transition ${isActive("/about")
              ? isHome
                ? "bg-white/20 text-white"
                : "bg-black/20 text-black"
              : isHome
                ? "text-white hover:text-gray-300"
                : "text-black hover:text-gray-600"
            }`}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`px-4 py-1 rounded-full transition ${isActive("/projects")
              ? isHome
                ? "bg-white/20 text-white"
                : "bg-black/20 text-black"
              : isHome
                ? "text-white hover:text-gray-300"
                : "text-black hover:text-gray-600"
            }`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`px-4 py-1 rounded-full transition ${isActive("/contact")
              ? isHome
                ? "bg-white/20 text-white"
                : "bg-black/20 text-black"
              : isHome
                ? "text-white hover:text-gray-300"
                : "text-black hover:text-gray-600"
            }`}
        >
          Contact
        </Link>
      </div>

      <div className="hidden lg:block">
        <a
          href="/resume.pdf"
          download
          className={`px-5 py-2 rounded-full font-medium transition ${isHome
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-black text-white hover:bg-gray-800"
            }`}
        >
          Download me
        </a>
      </div>



      <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>


      {menuOpen && (
        <div
          className={`absolute top-16 right-0 w-full ${isHome ? "bg-black/95 text-white" : "bg-white/95 text-black"
            } rounded-b-xl shadow-lg p-6 flex flex-col gap-4 lg:hidden z-50`}
        >
          <Link
            href="/"
            className={`px-3 py-2 rounded-lg transition ${isActive("/")
                ? isHome
                  ? "bg-white/20 text-white"
                  : "bg-black/20 text-black"
                : linkHover
              }`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-3 py-2 rounded-lg transition ${isActive("/about")
                ? isHome
                  ? "bg-white/20 text-white"
                  : "bg-black/20 text-black"
                : linkHover
              }`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`px-3 py-2 rounded-lg transition ${isActive("/projects")
                ? isHome
                  ? "bg-white/20 text-white"
                  : "bg-black/20 text-black"
                : linkHover
              }`}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`px-3 py-2 rounded-lg transition ${isActive("/contact")
                ? isHome
                  ? "bg-white/20 text-white"
                  : "bg-black/20 text-black"
                : linkHover
              }`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <button
            className={`px-5 py-2 rounded-full font-medium transition ${isHome
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
