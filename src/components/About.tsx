import React from 'react';
import { motion } from 'motion/react';
import { User, Target, Lightbulb, Coffee, Layers, Shield, Mic, Github, Linkedin, Mail } from 'lucide-react';
import InteractiveTerminal from './InteractiveTerminal';
import rahulPhoto from '../images/rahul.jpeg';

const REPO_CLUSTERS = [
  { title: 'AI Distillation Systems', repos: ['VisionDistill', 'VoiceDistill', 'StockMind-AI'], icon: Layers },
  { title: 'RAG & Local LLM Tools', repos: ['Trading-rag-bot', 'PDF-RAG-CHATBOT', 'minimal-rag-bot'], icon: Mic },
  { title: 'Utility & Security CLI', repos: ['MIUI-media-decryptor', 'MIUI-vault-decryptor'], icon: Shield },
  { title: 'Product Engineering', repos: ['Desktop-Voice-Assistant', 'medicare-hms', 'neonlearn-studio'], icon: Coffee },
];

const STATS = [
  { label: 'Public Repos', value: '41+' },
  { label: 'Engineering Tracks', value: '6' },
  { label: 'Active Build Year', value: '2026' },
  { label: 'Primary Stack', value: 'Python + TS' },
];

const PILLARS = [
  { icon: Target, title: 'Mission', desc: 'Deliver robust, local-first AI systems with production-ready architecture.' },
  { icon: Lightbulb, title: 'Philosophy', desc: 'Strong systems are not only accurate — they are maintainable and efficient.' },
  { icon: Coffee, title: 'Working Style', desc: 'Fast iteration, measurable outcomes, careful engineering across every layer.' },
  { icon: User, title: 'Identity', desc: 'AI engineer with full-stack skills, from data pipelines to polished UIs.' },
];

export default function About() {
  return (
    <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-[2px] w-12 bg-secondary" />
          <span className="font-headline text-secondary tracking-[0.2em] text-xs uppercase">About Me</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6"
        >
          BUILDING AI<br />{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dim">THAT FEELS REAL</span>
        </motion.h1>
      </header>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
        {/* Left column */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-on-surface-variant leading-relaxed"
          >
            <p className="text-lg mb-6">
              I'm Rahul Bharathi, an AI and Data Science Engineer focused on building software that's intelligent, practical, and genuinely useful. I work across model development, local-first AI, and frontend product engineering.
            </p>
            <p className="mb-6">
              My path started with web development, expanded into machine learning, and now lives at the intersection. I build complete systems: from model pipelines and RAG retrieval flows to interfaces that feel fast and intentional.
            </p>
            <p>
              Across 41 repositories, I've shipped projects in knowledge distillation, speech AI, finance analytics, utility tooling, and enterprise web platforms. In 2026, my core focus is efficient AI that runs locally and scales cleanly.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {STATS.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-5 bg-surface-variant border border-primary/5 rounded-sm"
              >
                <p className="font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/60 mb-1">{item.label}</p>
                <p className="font-headline text-2xl tracking-tight">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {PILLARS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 bg-surface-variant border border-primary/5 rounded-sm hover:border-secondary/15 transition-colors group"
              >
                <item.icon className="text-secondary mb-4 group-hover:scale-110 transition-transform" size={22} />
                <h3 className="font-headline font-bold text-base mb-1.5">{item.title}</h3>
                <p className="text-sm text-on-surface-variant/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column — photo */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-sm overflow-hidden group"
          >
            <img
              src={rahulPhoto}
              alt="Rahul Bharathi"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-surface to-transparent">
              <p className="font-headline text-[10px] tracking-widest text-secondary uppercase mb-3">Connect</p>
              <div className="flex gap-3">
                <a href="https://github.com/rahulbharathi1921" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-sm bg-surface/80 backdrop-blur-sm border border-primary/10 hover:border-secondary hover:text-secondary transition-all">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/rahulbharathi" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-sm bg-surface/80 backdrop-blur-sm border border-primary/10 hover:border-secondary hover:text-secondary transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:rahulbharathi1921@gmail.com"
                  className="w-10 h-10 flex items-center justify-center rounded-sm bg-surface/80 backdrop-blur-sm border border-primary/10 hover:border-secondary hover:text-secondary transition-all">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Repository clusters */}
      <section className="py-16 border-t border-primary/5">
        <header className="mb-10">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-3">REPOSITORY_CLUSTERS</h2>
          <p className="text-on-surface-variant max-w-2xl">Grouped from my open-source work — AI systems, local LLM tooling, security utilities, and full-stack products.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REPO_CLUSTERS.map((cluster, idx) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="p-6 bg-surface-variant border border-primary/5 rounded-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <cluster.icon size={16} className="text-secondary" />
                <h3 className="font-headline text-base font-bold">{cluster.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cluster.repos.map((repo) => (
                  <span key={repo} className="px-3 py-1 bg-secondary/5 text-secondary text-[10px] font-headline rounded-full">
                    {repo}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
