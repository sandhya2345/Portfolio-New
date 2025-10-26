"use client";
import { Rocket, FlameIcon, HandshakeIcon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

export default function About() {

    return (

        <section className="relative h-full sm:pb-16 lg:py-8 overflow-hidden">

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

                    <div className="hidden md:flex flex-col sm:flex-row items-center justify-center gap-16 mt-8">

                        <div className="bg-white rounded-lg shadow-2xl transform rotate-6 border w-72 pb-6 transition hover:rotate-3 hover:-translate-y-2">
                            <Image
                                src="/Resume.png"
                                alt="Professional Resume preview"
                                width={800}
                                height={400}
                                className="rounded-t-md object-cover w-full h-64"
                                priority
                            />
                            <p className="text-center text-sm font-medium mt-2 text-gray-700">
                                Image 1
                            </p>
                        </div>


                        <div className="bg-white rounded-lg shadow-2xl transform -rotate-3 border w-72 pb-6 transition hover:rotate-0 hover:-translate-y-2">
                            <Image
                                src="/MedAhead.png"
                                alt="MedAhead project preview"
                                width={800}
                                height={400}
                                className="rounded-t-md object-cover w-full h-64"
                                priority
                            />
                            <p className="text-center text-sm font-medium mt-2 text-gray-700">
                                Image 2
                            </p>
                        </div>


                        <div className="bg-white rounded-lg shadow-2xl transform -rotate-6 border w-72 pb-6 transition hover:rotate-3 hover:-translate-y-2">
                            <Image
                                src="/AppleTales.png"
                                alt="AppleTales project preview"
                                width={800}
                                height={400}
                                className="rounded-t-md object-cover w-full h-64"
                                priority
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
        </section>

    );
}
