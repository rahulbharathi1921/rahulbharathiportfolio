import React from 'react';
import { motion } from 'motion/react';
import { Play, Code, Waves, Bot, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';

import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id) || PROJECTS[0];

  return (
    <main className="pt-32 pb-20">
      <header className="px-8 md:px-20 mb-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            <span className="font-headline text-primary tracking-[0.2em] text-xs uppercase mb-4 block">
              PROJECT_ID: {project.number} // {project.category}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface tracking-tighter leading-tight mb-6">
              {project.title}
            </h1>
            <p className="font-sans text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a 
              href={project.github || "https://github.com/rahulbharathi1921"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 bg-primary text-on-primary font-bold rounded-sm uppercase tracking-wider text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
            >
              <Code size={18} />
              REPOSITORY
            </a>
            <Link 
              to="/contact"
              className="flex items-center gap-2 px-6 py-4 border border-outline-variant/30 text-on-surface font-bold rounded-sm uppercase tracking-wider text-sm hover:bg-surface-variant transition-all"
            >
              <Bot size={18} />
              DISCUSS PROJECT
            </Link>
          </div>
        </div>

        <div className="relative w-full aspect-video rounded-sm overflow-hidden group">
          <img
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
            src={project.image}
            alt={project.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8 p-6 glass-panel border-l-2 border-primary max-w-md">
            <h3 className="font-headline text-xl font-bold mb-2 uppercase">Technical Overview</h3>
            <p className="font-sans text-sm text-on-surface-variant">
              Implementing advanced {project.category.toLowerCase()} techniques using {project.tech.join(', ')}.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-surface-container-low py-24 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
              <h4 className="font-headline text-primary tracking-widest text-xs uppercase border-b border-outline-variant/20 pb-2">THE_STACK</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-container-highest text-secondary rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.metrics && (
              <div className="space-y-6">
                <h4 className="font-headline text-primary tracking-widest text-xs uppercase border-b border-outline-variant/20 pb-2">METRICS</h4>
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className={cn(
                      "p-4 bg-surface-container rounded-sm border-l-2",
                      idx % 2 === 0 ? "border-tertiary" : "border-secondary"
                    )}>
                      <p className="text-xs text-on-surface-variant uppercase">{metric.label}</p>
                      <p className={cn(
                        "text-2xl font-headline font-bold",
                        idx % 2 === 0 ? "text-tertiary" : "text-secondary"
                      )}>{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6">
              <h4 className="font-headline text-primary tracking-widest text-xs uppercase border-b border-outline-variant/20 pb-2">MODEL_ARCHITECTURE</h4>
              <div className="bg-surface-container-lowest p-6 rounded-sm font-mono text-xs overflow-x-auto border border-outline-variant/10">
                <div className="text-primary/60 mb-2"># Initializing Model...</div>
                <div className="space-y-1">
                  <p><span className="text-secondary">class</span> {project.title.replace(/-/g, '')}(nn.Module):</p>
                  <p className="pl-4"><span className="text-secondary">def</span> __init__(self, config):</p>
                  <p className="pl-8 text-on-surface-variant">super().__init__()</p>
                  <p className="pl-8 text-on-surface-variant">self.backbone = load_pretrained(config.model_name)</p>
                  <p className="pl-8 text-on-surface-variant">self.head = nn.Linear(config.hidden_size, config.num_classes)</p>
                  <p className="pl-4"><span className="text-secondary">def</span> forward(self, x):</p>
                  <p className="pl-8 text-on-surface-variant">return self.head(self.backbone(x))</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-20">
            <article className="space-y-6">
              <h2 className="font-headline text-3xl font-bold tracking-tight">01_The Challenge</h2>
              <div className="space-y-4 font-sans text-on-surface-variant leading-relaxed">
                <p>Developing efficient AI models for real-world applications requires balancing computational cost with predictive performance. In this project, the primary challenge was to optimize the {project.category.toLowerCase()} pipeline for production environments.</p>
                <p>We focused on reducing latency and memory footprint while maintaining high accuracy, utilizing techniques like {project.tech.join(', ')}.</p>
              </div>
            </article>

            <div className="bg-surface-container rounded-sm p-8 border border-outline-variant/10">
              <div className="flex justify-between items-center mb-10">
                <h3 className="font-headline text-xl font-bold uppercase tracking-widest text-primary">Performance Analysis</h3>
                <div className="flex gap-4">
                  <span className="flex items-center gap-2 text-[10px] text-on-surface-variant uppercase">
                    <span className="w-3 h-3 bg-secondary rounded-full" /> Baseline
                  </span>
                  <span className="flex items-center gap-2 text-[10px] text-on-surface-variant uppercase">
                    <span className="w-3 h-3 bg-primary rounded-full" /> Optimized
                  </span>
                </div>
              </div>
              <div className="h-64 flex items-end gap-2 px-4 border-b border-l border-outline-variant/20">
                {[20, 45, 15, 70, 25, 85, 10, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    className={cn(
                      "flex-1 transition-all",
                      i % 2 === 0 ? "bg-secondary/30 hover:bg-secondary/50" : "bg-primary/40 hover:bg-primary/60"
                    )}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-4 font-headline text-[10px] text-on-surface-variant uppercase tracking-widest">
                <span>Input</span>
                <span>Output</span>
              </div>
            </div>

            <article className="space-y-6">
              <h2 className="font-headline text-3xl font-bold tracking-tight">02_System Architecture</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary/10 flex items-center justify-center rounded-sm">
                    <Waves className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg mb-2 uppercase">Data Processing</h4>
                    <p className="font-sans text-on-surface-variant">Implementing robust preprocessing pipelines to ensure high-quality input for the {project.category.toLowerCase()} models.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-secondary/10 flex items-center justify-center rounded-sm">
                    <Bot className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg mb-2 uppercase">Model Inference</h4>
                    <p className="font-sans text-on-surface-variant">Optimized inference engines designed for scalability and low-latency response in enterprise environments.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-32 px-8 md:px-20 max-w-7xl mx-auto">
        <a href="/" className="group block p-12 border-t border-outline-variant/20 hover:bg-surface-container transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
            <div>
              <span className="font-headline text-xs text-on-surface-variant tracking-[0.3em] uppercase block mb-4">BACK_TO_GALLERY</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter group-hover:text-primary transition-colors">Explore Projects</h2>
            </div>
            <ArrowRight className="text-4xl group-hover:translate-x-4 transition-transform duration-300" />
          </div>
        </a>
      </section>
    </main>
  );
}
