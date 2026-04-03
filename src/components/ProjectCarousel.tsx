import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';
import { ArrowRight, Database } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function ProjectCarousel() {
  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="px-8 mb-16 max-w-7xl mx-auto flex justify-between items-end">
        <div>
          <p className="font-headline text-primary-dim tracking-[0.2em] text-xs mb-4 uppercase">Project Archive: 2024</p>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter leading-none">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SOLUTIONS</span>
          </h2>
        </div>
        <div className="hidden md:block text-right">
          <p className="font-headline text-on-surface-variant text-xs uppercase tracking-widest">Scroll to Explore</p>
          <div className="flex justify-end mt-2">
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-primary"
            >
              <ArrowRight size={16} aria-hidden="true" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-[10vw] pb-12 no-scrollbar scroll-smooth">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="snap-center shrink-0 w-[80vw] md:w-[600px] aspect-[4/5] perspective-1000 group"
          >
            <div className="relative w-full h-full preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
              {/* Front Face */}
              <div className="absolute inset-0 backface-hidden rounded-sm overflow-hidden bg-surface-container border border-outline-variant/15">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className={cn(
                    'font-headline text-[10px] tracking-[0.3em] uppercase block mb-2',
                    project.color === 'primary' ? 'text-primary' :
                    project.color === 'secondary' ? 'text-secondary' : 'text-tertiary'
                  )}>
                    {project.number} / {project.category}
                  </span>
                  <h3 className="font-headline text-3xl font-bold tracking-tight uppercase">
                    {project.title}
                  </h3>
                  <Link to={`/project/${project.id}`} className="mt-4 flex items-center gap-2 group/link">
                    <span className={cn(
                      'w-8 h-[1px] transition-all group-hover/link:w-12',
                      project.color === 'primary' ? 'bg-primary' :
                      project.color === 'secondary' ? 'bg-secondary' : 'bg-tertiary'
                    )} />
                    <span className="font-headline text-[10px] text-on-surface-variant group-hover/link:text-primary transition-colors">VIEW DETAILS</span>
                  </Link>
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-sm bg-surface-container border border-primary/30 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <h4 className={cn(
                      'font-headline text-xl font-bold',
                      project.color === 'primary' ? 'text-primary' :
                      project.color === 'secondary' ? 'text-secondary' : 'text-tertiary'
                    )}>PROJECT_OVERVIEW</h4>
                    <Database size={20} className={cn(
                      project.color === 'primary' ? 'text-primary' :
                      project.color === 'secondary' ? 'text-secondary' : 'text-tertiary'
                    )} />
                  </div>
                  <p className="font-sans text-on-surface-variant leading-relaxed text-sm mb-8">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="font-headline text-[10px] text-on-surface-variant tracking-widest block mb-2 uppercase">Tech_Stack</label>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1 bg-surface-container-highest text-secondary text-[10px] font-headline rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={project.github || 'https://github.com/rahulbharathi1921'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'w-full py-3 border transition-colors font-headline text-[10px] tracking-widest uppercase text-center',
                    project.color === 'primary' ? 'border-primary/20 hover:bg-primary/5 text-primary' :
                    project.color === 'secondary' ? 'border-secondary/20 hover:bg-secondary/5 text-secondary' :
                    'border-tertiary/20 hover:bg-tertiary/5 text-tertiary'
                  )}
                >
                  VIEW REPOSITORY
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
