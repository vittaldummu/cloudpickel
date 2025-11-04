import React from "react";
import { motion } from "framer-motion";
export default function Training() {
  const programs = [
    { title: "Full Stack Development", desc: "Build modern web apps." },
    { title: "Cloud & DevOps", desc: "CI/CD and cloud workflows." },
    { title: "Data & AI", desc: "Practical ML and data skills." },
  ];
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/backgrounds/training.svg"
          className="w-full h-full object-cover"
          alt="training"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 -z-5"></div>
      <motion.div
        className="relative max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Training Programs
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <div key={i} className="bg-white/95 rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
