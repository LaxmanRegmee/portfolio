import React from 'react';
import { motion } from 'framer-motion';
import { awards } from '../../data/awards';
import { AwardItem } from '../AwardItem';

export function Recognition() {
  return (
    <section id="recognition" className="min-h-screen py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-6xl font-medium mb-24"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Recognition
        </motion.h2>
        <div className="grid gap-12">
          {awards.map((award, index) => (
            <AwardItem key={index} award={award} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}