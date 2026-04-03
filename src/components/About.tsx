import React from 'react';
import { motion } from 'motion/react';
import { User, Target, Lightbulb, Coffee, Layers, Shield, Mic } from 'lucide-react';
import InteractiveTerminal from './InteractiveTerminal';

const REPO_CLUSTERS = [
  {
    title: 'AI Distillation Systems',
    repos: ['VisionDistill', 'VoiceDistill', 'StockMind-AI'],
    icon: Layers,
  },
  {
    title: 'RAG & Local LLM Tools',
    repos: ['Trading-rag-bot', 'PDF-RAG-CHATBOT', 'minimal-rag-bot'],
    icon: Lightbulb,
  },
  {
    title: 'Utility & Security CLI',
    repos: ['MIUI-media-decryptor', 'MIUI-vault-decryptor', 'IP-geotracker-cli'],
    icon: Shield,
  },
  {
    title: 'Voice & Product Engineering',
    repos: ['Desktop-Voice-Assistant', 'Desktop-Jarvis', 'medicare-hms'],
    icon: Mic,
  },
];

export default function About() {
  return (
    <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <header className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="h-[2px] w-12 bg-primary" />
          <span className="font-headline text-primary tracking-[0.2em] text-xs uppercase">About Me</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none mb-8"
        >
          BUILDING AI <br /> <span className="text-primary">THAT FEELS REAL</span>
        </motion.h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg text-on-surface-variant leading-relaxed"
          >
            <p>
              I am Rahul Bharathi, an AI and Data Science Engineer focused on building software that is intelligent, practical, and enjoyable to use. I work across model development, local-first AI systems, and frontend product engineering.
            </p>
            <p>
              My path started with web development, expanded into machine learning and deep learning, and now sits at the intersection of both. I build complete systems, from model pipelines and RAG retrieval flows to interfaces that feel fast and intentional.
            </p>
            <p>
              Across 41 repositories, I have shipped projects in knowledge distillation, speech AI, finance analytics, utility tooling, and enterprise-style web platforms. In 2026, my core focus is efficient AI architectures that can run locally and scale cleanly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {[
              { label: 'Public Repositories', value: '41+' },
              { label: 'Core Engineering Tracks', value: '6' },
              { label: 'Active Build Year', value: '2026' },
              { label: 'Primary Stack', value: 'PYTHON + TS' },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-5 bg-surface-container border border-outline-variant/10 rounded-sm"
              >
                <p className="font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant mb-2">{item.label}</p>
                <p className="font-headline text-2xl tracking-tight text-primary">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {[
              { icon: Target, title: 'Mission', desc: 'Deliver robust, local-first AI systems with production-ready architecture and clear user value.' },
              { icon: Lightbulb, title: 'Philosophy', desc: 'Strong systems are not only accurate, they are maintainable, efficient, and intuitive to use.' },
              { icon: Coffee, title: 'Working Style', desc: 'Fast iteration, measurable outcomes, and careful engineering across model and product layers.' },
              { icon: User, title: 'Identity', desc: 'AI engineer with full-stack execution skills, from prototypes to polished, deployable products.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-surface-container border border-outline-variant/10 rounded-sm hover:border-secondary/30 transition-colors group"
              >
                <item.icon className="text-primary mb-4 group-hover:text-secondary transition-colors" size={24} />
                <h3 className="font-headline font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-sm overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
              alt="Rahul Bharathi portrait"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-surface to-transparent">
              <p className="font-headline text-xs tracking-widest text-primary uppercase mb-2">Current Focus</p>
              <h4 className="font-headline font-bold text-xl">Distillation, RAG & Voice AI</h4>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-16 border-t border-outline-variant/10">
        <header className="mb-10">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-3">REPOSITORY_CLUSTERS</h2>
          <p className="text-on-surface-variant max-w-2xl">
            Curated groups from my open-source work, spanning AI systems, local LLM tooling, secure automation, and product engineering.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REPO_CLUSTERS.map((cluster, idx) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 bg-surface-container border border-outline-variant/10 rounded-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <cluster.icon size={18} className="text-primary" />
                <h3 className="font-headline text-lg font-bold">{cluster.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cluster.repos.map((repo) => (
                  <span key={repo} className="px-3 py-1 bg-surface-container-highest text-secondary text-[10px] font-headline rounded-full">
                    {repo}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-outline-variant/10 mt-16">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-4">INTERACTIVE_BIO</h2>
          <p className="text-on-surface-variant max-w-xl">Type commands in the terminal to explore stack, domains, and project focus in depth.</p>
        </div>
        <InteractiveTerminal />
      </section>
    </main>
  );
}
