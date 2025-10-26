"use client";


import dynamic from "next/dynamic";

const Moon = dynamic(() => import("@/components/Moon"), { ssr: false });

export default function MoonPage() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <Moon />
    </div>
  );
}
