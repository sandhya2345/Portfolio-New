"use client";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Moon from "./moon/page";
import { Facebook, GithubIcon, Instagram, LucideLinkedin, MoonIcon } from "lucide-react";

const Home = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createRandomStars = (count) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        stars.push({ top, left, size, duration, delay });
      }
      return stars;
    };

    setStars(createRandomStars(200));
  }, []);

  return (
    <div className="bg-white">
      <style jsx>{`
        @keyframes moveStar {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translate(-100px, -100px);
            opacity: 1;
          }
        }
      `}</style>

      <section className="relative flex justify-between items-center h-screen w-full bg-[#070707] text-white overflow-hidden px-16 ">

        <div className="relative w-2/3 space-y-6 ml-12 -mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
            <span><MoonIcon /></span>
            <span>Sandhya Timalsena</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-100">
            Crafting Modern <br />
            Web Applications,<br />
            and Seamless Experience!
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl">
            With expertise in both frontend and backend development, I build robust, scalable web applications using modern technologies like React, Django, and MongoDB.
           
          </p>

          <div className="flex gap-8">
            <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
              I'm Resume
            </button>
            <button className="flex items-center gap-4 text-gray-300 hover:text-white transition">
              <Instagram />
              <Facebook />
              <GithubIcon />
              <LucideLinkedin />

            </button>
          </div>
        </div>


        <div className="relative w-1/3 h-full pointer-events-none">
          <Canvas
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              width: "100%",
              height: "100%",
            }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Moon scale={[1.5, 1.5, 1.5]} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>


        {stars.map((star, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0 0 5px rgba(255, 255, 255, 0.8)",
              zIndex: 0,
              animation: `moveStar ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </section>

      {/* next section starts here */}
      <section className="h-screen bg-white text-black flex items-center justify-center">
        <h1 className="text-4xl font-bold">Hi next section it is</h1>
      </section>
    </div>
  );
};

export default Home;
