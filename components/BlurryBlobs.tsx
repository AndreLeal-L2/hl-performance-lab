"use client";

import { motion } from "framer-motion";

export default function BlurryBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 - Top Left - reduzido para mobile */}
      <motion.div
        className="blurry-blob w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#8A2BE2]/60 top-[-150px] left-[-100px] md:top-[-200px] md:left-[-150px]"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Blob 2 - Bottom Right */}
      <motion.div
        className="blurry-blob w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#A855F7]/50 bottom-[-100px] right-[-50px] md:bottom-[-150px] md:right-[-100px]"
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Blob 3 - Center - mais sutil */}
      <motion.div
        className="blurry-blob w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#7C3AED]/30 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        animate={{
          x: ["-50%", "-45%", "-50%"],
          y: ["-50%", "-55%", "-50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      
      {/* Blob 4 - Middle Right */}
      <motion.div
        className="blurry-blob w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#8B5CF6]/40 top-[35%] right-[10%] md:top-[30%] md:right-[15%]"
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Blob 5 - Top Right - oculto em mobile para performance */}
      <motion.div
        className="hidden md:block blurry-blob w-[400px] h-[400px] bg-[#A855F7]/50 top-[-100px] right-[-50px]"
        animate={{
          x: [0, 15, 0],
          y: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      {/* Blob 6 - Top Center - oculto em mobile */}
      <motion.div
        className="hidden md:block blurry-blob w-[500px] h-[500px] bg-[#9333EA]/40 top-[-150px] left-[30%]"
        animate={{
          x: [0, -15, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
}
