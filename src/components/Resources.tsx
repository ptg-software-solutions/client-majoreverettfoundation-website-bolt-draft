import { useState } from 'react';
import { CheckSquare, Square, Download, ArrowRight } from 'lucide-react';

const categories = [
  {
    label: 'Personal Identification',
    items: [
      'Government-issued photo ID (driver\'s license or passport)',
      'Social Security card or official SSA documentation',
      'Birth certificate',
      'DD-214 or military service records (if applicable)',
    ],
  },
  {
    label: 'NFL / Playing Career',
    items: [
      'NFL Player Contract(s) for each season played',
      'Pay stubs or W-2s from playing years',
      'Roster documentation, practice squad records, or IR placements',
      'Any written correspondence with teams or the league',
    ],
  },
  {
    label: 'Health & Medical',
    items: [
      'Current health insurance card and plan documents',
      'Medical records relevant to disability or injury claims',
      'Prior authorization letters or appeal correspondence',
      'Records of league-related surgeries or treatments',
    ],
  },
  {
    label: 'Pension & Retirement',
    items: [
      'Prior pension benefit statements (if received)',
      'Correspondence with the NFL Player Second Career Savings Plan',
      'Beneficiary designation forms previously filed',
      'Proof of vesting or credited seasons (if available)',
    ],
  },
  {
    label: 'Family & Survivor',
    items: [
      'Marriage certificate (for spousal benefits)',
      'Birth certificates for dependent children',
      'Divorce decrees or legal separation documents (if applicable)',
      'Death certificate (for survivor benefit requests)',
    ],
  },
];

export default function Resources() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  const totalItems = categories.reduce((n, c) => n + c.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <section id="resources" style={{ background: '#f6f7f9' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-3">Document Checklist</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-900 leading-tight mb-4">
              Prepare Before<br />You Reach Out
            </h2>
            <p className="text-steel-600 text-lg leading-relaxed max-w-xl">
              Having the right documents ready can significantly speed up the benefits navigation process. Use this checklist as a starting point.
            </p>
          </div>
          {/* Progress */}
          <div className="shrink-0 bg-white rounded-2xl p-6 border border-steel-100 shadow-sm w-full md:w-56 text-center">
            <div className="relative w-20 h-20 mx-auto mb-3">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32" fill="none" stroke="#eceef2" strokeWidth="8" />
                <circle
                  cx="40" cy="40" r="32" fill="none"
                  stroke="#c9900f" strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 32}`}
                  strokeDashoffset={`${2 * Math.PI * 32 * (1 - progress / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-bold text-navy-900 text-lg">
                {progress}%
              </span>
            </div>
            <p className="text-steel-600 text-sm">{checkedCount} of {totalItems} items</p>
          </div>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div key={cat.label} className="bg-white rounded-2xl p-6 border border-steel-100">
              <h3 className="font-display text-lg font-bold text-navy-900 mb-4 pb-3 border-b border-steel-100">
                {cat.label}
              </h3>
              <ul className="flex flex-col gap-3">
                {cat.items.map((item) => {
                  const key = `${cat.label}::${item}`;
                  const isChecked = !!checked[key];
                  return (
                    <li
                      key={key}
                      onClick={() => toggle(key)}
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <span className="mt-0.5 shrink-0 text-steel-300 group-hover:text-gold-500 transition-colors">
                        {isChecked
                          ? <CheckSquare className="w-5 h-5 text-gold-500" />
                          : <Square className="w-5 h-5" />
                        }
                      </span>
                      <span className={`text-sm leading-relaxed transition-colors ${isChecked ? 'text-steel-400 line-through' : 'text-steel-700'}`}>
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <p className="text-steel-500 text-sm">Ready to begin? Reach out and we'll help you take the next step.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded transition-colors duration-200 text-sm"
          >
            Request Benefits Help
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
