import React from 'react';
import { motion } from 'motion/react';
import { Terminal, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import Magnetic from './Magnetic';
import Hero3D from './Hero3D';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <Hero3D />
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-3 px-3 py-1 rounded-full bg-surface-variant border border-outline-variant/15"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">
                System Status: Operational
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-headline text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[0.9]"
            >
              <span className="block text-primary">RAHUL</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dim">
                AI & DS ENGINEER
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed"
            >
              Building intelligent systems through Computer Vision, RAG, and Knowledge Distillation. Specializing in lightweight AI architectures and enterprise-grade data solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <Magnetic>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-8 py-4 bg-primary text-on-primary font-headline font-bold rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    VIEW PROJECTS <ChevronRight size={18} />
                  </span>
                </button>
              </Magnetic>
              <Magnetic>
                <a 
                  href="/about"
                  className="px-8 py-4 bg-transparent border border-outline-variant text-on-surface hover:border-primary hover:text-primary font-headline font-bold rounded-sm transition-all duration-300 flex items-center gap-2"
                >
                  ABOUT ME
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-20 grid grid-cols-3 gap-12 border-t border-outline-variant/15 pt-10"
            >
              {[
                { label: 'Specialization', value: 'COMPUTER VISION' },
                { label: 'Core Tech', value: 'PYTORCH & RAG' },
                { label: 'Architecture', value: 'ENTERPRISE AI' },
              ].map((item) => (
                <div key={item.label}>
                  <span className="block font-headline text-[10px] tracking-[0.15em] text-on-surface-variant uppercase mb-2">
                    {item.label}
                  </span>
                  <span className="font-headline text-lg text-primary tracking-tighter">
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square relative rounded-sm overflow-hidden bg-surface-container border border-outline-variant/10 group shadow-2xl">
              <img
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
                src="https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=800"
                alt="AI Visualization"
              />
              
              <div className="absolute bottom-6 -left-6 p-6 bg-surface-container/80 backdrop-blur-md border border-primary/20 w-64 rounded-sm shadow-xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-headline text-[9px] tracking-widest text-primary">LIVE_METRICS</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-primary rounded-full animate-ping" />
                  </div>
                </div>
                <div className="space-y-3">
                  {[85, 62, 44].map((val, i) => (
                    <div key={i} className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${val}%` }}
                        transition={{ duration: 1.5, delay: 1 + i * 0.2 }}
                        className={cn(
                          "h-full",
                          i === 1 ? "bg-secondary" : "bg-primary"
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-6 right-6 p-4 bg-surface/80 backdrop-blur-md border border-outline-variant/20 rounded-sm shadow-lg">
                <pre className="font-mono text-[10px] text-primary leading-tight">
                  {`class AI_Engineer:
  def __init__(self):
    self.name = "Rahul"
    self.focus = ["CV", "RAG"]`}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
