import { Target, Eye, HandshakeIcon } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To help former professional football players and their families understand and access the benefits that may be available to them — with clear information, steady guidance, and genuine care.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'A future where no former player is left wondering what they\'re entitled to. Where every family has access to plain-language information and a knowledgeable person to help them navigate the process.',
  },
  {
    icon: HandshakeIcon,
    title: 'Our Commitment',
    description:
      'We are not here to make decisions for you or speak on your behalf in official processes. We are here to make sure you understand your options, feel equipped, and never have to go it alone.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image / accent block */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Foundation team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
            </div>
            {/* Stat callout */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-gold-400 rounded-2xl px-7 py-5 shadow-xl shadow-navy-900/20">
              <p className="font-display text-3xl font-bold text-navy-950">100%</p>
              <p className="text-navy-800 text-sm font-semibold mt-0.5">Free to Players &amp; Families</p>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <p className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-3">Our Story</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-900 leading-tight mb-6">
              About the Major<br />Everett Foundation
            </h2>
            <p className="text-steel-600 text-lg leading-relaxed mb-6">
              Professional football players pour everything into their careers — physically, mentally, and personally. Yet when the game ends, too many face a confusing and difficult benefits landscape with little support to help them navigate it.
            </p>
            <p className="text-steel-600 text-lg leading-relaxed mb-10">
              The Major Everett Foundation was built to change that. We exist to provide free, informed guidance to former players and their families — helping them understand what benefit programs exist, what questions to ask, and how to take the next step with clarity.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-6">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">{title}</h4>
                    <p className="text-steel-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
