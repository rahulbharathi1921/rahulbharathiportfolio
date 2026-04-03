import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, MapPin, Github, Linkedin, Mail, ExternalLink, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'AI/ML Project',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact — ${formData.type} (${formData.name})`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nType: ${formData.type}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:rahulbharathi1921@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full border border-primary/10 bg-surface-variant text-on-surface placeholder:text-on-surface-variant/40 p-4 rounded-sm focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all outline-none text-sm";

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
      {/* Left Column */}
      <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
        <div className="space-y-3">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-headline text-primary tracking-[0.2em] text-sm uppercase"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-none"
          >
            LET'S<br />{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dim">BUILD</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-on-surface-variant text-lg max-w-md leading-relaxed"
          >
            Got an idea, a project, or just want to chat AI? Drop me a line. I usually respond within 24 hours.
          </motion.p>
        </div>

        {/* Direct contact info */}
        <div className="space-y-4">
          <a href="mailto:rahulbharathi1921@gmail.com" className="flex items-center gap-4 group">
            <div className="w-11 h-11 rounded-sm bg-primary/5 flex items-center justify-center text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-all">
              <Mail size={20} />
            </div>
            <div>
              <p className="font-headline text-[10px] tracking-[0.15em] text-on-surface-variant/60 uppercase">Email</p>
              <p className="text-sm text-on-surface group-hover:text-secondary transition-colors">rahulbharathi1921@gmail.com</p>
            </div>
          </a>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-sm bg-primary/5 flex items-center justify-center text-secondary">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-headline text-[10px] tracking-[0.15em] text-on-surface-variant/60 uppercase">Based In</p>
              <p className="text-sm text-on-surface">India</p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex gap-4 pt-2">
          {[
            { icon: Github, label: 'GitHub', href: 'https://github.com/rahulbharathi1921' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rahulbharathi' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-sm border border-primary/10 text-on-surface-variant text-xs font-headline uppercase tracking-widest hover:border-secondary hover:text-secondary transition-all group"
            >
              <s.icon size={14} />
              {s.label}
              <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>

      {/* Right Column – Form */}
      <div className="lg:col-span-7 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full p-8 lg:p-12 rounded-sm relative overflow-hidden border border-primary/10 bg-surface-variant"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 bg-surface/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center gap-3"
            >
              <CheckCircle className="text-green-500" size={40} />
              <p className="font-headline font-bold text-lg">Redirecting to your mailbox…</p>
              <p className="text-on-surface-variant text-sm">Compose your message and hit send!</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="relative z-10 space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="font-headline text-[10px] tracking-[0.15em] text-primary/70 uppercase ml-1 block mb-1.5">Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Rahul"
                  type="text"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="font-headline text-[10px] tracking-[0.15em] text-primary/70 uppercase ml-1 block mb-1.5">Email</label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@email.com"
                  type="email"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="type" className="font-headline text-[10px] tracking-[0.15em] text-primary/70 uppercase ml-1 block mb-1.5">Inquiry Type</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className={inputClass}
              >
                <option>AI/ML Project</option>
                <option>RAG / Local LLM</option>
                <option>Web Development</option>
                <option>Research Collaboration</option>
                <option>Hiring / Consulting</option>
                <option>General Query</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="font-headline text-[10px] tracking-[0.15em] text-primary/70 uppercase ml-1 block mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project…"
                rows={5}
                className={inputClass}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-on-primary font-headline font-bold px-10 py-4 rounded-sm tracking-widest text-sm flex items-center justify-center gap-3 shadow-lg shadow-primary/10 hover:bg-primary-dim transition-colors"
              type="submit"
            >
              <Mail size={16} /> OPEN MAIL CLIENT
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
