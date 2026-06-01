'use client';

import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';

const benefits = [
  'Build confidence and self-esteem through achievement',
  'Learn anti-bullying techniques and conflict resolution',
  'Improve focus, discipline, and respect for others',
  'Develop coordination, balance, and physical fitness',
  'Fun, structured classes with age-appropriate challenges',
  'Belt progression system that rewards dedication',
];

export default function KidsProgram() {
  return (
    <section className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side — Image with Red Offset Shadow */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative border-l-4 border-brand-red">
              {/* Red offset shadow box */}
              <div className="absolute top-8 -right-8 w-full h-full bg-brand-red hidden sm:block transition-all duration-500 group-hover:top-6 group-hover:-right-6" />

              {/* Main image */}
              <div className="relative overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780313356/hero_banner_ft43hc.png"
                  alt="Kids Martial Arts Training"
                  width={800}
                  height={600}
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-brand-red text-white px-6 py-3 z-10 shadow-lg shadow-brand-red/30">
              <p className="font-display font-black text-2xl uppercase tracking-tight">Ages 4–12</p>
            </div>
          </div>

          {/* Right Side — Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Red label line */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-brand-red" />
              <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">
                Youth Program
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-display font-black tracking-tighter uppercase text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9]">
              Kids Martial
              <br />
              <span className="text-brand-red">Arts Program</span>
            </h2>

            {/* Description */}
            <p className="font-sans font-light text-lg leading-relaxed text-gray-300 max-w-lg">
              Our Kids Martial Arts program is designed for children aged 4–12,
              offering a fun, safe, and structured environment where young
              warriors build confidence, discipline, and physical fitness. Every
              class is crafted to challenge and inspire, turning energy into
              focus and potential into power.
            </p>

            {/* Bullet points */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 group/item"
                >
                  <CheckCircle className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                  <span className="font-sans font-light text-gray-300 text-base leading-relaxed transition-colors duration-300 group-hover/item:text-white">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-4">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
