import React from 'react';
import { motion } from 'motion/react';
import { Activity } from 'lucide-react';

const STEPS = [
  { id: '01', title: 'RESEARCH', desc: 'Understand the domain, the data, and what "good enough" means in production.' },
  { id: '02', title: 'BUILD & DISTILL', desc: 'Train, compress, and verify — models need to be both accurate and efficient.' },
  { id: '03', title: 'DEPLOY', desc: 'Ship clean architectures with monitoring, reproducible setups, and minimal dependencies.' },
];

export default function Methodology() {
  return (
    <section className="max-w-7xl mx-auto px-8 mt-32 grid md:grid-cols-12 gap-12 pb-24">
      {/* Left sidebar */}
      <div className="md:col-span-5">
        <div className="sticky top-32">
          <h2 className="font-headline text-4xl font-bold mb-8 uppercase tracking-tighter">MY_APPROACH</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
            I combine <span className="text-secondary font-medium">technical precision</span> with a bias for shipping. A model that can't run locally isn't done. A UI that doesn't feel fast isn't done.
          </p>

          <div className="space-y-10">
            {STEPS.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: parseInt(step.id) * 0.15 }}
                className="border-l-2 border-primary/10 hover:border-secondary transition-colors pl-6 group"
              >
                <h4 className="font-headline font-bold text-sm tracking-widest text-on-surface/50 group-hover:text-secondary transition-colors uppercase mb-2">
                  {step.id} — {step.title}
                </h4>
                <p className="text-xs text-on-surface-variant/70">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right content */}
      <div className="md:col-span-7 space-y-12">
        <div className="bg-surface-variant p-6 rounded-sm border border-primary/5">
          <div className="flex items-center gap-4 mb-4">
            <Activity size={14} className="text-secondary animate-pulse" />
            <span className="font-headline text-[10px] tracking-widest text-secondary/70 uppercase">
              System running — 6 active projects
            </span>
          </div>
          <div className="font-mono text-xs space-y-1.5 text-on-surface-variant/60">
            <p>&gt; VisionDistill — distillation pipeline active</p>
            <p>&gt; VoiceDistill — real-time inference on edge device</p>
            <p>&gt; Trading-RAG-Bot — vector index synced, LLM warm</p>
            <p className="text-secondary/80 animate-pulse">&gt; Ready for next task_</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-sm border border-primary/5 bg-surface-container aspect-video flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-secondary/[0.03]" />
          <a
            href="/research"
            className="relative z-10 bg-primary text-on-primary font-headline text-xs tracking-widest px-8 py-3 font-bold uppercase hover:scale-105 transition-transform rounded-sm"
          >
            VIEW RESEARCH
          </a>
        </div>
      </div>
    </section>
  );
}
