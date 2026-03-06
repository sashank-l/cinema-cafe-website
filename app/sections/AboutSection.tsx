"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Film } from "lucide-react";

const highlights = [
  "సినిమా థీమ్ తో అద్భుతమైన ఇంటీరియర్",
  "Vintage Telugu film legend portraits",
  "Warm ambience for families & friends",
  "Budget-friendly menu from ₹400 for two",
  "Rated 4.7★ on Google by 200+ guests",
  "Event hosting for 10–60 guests",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-vintage-paper relative overflow-hidden border-t-8 border-b-[16px] border-vintage-ink"
    >
      {/* Background Texture Element */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjRThEQ0M0Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMxQTE1MTIiPjwvcmVjdD4KPC9zdmc+')] mix-blend-multiply" />
      <div className="absolute top-10 right-0 w-96 h-96 bg-vintage-red/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-vintage-yellow/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Vintage Poster Styled Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* The layered physical poster frame */}
            <div className="relative p-3 bg-vintage-cream border-[8px] border-vintage-ink shadow-[16px_16px_0px_#1A1512]">
              <div className="border-[6px] border-vintage-orange p-1 flex flex-col items-center bg-vintage-ink">
                
                {/* Top Banner on Poster */}
                <div className="w-full bg-vintage-yellow py-2 text-center border-b-4 border-vintage-ink">
                  <span className="font-bebas text-3xl tracking-widest text-vintage-red drop-shadow-[1px_1px_0px_#1A1512]">
                    ESTD. 2022 • VIJAYAWADA
                  </span>
                </div>

                <div className="relative w-full h-[350px] sm:h-[450px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop"
                    alt="Cinema Cafe interior ambience in Vijayawada"
                    fill
                    className="object-cover sepia-[0.4] contrast-[1.2] saturate-[1.5] brightness-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Subtle Grain over image */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjUwIDI1MCI+PGZpbHRlciBpZD0ibkF1T2YyIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMCIgbnVtT2N0YXZlcz0iMSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuQXVPZjIpIiBvcGFjaXR5PSIwLjIyIi8+PC9zdmc+')] mix-blend-overlay pointer-events-none" />
                </div>

                {/* Bottom Banner on Poster */}
                <div className="w-full bg-vintage-red py-3 text-center border-t-4 border-vintage-ink">
                  <span className="font-baloo font-bold text-2xl tracking-wide text-vintage-cream text-stroke uppercase">
                    మా థియేటర్ కి స్వాగతం
                  </span>
                </div>
              </div>

              {/* Taped/Pinned look */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-vintage-cream/80 border-2 border-vintage-ink shadow-sm rotate-3" />
            </div>

            {/* Floating rating badge - Ticket style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-vintage-yellow border-4 border-vintage-ink p-4 flex items-center gap-4 rotate-6 shadow-[8px_8px_0px_#1A1512]"
            >
              <div className="text-4xl drop-shadow-[2px_2px_0px_#1A1512]">⭐</div>
              <div className="border-l-4 border-vintage-ink border-dashed pl-4">
                <p className="text-vintage-red font-bebas text-5xl leading-none drop-shadow-[2px_2px_0px_#1A1512]">4.7</p>
                <p className="text-vintage-ink font-baloo font-bold text-xs uppercase pt-1">Google Rating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Typography Heavy Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mt-10 lg:mt-0"
          >
            <div className="inline-block bg-vintage-ink text-vintage-cream font-bebas text-2xl tracking-widest px-4 py-1 rotate-2 mb-4 shadow-[4px_4px_0px_#B32400]">
              OUR STORY
            </div>
            
            <h2 className="section-heading mb-6">
              A CULINARY SCENE
              <br />
              <span className="text-vintage-blue text-stroke">LIKE NO OTHER</span>
            </h2>
            
            <p className="text-vintage-ink font-baloo font-bold text-xl md:text-2xl leading-snug mb-6 border-l-4 border-vintage-red pl-4">
              Cinema Cafe & Restaurant is a beloved spot in Moghalrajapuram, Vijayawada, where the charm of Telugu cinema blends seamlessly with great food and coffee.
            </p>
            
            <p className="text-vintage-ink/80 font-baloo font-medium text-lg leading-relaxed mb-8">
              Whether you're catching up with friends, planning a date, or hosting a party, our warm and cinematic ambience sets the perfect mood. Our menu spans artisan coffees, Chinese cuisine, fast food classics, and continental delicacies.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 bg-vintage-cream border-2 border-vintage-ink p-3 shadow-[2px_2px_0px_#1A1512]"
                >
                  <Film size={20} className="text-vintage-red mt-0.5 shrink-0" />
                  <span className="text-vintage-ink font-baloo font-bold text-sm leading-tight">{h}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-vintage text-3xl px-12"
            >
              VISIT US TODAY
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
