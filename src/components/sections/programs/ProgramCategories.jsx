import React from 'react';

const categories = [
  {
    name: 'Karate',
    tagline: 'Traditional Striking Art',
    description:
      'Master the ancient Japanese martial art of Karate. Learn powerful strikes, blocks, and kata forms that build discipline, focus, and self-defense skills for all ages.',
    icon: '🥋',
    highlight: 'Ages 5+',
  },
  {
    name: 'Taekwondo',
    tagline: 'The Art of Kicking',
    description:
      'Develop lightning-fast kicks and dynamic footwork with Taekwondo. Improve flexibility, balance, and agility while earning belts through structured progression.',
    icon: '🦵',
    highlight: 'Ages 4+',
  },
  {
    name: 'MMA',
    tagline: 'Mixed Martial Arts',
    description:
      'Train in the complete fighting system. MMA combines striking, wrestling, and ground fighting techniques drawn from multiple disciplines for a complete skillset.',
    icon: '🥊',
    highlight: 'Ages 16+',
  },
  {
    name: 'Boxing',
    tagline: 'The Sweet Science',
    description:
      'Learn the fundamentals of boxing — footwork, jabs, crosses, hooks, and uppercuts. Build explosive power, sharp reflexes, and outstanding cardiovascular fitness.',
    icon: '🤜',
    highlight: 'All Levels',
  },
  {
    name: 'Kick Boxing',
    tagline: 'Stand-Up Combat',
    description:
      'Combine punches and kicks for a full-body martial arts workout. Kickboxing is perfect for self-defense, competition preparation, and high-intensity fitness training.',
    icon: '⚡',
    highlight: 'Ages 14+',
  },
  {
    name: 'Muay Thai',
    tagline: 'Art of Eight Limbs',
    description:
      'Train in Thailand\'s national sport using fists, elbows, knees, and shins. Muay Thai builds incredible striking power, conditioning, and mental toughness.',
    icon: '🔥',
    highlight: 'Ages 16+',
  },
  {
    name: 'Fitness',
    tagline: 'Martial Arts Conditioning',
    description:
      'Improve your overall fitness through martial arts-based training. Burn calories, build strength, and increase endurance with structured classes designed for all fitness levels.',
    icon: '💪',
    highlight: 'All Levels',
  },
  {
    name: 'Weight Loss',
    tagline: 'Transform Your Body',
    description:
      'Achieve your weight loss goals with our high-intensity martial arts training programs. Burn up to 800+ calories per session while learning real self-defense skills.',
    icon: '🎯',
    highlight: 'All Levels',
  },
  {
    name: 'Personal Training',
    tagline: 'One-on-One Coaching',
    description:
      'Get dedicated one-on-one sessions with our certified coaches. Personal training is tailored to your specific goals, pace, and martial arts discipline of choice.',
    icon: '🏆',
    highlight: 'By Appointment',
  },
];

export default function ProgramCategories() {
  return (
    <section className="bg-black text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gray">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-brand-red"></div>
            <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">What We Offer</p>
            <div className="w-8 h-0.5 bg-brand-red"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter font-display uppercase leading-tight">
            OUR PROGRAM <span className="text-brand-red">CATEGORIES</span>
          </h2>
          <p className="mt-4 text-brand-light-gray font-sans font-light max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4">
            From traditional martial arts to modern combat sports and personal fitness — we have a program designed for every goal, age, and skill level.
          </p>
        </div>

        {/* 3-column grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group bg-[#0a0a0a] border border-brand-gray hover:border-brand-red transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(255,14,52,0.12)] cursor-pointer relative overflow-hidden"
            >
              {/* Top red accent line */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-500 group-hover:w-full"></div>

              <div className="p-6 sm:p-8">
                {/* Icon + Highlight row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-4xl">{cat.icon}</span>
                  <span className="text-xs font-bold tracking-widest uppercase font-sans text-brand-red bg-brand-red/10 px-3 py-1 border border-brand-red/20">
                    {cat.highlight}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase font-sans mb-2">
                  {cat.tagline}
                </p>

                {/* Name */}
                <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white mb-3 group-hover:text-brand-red transition-colors duration-300">
                  {cat.name}
                </h3>

                {/* Divider */}
                <div className="w-8 h-0.5 bg-brand-red mb-4 group-hover:w-full transition-all duration-500"></div>

                {/* Description */}
                <p className="text-gray-400 font-sans font-light text-sm leading-relaxed">
                  {cat.description}
                </p>

                {/* Bottom CTA */}
                <div className="mt-6 flex items-center space-x-2 text-brand-red text-xs font-bold tracking-widest uppercase font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
