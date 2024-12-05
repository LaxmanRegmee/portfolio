import React from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-32" data-scroll-section>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-medium mb-12">Let's Create Together</h2>
          <p className="text-xl text-gray-400 mb-16">
            Have a project in mind? Let's bring your vision to life.
          </p>
          <motion.a
            href="mailto:hello@synchronized.studio"
            className="inline-block px-8 py-4 border border-white/20 rounded-full text-xl hover:bg-white hover:text-black transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}