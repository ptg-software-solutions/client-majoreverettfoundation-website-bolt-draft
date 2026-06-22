import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const navLinks = [
  { label: 'Who We Help', href: '#who-we-help' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Resources', href: '#resources' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group" aria-label="Major Everett Foundation home">
          <div className="w-9 h-9 rounded-sm bg-gold-400 flex items-center justify-center shrink-0 group-hover:bg-gold-300 transition-colors">
            <Shield className="w-5 h-5 text-navy-950" strokeWidth={2.5} />
          </div>
          <span className="font-display text-white font-bold text-lg leading-tight hidden sm:block">
            Major Everett<br />
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Foundation</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-gold-400 transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 text-sm font-bold px-5 py-2.5 rounded transition-colors duration-200 tracking-wide"
        >
          Request Benefits Help
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-950 border-t border-navy-800 px-6 pb-6 pt-3">
          <nav className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-gold-400 font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold px-5 py-3 rounded transition-colors"
            >
              Request Benefits Help
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
