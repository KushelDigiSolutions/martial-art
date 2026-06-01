'use client';

import Image from 'next/image';
import { ArrowRight, Flame, Clock, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Flame,
    value: '500+',
    label: 'Calories / Session',
  },
  {
    icon: Clock,
    value: '12',
    label: 'Week Programs',
  },
  {
    icon: TrendingUp,
    value: '100%',
    label: 'Results Driven',
  },
];

const pillars = [
  'High-intensity interval training fused with martial arts technique',
  'Functional strength building for real-world power',
  'Flexibility and mobility work to prevent injuries',
  'Mental resilience and focus under physical stress',
];

export default function FitnessDiscipline() {
  return (
    <section className="relative bg-brand-dark py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-stretch">
          {/* Left Side — Text Content */}
          <div className="flex flex-col justify-center lg:pr-16 space-y-8">
            {/* Red label line */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-brand-red" />
              <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">
                Train Hard
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-display font-black tracking-tighter uppercase text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9]">
              Fitness &
              <br />
              <span className="text-brand-red">Discipline</span>
              <br />
              Training
            </h2>

            {/* Description */}
            <p className="font-sans font-light text-lg leading-relaxed text-gray-300 max-w-lg">
              Our fitness-focused martial arts training pushes your limits,
              sculpts your physique, and forges unbreakable discipline. Every
              session is a full-body assault on mediocrity, designed to produce
              results you can see and feel.
            </p>

            {/* Pillar list */}
            <div className="space-y-3">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 group"
                >
                  <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0 transition-transform duration-300 group-hover:scale-150" />
                  <span className="font-sans font-light text-gray-300 text-base transition-colors duration-300 group-hover:text-white">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
           
          </div>

          {/* Right Side — Full Background Image with Dark Overlay */}
          <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] group">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780316961/budo_martial_academy_zrsi3i.png"
                alt="Fitness and Discipline Training"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
              {/* Red tint on hover */}
              <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Decorative border */}
            <div className="absolute top-4 right-4 bottom-4 left-4 border border-brand-red/20 pointer-events-none transition-all duration-500 group-hover:border-brand-red/40" />
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative border border-gray-800 bg-[#111] p-8 flex items-center space-x-6 transition-all duration-500 hover:border-brand-red hover:bg-brand-red/5 cursor-pointer"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-500 group-hover:w-full" />

                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-brand-red/10 transition-all duration-500 group-hover:bg-brand-red/20">
                    <IconComponent className="w-7 h-7 text-brand-red" />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight">
                      {stat.value}
                    </p>
                    <p className="font-sans font-light text-gray-400 text-sm uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
