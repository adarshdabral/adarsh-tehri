"use client";

import { motion } from "framer-motion";

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      <div className="eyebrow text-white/80">
        Tehri Garhwal • Uttarakhand
      </div>

      <h1 className="mt-4 text-5xl md:text-7xl font-bold">
        Where the lake holds the sky — and the village holds the story.
      </h1>

      <p className="mt-6 max-w-xl text-white/80">
        Stay with families, walk with farmers, eat what they grew.
      </p>
    </motion.div>
  );
}