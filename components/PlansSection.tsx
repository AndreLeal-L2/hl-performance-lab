"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import RevealOnScroll from "./RevealOnScroll";
import { Check, Star, Zap, Users, Gift, Percent } from "lucide-react";
import { getWhatsAppUrl } from "./WhatsAppButton";

const plans = [
  {
    icon: Zap,
    name: "Iniciante",
    price: "€25",
    period: "/mês",
    description: "Perfeito para quem está começando e quer criar o hábito de treinar.",
    features: [
      "Treino personalizado",
      "Acompanhamento semanal",
      "Suporte via chat",
      "Material de apoio",
    ],
    popular: false,
  },
  {
    icon: Star,
    name: "Transformação",
    price: "€35",
    period: "/mês",
    description: "Para quem quer resultados de verdade e mudar de vez o corpo.",
    features: [
      "Tudo do Iniciante",
      "Acompanhamento diário",
      "Análise de evolução",
      "Videochamadas mensais",
    ],
    popular: true,
  },
];

export default function PlansSection() {
  return (
    <section id="planos" className="relative py-32 overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <RevealOnScroll className="text-center mb-20">
          <span className="text-[#A855F7] text-sm uppercase tracking-widest font-medium drop-shadow-sm">
            Escolha seu Plano
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 tracking-tight">
            Escolha Sua Mudança
          </h2>
          <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
            Planos que se adaptam à sua rotina e objetivos. 
            Comece do seu jeito e evolua no seu tempo.
          </p>
        </RevealOnScroll>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <GlassCard
              key={index}
              delay={index * 0.15}
              className={`relative ${plan.popular ? "md:scale-105 md:-my-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#8A2BE2] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#8A2BE2] flex items-center justify-center mb-6">
                <plan.icon className="w-6 h-6 text-white" />
              </div>

              {/* Plan Name */}
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              
              {/* Plan Price */}
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-white/40">{plan.period}</span>
              </div>

              {/* Plan Description */}
              <p className="text-white/50 text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#8A2BE2] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href={getWhatsAppUrl(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 block text-center ${
                  plan.popular
                    ? "bg-[#8A2BE2] hover:bg-[#7C3AED] text-white btn-cinematic"
                    : "glass-card hover:bg-white/5 text-white"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Começar agora
              </motion.a>
            </GlassCard>
          ))}
        </div>

        {/* Indique e Ganhe */}
        <RevealOnScroll delay={0.5} className="mt-20">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-16 h-16 rounded-full bg-[#8A2BE2] flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Indique e Ganhe
              </h3>
              <p className="text-white/60 max-w-xl mx-auto">
                Compartilhe sua transformação com amigos e ganhe benefícios exclusivos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Indique 1 amigo */}
              <motion.div 
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#8A2BE2] flex items-center justify-center mx-auto mb-4">
                  <Percent className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-display text-xl font-semibold text-white mb-2">
                  Indique 1 Amigo
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Ganhe <span className="text-[#C084FC] font-semibold">50% de desconto</span> no mês em que seu amigo entrar.
                </p>
              </motion.div>

              {/* Indique 2 amigos */}
              <motion.div 
                className="text-center p-6 rounded-2xl bg-[#8A2BE2]/10 border border-[#8A2BE2]/30"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#8A2BE2] flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-display text-xl font-semibold text-white mb-2">
                  Indique 2 Amigos
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Ganhe <span className="text-[#C084FC] font-semibold">1 MÊS GRÁTIS</span> quando 2 amigos entrarem no mesmo mês.
                </p>
              </motion.div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Guarantee */}
        <RevealOnScroll delay={0.5} className="mt-16 text-center">
          <p className="text-white/40 text-sm">
            3 dias de garantia incondicional. Não gostou? Devolvemos 100% do seu investimento.<br />
            <span className="text-white/30">Preços em Portugal (EUR). Sedeado no Porto.</span>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
