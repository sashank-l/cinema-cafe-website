"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Film } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "MENU", href: "#menu" },
  { label: "ABOUT", href: "#about" },
  { label: "GALLERY", href: "#gallery" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-0" : "py-2"
        }`}
      >
        {/* The Vintage Marquee Ribbon */}
        <div className="bg-vintage-red border-y-4 border-vintage-ink shadow-poster-heavy w-full">
          {/* Ticker Tape Background (Optional subtle animation could go here) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer bg-vintage-yellow border-4 border-vintage-ink px-3 py-1 -skew-x-6 shadow-[4px_4px_0px_#1A1512]"
              whileHover={{ scale: 1.05, rotate: -2 }}
              onClick={() => handleNavClick("#home")}
            >
              <Film size={20} className="text-vintage-ink" />
              <span className="font-bebas text-2xl md:text-3xl tracking-widest text-vintage-ink mt-1">
                CINEMA CAFE
              </span>
            </motion.div>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="relative text-vintage-cream hover:text-vintage-yellow font-bebas text-2xl tracking-widest transition-colors duration-200 group drop-shadow-[2px_2px_0px_#1A1512]"
                  >
                    {link.label}
                    <span className="absolute -bottom-2 left-0 h-1 bg-vintage-yellow w-0 group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-vintage-cream bg-vintage-ink p-2 border-2 border-vintage-cream shadow-[4px_4px_0px_rgba(255,255,255,0.2)]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-vintage-paper border-b-4 border-vintage-ink px-6 py-8 flex flex-col gap-6 md:hidden shadow-poster-heavy"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavClick(link.href)}
                className="text-left font-bebas text-4xl text-vintage-ink hover:text-vintage-red tracking-widest border-b-2 border-vintage-ink/20 pb-2 drop-shadow-[2px_2px_0px_rgba(179,36,0,0.1)]"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
