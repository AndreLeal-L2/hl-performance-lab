"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealOnScroll from "./RevealOnScroll";
import { Target, TrendingUp, Users } from "lucide-react";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const differentials = [
    {
      icon: Target,
      title: "Treinos para Você",
      description: "Sem enrolação. Treinos práticos que se encaixam na sua rotina do dia a dia.",
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento Real",
      description: "Monitoramos seu progresso de perto. Sem deixar você na mão.",
    },
    {
      icon: Users,
      title: "Comunidade Motivada",
      description: "Pessoas comuns como você, compartilhando conquistas e apoiando umas às outras.",
    },
  ];

  return (
    <section id="sobre" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Parallax Element */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-[#8A2BE2]/10 blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <RevealOnScroll>
              <span className="text-[#A855F7] text-sm uppercase tracking-widest font-medium drop-shadow-sm">
                Sobre o Método
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4 tracking-tight leading-tight">
                Ciência + Disciplina ={" "}
                <span className="gradient-text">Resultados Extraordinários</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-white/60 mt-6 text-lg leading-relaxed">
                O HL Performance Lab nasceu para pessoas como você: que querem 
                mudar o corpo, ganhar saúde e autoconfiança sem precisar viver 
                no ginásio.
              </p>
              <p className="text-white/60 mt-4 text-lg leading-relaxed">
                Nosso método é feito para o dia a dia real. Sem treinos impossíveis, 
                sem promessas absurdas. Só constância, método certo e resultados que 
                você pode ver no espelho.
              </p>
              <p className="text-white/60 mt-4 text-lg leading-relaxed">
                A consultoria pode ser feita em português, inglês ou espanhol.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right Content - Differentials */}
          <div className="space-y-6">
            {differentials.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 0.15} direction="left">
                <motion.div
                  className="glass-card p-6 flex items-start gap-5 group"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8A2BE2] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7C3AED] transition-colors">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
