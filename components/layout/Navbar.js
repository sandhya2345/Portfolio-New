"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black">

 
      <div className="flex items-center gap-1 text-white text-lg">
        <Image
          src="/logo.png"
          alt="Sandhya Timalsena"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="mt-2">Sandhya Timalsena</span>
      </div>

    
      <div className="flex items-center gap-8 text-white">
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

    
      <button className="px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
        Download me
      </button>
    </nav>
  );
};

export default Navbar;
