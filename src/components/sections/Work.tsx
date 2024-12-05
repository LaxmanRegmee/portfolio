import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../ProjectCard';
import { projects } from '../../data/projects';

export function Work() {
  return (
    <section id="work" className="min-h-screen py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-6xl font-medium mb-24"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Selected Work
        </motion.h2>
        <div className="grid gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}