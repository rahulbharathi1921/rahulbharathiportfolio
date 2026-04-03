import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-primary/5 bg-surface-variant mt-auto">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-headline text-[10px] tracking-[0.15em] uppercase text-on-surface-variant/40">
            © 2026 — ENGINEERED BY RAHUL BHARATHI
          </p>
          <p className="font-headline text-[10px] tracking-[0.1em] text-on-surface-variant/25 mt-1">
            Built with React, TypeScript & Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-6">
          {[
            { icon: Github, label: 'GitHub', href: 'https://github.com/rahulbharathi1921' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rahulbharathi' },
            { icon: Mail, label: 'Email', href: 'mailto:rahulbharathi1921@gmail.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-on-surface-variant/30 hover:text-secondary transition-colors"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
