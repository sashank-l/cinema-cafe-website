"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function CoffeeCup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Cup body */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.55, 0.4, 1.1, 48]} />
        <meshStandardMaterial color="#1E1E1E" roughness={0.3} metalness={0.5} />
      </mesh>

      {/* Cup rim gold ring */}
      <mesh position={[0, 0.45, 0]}>
        <torusGeometry args={[0.55, 0.04, 12, 48]} />
        <meshStandardMaterial color="#C9A36A" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Coffee liquid */}
      <mesh position={[0, 0.38, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.04, 48]} />
        <meshStandardMaterial color="#3D1C02" roughness={0.05} />
      </mesh>

      {/* Foam */}
      <mesh position={[0, 0.43, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.18, 0.06, 8, 24]} />
        <meshStandardMaterial color="#E8D5B0" roughness={0.9} />
      </mesh>

      {/* Handle */}
      <mesh position={[0.7, 0.0, 0]}>
        <torusGeometry args={[0.22, 0.04, 12, 24, Math.PI]} />
        <meshStandardMaterial color="#C9A36A" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Saucer */}
      <mesh position={[0, -0.72, 0]}>
        <cylinderGeometry args={[0.82, 0.75, 0.1, 48]} />
        <meshStandardMaterial color="#2A2A2A" roughness={0.3} metalness={0.4} />
      </mesh>

      {/* Saucer rim */}
      <mesh position={[0, -0.67, 0]}>
        <torusGeometry args={[0.78, 0.03, 12, 48]} />
        <meshStandardMaterial color="#C9A36A" metalness={0.9} roughness={0.15} />
      </mesh>
    </group>
  );
}

export default function ThreeCoffeeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 3.5], fov: 40 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      dpr={[1, 1.5]}
    >
      {/* Lights only — no Environment HDR which causes network requests */}
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={3} color="#E8C97F" />
      <pointLight position={[-3, -1, 2]} intensity={1} color="#C9A36A" />
      <pointLight position={[0, -3, 2]} intensity={0.5} color="#6C8F6E" />
      <Float
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={0.6}
        floatingRange={[-0.05, 0.05]}
      >
        <CoffeeCup />
      </Float>
    </Canvas>
  );
}
