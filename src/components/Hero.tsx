import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050d1e 0%, #091530 45%, #152f5c 100%)' }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(201,144,15,0.3) 40px,
            rgba(201,144,15,0.3) 41px
          )`,
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(ellipse, #c9900f 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center pt-24 pb-20">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          Veteran Athlete Advocacy
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Your Career Ended.<br />
          <span className="text-gold-400">Your Benefits Shouldn't.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          The Major Everett Foundation helps former professional football players and their families understand and access the health, pension, disability, and survivor benefits they may be entitled to — at no cost to them.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold text-base px-8 py-4 rounded transition-colors duration-200 tracking-wide shadow-lg shadow-gold-400/20"
          >
            Request Benefits Help
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#who-we-help"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase animate-bounce">
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
