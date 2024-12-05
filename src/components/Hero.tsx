import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGsapSplit } from '../hooks/useGsapSplit';

export function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);
  useGsapSplit(textRef);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-[1400px] mx-auto">
        <h1 ref={textRef} className="hero-text">
          Synchronized
          <br />
          Digital
          <br />
          Creative
        </h1>
        <motion.div
          className="mt-12 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-xl text-gray-400">
            SYNCHRONIZED IS A FULL-SERVICE CREATIVE STUDIO CRAFTING UNPARALLELED DIGITAL EXPERIENCES.
          </p>
          <div className="mt-8">
            <motion.button
              className="px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PLAY OUR SHOWREEL
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}