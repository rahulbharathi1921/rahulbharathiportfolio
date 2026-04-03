import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/15 bg-surface mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full gap-4">
        <div className="font-headline text-[10px] tracking-[0.1em] uppercase text-on-surface-variant">
          © 2024 ENGINEERED BY RAHUL
        </div>
        
        <div className="flex gap-8">
          {[
            { name: 'GITHUB', href: 'https://github.com/rahulbharathi1921' },
            { name: 'LINKEDIN', href: '#' },
            { name: 'TWITTER', href: '#' },
            { name: 'CONTACT', href: '/contact' }
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-headline text-[10px] tracking-[0.1em] uppercase text-on-surface-variant hover:text-secondary transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
