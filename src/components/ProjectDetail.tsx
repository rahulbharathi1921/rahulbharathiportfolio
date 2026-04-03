import React from 'react';
import { motion } from 'motion/react';
import { Code, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];

  return (
    <main className="pt-32 pb-20">
      <header className="px-8 md:px-20 mb-20 max-w-7xl mx-auto">
        <div className="max-w-4xl mb-12">
          <span className="font-headline text-secondary/60 tracking-[0.2em] text-xs uppercase block mb-4">
            PROJECT_ID: {project.number} // {project.category}
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-on-secondary font-bold rounded-sm uppercase tracking-wider text-xs shadow-lg shadow-primary/10 hover:scale-105 transition-transform"
            >
              <Github size={16} /> REPOSITORY
            </a>
          )}
          <Link
            to="/contact"
            className="flex items-center gap-2 px-6 py-3 border border-primary/10 font-bold rounded-sm uppercase tracking-wider text-xs hover:border-secondary hover:text-secondary transition-all"
          >
            <Code size={16} /> DISCUSS THIS
          </Link>
        </div>

        {/* Hero image */}
        <div className="mt-12 relative w-full aspect-video rounded-sm overflow-hidden border border-primary/5">
          <img
            className="w-full h-full object-cover"
            src={project.image}
            alt={project.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
          <div className="absolute bottom-8 left-8 bg-surface/80 backdrop-blur-sm border border-primary/5 rounded-sm p-5 max-w-md">
            <p className="font-headline text-xs tracking-widest text-secondary uppercase mb-1">Technical Overview</p>
            <p className="text-sm text-on-surface-variant/70">
              Built with {project.tech.join(' · ')}.
            </p>
          </div>
        </div>
      </header>

      {/* Sidebar details */}
      <section className="bg-surface-variant py-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h4 className="font-headline text-secondary/60 tracking-widest text-xs uppercase mb-3">TECH STACK</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-surface text-on-surface rounded-full text-xs font-medium border border-primary/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.metrics && (
              <div>
                <h4 className="font-headline text-secondary/60 tracking-widest text-xs uppercase mb-3">METRICS</h4>
                <div className="grid grid-cols-2 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 bg-surface rounded-sm">
                      <p className="text-xs text-on-surface-variant/50 uppercase">{m.label}</p>
                      <p className="text-2xl font-headline font-bold text-secondary">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="font-headline text-secondary/60 tracking-widest text-xs uppercase mb-3">REPOSITORY</h4>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-secondary hover:underline"
                >
                  <ExternalLink size={14} /> View source code
                </a>
              ) : (
                <p className="text-on-surface-variant/50 text-sm">Source not public.</p>
              )}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            <article>
              <h2 className="font-headline text-2xl font-bold tracking-tight mb-4">The Challenge</h2>
              <p className="text-on-surface-variant/70 leading-relaxed">
                Developing efficient AI models for real-world applications requires balancing computational cost with predictive performance. This project optimizes the {project.category.toLowerCase()} pipeline for production environments, reducing latency and memory footprint while maintaining accuracy.
              </p>
            </article>

            <div className="bg-surface rounded-sm p-8 border border-primary/5">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-headline text-base font-bold uppercase tracking-widest text-secondary/70">Performance</h3>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1.5 text-[9px] text-on-surface-variant/40 uppercase">
                    <span className="w-2 h-2 rounded-full bg-secondary/40" /> Baseline
                  </span>
                  <span className="flex items-center gap-1.5 text-[9px] text-on-surface-variant/40 uppercase">
                    <span className="w-2 h-2 rounded-full bg-secondary" /> Optimized
                  </span>
                </div>
              </div>
              <div className="h-48 flex items-end gap-1.5 px-4 border-b border-l border-primary/10">
                {[20, 45, 15, 70, 25, 85, 10, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex-1 transition-colors ${i % 2 === 0 ? 'bg-secondary/25 hover:bg-secondary/40' : 'bg-secondary/45 hover:bg-secondary/65'}`}
                  />
                ))}
              </div>
            </div>

            <article>
              <h2 className="font-headline text-2xl font-bold tracking-tight mb-4">Architecture</h2>
              <div className="space-y-6">
                {[
                  { label: 'Data Pipeline', desc: 'Robust preprocessing for high-quality input to the model.' },
                  { label: 'Model Layer', desc: `Optimized ${project.category.toLowerCase()} pipeline with ${project.tech.join(', ')}.` },
                  { label: 'Deployment', desc: 'Containerized or edge-ready setup for scalable inference.' },
                ].map((s) => (
                  <div key={s.label} className="flex gap-4">
                    <span className="w-1 h-full min-h-[30px] bg-secondary/20 rounded-full block" />
                    <div>
                      <h4 className="font-headline font-bold text-sm mb-1">{s.label}</h4>
                      <p className="text-on-surface-variant/60 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-20 max-w-7xl mx-auto mt-32">
        <Link to="/" className="group block p-12 border-t border-primary/10 hover:bg-surface transition-all relative overflow-hidden rounded-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <span className="font-headline text-xs text-on-surface-variant/50 tracking-[0.3em] uppercase block mb-3">BACK TO GALLERY</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">Explore Projects</h2>
            </div>
            <ArrowRight className="text-4xl group-hover:translate-x-4 transition-transform duration-300 text-on-surface-variant/30" />
          </div>
        </Link>
      </section>
    </main>
  );
}
