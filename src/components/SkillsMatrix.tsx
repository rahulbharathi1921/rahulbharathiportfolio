import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import * as Icons from 'lucide-react';

export default function SkillsMatrix() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <header className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[2px] w-12 bg-secondary" />
          <span className="font-headline text-secondary tracking-[0.2em] text-xs uppercase">Core Competencies</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
          SKILLS <span className="text-secondary">MATRIX</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          Deep proficiency across the ML lifecycle — from model design to production deployment and full-stack delivery.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill, i) => {
          const IconComponent = (Icons as any)[skill.icon];
          return (
            <motion.div
              key={skill.domain}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group bg-surface-variant p-8 rounded-sm border border-primary/5 relative overflow-hidden transition-all hover:scale-[1.02] hover:border-secondary/15"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-15 transition-opacity text-primary">
                {IconComponent && <IconComponent size={56} />}
              </div>
              <span className="font-headline text-secondary/60 text-[10px] tracking-[0.2em] uppercase block mb-4">
                Domain {skill.domain}
              </span>
              <h3 className="font-headline text-xl font-bold mb-4 tracking-tight">
                {skill.title}
              </h3>
              <p className="text-on-surface-variant/70 text-sm leading-relaxed mb-6">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-secondary/5 text-secondary text-[10px] font-headline rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
