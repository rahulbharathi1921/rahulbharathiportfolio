import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Activity } from 'lucide-react';

export default function Methodology() {
  return (
    <section className="max-w-7xl mx-auto px-8 mt-32 grid md:grid-cols-12 gap-12 pb-24">
      <div className="md:col-span-5">
        <div className="sticky top-32">
          <h2 className="font-headline text-4xl font-bold mb-8 uppercase tracking-tighter">MY_APPROACH</h2>
          <p className="font-sans text-on-surface-variant text-lg leading-relaxed mb-12">
            I combine <span className="text-primary">mathematical precision</span> with <span className="text-secondary">enterprise-grade architecture</span> to deliver scalable AI solutions that solve real-world problems.
          </p>
          
          <div className="space-y-12">
            {[
              { id: '01', title: 'RESEARCH & DISCOVERY', desc: 'In-depth analysis of domain-specific data and state-of-the-art model architectures.' },
              { id: '02', title: 'DEVELOPMENT & DISTILLATION', desc: 'Building robust models and applying distillation techniques for efficient deployment.' },
              { id: '03', title: 'SCALABLE DEPLOYMENT', desc: 'Implementing CI/CD pipelines for seamless integration and real-time monitoring.' }
            ].map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="border-l-2 border-outline-variant hover:border-primary transition-colors pl-6 group"
              >
                <h4 className="font-headline font-bold text-sm tracking-widest text-slate-300 group-hover:text-primary transition-colors uppercase mb-2">
                  {step.id}. {step.title}
                </h4>
                <p className="font-sans text-sm text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:col-span-7 space-y-12">
        <div className="bg-surface-container p-1 rounded-sm">
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="font-headline text-[10px] tracking-widest text-secondary uppercase">
                SYSTEM_STATUS: OPERATIONAL
              </span>
            </div>
            <div className="font-mono text-primary-dim text-sm space-y-2">
              <p>&gt; Initializing environment...</p>
              <p>&gt; Loading model_weights... DONE</p>
              <p>&gt; Verifying constraints... OK</p>
              <p className="text-on-surface animate-pulse">&gt; Ready for deployment_</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden aspect-video group cursor-crosshair rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200"
            alt="Server Infrastructure"
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-90"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-surface/40 backdrop-blur-sm">
            <a 
              href="/research"
              className="bg-primary text-on-primary font-headline text-xs tracking-widest px-8 py-3 font-bold uppercase hover:scale-105 transition-transform"
            >
              VIEW ARCHITECTURE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
