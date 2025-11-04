import React from "react";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="relative min-h-[70vh]">
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/backgrounds/home.svg"
          className="w-full h-full object-cover"
          alt="home"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 -z-5"></div>
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-6xl mx-auto px-6 py-28 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
          Empowering Innovation. Bridging Opportunity.
        </h1>
        <p className="text-white/90 max-w-3xl mx-auto mt-4">
          Cloudpickel builds products that simplify cloud operations, delivers
          practical training, and creates hiring pathways between learners and
          companies.
        </p>
        <div className="mt-8">
          <a
            href="/products"
            className="inline-block bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
          >
            Explore Products
          </a>
        </div>
      </motion.section>
    </div>
  );
}
