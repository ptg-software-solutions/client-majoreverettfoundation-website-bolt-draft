import { Users, HeartHandshake, Baby, UserRound } from 'lucide-react';

const groups = [
  {
    icon: UserRound,
    title: 'Former NFL Players',
    description:
      'Players from any era who may have questions about their pension eligibility, credited seasons, disability benefits, or league health coverage.',
  },
  {
    icon: HeartHandshake,
    title: 'Spouses & Partners',
    description:
      'Spouses and domestic partners who need guidance on survivor benefit options, joint-life annuities, or healthcare continuation coverage.',
  },
  {
    icon: Baby,
    title: 'Dependent Children',
    description:
      'Families navigating dependent coverage provisions, educational assistance programs, and transition planning for children of former players.',
  },
  {
    icon: Users,
    title: 'Families of Deceased Players',
    description:
      'Surviving family members who need help understanding survivor annuities, death benefits, and estate-related benefit documentation.',
  },
];

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-3">Who We Serve</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-900 leading-tight mb-5">
            Built for Players<br />and Their Families
          </h2>
          <p className="text-steel-600 text-lg leading-relaxed">
            Professional football careers are short and physically demanding. Yet navigating the benefits landscape afterward can be even harder. We're here to help those who served the game.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-7 rounded-2xl border border-steel-100 hover:border-gold-300 hover:shadow-xl hover:shadow-navy-900/5 bg-white transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-900 group-hover:bg-gold-400 flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon className="w-6 h-6 text-gold-400 group-hover:text-navy-950 transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 mb-3">{title}</h3>
              <p className="text-steel-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
