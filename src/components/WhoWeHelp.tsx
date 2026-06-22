import { Users, HeartHandshake, Baby, UserRound } from 'lucide-react';

const groups = [
  {
    icon: UserRound,
    title: 'Former Players',
    description:
      'If you played professional football — whether your career was one season or ten — you may have access to benefits you haven\'t fully explored. We help you figure out what\'s available and how to get started.',
  },
  {
    icon: HeartHandshake,
    title: 'Spouses & Partners',
    description:
      'Spouses and partners often have their own benefit options tied to a player\'s career. We help you understand what those might include and what questions to ask.',
  },
  {
    icon: Baby,
    title: 'Dependent Children',
    description:
      'Some benefit programs extend coverage or assistance to dependent children. We help families understand what applies to them and how to find the right information.',
  },
  {
    icon: Users,
    title: 'Surviving Family Members',
    description:
      'Losing a loved one is already overwhelming. If you\'re the surviving spouse or family member of a former player, we can help you understand what survivor benefits may exist and point you in the right direction.',
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
            Players Put in the Work.<br />We Help With What Comes Next.
          </h2>
          <p className="text-steel-600 text-lg leading-relaxed">
            Professional football careers are short, and the transition out of the game can be hard to navigate — especially when it comes to understanding your benefits. The Major Everett Foundation is here to help you and your family find your footing.
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
