"use client";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Moon from "./moon/page";
import { Book, BookA, Camera, ChevronDown, Facebook, GithubIcon, Instagram, LucideLinkedin, MoonIcon, MoveDownRight, MoveUpIcon, MoveUpRight } from "lucide-react";
import Stars from "@/components/Stars";
import Projects from "@/components/Projects";

const Home = () => {


  return (
    <div className="bg-white">
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

        <Stars count={200} />



      </section>

      {/* next section starts here */}
      <section className="relative h-full sm:pb-16 lg:py-8 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20">

            <div className="inline-flex items-center mt-18 backdrop-blur-sm bg-white border border-black font-medium hover:bg-black hover:text-white transition  px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm  mb-6 sm:mb-8 shadow-sm">
              <MoonIcon className="mr-2" />
              About Me
            </div>

            <h1 className="text-3xl font-medium text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
              I'm <span className="text-yellow-200">Sandhya Timalsena</span>, unknown about specification
             
            </h1>

          </div>
        </div>
      </section>

      <Projects />



    </div>
  );
};

export default Home;
