"use client";

import { motion } from "framer-motion";
import GalleryGrid, { GalleryItem } from "@/components/GalleryGrid";

const galleryItems: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop",
    alt: "Coffee being brewed",
    caption: "ARTISAN COFFEE",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop",
    alt: "Gourmet burger",
    caption: "SIGNATURE BURGERS",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop",
    alt: "Cozy cafe interior",
    caption: "THEATRE AMBIENCE",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop",
    alt: "Friends enjoying coffee",
    caption: "GOOD TIMES",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop",
    alt: "Gourmet food plating",
    caption: "CONTINENTAL",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop",
    alt: "Food spread",
    caption: "EVERY MEAL A SCENE",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1602253057119-44d745d9b860?w=600&auto=format&fit=crop",
    alt: "Dessert plating",
    caption: "SWEET ENDINGS",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop",
    alt: "Latte art",
    caption: "LATTE ART",
    span: "tall",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-vintage-yellow relative overflow-hidden border-b-8 border-vintage-ink">
      {/* Torn Edge Top */}
      <div 
        className="absolute top-0 left-0 right-0 h-4 md:h-6 bg-vintage-ink rotate-1 scale-110 origin-left z-20"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 95% 100%, 90% 70%, 85% 100%, 80% 80%, 75% 100%, 70% 70%, 65% 100%, 60% 80%, 55% 100%, 50% 70%, 45% 100%, 40% 80%, 35% 100%, 30% 70%, 25% 100%, 20% 80%, 15% 100%, 10% 70%, 5% 100%, 0% 80%)" }}
      />
      
      {/* Halftone BG Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[radial-gradient(#1A1512_2px,transparent_2px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-vintage-ink text-vintage-cream font-bebas text-2xl tracking-widest px-8 py-2 rotate-2 shadow-[4px_4px_0px_#B32400] mb-6">
            గ్యాలరీ
          </div>
          <h2 className="section-heading text-vintage-ink drop-shadow-[4px_4px_0px_#B32400]">
            VISUAL STORIES
          </h2>
          <p className="font-baloo font-bold text-vintage-ink text-xl md:text-2xl mt-4 max-w-xl mx-auto tracking-wide">
            EVERY CORNER OF CINEMA CAFE TELLS A TALE.
          </p>
        </motion.div>

        {/* The overlap mosaic is handled entirely within GalleryGrid */}
        <GalleryGrid items={galleryItems} />

        <div className="w-full text-center mt-12 content-center hidden md:block">
           <span className="font-bebas text-5xl text-vintage-ink/20 opacity-50 tracking-widest">
              MORE COMING SOON...
           </span>
        </div>
      </div>
    </section>
  );
}
