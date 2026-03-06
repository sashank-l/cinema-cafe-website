"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

export default function MenuCard({
  title,
  description,
  price,
  image,
  tag,
}: MenuCardProps) {
  // Select a random border color from our vintage palette
  const borderColors = [
    "border-vintage-red",
    "border-vintage-yellow",
    "border-vintage-blue",
    "border-vintage-orange",
    "border-vintage-ink",
  ];
  const randomBorder = borderColors[title.length % borderColors.length];

  return (
    <div
      className={`relative w-full h-full p-2 bg-vintage-paper border-[6px] border-vintage-ink shadow-[8px_8px_0px_#1A1512] transition-transform duration-300 hover:-translate-y-2 hover:-rotate-2 hover:shadow-[16px_16px_0px_#1A1512] group`}
    >
      {/* Inner outline frame */}
      <div className={`w-full h-full border-[6px] ${randomBorder} p-1 flex flex-col`}>
        {/* Inner thin frame */}
        <div className="w-full h-full border-2 border-vintage-ink flex flex-col relative bg-vintage-cream">
          
          {/* Top Tag - Styled like a stamped seal or sticker */}
          {tag && (
            <div className="absolute -top-3 -right-3 z-10 bg-vintage-yellow border-[3px] border-vintage-ink px-4 py-1 text-vintage-ink font-bebas text-xl rotate-3 shadow-[4px_4px_0px_#1A1512]">
              {tag}
            </div>
          )}

          {/* Image Container with vintage filters */}
          <div className="relative h-48 sm:h-56 w-full border-b-[3px] border-vintage-ink overflow-hidden bg-vintage-ink">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover sepia-[.3] contrast-125 saturate-110 brightness-90 group-hover:scale-105 group-hover:sepia-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Halftone / grain overlay to make it look printed */}
            <div 
              className="absolute inset-0 mix-blend-multiply opacity-30 pointer-events-none" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px'
              }}
            />
          </div>

          {/* Content block */}
          <div className="p-4 flex flex-col flex-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjRjRFQkQ5IiAvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRThEQ0M0IiAvPgo8L3N2Zz4=')]">
            <div className="flex justify-between items-start gap-3 mb-2">
              <h3 className="font-bebas text-3xl leading-none text-vintage-red tracking-wide drop-shadow-[1px_1px_0px_#1A1512]">
                {title}
              </h3>
              <div className="bg-vintage-ink text-vintage-yellow font-bebas text-2xl px-2 py-0.5 shadow-[2px_2px_0px_#B32400] -rotate-2 shrink-0">
                {price}
              </div>
            </div>
            
            <p className="text-vintage-ink font-baloo font-bold text-sm leading-snug flex-1 mt-1">
              {description}
            </p>

            {/* Decorative Stars block */}
            <div className="flex justify-center gap-1 mt-4 border-t border-vintage-ink/20 pt-2">
              {[1, 2, 3].map((star) => (
                <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#B32400" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#B32400"/>
                </svg>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
