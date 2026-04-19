"use client";

import { motion } from "framer-motion";
import { Copy, ShoppingBag } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function ZumubDiscountSection() {
  const code = "HLZUMUB";

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <RevealOnScroll>
          <div className="glass-card p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#8A2BE2] flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>

            <span className="text-[#A855F7] text-sm uppercase tracking-widest font-medium">
              Desconto Zumub
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight">
              Usa o código HL Performance
            </h2>
            <p className="text-white/60 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
              Aproveita o desconto em suplementos e produtos Zumub com o código abaixo.
            </p>

            <motion.div
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#8A2BE2]/40 bg-[#8A2BE2]/10 px-6 py-4"
              whileHover={{ scale: 1.02 }}
            >
              <Copy className="w-5 h-5 text-[#C084FC]" />
              <span className="font-display text-2xl font-bold tracking-widest text-white">
                {code}
              </span>
            </motion.div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
