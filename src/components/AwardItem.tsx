import React from 'react';
import { motion } from 'framer-motion';
import type { Award } from '../types/award';

interface AwardItemProps {
  award: Award;
  index: number;
}

export function AwardItem({ award, index }: AwardItemProps) {
  return (
    <motion.div
      className="border-t border-white/20 py-12 flex justify-between items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <span className="text-2xl">{award.year}</span>
      <span className="text-2xl">{award.award}</span>
      <span className="text-2xl text-gray-400">{award.platform}</span>
    </motion.div>
  );
}