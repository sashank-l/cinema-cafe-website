"use client";

import { motion } from "framer-motion";

interface AnimatedBlobProps {
  className?: string;
  color?: string;
  size?: string;
  delay?: number;
  duration?: number;
}

export default function AnimatedBlob({
  className = "",
  color = "rgba(201, 163, 106, 0.12)",
  size = "400px",
  delay = 0,
  duration = 8,
}: AnimatedBlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
      }}
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "50% 50% 50% 50% / 50% 50% 50% 50%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
