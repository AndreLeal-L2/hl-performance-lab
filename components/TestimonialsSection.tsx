"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Trabalho o dia todo e achava que nunca teria tempo para treinar. O método se adaptou à minha rotina e já perdi 12kg em 4 meses.",
    author: "Carlos Silva",
    role: "Vendedor, 34 anos",
    result: "-12kg",
  },
  {
    quote: "Depois de ter dois filhos, minha autoestima estava no chão. Hoje me olho no espelho e sinto orgulho da minha constância.",
    author: "Amanda Costa",
    role: "Mãe e Designer, 29 anos",
    result: "+10kg músculo",
  },
  {
    quote: "Nunca fui de academia. Comecei do zero e hoje tenho mais disposição para brincar com meus netos do que há 10 anos.",
    author: "Pedro Mendes",
    role: "Aposentado, 62 anos",
    result: "+5kg massa",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <RevealOnScroll className="text-center mb-20">
          <span className="text-[#A855F7] text-sm uppercase tracking-widest font-medium drop-shadow-sm">
            Histórias Reais
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 tracking-tight">
            Pessoas Comuns, Resultados Reais
          </h2>
        </RevealOnScroll>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={index} delay={index * 0.15}>
              <motion.div
                className="glass-card p-8 h-full flex flex-col"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-full bg-[#8A2BE2] flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Quote Text */}
                <p className="text-white/80 text-lg leading-relaxed flex-grow mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-white/50">
                      {testimonial.role}
                    </div>
                  </div>
                  
                  {/* Result Badge */}
                  <div className="px-3 py-1 rounded-full bg-[#8A2BE2]/10 border border-[#8A2BE2]/20">
                    <span className="text-xs text-[#C084FC] font-medium">
                      {testimonial.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
