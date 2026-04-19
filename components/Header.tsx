"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { label: "Planos", targetId: "planos" },
    { label: "Sobre", targetId: "sobre" },
    { label: "Relatos Reais", targetId: "relatos" },
    { label: "Contacto", targetId: "contacto" },
  ];

  const scrollToSection = (targetId: string) => {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const headerOffset = 112;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: targetTop, behavior: "smooth" });
    window.history.pushState(null, "", `#${targetId}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#030303]/60 backdrop-blur-md border-b border-white/5" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="HL Performance" 
            className="h-20 w-auto object-contain brightness-125 contrast-110"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.targetId}
              type="button"
              onClick={() => scrollToSection(item.targetId)}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors bg-transparent border-0 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          type="button"
          onClick={() => scrollToSection("planos")}
          className="hidden sm:block bg-[#8A2BE2] hover:bg-[#7C3AED] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Começar agora
        </motion.button>
      </div>
    </motion.header>
  );
}
