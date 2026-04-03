import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const EXPERIENCES = [
  {
    title: 'AI & Data Science Engineer',
    company: 'Independent / Open Source',
    period: '2023 - Present',
    location: 'Remote',
    description: 'Developing state-of-the-art AI solutions focusing on Knowledge Distillation and RAG systems. Built and maintained multiple high-impact open-source repositories.',
    achievements: [
      'Developed VisionDistill, achieving 4x model compression with minimal accuracy loss.',
      'Architected Trading-RAG-Bot, a local-first financial assistant using Ollama and LangChain.',
      'Implemented real-time speech command recognition systems for edge devices.'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Enterprise Solutions',
    period: '2021 - 2023',
    location: 'India',
    description: 'Designed and implemented enterprise-grade web applications and management systems.',
    achievements: [
      'Built a comprehensive Hospital Management System with patient and billing modules.',
      'Developed modular e-learning platforms with PWA support and offline capabilities.',
      'Optimized database queries and frontend performance for large-scale applications.'
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <header className="mb-20 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="h-[2px] w-12 bg-primary" />
          <span className="font-headline text-primary tracking-[0.2em] text-xs uppercase">Professional Journey</span>
          <span className="h-[2px] w-12 bg-primary" />
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none mb-6">
          EXPERIENCE
        </h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
          A track record of delivering high-performance AI models and robust enterprise software solutions.
        </p>
      </header>

      <div className="space-y-12">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="bg-surface-container border border-outline-variant/10 p-8 lg:p-12 rounded-sm relative overflow-hidden group glass-panel"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors" />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
              <div>
                <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">{exp.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-on-surface-variant text-sm">
                  <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-primary" /> {exp.company}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={16} className="text-primary" /> {exp.period}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={16} className="text-primary" /> {exp.location}</span>
                </div>
              </div>
            </div>

            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed max-w-4xl">
              {exp.description}
            </p>

            <div className="grid md:grid-cols-1 gap-4">
              {exp.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-on-surface-variant leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
