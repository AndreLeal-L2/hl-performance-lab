"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { Instagram, Youtube, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "mailto:contato@hlperformance.com", label: "Email" },
  ];

  const footerLinks = [
    {
      title: "Produtos",
      links: ["Planos", "Mentoria", "Consultoria"],
    },
    {
      title: "Empresa",
      links: ["Sobre", "Blog", "Carreiras", "Contato"],
    },
    {
      title: "Legal",
      links: ["Termos", "Privacidade", "Cookies"],
    },
  ];

  return (
    <footer className="relative pt-32 pb-8 overflow-hidden">
      {/* Top Divider with Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Section */}
        <RevealOnScroll className="text-center mb-20">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Pronto para sua{" "}
            <span className="gradient-text">transformação?</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10">
            Junte-se a centenas de pessoas que já transformaram seus corpos 
            e suas vidas com constância e método certo.
          </p>
          <motion.a
            href="#planos"
            className="btn-cinematic bg-[#8A2BE2] hover:bg-[#7C3AED] text-white px-10 py-5 rounded-full font-semibold text-lg inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Comece Agora
          </motion.a>
        </RevealOnScroll>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <img 
              src="/logo.png" 
              alt="HL Performance" 
              className="h-24 w-auto object-contain mb-4 brightness-125 contrast-110"
            />
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Resultados de Leão, Constância de Pantera. Treinos personalizados 
              para pessoas que querem mudar de vida.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-white hover:border-[#8A2BE2]/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-display font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} HL Performance Lab. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Porto, Portugal</span>
          </div>
        </div>

        {/* Credits */}
        <div className="pt-4 text-center">
          <p className="text-white/50 text-xs">
            Desenvolvido por{" "}
            <a 
              href="https://arara-web.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8A2BE2] hover:text-[#A855F7] transition-colors underline underline-offset-2"
            >
              AraraWeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
