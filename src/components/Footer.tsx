import { Shield } from 'lucide-react';

const footerLinks = [
  { label: 'Who We Help', href: '#who-we-help' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Resources', href: '#resources' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-sm bg-gold-400 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-navy-950" strokeWidth={2.5} />
              </div>
              <span className="font-display text-white font-bold text-lg leading-tight">
                Major Everett<br />
                <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Foundation</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Helping former professional football players and their families navigate the benefits landscape — at no cost.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4">Navigate</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 hover:text-gold-400 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4">Disclaimer</p>
            <p className="text-white/40 text-xs leading-relaxed">
              The Major Everett Foundation provides informational guidance and navigation assistance only. We are not a law firm and do not provide legal or financial advice. We do not guarantee eligibility determinations, benefit approvals, or specific outcomes. All information shared with the foundation is treated as confidential.
            </p>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Major Everett Foundation. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Not affiliated with the NFL, NFLPA, or any team organization.
          </p>
        </div>
      </div>
    </footer>
  );
}
