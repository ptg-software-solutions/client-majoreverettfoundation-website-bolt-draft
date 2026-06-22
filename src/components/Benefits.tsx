import { Heart, Wallet, ShieldAlert, Users, BookOpen, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const benefits = [
  {
    icon: Heart,
    title: 'Health Insurance Navigation',
    tag: 'Healthcare',
    summary:
      'Health coverage after a playing career can involve multiple programs, timelines, and eligibility windows. We help you make sense of what may be available.',
    actions: [
      'Understand your coverage options and how they interact',
      'Prepare questions before speaking with plan administrators',
      'Identify key enrollment windows and deadlines to ask about',
      'Organize documentation that may be requested during review',
    ],
  },
  {
    icon: Wallet,
    title: 'Pension Benefits',
    tag: 'Retirement',
    summary:
      'Pension structures for former players can be complex. We help you understand how the process generally works and what steps to consider taking.',
    actions: [
      'Understand how pension calculations are generally structured',
      'Identify what information you may need to gather',
      'Prepare questions for the relevant pension administrators',
      'Organize service records and career documentation',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Disability-Related Benefits',
    tag: 'Disability',
    summary:
      'Players who experienced significant injuries or long-term health effects may have access to disability-related programs. We help you understand what exists and how to explore it.',
    actions: [
      'Understand what types of disability programs may be available',
      'Identify next steps for initiating an inquiry or request',
      'Prepare medical and career documentation for review',
      'Organize records that support your history of service',
    ],
  },
  {
    icon: Users,
    title: 'Survivor Benefits',
    tag: 'Survivor',
    summary:
      "Surviving spouses and family members may have access to benefits following a player's passing. We help families understand what options may be worth exploring.",
    actions: [
      'Understand what survivor benefit programs may exist',
      'Identify documents a family may need to locate or request',
      'Prepare questions before contacting administrators',
      'Organize key records to support the review process',
    ],
  },
  {
    icon: BookOpen,
    title: 'Credited Seasons & Eligibility',
    tag: 'Records',
    summary:
      'Credited seasons can affect eligibility across multiple benefit programs. We help you understand what they mean and how to verify your service history.',
    actions: [
      'Understand how credited seasons are generally counted',
      'Identify how to request or verify your season records',
      'Prepare questions about your eligibility standing',
      'Organize contracts and performance records as supporting evidence',
    ],
  },
  {
    icon: FileText,
    title: 'Document Checklist Preparation',
    tag: 'Documentation',
    summary:
      "Having the right paperwork ready is often the most important step. We help you build a checklist so you're prepared when it matters most.",
    actions: [
      'Identify which documents are commonly requested per benefit type',
      'Organize existing records into a clear, accessible format',
      'Request help locating records that may be difficult to find',
      'Prepare a working checklist tailored to your situation',
    ],
  },
];

export default function Benefits() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="benefits" className="py-24 bg-steel-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold-600 text-xs font-bold tracking-widest uppercase mb-3">
            Benefits We Help Navigate
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-900 leading-tight mb-5">
            Understand Your Options.<br />Take Informed Next Steps.
          </h2>
          <p className="text-steel-600 text-lg leading-relaxed">
            We don't determine eligibility or guarantee outcomes — that's the role of the programs themselves. What we do is help you understand how each benefit area works, prepare the right questions, and organize what you need before you reach out.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, tag, summary, actions }) => {
            const isOpen = activeCard === title;
            return (
              <div
                key={title}
                className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden group
                  ${isOpen
                    ? 'border-navy-200 shadow-xl shadow-navy-900/10'
                    : 'border-steel-100 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-900/6'
                  }`}
              >
                {/* Card top */}
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300
                      ${isOpen ? 'bg-navy-800' : 'bg-navy-50 group-hover:bg-navy-100'}`}>
                      <Icon className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-gold-400' : 'text-navy-700'}`} />
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-gold-600 bg-gold-50 border border-gold-200 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy-900 leading-snug">
                    {title}
                  </h3>

                  <p className="text-steel-600 text-sm leading-relaxed flex-1">
                    {summary}
                  </p>

                  {/* Action list — always visible on open, shown inline */}
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xs font-bold tracking-widest uppercase text-steel-400 mb-3">
                      How we can help
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {actions.map((action) => (
                        <li key={action} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-steel-700 leading-snug">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Toggle button */}
                <button
                  onClick={() => setActiveCard(isOpen ? null : title)}
                  className={`flex items-center justify-between w-full px-7 py-4 border-t text-sm font-semibold transition-all duration-200
                    ${isOpen
                      ? 'border-navy-100 bg-navy-800 text-white'
                      : 'border-steel-100 bg-steel-50 text-navy-700 hover:bg-navy-50 hover:text-navy-900'
                    }`}
                  aria-expanded={isOpen}
                  aria-label={isOpen ? `Collapse ${title}` : `See how we help with ${title}`}
                >
                  <span>{isOpen ? 'Close' : 'See how we can help'}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'group-hover:translate-x-0.5'}`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-steel-400 text-sm max-w-2xl mx-auto leading-relaxed">
            The Major Everett Foundation provides navigation support and general information only. We do not determine eligibility, guarantee approval, provide legal or financial advice, or act as a representative in any official benefit process.
          </p>
        </div>
      </div>
    </section>
  );
}
