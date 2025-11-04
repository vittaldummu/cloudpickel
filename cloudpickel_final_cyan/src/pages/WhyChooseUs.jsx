import React from "react";
import { motion } from "framer-motion";
export default function WhyChooseUs() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/backgrounds/why.svg"
          className="w-full h-full object-cover"
          alt="why"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50 -z-5"></div>
      <motion.div
        className="relative max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Why Choose Cloudpickel
        </h2>
        <p className="text-center text-white/90 max-w-3xl mx-auto mb-8">
          We combine startup energy with professional execution — building
          products, training people, and creating hiring pathways that work.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold text-gray-800">Innovation at Core</h3>
            <p className="text-gray-600 mt-2">
              We design solutions that evolve with industry needs and focus on
              practical impact.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold text-gray-800">
              Technical Foundation
            </h3>
            <p className="text-gray-600 mt-2">
              Built by engineers with experience in cloud, automation, and
              scalable systems.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-semibold text-gray-800">
              Commitment & Transparency
            </h3>
            <p className="text-gray-600 mt-2">
              We believe in honest delivery, clear communication, and long-term
              partnerships.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
