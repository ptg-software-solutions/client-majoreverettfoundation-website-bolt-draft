import { Heart, Wallet, ShieldAlert, BookOpen, FileBadge, FileText } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Health Insurance',
    description:
      'Understanding post-career health coverage options, continuation rights, and how to identify plans available through league or union programs.',
    tag: 'Healthcare',
  },
  {
    icon: Wallet,
    title: 'Pension Benefits',
    description:
      'Guidance on how pension accrual works, credited season requirements, vesting rules, and what to expect when applying for distributions.',
    tag: 'Retirement',
  },
  {
    icon: ShieldAlert,
    title: 'Disability Benefits',
    description:
      'Navigating Total & Permanent Disability, Neurocognitive Disability, and line-of-duty benefit programs — and understanding the documentation required.',
    tag: 'Disability',
  },
  {
    icon: FileBadge,
    title: 'Survivor Benefits',
    description:
      'Helping families understand survivor annuities, death benefits, and what options exist for spouses and dependents after a player\'s passing.',
    tag: 'Survivor',
  },
  {
    icon: BookOpen,
    title: 'Credited Seasons',
    description:
      'Assisting players in verifying and documenting their credited seasons of service, which directly affect pension eligibility and benefit amounts.',
    tag: 'Records',
  },
  {
    icon: FileText,
    title: 'Document Preparation',
    description:
      'Helping players and families organize, locate, and prepare supporting documentation required to submit benefits inquiries or appeals.',
    tag: 'Documentation',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24" style={{ background: '#f6f7f9' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-3">Areas of Assistance</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-900 leading-tight mb-5">
            Benefits We Help<br />You Navigate
          </h2>
          <p className="text-steel-600 text-lg leading-relaxed">
            We don't make promises about outcomes. We provide guidance, resources, and informed support to help you understand your options and take the right steps.
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
      </div>
    </section>
  );
}
