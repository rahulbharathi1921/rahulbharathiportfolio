import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Cpu, Database, Network } from 'lucide-react';

const RESEARCH_TOPICS = [
  {
    icon: Network,
    title: 'Knowledge Distillation',
    desc: 'Exploring methods to transfer knowledge from large, complex teacher models to smaller, efficient student models without significant loss in accuracy.',
    tags: ['Model Compression', 'Efficiency', 'Edge AI']
  },
  {
    icon: Database,
    title: 'RAG Systems',
    desc: 'Researching Retrieval-Augmented Generation architectures for local-first, privacy-preserving financial and technical assistants.',
    tags: ['Ollama', 'LangChain', 'Vector DBs']
  },
  {
    icon: Cpu,
    title: 'Edge Intelligence',
    desc: 'Optimizing deep learning models for deployment on low-resource hardware, focusing on real-time speech and vision tasks.',
    tags: ['Quantization', 'Pruning', 'Hardware Acceleration']
  },
  {
    icon: BookOpen,
    title: 'Algorithmic Trading',
    desc: 'Developing machine learning models for market prediction and risk management using high-frequency data and sentiment analysis.',
    tags: ['Time Series', 'NLP', 'Quantitative Finance']
  }
];

export default function Research() {
  return (
    <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <header className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="h-[2px] w-12 bg-primary" />
          <span className="font-headline text-primary tracking-[0.2em] text-xs uppercase">Research Focus</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none mb-8"
        >
          EXPLORING THE <br /> <span className="text-primary">FRONTIERS</span> OF AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant max-w-2xl text-lg leading-relaxed"
        >
          My research interests lie at the intersection of model efficiency, privacy-preserving AI, and real-time intelligent systems.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RESEARCH_TOPICS.map((topic, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 bg-surface-variant/20 rounded-sm border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 group"
          >
            <topic.icon className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500" size={32} />
            <h3 className="font-headline text-2xl font-bold mb-4">{topic.title}</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8">{topic.desc}</p>
            <div className="flex flex-wrap gap-2">
              {topic.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-headline rounded-full uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-32 p-12 bg-primary/5 rounded-sm border border-primary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="relative z-10">
          <h2 className="font-headline text-3xl font-bold mb-6">Interested in Collaboration?</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mb-8 leading-relaxed">
            I am always open to discussing new research ideas, contributing to open-source projects, or collaborating on innovative AI solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-on-primary font-headline font-bold px-10 py-4 rounded-sm tracking-widest hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>
    </main>
  );
}
