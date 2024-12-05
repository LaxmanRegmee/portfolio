import React from 'react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
      <div className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <motion.a
            href="/"
            className="text-2xl font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            SYNCHRONIZED
          </motion.a>
          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#work" className="nav-link">WORK</a>
            <a href="#recognition" className="nav-link">RECOGNITION</a>
            <a href="#contact" className="nav-link">CONTACT US</a>
          </motion.div>
        </nav>
      </div>
    </header>
  );
}