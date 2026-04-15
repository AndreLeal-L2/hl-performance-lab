"use client";

import { motion } from "framer-motion";

export default function BlurryBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 - Top Left */}
      <motion.div
        className="blurry-blob w-[800px] h-[800px] bg-[#8A2BE2] top-[-300px] left-[-200px] opacity-80"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Blob 2 - Bottom Right */}
      <motion.div
        className="blurry-blob w-[500px] h-[500px] bg-[#A855F7] bottom-[-150px] right-[-100px]"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Blob 3 - Center (subtle) */}
      <motion.div
        className="blurry-blob w-[500px] h-[500px] bg-[#7C3AED] top-[40%] left-[30%] translate-x-[-50%] translate-y-[-50%] opacity-40"
        animate={{
          x: ["-50%", "-45%", "-50%"],
          y: ["-50%", "-55%", "-50%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      
      {/* Blob 4 - Middle Right */}
      <motion.div
        className="blurry-blob w-[350px] h-[350px] bg-[#8B5CF6] top-[30%] right-[15%] opacity-50"
        animate={{
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Blob 5 - Top Right (mais luz no topo) */}
      <motion.div
        className="blurry-blob w-[500px] h-[500px] bg-[#A855F7] top-[-150px] right-[-100px] opacity-70"
        animate={{
          x: [0, 20, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      {/* Blob 6 - Top Center (ilumina área de scroll) */}
      <motion.div
        className="blurry-blob w-[600px] h-[600px] bg-[#9333EA] top-[-200px] left-[30%] opacity-60"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
}
