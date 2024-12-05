import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="mt-8 flex justify-between items-start">
        <div>
          <h3 className="text-3xl font-medium">{project.title}</h3>
          <p className="text-xl text-gray-400 mt-2">{project.category}</p>
        </div>
        <span className="text-xl text-gray-400">{project.year}</span>
      </div>
    </motion.div>
  );
}