import React from 'react';
import { motion } from 'motion/react';
import { Terminal, MapPin, Code, Share2, Bot, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
      <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
        <div className="space-y-4">
          <span className="font-headline text-primary tracking-[0.2em] text-sm font-medium uppercase">Get In Touch</span>
          <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter text-on-background leading-none">
            LET'S <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">COLLABORATE</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
            Interested in building intelligent systems or discussing AI research? Send me a message. I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-sm bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300">
              <Terminal size={24} />
            </div>
            <div>
              <p className="font-headline text-[10px] tracking-[0.1em] text-outline uppercase">Email</p>
              <p className="font-headline text-lg font-medium">rahulbharathi1921@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-sm bg-surface-container-highest flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-all duration-300">
              <MapPin size={24} />
            </div>
            <div>
              <p className="font-headline text-[10px] tracking-[0.1em] text-outline uppercase">Location</p>
              <p className="font-headline text-lg font-medium">India</p>
            </div>
          </div>
        </div>

        <div className="flex gap-6 pt-4">
          {[Code, Share2, Bot].map((Icon, i) => (
            <a
              key={i}
              href={i === 0 ? "https://github.com/rahulbharathi1921" : "#"}
              target={i === 0 ? "_blank" : undefined}
              rel={i === 0 ? "noopener noreferrer" : undefined}
              className="w-10 h-10 flex items-center justify-center rounded-sm border border-outline-variant/20 hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="lg:col-span-7 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel w-full p-8 lg:p-12 rounded-sm relative overflow-hidden shadow-2xl"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
          
          <form className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-headline text-[10px] tracking-[0.15em] text-primary uppercase ml-1">Name</label>
                <input
                  className="w-full bg-white border border-outline-variant/30 text-on-surface placeholder:text-outline-variant/50 p-4 rounded-sm focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-headline text-[10px] tracking-[0.15em] text-primary uppercase ml-1">Email</label>
                <input
                  className="w-full bg-white border border-outline-variant/30 text-on-surface placeholder:text-outline-variant/50 p-4 rounded-sm focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none"
                  placeholder="your@email.com"
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-headline text-[10px] tracking-[0.15em] text-primary uppercase ml-1">Inquiry Type</label>
              <div className="relative">
                <select className="w-full bg-white border border-outline-variant/30 text-on-surface p-4 rounded-sm focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all appearance-none cursor-pointer">
                  <option>AI/ML Project</option>
                  <option>Web Development</option>
                  <option>Research Collaboration</option>
                  <option>General Query</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                  ↓
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-headline text-[10px] tracking-[0.15em] text-primary uppercase ml-1">Message</label>
              <textarea
                className="w-full bg-white border border-outline-variant/30 text-on-surface placeholder:text-outline-variant/50 p-4 rounded-sm focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none outline-none"
                placeholder="How can I help you?"
                rows={4}
              />
            </div>

            <div className="pt-4 flex flex-col md:flex-row items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto bg-primary text-on-primary font-headline font-bold px-10 py-4 rounded-sm tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:bg-primary-dim transition-colors"
                type="button"
              >
                SEND MESSAGE
              </motion.button>
              <div className="flex items-center gap-3 text-outline text-xs font-headline uppercase tracking-widest opacity-60">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for hire
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
