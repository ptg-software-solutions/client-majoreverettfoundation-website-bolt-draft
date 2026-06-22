import { useState } from 'react';
import { CheckSquare, Square, ArrowRight } from 'lucide-react';

const categories = [
  {
    label: 'Personal Identification',
    note: 'Basic ID documents help confirm who you are and support most benefit requests.',
    items: [
      'Government-issued photo ID (driver\'s license or passport)',
      'Social Security card or a document showing your Social Security number',
      'Birth certificate',
    ],
  },
  {
    label: 'Playing Career Records',
    note: 'Documents that confirm your time in professional football are central to most benefit areas.',
    items: [
      'Player contracts from any season you played',
      'Pay stubs or W-2 forms from your playing years',
      'Any roster documentation, practice squad notices, or IR-related paperwork',
      'Written correspondence from teams or the league (if you have it)',
    ],
  },
  {
    label: 'Health & Medical',
    note: 'Useful if you\'re exploring disability-related programs or insurance continuation.',
    items: [
      'Current health insurance card and any plan summary documents',
      'Medical records related to injuries or conditions from your playing career',
      'Records of surgeries, treatments, or rehabilitation tied to football-related injuries',
    ],
  },
  {
    label: 'Pension & Retirement',
    note: 'These help clarify your service history and any prior benefit elections.',
    items: [
      'Any pension benefit statements you\'ve received',
      'Beneficiary designation forms you may have previously filed',
      'Documents showing credited seasons or vesting status (if you have them)',
    ],
  },
  {
    label: 'Family & Survivor Documentation',
    note: 'Required when benefits may extend to a spouse, children, or surviving family.',
    items: [
      'Marriage certificate (for spousal benefit inquiries)',
      'Birth certificates for dependent children',
      'Divorce decree or separation agreement (if applicable)',
      'Death certificate of a former player (for survivor benefit requests)',
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
            <p className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-3">Getting Organized</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-900 leading-tight mb-4">
              What to Have<br />on Hand
            </h2>
            <p className="text-steel-600 text-lg leading-relaxed max-w-xl">
              You don't need to have everything in order before reaching out to us — but having some of these documents available can help us point you in the right direction more quickly. Use this as a starting checklist, not a barrier.
            </p>
          </div>
          {/* Progress tracker */}
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
              <h3 className="font-display text-lg font-bold text-navy-900 mb-1">
                {cat.label}
              </h3>
              <p className="text-steel-400 text-xs mb-4 pb-3 border-b border-steel-100">{cat.note}</p>
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

        {/* Reassurance note + CTA */}
        <div className="mt-10 bg-white border border-steel-100 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-steel-600 text-sm leading-relaxed max-w-lg">
            <span className="font-semibold text-navy-900">Don't have all of this?</span> That's okay. Many people come to us with just a few pieces of information. We can help you figure out what's missing and how to find it.
          </p>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded transition-colors duration-200 text-sm"
          >
            Request Benefits Help
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
