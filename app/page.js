"use client";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Moon from "./moon/page";
import { Book, BookA, Camera, ChevronDown, Facebook, Flower, GithubIcon, Heart, Instagram, LucideLinkedin, MoonIcon, MoveDownRight, MoveUpIcon, MoveUpRight, Music, Rocket, Sparkle, SparkleIcon, Star } from "lucide-react";
import Stars from "@/components/Stars";
import Projects from "@/components/Projects";
import Questions from "@/components/Questions";

const Home = () => {


  return (
    <div className="bg-white">
       <section className="relative flex flex-col-reverse md:flex-row justify-between items-center h-auto md:h-screen w-full bg-[#070707] text-white overflow-hidden px-6 md:px-16 py-12 md:py-0">

     
      <div className="relative w-full md:w-2/3 space-y-6 md:ml-12 mt-8 md:mt-0 md:mb-8 text-center md:text-left">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm mx-auto md:mx-0">
          <span><MoonIcon className="w-4 h-4" /></span>
          <span>Sandhya Timalsena</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-gray-100">
          Crafting Modern <br className="hidden sm:block" />
          Web Applications, <br className="hidden sm:block" />
          and Seamless Experience!
        </h1>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto md:mx-0">
          With expertise in both frontend and backend development, I build robust, scalable web applications using modern technologies like React, Django, and MongoDB.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 sm:gap-8">
          <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
            I'm Resume
          </button>

          <div className="flex justify-center md:justify-start items-center gap-6 text-gray-300 hover:text-white transition-all">
            <Instagram className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <Facebook className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <GithubIcon className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <LucideLinkedin className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

      
      <div className="relative w-full md:w-1/2 lg:w-1/3 h-80 sm:h-96 md:h-full flex justify-center mb-12 items-center pointer-events-none">
        <Canvas
          style={{
            width: "100%",
            height: "100%",
            zIndex: 1,
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
              <Rocket className="mr-2" />
              About Me
            </div>

            <h1 className="text-3xl font-medium text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
              I'm <span className="text-yellow-200">Sandhya Timalsena</span>, 
              I dont know what to do with you man!!
             
            </h1>

          </div>
        </div>
      </section>

      <Projects />

      <Questions/>

      



    </div>
  );
};

export default Home;
