"use client";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Moon from "./moon/page";
import { Atom, Book, BookA, Bot, Brain, Camera, ChevronDown, Facebook, Figma, Flame, FlameIcon, Flower, GithubIcon, Handshake, HandshakeIcon, Heart, Instagram, KeyRound, Leaf, LucideLinkedin, MoonIcon, MoveDownRight, MoveUpIcon, MoveUpRight, Music, Rocket, RocketIcon, Settings, ShellIcon, Shield, ShieldPlus, Sparkle, SparkleIcon, Star, Type } from "lucide-react";
import Stars from "@/components/Stars";
import Projects from "@/components/Projects";
import Questions from "@/components/Questions";


const Home = () => {

  return (
    <div className="bg-white ">
      <section className="relative flex flex-col-reverse md:flex-row justify-between items-center h-auto md:h-screen w-full bg-[#070707] text-white overflow-hidden px-6 md:px-16 py-12 md:py-0">

       <div className="relative w-full md:w-2/3 space-y-6 md:ml-12 -mt-20  md:mt-8 lg:mt-4 mb-8 md:mb-8 text-center md:text-left overflow-visible">


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


        <div className="relative w-full md:w-1/2 lg:w-1/3 h-100  md:h-full flex justify-center mb-0 -mt-24  items-center pointer-events-none">
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
      <section className="relative h-full sm:pb-16 lg:py-8 overflow-hidden">

        {/* <img
          src="/leaf_right.png"
          alt="element"
          className="absolute top-10 right-0 w-40  md:w-48 opacity-90 pointer-events-none select-none"
        /> */}

        <div className="absolute -top-3 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-full h-[80px] md:h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#070707"
              fillOpacity="1"
              d="M0,320L60,314.7C120,309,240,299,360,288C480,277,600,267,720,224C840,181,960,107,1080,85.3C1200,64,1320,128,1380,192L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-6xl mx-auto mb-12 sm:mb-10 lg:mb-12">


            <div className="inline-flex items-center mt-28 md:mt-18 backdrop-blur-sm bg-white border border-black font-medium hover:bg-black hover:text-white transition px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:mb-4 shadow-sm">
              <Rocket className="mr-2" />
              About Me
              <FlameIcon className="ml-2" />
            </div>

            {/* <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-4">
                I enjoy working with modern web technologies and bringing ideas to life on screen.
                </p> */}

            <div className="hidden md:flex flex-col sm:flex-row items-center justify-center gap-16 mt-8">

              <div className="bg-white rounded-lg shadow-2xl transform rotate-6 border w-72 pb-6 transition hover:rotate-3 hover:-translate-y-2">
                <img
                  src="/Resume.png"
                  alt="resume"
                  className="rounded-t-md object-cover w-full h-64"
                />
                <p className="text-center text-sm font-medium mt-2 text-gray-700">
                  Image 1
                </p>
              </div>


              <div className="bg-white rounded-lg shadow-2xl transform -rotate-3 border w-72 pb-6 transition hover:rotate-0 hover:-translate-y-2">
                <img
                  src="/MedAhead.png"
                  alt="medahead"
                  className="rounded-t-md object-cover w-full h-64"
                />
                <p className="text-center text-sm font-medium mt-2 text-gray-700">
                  Image 2
                </p>
              </div>


              <div className="bg-white rounded-lg shadow-2xl transform -rotate-6 border w-72 pb-6 transition hover:rotate-3 hover:-translate-y-2">
                <img
                  src="/AppleTales.png"
                  alt="appletales"
                  className="rounded-t-md object-cover w-full h-64"
                />
                <p className="text-center text-sm font-medium mt-2 text-gray-700">
                  Image 3
                </p>
              </div>
            </div>



            <div className="mt-16 text-center max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
                Hello, I'm <span className="text-black font-semibold">Sandhya Timalsena</span>
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 px-4">
                I'm a passionate <span className="font-semibold text-black">Web Developer</span> who loves designing and building
                visually appealing, responsive, and user-focused websites. My goal is to craft digital experiences that
                feel effortless yet impactful — combining creativity and clean code to tell a meaningful story through design.
              </p>
              {/* <p className="text-gray-600 text-base sm:text-lg leading-relaxed px-4">
                I enjoy working with modern web technologies and bringing ideas to life on screen. Whether it's a
                personal portfolio, a dynamic web app, or an eCommerce platform, I strive to make each project
                not just functional — but memorable.
              </p> */}


              <div className="mt-12">
                <a
                  href="contact"
                  className="inline-flex items-center bg-black text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition"

                >
                  Let's Connect
                  <HandshakeIcon className="ml-2" />
                </a>
              </div>
            </div>


          </div>
        </div>


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





    </div>
  );
};

export default Home;
