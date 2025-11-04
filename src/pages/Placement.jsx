import React from "react";
import { motion } from "framer-motion";
export default function Placement() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/backgrounds/placement.svg"
          className="w-full h-full object-cover"
          alt="placement"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 -z-5"></div>
      <motion.div
        className="relative max-w-5xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Placement Bridge
        </h2>
        <p className="text-3xl font-bold text-white mb-6 text-center">
          We connect trained talent with organizations through structured hiring
          programs and support.
        </p>
      </motion.div>
    </div>
  );
}
