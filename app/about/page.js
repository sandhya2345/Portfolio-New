"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshDistortMaterial } from "@react-three/drei";
import { ArrowRight, FileText, FileTextIcon, Globe, Palette, Rocket, RocketIcon, Settings, Star, Stars } from "lucide-react";


const Fomosphere = () => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.002;
    mesh.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.5, 100, 100]} />
      <MeshDistortMaterial
        color="#0f0f0f"
        emissive="#222222"
        emissiveIntensity={0.2}
        metalness={1}
        roughness={0.15}
        distort={0.35}
        speed={2}
      />
    </mesh>
  );
};


const About = () => {
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

    setStars(createRandomStars(150));
  }, []);

  return (
    <div>

      <section className="flex flex-col items-center min-h-screen bg-white text-center relative overflow-hidden">
        <style jsx>{`
        @keyframes moveStar {
          0% {
            transform: translate(0, 0);
            opacity: 0.9;
            }
            50% {
              opacity: 0.5;
              }
              100% {
                transform: translate(-30px, -30px);
                opacity: 0.9;
                }
                }
                `}</style>

        {/* Background Stars */}
        {stars.map((star, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: "black",
              borderRadius: "50%",
              boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
              animation: `moveStar ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}


        <div className="w-full h-[400px] sm:h-[500px] -mt-24 z-10">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.8} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={1.2}
              color="#ffffff"
            />
            <Environment preset="dawn" />
            <Fomosphere />
          </Canvas>
        </div>


        <div className="relative px-6 md:px-12 -mt-24 max-w-7xl text-center z-10">
          <h1 className="text-5xl md:text-5xl font-medium text-gray-900 mb-2">
            Sandhya Timalsena
          </h1>
          <p className="text-gray-700 text-xl mb-6">Uncreative Developer</p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="inline-flex items-center backdrop-blur-sm bg-white border border-black font-medium hover:bg-black hover:text-white transition px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm shadow-sm">
              <Rocket className="mr-2" />
              Web Development
            </span>
            <span className="inline-flex items-center backdrop-blur-sm bg-white border border-black font-medium hover:bg-black hover:text-white transition px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm shadow-sm">
              <Palette className="mr-2" />
              UI Design
            </span>
            <span className="inline-flex items-center backdrop-blur-sm bg-white border border-black font-medium hover:bg-black hover:text-white transition px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm shadow-sm">
              <Settings className="mr-2" />
              Backend Development
            </span>
            <span className="inline-flex items-center backdrop-blur-sm bg-white border border-black font-medium hover:bg-black hover:text-white transition px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm shadow-sm">
              <Globe className="mr-2" />
              Full Stack
            </span>
            <span className="inline-flex items-center backdrop-blur-sm bg-white border border-black font-medium hover:bg-black hover:text-white transition px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm shadow-sm">
              <Stars className="mr-2" />
              Creative Coding
            </span>
          </div>

          <p className="text-lg md:text-2xl text-gray-900 leading-relaxed max-w-6xl mx-auto">
            I am a passionate web developer dedicated to crafting engaging and
            user-friendly digital experiences. My expertise spans front-end and
            back-end development, where I transform ideas into interactive,
            aesthetic, and efficient digital products.
          </p>


          <div className="mt-8">
            <button className="inline-flex items-center backdrop-blur-sm bg-white border border-black font-medium hover:bg-black hover:text-white transition px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm shadow-sm">
              <RocketIcon className="mr-2" />
              Career Highlights →
            </button>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-20 bg-white">

        <div className="md:w-1/2 w-full flex justify-center items-center bg-gray-50  rounded-2xl shadow-lg">
          <img
            src="/Resume.png"
            alt="Resume Preview"
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>


        <div className="md:w-1/3 w-full flex flex-col items-start mt-8 md:mt-0 md:ml-12">
          <div className="w-full flex justify-center">
            <FileTextIcon size={80} className="text-gray-800 mb-4" />
          </div>
          <h2 className="text-3xl md:text-4xl  mb-4 text-gray-800">
            Have A Look At Resume!
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            As a passionate Frontend and Backend Developer, I craft seamless digital experiences
             that balance design and functionality. From building dynamic user interfaces to 
             developing efficient server-side systems, I bring ideas to life with clean, scalable code.
          </p>

          <div className="flex space-x-4">
            <button className="flex flex-wrap items-center gap-2 px-6 py-3 rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition">
              Explore Projects <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition">
              Download Me <FileText size={18} />
            </button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;
