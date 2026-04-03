import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import Magnetic from './Magnetic';

const NAV_LINKS = [
  { name: 'PROJECTS', href: '/' },
  { name: 'SKILLS', href: '/skills' },
  { name: 'EXPERIENCE', href: '/experience' },
  { name: 'ABOUT', href: '/about' },
  { name: 'RESEARCH', href: '/research' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Magnetic>
          <Link to="/" className="text-2xl font-headline font-bold tracking-tighter text-primary">
            RAHUL
          </Link>
        </Magnetic>
        
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Magnetic key={link.name} strength={0.2}>
              <Link
                to={link.href}
                className={cn(
                  "font-headline tracking-tight uppercase text-sm transition-colors relative py-1",
                  location.pathname === link.href 
                    ? "text-secondary" 
                    : "text-on-surface-variant hover:text-secondary"
                )}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary"
                  />
                )}
              </Link>
            </Magnetic>
          ))}
        </div>

        <Magnetic>
          <Link
            to="/contact"
            className="bg-primary text-on-primary font-headline px-6 py-2 rounded-sm text-sm font-bold tracking-tight shadow-lg shadow-primary/20 hover:scale-105 transition-all inline-block"
          >
            RESUME
          </Link>
        </Magnetic>
      </div>
    </nav>
  );
}
