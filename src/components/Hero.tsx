import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Magnetic from './Magnetic';
import Hero3D from './Hero3D';
import rahulPhoto from '../images/rahul.jpeg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <Hero3D />

      {/* Ambient glow */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-3 px-3 py-1 rounded-full bg-surface-variant border border-primary/5"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface-variant/60">
                Available for projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-headline text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[0.9]"
            >
              <span className="block">RAHUL</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dim">
                AI & DS ENGINEER
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-on-surface-variant text-xl max-w-xl mb-10 leading-relaxed"
            >
              I build AI systems that are smart, efficient, and run locally. From distilled vision models to RAG-powered assistants — no cloud required.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Magnetic>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center gap-2 px-8 py-4 bg-secondary text-on-secondary font-headline font-bold rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-secondary/15"
                >
                  VIEW PROJECTS <ArrowRight size={16} />
                </button>
              </Magnetic>
              <Magnetic>
                <a
                  href="/about"
                  className="px-8 py-4 border border-primary/10 font-headline font-bold rounded-sm transition-all duration-300 hover:border-secondary hover:text-secondary flex items-center gap-2"
                >
                  ABOUT ME
                </a>
              </Magnetic>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 border-t border-primary/5 pt-8"
            >
              {[
                { label: 'Repositories', value: '41+' },
                { label: 'Core Focus', value: 'CV + RAG + DISTILL' },
                { label: 'Stack', value: 'Python + TS' },
              ].map((item) => (
                <div key={item.label}>
                  <span className="block font-headline text-[10px] tracking-[0.15em] text-on-surface-variant/50 uppercase mb-2">
                    {item.label}
                  </span>
                  <span className="font-headline text-lg tracking-tight">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-sm overflow-hidden bg-surface-container border border-primary/5 group">
              <img
                className="w-full h-full object-cover aspect-[4/5] group-hover:scale-[1.02] transition-transform duration-700"
                src={rahulPhoto}
                alt="Rahul Bharathi"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-secondary/5" />

              {/* Bottom info overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-headline text-[10px] tracking-widest text-on-surface-variant/70 uppercase">
                    Open to collaborations
                  </span>
                </div>
                <div className="flex gap-2">
                  {[
                    { icon: Github, href: 'https://github.com/rahulbharathi1921' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/rahulbharathi' },
                    { icon: Mail, href: 'mailto:rahulbharathi1921@gmail.com' },
                  ].map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="w-9 h-9 flex items-center justify-center rounded-sm bg-surface/80 backdrop-blur-sm border border-primary/10 hover:border-secondary hover:text-secondary transition-all"
                    >
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Top-right tag */}
              <div className="absolute top-6 right-6 px-3 py-1.5 bg-surface/80 backdrop-blur-sm border border-primary/10 rounded-sm">
                <pre className="font-mono text-[10px] leading-tight text-on-surface-variant/60">
                  {`AI_Engineer()\n→ CV + RAG + Dist`}</pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
