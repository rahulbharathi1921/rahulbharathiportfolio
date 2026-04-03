import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, TorusKnot, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedShape() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * 0.1;
    ref.current.rotation.y = clock.getElapsedTime() * 0.15;
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <TorusKnot ref={ref} args={[1.5, 0.4, 256, 32]} scale={1.2}>
        <MeshDistortMaterial
          color="#3b82f6"
          speed={2}
          distort={0.3}
          wireframe
          opacity={0.35}
          transparent
        />
      </TorusKnot>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
