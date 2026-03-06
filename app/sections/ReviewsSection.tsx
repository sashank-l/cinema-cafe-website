"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Sai Krishna",
    review: "Food is so tasty and service is good. Ambience is so nice — really felt like dining inside a movie! Best cafe in Vijayawada. The Special Chicken Biryani was absolutely amazing.",
    rating: 5,
    avatar: "SK",
    role: "Google Maps Review",
  },
  {
    name: "Priya Reddy",
    review: "Lovely ambience and the Vanilla Ice Cream with Espresso is absolutely unique. Great place to chill with friends after college. Staff very friendly and attentive.",
    rating: 5,
    avatar: "PR",
    role: "Google Maps Review",
  },
  {
    name: "Ravi Teja Varma",
    review: "The Cinema Cafe Special Veg Burger and milkshake combo is unbeatable at this price. Very affordable at ₹450 for two and quick service. Coming back every week!",
    rating: 4,
    avatar: "RV",
    role: "Justdial Review",
  },
  {
    name: "Divya Lakshmi",
    review: "Came for a birthday celebration — staff were super helpful and the Ulavacharu Chicken Biryani was outstanding. Highly recommend for group outings. Parking is easy too.",
    rating: 5,
    avatar: "DL",
    role: "Google Maps Review",
  },
  {
    name: "Kiran Babu",
    review: "The cinema decor with Telugu film legends on the walls is so unique. Food quality is consistent. The Paneer 65 and Schezwan Noodles are must-haves here.",
    rating: 5,
    avatar: "KB",
    role: "Zomato Review",
  },
  {
    name: "Ananya Singh",
    review: "One of the best places in Moghalrajapuram. Chicken Lollipop was crispy and well-spiced. Interior has a warm cinematic feel. Loved the Omelette Pizza — very unique!",
    rating: 5,
    avatar: "AS",
    role: "Google Maps Review",
  },
  {
    name: "Naresh Kumar",
    review: "Been here 4-5 times now. The Dragon Chicken is my go-to starter every time. Great variety on the menu, good portions, and priced right for everyday visits.",
    rating: 4,
    avatar: "NK",
    role: "EazyDiner Review",
  },
  {
    name: "Sunitha Rao",
    review: "Elegantly designed interiors with warm lighting. The Kaju Paneer Biryani is fragrant and filling. Perfect spot for a quiet coffee date or a family dinner.",
    rating: 5,
    avatar: "SR",
    role: "Google Maps Review",
  },
];

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollBy = (dir: number) => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = el.clientWidth > 768 ? el.clientWidth / 2 : el.clientWidth * 0.8;
      el.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="reviews" className="py-24 bg-vintage-red relative overflow-hidden border-b-8 border-vintage-ink">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjRThEQ0M0Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMxQTE1MTIiPjwvcmVjdD4KPC9zdmc+')] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-vintage-ink/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-vintage-yellow border-4 border-vintage-ink text-vintage-ink font-bebas text-2xl tracking-widest px-8 py-2 -rotate-2 shadow-[4px_4px_0px_#1A1512] mb-6">
             ప్రేక్షకుల స్పందన
          </div>
          <h2 className="section-heading text-vintage-cream drop-shadow-[4px_4px_0px_#1A1512]">
            AUDIENCE REVIEWS
          </h2>
          <p className="font-baloo font-bold text-vintage-cream/90 text-xl md:text-2xl mt-4 max-w-xl mx-auto">
            BLOCKBUSTER RATINGS FROM REAL VISITORS. 
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Faux Tape on Carousel Edges */}
          <div className="absolute -top-4 -left-2 w-16 h-8 bg-vintage-cream/80 border-2 border-vintage-ink shadow-sm rotate-[15deg] z-20 hidden md:block pointer-events-none" />
          <div className="absolute -bottom-4 right-10 w-16 h-8 bg-vintage-cream/80 border-2 border-vintage-ink shadow-sm -rotate-6 z-20 hidden md:block pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-10 pt-4 px-4 scroll-smooth snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="snap-center shrink-0 w-[85vw] sm:w-[400px]"
              >
                <TestimonialCard {...r} />
              </motion.div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-between absolute top-1/2 -left-4 -right-4 md:-left-12 md:-right-12 -translate-y-1/2 pointer-events-none">
            <button
              onClick={() => scrollBy(-1)}
              disabled={!canScrollLeft}
              className={`pointer-events-auto w-14 h-14 bg-vintage-yellow border-4 border-vintage-ink flex items-center justify-center text-vintage-ink shadow-[4px_4px_0px_#1A1512] hover:bg-vintage-cream transition-all -rotate-3 ${
                !canScrollLeft ? "opacity-0 cursor-default" : "opacity-100"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={32} className="stroke-[3px] -ml-1" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              disabled={!canScrollRight}
              className={`pointer-events-auto w-14 h-14 bg-vintage-yellow border-4 border-vintage-ink flex items-center justify-center text-vintage-ink shadow-[4px_4px_0px_#1A1512] hover:bg-vintage-cream transition-all rotate-3 ${
                !canScrollRight ? "opacity-0 cursor-default" : "opacity-100"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight size={32} className="stroke-[3px] -mr-1" />
            </button>
          </div>
        </div>

        {/* Platform Ratings - Poster Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-vintage-cream border-4 border-vintage-ink p-2 shadow-[8px_8px_0px_#1A1512] rotate-1"
        >
          <div className="border-2 border-vintage-ink border-dashed p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x-4 divide-vintage-ink divide-dashed">
            {[
              { platform: "Google Maps", rating: "4.7", icon: "🗺️", count: "200+ REVIEWS" },
              { platform: "Zomato", rating: "4.3", icon: "🍽️", count: "DINING" },
              { platform: "Justdial", rating: "4.4", icon: "📱", count: "VERIFIED" },
              { platform: "EazyDiner", rating: "4.0+", icon: "🍴", count: "LISTED" },
            ].map((p, idx) => (
              <div key={p.platform} className={`text-center flex flex-col items-center pt-4 sm:pt-0 ${idx !== 0 ? 'sm:pl-6' : ''}`}>
                <div className="text-3xl mb-2 drop-shadow-sm">{p.icon}</div>
                <p className="text-vintage-red font-bebas text-5xl tracking-wider leading-none">{p.rating}★</p>
                <p className="text-vintage-ink font-baloo font-bold text-sm mt-2 uppercase">{p.platform}</p>
                <p className="text-vintage-ink/60 font-bebas text-lg tracking-widest">{p.count}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
