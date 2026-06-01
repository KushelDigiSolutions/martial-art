'use client';

import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';

const highlights = [
  'Competition preparation and tournament coaching',
  'Advanced self-defense techniques for real-world confidence',
  'Leadership training and mentorship opportunities',
  'Strength, conditioning, and flexibility development',
  'Character building: discipline, respect, and perseverance',
  'Goal setting and personal growth milestones',
];

export default function TeenProgram() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-brand-red/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-brand-red/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-brand-red" />
              <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">Teen Warriors</p>
            </div>

            <h2 className="font-display font-black tracking-tighter uppercase text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9]">
              Teen Martial
              <br />
              <span className="text-brand-red">Arts Program</span>
            </h2>

            <p className="font-sans font-light text-lg leading-relaxed text-gray-300 max-w-lg">
              Built for teens aged 13–17, our program channels the energy and ambition of adolescence into powerful martial arts training. Whether preparing for competition or building lifelong discipline, teens develop the mental toughness, physical prowess, and leadership skills that set them apart.
            </p>

            <div className="w-full h-px bg-gradient-to-r from-brand-red/50 via-brand-red/20 to-transparent" />

            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start space-x-3 group/item">
                  <CheckCircle className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                  <span className="font-sans font-light text-gray-300 text-base leading-relaxed transition-colors duration-300 group-hover/item:text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

           
          </div>

          {/* Right — Image */}
          <div className="relative group">
            <div className="relative border-r-4 border-brand-red">
              <div className="absolute top-8 -left-8 w-full h-full bg-brand-red hidden sm:block transition-all duration-500 group-hover:top-6 group-hover:-left-6" />
              <div className="relative overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780315029/MARTIAL_ARTS_zzzuhd.png"
                  alt="Teen Martial Arts Training"
                  width={800}
                  height={600}
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-brand-red text-white px-6 py-3 z-10 shadow-lg shadow-brand-red/30">
              <p className="font-display font-black text-2xl uppercase tracking-tight">Ages 13–17</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
