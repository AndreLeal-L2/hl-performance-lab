"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

export default function LogosSection() {
  const logos = [
    { name: "Marca Parceira 1" },
    { name: "Marca Parceira 2" },
    { name: "Marca Parceira 3" },
    { name: "Marca Parceira 4" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <p className="text-center text-white/40 text-sm uppercase tracking-widest mb-12">
            Marcas que Confiam no Nosso Método
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <motion.div
                className="logo-placeholder aspect-[3/2] rounded-xl flex items-center justify-center p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white/30 font-display text-sm tracking-wider uppercase">
                  {logo.name}
                </span>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
