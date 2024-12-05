import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="min-h-screen py-32 bg-white text-black" data-scroll-section>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-medium mb-16">About Studio</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-xl leading-relaxed">
              <p className="mb-8">
                We are a creative studio focused on crafting unique digital experiences. Our approach combines innovative design with cutting-edge technology.
              </p>
              <p>
                Every project is an opportunity to push boundaries and create something extraordinary that resonates with users and achieves business goals.
              </p>
            </div>
            <motion.div
              className="aspect-[4/5] overflow-hidden"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1064"
                alt="Studio"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}