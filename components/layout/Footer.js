'use client'

import React, { useState } from 'react'
import { AudioLines, Play, Pause } from 'lucide-react'

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const youtubeUrl = "https://www.youtube.com/watch?v=XbxNtPiCBK8&list=RDXbxNtPiCBK8&start_radio=1" 

  const handlePlayClick = () => {
    if (!isPlaying) {
      window.open(youtubeUrl, "_blank") 
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <footer className="relative h-[70vh] bg-white overflow-hidden flex flex-col justify-between items-center">

      <section className="flex items-center justify-center gap-6">
        <AudioLines size={100} className="text-black" />

        <button onClick={handlePlayClick} className="focus:outline-none">
          {isPlaying ? (
            <Pause size={70} className="text-black" />
          ) : (
            <Play size={70} className="text-black" />
          )}
        </button>

        <AudioLines size={100} className="text-black" />
      </section>

      {/* Footer bottom */}
      <div className="w-full mt-auto">
        <hr className="border-t border-gray-300" />
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p className="font-semibold">Made with ❤️ by Sandhya</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
