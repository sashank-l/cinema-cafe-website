"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "11:00 AM – 11:00 PM" },
  { day: "Saturday - Sunday", time: "11:00 AM – 11:00 PM" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-vintage-blue relative overflow-hidden border-b-[16px] border-vintage-ink">
      
      {/* Background Poster Grain & Elements */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-10 left-10 w-96 h-96 bg-vintage-yellow/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-vintage-cream text-vintage-ink border-4 border-vintage-ink font-bebas text-2xl tracking-widest px-8 py-2 rotate-2 shadow-[4px_4px_0px_#1A1512] mb-6">
            మమ్మల్ని సంప్రదించండి
          </div>
          <h2 className="section-heading text-vintage-cream drop-shadow-[4px_4px_0px_#1A1512]">
            VISIT THE SET
          </h2>
          <p className="font-baloo font-bold text-vintage-cream/90 text-xl md:text-2xl mt-4 max-w-lg mx-auto tracking-wide">
            LOCATED IN THE HEART OF MOGHALRAJAPURAM.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info Stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Address Ticket */}
            <div className="poster-card p-6 flex gap-6 bg-vintage-yellow -rotate-1">
              <div className="w-14 h-14 border-4 border-vintage-ink bg-vintage-cream flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1A1512] -rotate-3">
                <MapPin size={28} className="text-vintage-red stroke-[2.5px]" />
              </div>
              <div>
                <h3 className="text-vintage-red font-bebas text-3xl tracking-wider mb-1">LOCATION</h3>
                <p className="text-vintage-ink font-baloo font-bold text-lg leading-snug">
                  D 54-18-24, Plot 61,
                  <br />
                  LIC Colony Main Road, Moghalrajapuram,
                  <br />
                  Vijayawada, AP 520010
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Phone Ticket */}
              <div className="poster-card p-6 flex-1 flex flex-col gap-4 bg-vintage-cream rotate-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-4 border-vintage-ink bg-vintage-blue flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1A1512] rotate-3">
                    <Phone size={24} className="text-vintage-cream stroke-[2.5px]" />
                  </div>
                  <h3 className="text-vintage-blue font-bebas text-3xl tracking-wider">BOX OFFICE</h3>
                </div>
                <a
                  href="tel:+919177910617"
                  className="text-vintage-ink font-baloo font-bold text-xl hover:text-vintage-red transition-colors w-fit border-b-4 border-vintage-ink"
                >
                  +91 91779 10617
                </a>
              </div>

              {/* Hours Ticket */}
              <div className="poster-card p-6 flex-1 flex flex-col gap-4 bg-vintage-red text-vintage-cream -rotate-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-4 border-vintage-ink bg-vintage-yellow flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1A1512] -rotate-3">
                    <Clock size={24} className="text-vintage-ink stroke-[2.5px]" />
                  </div>
                  <h3 className="text-vintage-yellow font-bebas text-3xl tracking-wider drop-shadow-sm">SHOWTIMES</h3>
                </div>
                <ul className="space-y-2 mt-1">
                  {hours.map((h) => (
                    <li key={h.day} className="flex flex-col border-b-2 border-vintage-cream/30 pb-2">
                       <span className="font-bebas text-lg tracking-widest text-vintage-cream/80">{h.day}</span>
                       <span className="font-baloo font-bold text-xl drop-shadow-sm">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Get Directions CTA */}
            <motion.a
              href="https://www.google.com/maps/place/Cinema+Cafe+%26+Restaurant/@16.5290013,80.5865242,13z/data=!4m6!3m5!1s0x3a35fb2bb71e9733:0xebff160acc0576aa!8m2!3d16.5076259!4d80.6539314!16s%2Fg%2F11pwjp08kk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 flex items-center justify-center gap-3 btn-vintage w-full bg-vintage-cream text-vintage-blue border-vintage-blue hover:bg-vintage-blue hover:text-vintage-cream rotate-1"
            >
              <Navigation size={24} className="stroke-[2.5px]" />
              GET DIRECTIONS TO THE SET
            </motion.a>

            {/* Pricing info tape strip */}
            <div className="mx-auto mt-2 bg-vintage-ink text-vintage-yellow font-bebas text-xl tracking-widest px-6 py-1 -rotate-1 shadow-[2px_2px_0px_rgba(255,255,255,0.2)] text-center">
              AVG ₹400 FOR TWO • PARKING FOR 50+ VEHICLES
            </div>
          </motion.div>

          {/* Right: Map framed like a hoarding */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="w-full h-[400px] lg:h-full lg:min-h-[500px] p-3 bg-vintage-yellow border-[8px] border-vintage-ink shadow-[12px_12px_0px_#1A1512] rotate-1 relative"
          >
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-vintage-ink rounded-full flex items-center justify-center shadow-lg z-20">
              <div className="w-4 h-4 bg-vintage-cream rounded-full" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-vintage-ink rounded-full flex items-center justify-center shadow-lg z-20">
              <div className="w-4 h-4 bg-vintage-cream rounded-full" />
            </div>

            <div className="w-full h-full border-4 border-vintage-ink bg-vintage-ink p-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.8!2d80.6539!3d16.5076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzI3LjQiTiA4MMKwMzknMTQuMCJF!5e0!3m2!1sen!2sin!4v1609459200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "sepia(0.3) contrast(1.1) saturate(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cinema Cafe & Restaurant location on Google Maps"
                className="pointer-events-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
