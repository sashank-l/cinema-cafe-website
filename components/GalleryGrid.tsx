"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  span?: "tall" | "wide" | "normal";
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  // Rotate alternate items to simulate haphazard pasting
  const getStaticRot = (index: number) => {
    const rots = ["rotate-1", "-rotate-2", "rotate-2", "-rotate-1", "rotate-0"];
    return rots[index % rots.length];
  };

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-0 space-y-0">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className={`relative break-inside-avoid overflow-hidden cursor-pointer group poster-card bg-vintage-red hover:z-20 ${getStaticRot(i)}`}
          style={{
            height: item.span === "tall" ? "420px" : item.span === "wide" ? "240px" : "300px",
            margin: "-8px", // Negative margins for overlapping "pasted" effect
          }}
        >
          {/* Faux Tape */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-vintage-cream/60 border-2 border-vintage-ink z-10 rotate-2 shadow-sm pointer-events-none" />

          {/* Faux Poster Content */}
          <div className="absolute inset-x-0 bottom-0 bg-vintage-yellow border-t-4 border-vintage-ink flex items-center justify-center p-2 z-10">
             <span className="font-bebas text-xl md:text-2xl text-vintage-ink tracking-wide">
               {item.caption}
             </span>
          </div>

          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 sepia-[.4] contrast-150 saturate-[1.2] pb-10"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Halftone Texture Overlay */}
          <div 
            className="absolute inset-0 pb-10 mix-blend-multiply opacity-20 pointer-events-none" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
