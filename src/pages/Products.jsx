import React from "react";
import { motion } from "framer-motion";
const items = [
  {
    title: "CloudSuite",
    tag: "Cloud Management",
    desc: "Manage and automate cloud operations.",
    icon: "/assets/icons/cloud-tech.svg",
  },
  {
    title: "SkillTrack",
    tag: "Learning Platform",
    desc: "Track progress and certifications.",
    icon: "/assets/icons/learn-tech.svg",
  },
  {
    title: "HireLink",
    tag: "Placement Platform",
    desc: "Connect candidates with companies.",
    icon: "/assets/icons/hire-tech.svg",
  },
  {
    title: "EduConnect",
    tag: "Institution Portal",
    desc: "Manage courses and communication.",
    icon: "/assets/icons/edu-tech.svg",
  },
];
export default function Products() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/backgrounds/products.svg"
          className="w-full h-full object-cover"
          alt="products"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 -z-5"></div>
      <motion.div
        className="relative max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Our Products
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white/95 rounded-xl p-6 shadow flex gap-4 items-center"
            >
              <img src={it.icon} alt={it.title} className="w-16 h-16" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {it.title}
                </h3>
                <p className="text-sm text-[var(--grad-mid)] font-medium">
                  {it.tag}
                </p>
                <p className="text-gray-600 mt-2">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
