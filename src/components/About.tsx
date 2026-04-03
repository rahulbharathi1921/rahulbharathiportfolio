import React from 'react';
import { motion } from 'motion/react';
import { User, Target, Lightbulb, Coffee } from 'lucide-react';
import InteractiveTerminal from './InteractiveTerminal';

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
          ENGINEERING <br /> <span className="text-primary">INTELLIGENT</span> SYSTEMS
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
              I am Rahul, an AI & Data Science Engineer dedicated to bridging the gap between complex research and practical, scalable applications. My journey in technology is driven by a fascination with how data can be transformed into actionable intelligence.
            </p>
            <p>
              With a strong foundation in machine learning and full-stack development, I specialize in creating systems that are not just powerful, but also efficient and accessible. My work often involves optimizing deep learning models for edge deployment and architecting robust data pipelines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {[
              { icon: Target, title: 'Mission', desc: 'To democratize AI by creating efficient, local-first intelligent systems.' },
              { icon: Lightbulb, title: 'Philosophy', desc: 'Simplicity is the ultimate sophistication in algorithm design.' },
              { icon: Coffee, title: 'Interests', desc: 'Passionate about open-source, research papers, and clean code.' },
              { icon: User, title: 'Background', desc: 'Experienced in both academic research and industry-grade software.' }
            ].map((item, i) => (
              <motion.div
                key={i}
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
              alt="Rahul"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-surface to-transparent">
              <p className="font-headline text-xs tracking-widest text-primary uppercase mb-2">Current Focus</p>
              <h4 className="font-headline font-bold text-xl">Knowledge Distillation & RAG</h4>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-20 border-t border-outline-variant/10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-4">INTERACTIVE_BIO</h2>
          <p className="text-on-surface-variant max-w-xl">Type commands into the terminal below to explore my technical profile in depth.</p>
        </div>
        <InteractiveTerminal />
      </section>
    </main>
  );
}
