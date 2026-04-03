import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const EXPERIENCES = [
  {
    title: 'AI & Data Science Engineer',
    company: 'Independent / Open Source',
    period: '2023 – Present',
    description: 'Designing distillation pipelines, building local-first RAG systems, and shipping complete AI products from model to UI.',
    highlights: [
      '4× model compression at <1.2% accuracy drop — VisionDistill',
      'Local-first financial assistant with Ollama + LangChain + FAISS',
      'Real-time speech command recognition for edge devices',
      '41+ public repositories — CV, NLP, automation, full-stack',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Enterprise Solutions',
    period: '2021 – 2023',
    description: 'Built production web applications with modular architecture and PWA capabilities.',
    highlights: [
      'Hospital Management System — patient workflows, billing, scheduling',
      'e-Learning platform with offline-first design and modular structure',
      'UI system architecture — from component library to production-ready interfaces',
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <header className="mb-20 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="h-[2px] w-12 bg-primary" />
          <span className="font-headline text-primary tracking-[0.2em] text-xs uppercase">Career Timeline</span>
          <span className="h-[2px] w-12 bg-primary" />
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
          EXPERIENCE
        </h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
          From full-stack web apps to distilled AI models — every role sharpened the same skill: shipping systems that actually work.
        </p>
      </header>

      <div className="space-y-12">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="bg-surface-variant p-8 lg:p-12 rounded-sm border border-primary/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-[60px] group-hover:bg-secondary/10 transition-colors" />

            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant mb-6">
                <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-secondary" /> {exp.company}</span>
                <span className="flex items-center gap-1.5"><Calendar size={16} className="text-secondary" /> {exp.period}</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-4">{exp.title}</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-4xl">{exp.description}</p>
            </div>

            <ul className="space-y-3">
              {exp.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  <span className="text-on-surface-variant leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
