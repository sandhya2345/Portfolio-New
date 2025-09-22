"use client";
import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Moon = () => {
  const moonRef = useRef();
  const texture = useLoader(TextureLoader, "/images/moon.jpg"); 

  useFrame(() => {
    moonRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={moonRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Moon;
