'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Figma, Github, Linkedin, Cpu, AudioLines, Play, Pause, AtomIcon, Sparkle, Panda, Sun, Rocket, Stars, Heart } from 'lucide-react'

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handlePlayClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const icons = [
    { id: 3, Icon: Panda, top: "65%", left: "10%" },
    { id: 4, Icon: Sun, top: "30%", left: "90%" },
    { id: 5, Icon: Rocket, top: "75%", left: "80%" },
    { id: 6, Icon: Stars, top: "20%", left: "20%" },
  ]

  return (
    <footer className="relative h-full mt-8 border-t border-gray-100 bg-white overflow-hidden flex flex-col justify-between items-center">

      <audio ref={audioRef} src="/audio/Audio.mp3" preload="auto" />

      {icons.map(({ id, Icon, top, left }) => (
        <div
          key={id}
          className="absolute text-gray-700 opacity-80 hover:opacity-100 transition-all"
          style={{ top, left }}
        >
          <Icon size={26} />
        </div>
      ))}

      <section className="flex items-center z-10 justify-center gap-6 mt-10">
        <AudioLines size={90} className="text-black" />

        <button onClick={handlePlayClick} className="focus:outline-none">
          {isPlaying ? (
            <Pause size={70} className="text-black" />
          ) : (
            <Play size={70} className="text-black" />
          )}
        </button>

        <AudioLines size={90} className="text-black" />
      </section>

      <section className="text-center mt-12 px-4">
        <h2 className="text-3xl sm:text-5xl mb-4">
          Are you looking for the <br />
          <span className='mt-2'> Frontend Developer?</span>
        </h2>
        <p className="text-gray-900  max-w-2xl md:max-w-3xl mt-6 mx-auto mb-6">
          Then you're in the right place. I build modern, scalable, and efficient web applications from front-end to back-end.
          Just reach out and let me help bring your ideas to life!
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <a
            href="sandhyatimalsena29@gmail.com"
            className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-80"
          >
            Email me
          </a>

          <a
            href="https/facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-400 text-white px-6 py-3 rounded-full font-medium hover:opacity-80"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-8 lg:gap-12 mb-8 text-sm sm:text-base md:text-lg text-gray-800  text-center px-4">
          <a href="#" className="hover:text-green-500 transition-colors duration-200">LinkedIn</a>
          <a href="#" className="hover:text-green-500 transition-colors duration-200">Facebook</a>
          <a href="#" className="hover:text-green-500 transition-colors duration-200">WhatsApp</a>
          <a href="#" className="hover:text-green-500 transition-colors duration-200">Instagram</a>
          <a href="#" className="hover:text-green-500 transition-colors duration-200">X</a>
          <a href="#" className="hover:text-green-500 transition-colors duration-200">Email</a>
        </div>

      </section>


      <div className="w-full mt-auto">
        <hr className="border-t border-gray-200" />
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p className="font-semibold">Made with ❤️ by Sandhya</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
