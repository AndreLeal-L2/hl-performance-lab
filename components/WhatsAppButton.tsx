"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const whatsappNumber = "351928042048";

export function getWhatsAppUrl(planName?: string) {
  let message = "Olá! Gostaria de saber mais sobre os planos da HL Performance Lab.";
  
  if (planName) {
    message = `Olá! Tenho interesse no plano ${planName} da HL Performance Lab. Gostaria de saber mais detalhes.`;
  }
  
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#8A2BE2] hover:bg-[#7C3AED] text-white px-5 py-3 rounded-full font-medium shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline text-sm">Fale connosco</span>
    </motion.a>
  );
}
