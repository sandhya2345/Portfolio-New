"use client";

import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, AdditiveBlending } from "three";

const Moon = () => {
  const moonRef = useRef();
  const texture = useLoader(TextureLoader, "/images/moon.jpg");

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.002; 
    }
  });

  return (
    <>
      {/* Main Moon */}
      <mesh ref={moonRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          emissive={0xaaaaaa}      
          emissiveIntensity={0.1}  
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.12, 32, 32]} />
        <meshBasicMaterial
          color={0xffffff}
          transparent
          opacity={0.01}      
          blending={AdditiveBlending} 
        />
      </mesh>

     
      <ambientLight intensity={0.3} />
    </>
  );
};

export default Moon;
