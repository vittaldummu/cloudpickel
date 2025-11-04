import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <div className="relative min-h-[60vh]">
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/backgrounds/about.svg"
          className="w-full h-full object-cover"
          alt="about"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 -z-5"></div>
      <motion.div
        className="relative max-w-5xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          About Cloudpickel
        </h2>
        <p className="text-white">
          Cloudpickel is a young, ambitious company focused on building
          cloud-native products, delivering practical training, and creating
          ethical hiring pathways. Our approach blends technical excellence with
          a learner-first mindset to craft solutions that matter.
        </p>
      </motion.div>
    </div>
  );
}
