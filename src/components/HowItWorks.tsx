import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Request',
    description:
      'Fill out our confidential intake form. Tell us a bit about your situation — playing career, benefit area of concern, and how best to reach you.',
  },
  {
    number: '02',
    title: 'We Review & Respond',
    description:
      'A member of our team will review your submission and follow up with you directly, typically within 3–5 business days.',
  },
  {
    number: '03',
    title: 'Guidance & Resources',
    description:
      'We connect you with the right information, checklists, and contacts to help you understand your options and next steps.',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description:
      'If your situation requires continued assistance — document preparation, follow-up coordination, or referrals — we stay engaged throughout the process.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-3">The Process</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-900 leading-tight mb-6">
              How We Work<br />With You
            </h2>
            <p className="text-steel-600 text-lg leading-relaxed mb-8">
              Our process is straightforward, confidential, and completely free. We guide you through the complexities of benefits navigation — with respect for your time and your story.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-7 py-4 rounded transition-colors duration-200"
            >
              Request Benefits Help
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-6 group">
                {/* Connector */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 group-hover:bg-gold-400 flex items-center justify-center shrink-0 transition-colors duration-300 z-10">
                    <span className="font-display font-bold text-white group-hover:text-navy-950 text-sm transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-steel-200 my-1" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-10">
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-2 mt-2.5">{step.title}</h3>
                  <p className="text-steel-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
