"use client";

import { Star } from "lucide-react";

export interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number;
  avatar: string;
  role?: string;
}

export default function TestimonialCard({
  name,
  review,
  rating,
  avatar,
  role = "Customer",
}: TestimonialCardProps) {
  // Select a random rotation for a scattered ticket look
  const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "rotate-0"];
  const randomRot = rotations[name.length % rotations.length];

  return (
    <div
      className={`poster-card p-6 flex flex-col gap-4 min-w-[300px] md:min-w-[360px] ${randomRot} bg-vintage-cream relative overflow-hidden`}
    >
      {/* Decorative Ticket Punches */}
      <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-vintage-paper border-r-4 border-vintage-ink drop-shadow-[inset_2px_0px_0px_#1A1512]"></div>
      <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-vintage-paper border-l-4 border-vintage-ink drop-shadow-[inset_-2px_0px_0px_#1A1512]"></div>

      {/* Stars */}
      <div className="flex gap-1 border-b-2 border-vintage-ink/20 pb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? "text-vintage-red fill-vintage-red" : "text-vintage-ink/20"}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-vintage-ink font-baloo font-bold text-lg leading-snug italic my-2">
        "{review}"
      </p>

      {/* Author Strip */}
      <div className="flex items-center gap-3 mt-auto pt-4 border-t-4 border-vintage-ink border-dashed">
        <div
          className="w-12 h-12 border-2 border-vintage-ink bg-vintage-yellow flex items-center justify-center text-vintage-red font-bebas text-2xl shrink-0 shadow-[2px_2px_0px_#1A1512]"
        >
          {avatar}
        </div>
        <div>
          <p className="text-vintage-ink font-bebas text-2xl tracking-wide leading-none">{name}</p>
          <p className="text-vintage-red font-baloo font-bold text-xs uppercase tracking-wider">{role}</p>
        </div>
      </div>
    </div>
  );
}
