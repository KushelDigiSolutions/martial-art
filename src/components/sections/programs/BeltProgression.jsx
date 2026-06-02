'use client';

import { ChevronRight, ChevronDown } from 'lucide-react';

const belts = [
  {
    name: 'White',
    color: 'bg-white',
    textColor: 'text-gray-900',
    borderColor: 'border-white/60',
    milestone: 'The beginning — pure potential, open mind',
  },
  {
    name: 'Yellow',
    color: 'bg-yellow-400',
    textColor: 'text-gray-900',
    borderColor: 'border-yellow-400/60',
    milestone: 'Sunrise of knowledge — foundations mastered',
  },
  {
    name: 'Orange',
    color: 'bg-orange-500',
    textColor: 'text-white',
    borderColor: 'border-orange-500/60',
    milestone: 'Growing strength — techniques refined',
  },
  {
    name: 'Green',
    color: 'bg-green-600',
    textColor: 'text-white',
    borderColor: 'border-green-600/60',
    milestone: 'Growth phase — skills taking root',
  },
  {
    name: 'Blue',
    color: 'bg-blue-600',
    textColor: 'text-white',
    borderColor: 'border-blue-600/60',
    milestone: 'Sky level — expanding horizons',
  },
  {
    name: 'Brown',
    color: 'bg-amber-800',
    textColor: 'text-white',
    borderColor: 'border-amber-800/60',
    milestone: 'Maturity — ripening expertise',
  },
  {
    name: 'Black',
    color: 'bg-gray-900',
    textColor: 'text-white',
    borderColor: 'border-gray-600',
    milestone: 'Mastery — the journey truly begins',
  },
];

export default function BeltProgression() {
  return (
    <section className="relative bg-[#050505] py-14 md:py-20 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-0.5 bg-brand-red" />
            <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">
              Your Journey
            </p>
            <div className="w-12 h-0.5 bg-brand-red" />
          </div>

          <h2 className="font-display font-black tracking-tighter uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9] mb-4">
            Belt
            <br />
            <span className="text-brand-red">Progression</span>
          </h2>

          <p className="font-sans font-light text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto">
            Each belt represents a milestone in your martial arts journey.
            Progress is earned through dedication, discipline, and mastery of
            technique.
          </p>
        </div>

        {/* Desktop — Horizontal Belt Ladder */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting red line */}
            <div className="absolute top-[60px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-brand-red/40 via-brand-red to-brand-red/40 z-0" />

            <div className="grid grid-cols-7 gap-4 relative z-10">
              {belts.map((belt, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center"
                >
                  {/* Belt circle / node */}
                  <div
                    className={`relative w-[120px] h-[120px] flex flex-col items-center justify-center rounded-full border-4 ${belt.borderColor} bg-[#111] transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-red/20`}
                  >
                    {/* Belt color strip */}
                    <div
                      className={`w-16 h-3 ${belt.color} rounded-sm mb-2 shadow-md transition-transform duration-300 group-hover:scale-110`}
                    />
                    <span
                      className="font-display font-black text-sm uppercase tracking-tight text-white"
                    >
                      {belt.name}
                    </span>
                    {/* Step number */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-brand-red text-white text-xs font-bold flex items-center justify-center rounded-full shadow-md shadow-brand-red/40">
                      {index + 1}
                    </span>
                  </div>

                  {/* Arrow (except last) */}
                  {index < belts.length - 1 && (
                    <div className="hidden" />
                  )}

                  {/* Milestone text */}
                  <p className="mt-4 font-sans font-light text-gray-400 text-xs text-center leading-snug max-w-[140px] transition-colors duration-300 group-hover:text-white">
                    {belt.milestone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet — Vertical Belt Ladder */}
        <div className="lg:hidden">
          <div className="relative pl-12">
            {/* Vertical red connecting line */}
            <div className="absolute top-0 bottom-0 left-[30px] w-0.5 bg-gradient-to-b from-brand-red/40 via-brand-red to-brand-red/40" />

            <div className="space-y-8">
              {belts.map((belt, index) => (
                <div
                  key={index}
                  className="group relative flex items-center space-x-5"
                >
                  {/* Node on the line */}
                  <div className="absolute left-[-30px] flex items-center justify-center">
                    <div
                      className={`w-[60px] h-[60px] flex flex-col items-center justify-center rounded-full border-2 ${belt.borderColor} bg-[#111] transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-red/20 z-10`}
                    >
                      <div
                        className={`w-8 h-2 ${belt.color} rounded-sm shadow-sm`}
                      />
                    </div>
                  </div>

                  {/* Belt info card */}
                  <div className="flex-1 bg-[#111] border border-gray-800 p-5 ml-8 transition-all duration-500 group-hover:border-brand-red group-hover:bg-brand-red/5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-black uppercase tracking-tight text-lg text-white">
                        {belt.name} Belt
                      </h3>
                      <span className="w-6 h-6 bg-brand-red text-white text-xs font-bold flex items-center justify-center rounded-full flex-shrink-0">
                        {index + 1}
                      </span>
                    </div>
                    <p className="font-sans font-light text-gray-400 text-sm leading-relaxed">
                      {belt.milestone}
                    </p>
                  </div>

                  {/* Arrow to next (except last) */}
                  {index < belts.length - 1 && (
                    <ChevronDown className="absolute -bottom-5 left-[-14px] w-4 h-4 text-brand-red z-20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="font-sans font-light text-gray-500 text-sm uppercase tracking-widest">
            Start your journey at White Belt — earn your way to Black Belt mastery
          </p>
        </div>
      </div>
    </section>
  );
}
