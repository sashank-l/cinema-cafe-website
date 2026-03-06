"use client";

import { motion } from "framer-motion";
import { Film, Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

const quickLinks = [
  { label: "HOME", href: "#home" },
  { label: "MENU", href: "#menu" },
  { label: "ABOUT", href: "#about" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/",
    color: "#E1306C",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/",
    color: "#1877F2",
  },
  {
    icon: MapPin,
    label: "Google Maps",
    href: "https://maps.google.com/?q=Cinema+Cafe+Restaurant+Vijayawada",
    color: "#EA4335",
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-vintage-ink border-t-[8px] border-vintage-red pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b-4 border-vintage-cream/10 pb-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-vintage-yellow flex items-center justify-center">
                <Film size={20} className="text-vintage-ink" />
              </div>
              <span className="font-bebas text-3xl tracking-widest font-bold text-vintage-cream">
                CINEMA CAFE
              </span>
            </div>
            <p className="text-vintage-cream/80 font-baloo font-bold text-lg leading-relaxed mb-6">
              WHERE EVERY BITE FEELS LIKE A SCENE.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-vintage-cream border-4 border-vintage-yellow flex items-center justify-center text-vintage-ink shadow-[4px_4px_0px_#B32400] transition-colors hover:bg-vintage-yellow"
                  aria-label={s.label}
                >
                  <s.icon size={20} className="stroke-[2.5px]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bebas tracking-widest text-2xl text-vintage-yellow mb-5 drop-shadow-[2px_2px_0px_#B32400]">
              QUICK LINKS
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-vintage-cream/80 font-bebas text-xl tracking-wider hover:text-vintage-yellow transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <span className="w-0 group-hover:w-3 h-1 bg-vintage-yellow transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bebas tracking-widest text-2xl text-vintage-yellow mb-5 drop-shadow-[2px_2px_0px_#B32400]">
              FIND US
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-vintage-cream/80 font-baloo font-bold text-base">
                <MapPin size={24} className="text-vintage-yellow mt-0.5 shrink-0 stroke-[2.5px]" />
                <span>
                  D 54-18-24, Plot 61, LIC Colony Main Road,
                  <br />
                  Moghalrajapuram, Vijayawada — 520010
                </span>
              </li>
              <li className="flex items-center gap-4 text-vintage-cream/80 font-baloo font-bold text-base">
                <Phone size={24} className="text-vintage-yellow shrink-0 stroke-[2.5px]" />
                <a href="tel:+919177910617" className="hover:text-vintage-yellow transition-colors">
                  +91 91779 10617
                </a>
              </li>
              <li className="flex items-center gap-4 text-vintage-cream/80 font-baloo font-bold text-base">
                <Clock size={24} className="text-vintage-yellow shrink-0 stroke-[2.5px]" />
                <span>Mon – Sun: 11:00 AM – 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-vintage-cream/50 font-baloo font-bold text-sm">
            &copy; {new Date().getFullYear()} CINEMA CAFE & RESTAURANT. ALL RIGHTS RESERVED.
          </p>
          <p className="text-vintage-cream/50 font-baloo font-bold text-sm">
            VIJAYAWADA, ANDHRA PRADESH
          </p>
        </div>
      </div>
    </footer>
  );
}
