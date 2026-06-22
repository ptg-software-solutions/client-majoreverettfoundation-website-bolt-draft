import { Heart, Wallet, ShieldAlert, BookOpen, FileBadge, FileText } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Health Insurance',
    description:
      'After a playing career ends, understanding your health coverage options can feel complicated. We help you identify what programs may be available to former players and their families, and we explain the questions worth asking.',
    tag: 'Healthcare',
  },
  {
    icon: Wallet,
    title: 'Pension Benefits',
    description:
      'Many former players are entitled to pension benefits based on their seasons of service. We help you understand how the process generally works, what information you may need, and how to find out where you stand.',
    tag: 'Retirement',
  },
  {
    icon: ShieldAlert,
    title: 'Disability Benefits',
    description:
      'Players who experienced significant injuries or long-term health effects from their career may have access to disability-related programs. We help you understand what types of programs exist and what the general application process looks like.',
    tag: 'Disability',
  },
  {
    icon: FileBadge,
    title: 'Survivor Benefits',
    description:
      'Surviving spouses and family members may be entitled to benefits after a player passes. We help families understand what options might be available to them and what steps to consider.',
    tag: 'Survivor',
  },
  {
    icon: BookOpen,
    title: 'Credited Seasons',
    description:
      'The number of credited seasons a player has on record affects pension and other benefit eligibility. We help players understand what credited seasons mean, how they\'re counted, and how to verify or document their service history.',
    tag: 'Records',
  },
  {
    icon: FileText,
    title: 'Document Preparation',
    description:
      'Pulling together the right paperwork is often the hardest part of the process. We help players and families identify what documents they may need, how to organize them, and where to look if records are hard to find.',
    tag: 'Documentation',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24" style={{ background: '#f6f7f9' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-3">Benefit Areas</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-900 leading-tight mb-5">
            We Help You Navigate<br />the Benefits Landscape
          </h2>
          <p className="text-steel-600 text-lg leading-relaxed">
            We can't tell you what you'll receive — that's determined by the programs themselves. What we can do is help you understand how these benefit areas work and make sure you're asking the right questions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, description, tag }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-7 border border-steel-100 hover:shadow-lg hover:shadow-navy-900/5 transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-lg bg-navy-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-navy-700" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-gold-600 bg-gold-50 border border-gold-200 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900">{title}</h3>
              <p className="text-steel-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <p className="mt-10 text-center text-steel-400 text-sm max-w-2xl mx-auto leading-relaxed">
          The Major Everett Foundation provides navigation support and general information only. We do not determine eligibility, provide legal or financial advice, or act as a representative in any official benefit process.
        </p>
      </div>
    </section>
  );
}
