'use client';

import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';

const benefits = [
  'Practical self-defense techniques for real-world situations',
  'Full-body workout: burn up to 800 calories per session',
  'Stress relief through focused, disciplined training',
  'Build core strength, flexibility, and endurance',
  'Join a community of like-minded, driven individuals',
  'Progress at your own pace with personalized coaching',
];

export default function AdultProgram() {
  return (
    <section className="relative bg-[#050505] py-14 md:py-20 overflow-hidden">
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

      {/* Top decorative red line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

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
                  src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780315466/martialarts_ofrjic.png"
                  alt="Adult Martial Arts Training"
                  width={800}
                  height={600}
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-0 bg-brand-red text-white px-5 py-2 z-10 shadow-lg shadow-brand-red/30">
              <p className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight">18+ Adults</p>
            </div>
          </div>

          {/* Right Side — Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Red label line */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-brand-red" />
              <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">
                Adult Program
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-display font-black tracking-tighter uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9]">
              Adult Martial
              <br />
              <span className="text-brand-red">Arts Program</span>
            </h2>

            {/* Description */}
            <p className="font-sans font-light text-lg leading-relaxed text-gray-300 max-w-lg">
              Whether you&apos;re a complete beginner or a seasoned athlete, our
              Adult program delivers an unmatched combination of self-defense
              mastery, peak physical fitness, and mental clarity. Train with
              purpose, relieve stress, and transform your body and mind in a
              supportive, high-energy environment.
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
