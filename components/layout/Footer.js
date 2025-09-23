'use client'

import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createRandomStars = (count) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 2 + 2;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        stars.push({ top, left, size, duration, delay });
      }
      return stars;
    };

    setStars(createRandomStars(150));
  }, []);

  return (
    <footer className="relative h-[70vh] bg-white overflow-hidden flex flex-col justify-center items-center text-white">
     
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
            transform: translate(-50px, -50px);
            opacity: 1;
          }
        }
      `}</style>

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
            zIndex: 0,
            animation: `moveStar ${star.duration}s linear infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

    
    </footer>
  );
};

export default Footer;
