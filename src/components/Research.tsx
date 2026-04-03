import React from 'react';
import { motion } from 'motion/react';
import { Network, Database, Cpu, BookOpen } from 'lucide-react';

const TOPICS = [
  {
    icon: Network,
    title: 'Knowledge Distillation',
    desc: 'Compressing large teacher models into lightweight student architectures that retain accuracy while running on edge hardware.',
    tags: ['Distillation', 'Efficiency', 'Edge AI'],
  },
  {
    icon: Database,
    title: 'Privacy-First RAG',
    desc: 'Retrieval-augmented systems that run entirely on-device with Ollama and local vector stores — no API keys, no data leaks.',
    tags: ['LangChain', 'FAISS', 'Ollama'],
  },
  {
    icon: Cpu,
    title: 'Real-Time Inference',
    desc: 'Optimizing speech and vision models for sub-100ms latency on commodity hardware without cloud round-trips.',
    tags: ['Quantization', 'ONNX', 'Streaming'],
  },
  {
    icon: BookOpen,
    title: 'Financial ML',
    desc: 'XGBoost pipelines and NLP-driven sentiment analysis for market trend detection and portfolio dashboards.',
    tags: ['Time Series', 'NLP', 'Visualization'],
  },
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
          <span className="h-[2px] w-12 bg-secondary" />
          <span className="font-headline text-secondary tracking-[0.2em] text-xs uppercase">Research Focus</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6"
        >
          WHAT I'M<br />{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dim">EXPLORING</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant max-w-2xl text-lg leading-relaxed"
        >
          Every project starts with one question: can this run locally, privately, and fast enough to be useful? That's what drives my research.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TOPICS.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-10 bg-surface-variant border border-primary/5 rounded-sm hover:border-secondary/15 transition-all group"
          >
            <t.icon className="text-secondary mb-6 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-headline text-xl font-bold mb-3">{t.title}</h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">{t.desc}</p>
            <div className="flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-secondary/5 text-secondary text-[10px] font-headline rounded-full tracking-widest">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-32 p-12 bg-surface-variant rounded-sm border border-primary/5">
        <h2 className="font-headline text-2xl font-bold mb-3">Interested in Collaboration?</h2>
        <p className="text-on-surface-variant max-w-xl mb-6">
          I'm always open to discussing new research ideas, contributing to open-source, or building something from scratch together.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-secondary text-on-secondary font-headline font-bold px-8 py-3 rounded-sm tracking-widest text-xs hover:scale-105 transition-transform shadow-lg shadow-secondary/10"
        >
          GET IN TOUCH
        </a>
      </section>
    </main>
  );
}
