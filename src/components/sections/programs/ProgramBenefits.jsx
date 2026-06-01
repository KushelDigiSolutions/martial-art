'use client';

import { Award, Activity, Brain, Users } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Confidence & Self-Esteem',
    description:
      'Build unwavering confidence through mastery of technique, belt progression, and overcoming challenges that once seemed impossible.',
  },
  {
    icon: Activity,
    title: 'Physical Fitness',
    description:
      'Achieve peak physical condition with full-body workouts that build strength, endurance, flexibility, and explosive power.',
  },
  {
    icon: Brain,
    title: 'Mental Discipline',
    description:
      'Sharpen your mental edge with focused training that develops concentration, emotional control, and an indomitable spirit.',
  },
  {
    icon: Users,
    title: 'Community & Brotherhood',
    description:
      'Join a family of warriors who push each other to excel. Forge lifelong bonds built on mutual respect, trust, and shared sacrifice.',
  },
];

export default function ProgramBenefits() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-red/[0.03] rounded-full blur-[150px] pointer-events-none" />

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-0.5 bg-brand-red" />
            <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">
              Why Train With Us
            </p>
            <div className="w-12 h-0.5 bg-brand-red" />
          </div>

          <h2 className="font-display font-black tracking-tighter uppercase text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9] mb-6">
            Program
            <br />
            <span className="text-brand-red">Benefits</span>
          </h2>

          <p className="font-sans font-light text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto">
            Our programs deliver transformative benefits that extend far beyond
            the dojo. Every class is an investment in your strongest self.
          </p>
        </div>

        {/* 4-Column Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#111] border border-gray-800 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-brand-red hover:shadow-2xl hover:shadow-brand-red/10 cursor-pointer"
              >
                {/* Top red accent — animates in on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-red transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:translate-x-0" />

                {/* Glow effect behind icon on hover */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-brand-red/0 rounded-full blur-2xl transition-all duration-500 group-hover:bg-brand-red/15 pointer-events-none" />

                {/* Icon */}
                <div className="relative mb-6 inline-flex">
                  <div className="w-20 h-20 flex items-center justify-center mx-auto bg-brand-red/10 border border-brand-red/20 transition-all duration-500 group-hover:bg-brand-red/20 group-hover:border-brand-red/50 group-hover:rotate-3">
                    <IconComponent className="w-10 h-10 text-brand-red transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-black uppercase tracking-tight text-lg text-white mb-4 transition-colors duration-300 group-hover:text-brand-red">
                  {benefit.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-0.5 bg-brand-red/40 mx-auto mb-4 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-red" />

                {/* Description */}
                <p className="font-sans font-light text-gray-400 leading-relaxed text-sm">
                  {benefit.description}
                </p>

                {/* Bottom corner accents */}
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b border-l border-brand-red/0 transition-all duration-500 group-hover:w-6 group-hover:h-6 group-hover:border-brand-red/40" />
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b border-r border-brand-red/0 transition-all duration-500 group-hover:w-6 group-hover:h-6 group-hover:border-brand-red/40" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
