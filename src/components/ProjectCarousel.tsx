import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function ProjectCarousel() {
  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="px-8 mb-16 max-w-7xl mx-auto flex justify-between items-end">
        <div>
          <p className="font-headline text-secondary/70 tracking-[0.2em] text-xs mb-4 uppercase">2026 Project Archive</p>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter leading-none">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dim">SOLUTIONS</span>
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-on-surface-variant/50 text-xs font-headline uppercase tracking-widest">
          Scroll to Explore <ArrowRight size={14} />
        </div>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-[5vw] pb-12 no-scrollbar scroll-smooth">
        {PROJECTS.map((project) => (
          <div key={project.id} className="snap-center shrink-0 w-[85vw] md:w-[500px] group">
            <a
              href={`#/project/${project.id}`}
              className="relative block aspect-[4/5] rounded-sm overflow-hidden bg-surface-variant border border-primary/5 hover:border-secondary/15 transition-colors"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

              <div className="absolute top-6 left-6 px-3 py-1 bg-surface/80 backdrop-blur-sm border border-primary/5 rounded-sm">
                <span className="font-headline text-[9px] tracking-[0.2em] text-secondary/70 uppercase">
                  {project.number} / {project.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="font-headline text-3xl font-bold tracking-tight uppercase mb-3">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant/70 text-sm leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-secondary/5 text-secondary text-[10px] font-headline rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ExternalLink size={14} className="text-on-surface-variant/40 group-hover:text-secondary transition-colors ml-auto" />
                </div>
              </div>
            </a>

            <div className="flex justify-between items-center mt-4 px-1">
              <span className="font-headline text-[10px] tracking-[0.2em] text-on-surface-variant/40 uppercase">
                {project.category}
              </span>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-headline text-[10px] tracking-[0.2em] text-secondary/60 hover:text-secondary uppercase flex items-center gap-1.5"
                >
                  Repository <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
