"use client";

import { motion } from "framer-motion";
import { MouseEvent, useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { label: "Planos", href: "#planos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Relatos Reais", href: "#relatos" },
    { label: "Contacto", href: "#contacto" },
  ];

  const handleAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
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
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleAnchorClick(event, item.href)}
              className="text-white/60 hover:text-white text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#planos"
          onClick={(event) => handleAnchorClick(event, "#planos")}
          className="hidden sm:block bg-[#8A2BE2] hover:bg-[#7C3AED] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Começar agora
        </motion.a>
      </div>
    </motion.header>
  );
}
