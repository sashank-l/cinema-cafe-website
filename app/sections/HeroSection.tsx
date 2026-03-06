"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

// Sample vintage Telugu movie posters & related imagery for the collage
const posters = [
  { src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80", col: "col-span-2", row: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=800&q=80", col: "col-span-1", row: "row-span-1" },
  { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80", col: "col-span-1", row: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80", col: "col-span-1", row: "row-span-1" },
  { src: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&q=80", col: "col-span-2", row: "row-span-1" },
  { src: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80", col: "col-span-1", row: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1440404653325-ab127f49abc3?w=800&q=80", col: "col-span-1", row: "row-span-1" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yFast = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yUp = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-vintage-paper flex items-center justify-center pt-20"
    >
      {/* Background Poster Collage (CSS Grid) */}
      <div className="absolute inset-0 opacity-40 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-2 md:p-4 rotate-1 scale-110 pointer-events-none">
        
        {/* Column 1 (Moves Down Fast) */}
        <motion.div style={{ y: yFast }} className="flex flex-col gap-1 w-full h-[150vh] -mt-[20vh]">
           <img src={posters[0].src} className="w-full h-80 object-cover border-4 border-vintage-ink sepia-[.3] contrast-125" alt="" />
           <img src={posters[1].src} className="w-full h-96 object-cover border-4 border-vintage-ink sepia-[.3] contrast-125 saturate-150" alt="" />
           <img src={posters[2].src} className="w-full h-72 object-cover border-4 border-vintage-ink sepia-[.3] contrast-125 hue-rotate-15" alt="" />
        </motion.div>

        {/* Column 2 (Moves Up) */}
        <motion.div style={{ y: yUp }} className="hidden md:flex flex-col gap-1 w-full h-[150vh]">
           <div className="w-full h-64 bg-vintage-red border-4 border-vintage-ink flex items-center justify-center p-4 text-center">
             <h3 className="font-bebas text-5xl text-vintage-yellow">NOW SHOWING</h3>
           </div>
           <img src={posters[3].src} className="w-full h-[500px] object-cover border-4 border-vintage-ink sepia-[.4] contrast-150" alt="" />
           <img src={posters[4].src} className="w-full h-80 object-cover border-4 border-vintage-ink sepia-[.2] contrast-125" alt="" />
        </motion.div>

        {/* Column 3 (Moves Down Slow) */}
        <motion.div style={{ y: ySlow }} className="flex flex-col gap-1 w-full h-[150vh] -mt-[10vh]">
           <img src={posters[5].src} className="w-full h-[450px] object-cover border-4 border-vintage-ink sepia-[.3] contrast-125 hue-rotate-[-20deg]" alt="" />
           <div className="w-full h-72 bg-vintage-blue border-4 border-vintage-ink flex items-center justify-center p-4 text-center">
             <h3 className="font-baloo font-bold text-4xl text-vintage-cream text-stroke">క్లాసిక్</h3>
           </div>
           <img src={posters[6].src} className="w-full h-96 object-cover border-4 border-vintage-ink sepia-[.3] contrast-125" alt="" />
        </motion.div>

        {/* Column 4 (Moves Up) */}
        <motion.div style={{ y: yUp }} className="hidden lg:flex flex-col gap-1 w-full h-[150vh] -mt-[30vh]">
           <img src={posters[1].src} className="w-full h-96 object-cover border-4 border-vintage-ink sepia-[.3] contrast-125" alt="" />
           <img src={posters[3].src} className="w-full h-80 object-cover border-4 border-vintage-ink sepia-[.3] contrast-125" alt="" />
           <div className="w-full h-[400px] bg-vintage-yellow border-4 border-vintage-ink flex items-center justify-center p-4 text-center">
             <h3 className="font-bebas text-7xl text-vintage-red leading-none break-words">HOUSE<br/>FULL</h3>
           </div>
        </motion.div>

        {/* Column 5 (Moves Down Fast) */}
        <motion.div style={{ y: yFast }} className="hidden lg:flex flex-col gap-1 w-full h-[150vh]">
           <img src={posters[2].src} className="w-full h-72 object-cover border-4 border-vintage-ink sepia-[.3] contrast-125" alt="" />
           <div className="w-full h-64 bg-vintage-orange border-4 border-vintage-ink flex items-center justify-center p-4"></div>
           <img src={posters[4].src} className="w-full h-[500px] object-cover border-4 border-vintage-ink sepia-[.3] contrast-125 saturate-200" alt="" />
        </motion.div>
      </div>

      {/* Central Content Box (The Main Marquee) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.8 }}
          className="poster-card bg-vintage-yellow p-8 md:p-12 text-center relative"
        >
          {/* Decorative Corner Pins */}
          <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-vintage-ink shadow-sm"></div>
          <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-vintage-ink shadow-sm"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-vintage-ink shadow-sm"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-vintage-ink shadow-sm"></div>

          <span className="inline-block font-baloo font-bold text-vintage-red text-xl md:text-2xl tracking-wide mb-2">
            స్వాగతం — రండి, ఆస్వాదించండి
          </span>
          
          <h1 className="font-bebas text-7xl md:text-9xl text-vintage-red leading-[0.8] mb-6 drop-shadow-[4px_4px_0px_#1A1512]">
            CINEMA
            <br />
            <span className="text-vintage-blue text-stroke">CAFE</span>
          </h1>

          <div className="w-full h-2 bg-vintage-ink my-8 mx-auto max-w-sm slanted-stripes"></div>

          <p className="text-vintage-ink text-xl md:text-2xl font-baloo font-bold mb-10 max-w-xl mx-auto leading-tight">
            A BLOCKBUSTER DINING EXPERIENCE IN MOGHALRAJAPURAM. SAVOUR COFFEE, BIRYANI, AND FAST FOOD IN A TRUE THEATRE LOBBY ATMOSPHERE.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={scrollToMenu} className="btn-vintage">
              VIEW MENU
            </button>
            <a href="#contact" className="btn-vintage-outline bg-vintage-cream text-vintage-red">
              BOOK A TABLE
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-vintage-ink flex flex-col items-center gap-2 bg-vintage-yellow px-4 py-2 border-2 border-vintage-ink shadow-[4px_4px_0px_#1A1512] -rotate-3"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-bebas text-xl tracking-widest text-stroke">SCROLL</span>
        <ChevronDown size={24} className="text-vintage-red stroke-[3px]" />
      </motion.div>
    </section>
  );
}
