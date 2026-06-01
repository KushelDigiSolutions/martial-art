'use client';

import { Shield, Target, Zap, Eye, Hand, Move } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Situational Awareness',
    description:
      'Learn to read environments, identify threats before they escalate, and position yourself for maximum safety. Awareness is the first and most powerful line of defense.',
  },
  {
    icon: Target,
    title: 'Striking Techniques',
    description:
      'Master devastating strikes, blocks, and counterattacks drawn from multiple martial arts disciplines. Train your body to react with precision under pressure.',
  },
  {
    icon: Move,
    title: 'Escape & Evasion',
    description:
      'Develop the ability to break free from grabs, holds, and ground positions. Learn how to create distance and escape dangerous confrontations safely.',
  },
  {
    icon: Shield,
    title: 'Defensive Positioning',
    description:
      'Master proper stance, guard positions, and body mechanics that keep you protected while creating opportunities to neutralize threats.',
  },
  {
    icon: Zap,
    title: 'Reflexive Response',
    description:
      'Train your nervous system for instantaneous reaction through repetitive drilling. Build muscle memory that activates when you need it most.',
  },
  {
    icon: Hand,
    title: 'De-escalation Skills',
    description:
      'True martial arts mastery includes knowing when not to fight. Learn verbal and non-verbal techniques to defuse situations before they become physical.',
  },
];

export default function SelfDefense() {
  return (
    <section className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-red/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-brand-red/20" />
      <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-brand-red/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — Centered */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-0.5 bg-brand-red" />
            <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">
              Be Prepared
            </p>
            <div className="w-12 h-0.5 bg-brand-red" />
          </div>

          <h2 className="font-display font-black tracking-tighter uppercase text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9] mb-6">
            Self-Defense
            <br />
            <span className="text-brand-red">Training</span>
          </h2>

          <p className="font-sans font-light text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto">
            Our self-defense curriculum goes beyond technique—it builds the
            mindset, awareness, and reflexes you need to protect yourself and
            your loved ones in any situation.
          </p>
        </div>

        {/* 3-Column Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#111] border border-gray-800 p-8 transition-all duration-500 hover:border-brand-red hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-red/10 cursor-pointer"
              >
                {/* Top red accent line */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-brand-red/10 border border-brand-red/20 transition-all duration-500 group-hover:bg-brand-red/20 group-hover:border-brand-red/40">
                    <IconComponent className="w-8 h-8 text-brand-red transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-black uppercase tracking-tight text-xl text-white mb-4 transition-colors duration-300 group-hover:text-brand-red">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-sans font-light text-gray-400 leading-relaxed text-base">
                  {feature.description}
                </p>

                {/* Bottom corner accent */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-brand-red/0 transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:border-brand-red/40" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
