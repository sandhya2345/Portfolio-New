"use client";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Moon from "@/components/Moon";
import { Atom, Book, BookA, Bot, Brain, Camera, ChevronDown, Facebook, Figma, Flame, FlameIcon, Flower, GithubIcon, Handshake, HandshakeIcon, Heart, Instagram, KeyRound, Leaf, LucideLinkedin, MoonIcon, MoveDownRight, MoveUpIcon, MoveUpRight, Music, Rocket, RocketIcon, Settings, ShellIcon, Shield, ShieldPlus, Sparkle, SparkleIcon, Star, Type } from "lucide-react";
import Stars from "@/components/Stars";
import Projects from "@/components/Projects";
import Questions from "@/components/Questions";
import { motion, useAnimation } from "framer-motion";
import About from "@/components/About";

const Home = () => {

  return (
    <div className="bg-white ">
      <section className="relative flex flex-col-reverse md:flex-row justify-between items-center h-auto md:h-[96vh] w-full bg-[#070707] text-white overflow-hidden px-6 md:px-16 py-12 md:py-0">


        <motion.div
          className="relative w-full md:w-2/3 space-y-6 md:ml-12 -mt-20  md:mt-8 lg:mt-2 mb-8 md:mb-8 text-center md:text-left overflow-visible"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span><MoonIcon className="w-4 h-4" /></span>
            <span>Sandhya Timalsena</span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Crafting Modern <br className="hidden sm:block" />
            Web Applications, <br className="hidden sm:block" />
            and Seamless Experience!
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            With expertise in both frontend and backend development, I build robust, scalable web applications using modern technologies like React, Django, and MongoDB.
          </motion.p>

          <motion.div
            className="flex flex-wrap sm:flex-row justify-center md:justify-start gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          >
            <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
              I&apos;m Resume
            </button>

            <div className="flex justify-center md:justify-start items-center gap-6 text-gray-300 hover:text-white transition-all">
              <Instagram className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <Facebook className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <GithubIcon className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <LucideLinkedin className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </motion.div>
        </motion.div>



        <div className="relative w-full md:w-1/2 lg:w-1/3 h-100 md:h-full flex justify-center mb-0 -mt-24  items-center pointer-events-none">
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


      <About />


      <section>

        <div className="grid gap-10 md:grid-cols-4 sm:grid-cols-2 max-w-6xl mx-auto py-8 px-12 md:px-0">

          <div className="text-center">
            <div className="w-32 h-32 mx-auto flex bg-green-50 rounded-2xl p-6 group-hover:bg-green-100 transition-all duration-300">
              <Atom className="w-14 h-14 text-gray-700 mx-auto mt-3" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Frontend</h3>
            <p className="mt-2 text-gray-600 text-md">
              Worked with React.js, Next.js, JavaScript, HTML, CSS, and Tailwind CSS to build responsive, user-friendly interfaces.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto flex bg-green-50 rounded-2xl p-6 group-hover:bg-green-100 transition-all duration-300">
              <Settings className="w-14 h-14 text-gray-700 mx-auto mt-3" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Backend</h3>
            <p className="mt-2 text-gray-600 text-md">
              Developed and managed APIs using Django, Node.js, and .NET, focusing on scalability and clean architecture.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto flex bg-green-50 rounded-2xl p-6 group-hover:bg-green-100 transition-all duration-300">
              <Bot className="w-14 h-14 text-gray-700  mx-auto mt-3" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Data and AI</h3>
            <p className="mt-2 text-gray-600 text-md">
              Used Python, scikit-learn, TensorFlow, and Pandas for data analysis and machine learning projects.
            </p>
          </div>


          <div className="group text-center">
            <div className="w-32 h-32 mx-auto flex bg-green-50 rounded-2xl p-6 group-hover:bg-green-100 transition-all duration-300">
              <GithubIcon className="w-14 h-14 text-gray-700 mx-auto mt-2" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Tools</h3>
            <p className="mt-2 text-gray-600 text-md">
              Experienced with Git, GitHub, VS Code, MySQL, and Postman for development and collaboration.
            </p>
          </div>

        </div>
      </section>









      <Projects />




      <Questions />

      {/* <section className="relative bg-[#070707] h-screen">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,96L48,85.3C96,75,192,53,288,85.3C384,117,480,203,576,213.3C672,224,768,160,864,144C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section> */}






    </div>
  );
};

export default Home;
