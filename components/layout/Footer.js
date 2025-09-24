'use client'

import React from 'react'
import {  AtomIcon, Stars,  Rocket, Panda, Sun } from 'lucide-react'

const Footer = () => {
  const icons = [
    { id: 1, Icon: AtomIcon, top: "20%", left: "10%" },
    { id: 2, Icon: Rocket, top: "10%", left: "70%" },
    { id: 3, Icon: Panda, top: "65%", left: "20%" },
    { id: 4, Icon: Sun, top: "50%", left: "50%" },
    { id: 5, Icon: Stars, top: "75%", left: "90%" },
  ]

  return (
    <footer className="relative h-[70vh] bg-white overflow-hidden flex flex-col justify-between items-center">
  
      {icons.map(({ id, Icon, top, left }) => (
        <div
          key={id}
          className="absolute opacity-80 text-gray-700 hover:opacity-100 transition-all"
          style={{ top, left }}
        >
          <Icon size={26} />
        </div>
      ))}

    
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
