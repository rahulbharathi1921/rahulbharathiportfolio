import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';

export default function SkillsMatrix() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <header className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[2px] w-12 bg-primary" />
          <span className="font-headline text-primary tracking-[0.2em] text-xs uppercase">Core Competencies</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none mb-6">
          SKILLS <span className="text-primary">MATRIX</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          An engineered overview of technical proficiency across the machine learning lifecycle and high-performance data architecture.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill, i) => {
          const IconComponent = (Icons as any)[skill.icon];
          return (
            <motion.div
              key={skill.domain}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: (i % 3) * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="group bg-surface-container p-8 rounded-sm border-l-2 border-primary relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 glass-panel"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                {IconComponent && <IconComponent size={64} />}
              </div>
              <div className="relative z-10">
                <span className="font-headline text-primary-dim text-[10px] tracking-[0.2em] uppercase block mb-4">
                  Domain {skill.domain}
                </span>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4 tracking-tight">
                  {skill.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-container-highest text-secondary text-[10px] font-headline rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
