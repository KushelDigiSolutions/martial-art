import React from 'react';
import Image from 'next/image';

export default function FeaturedPrograms() {
  return (
    <section className="bg-brand-red text-white py-14 sm:py-16 lg:py-20 relative overflow-hidden">

      {/* Decorative dark clip-paths */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-dark opacity-20 clip-diagonal-right pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/4 h-full bg-brand-dark opacity-10 clip-diagonal-left pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Mobile layout — stacked */}
        <div className="flex flex-col items-center gap-6 sm:hidden">
          <p className="text-white font-bold tracking-[0.2em] text-xs uppercase font-sans self-start">Featured Programs</p>

          {/* Image — visible on mobile */}
          <div className="relative w-full max-w-xs h-[320px]">
            <Image
              src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780314601/featured_program_juny3z.png"
              alt="Kyoshi Anil Barya - Founder"
              fill
              className="object-contain object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Name */}
          <div className="border-l-4 border-t-4 border-white pt-4 pl-4 w-full">
            <h2 className="text-4xl font-black tracking-tighter leading-[0.9] font-display uppercase -ml-2 bg-brand-red inline-block pr-4">
              KYOSHI ANIL<br />BARYA
            </h2>
          </div>

          {/* Quote */}
          <div className="space-y-4 w-full">
            <p className="text-base leading-relaxed font-light font-sans italic text-white drop-shadow-md">
              "Martial arts is about building strong character and discipline. We empower our students with the skills, confidence, and mindset to overcome challenges both on and off the mat. That's the Budo way."
            </p>
            <div className="text-4xl font-light drop-shadow-md" style={{ fontFamily: "'Brush Script MT', cursive, serif" }}>
              Kyoshi Anil Barya
            </div>
            <p className="font-bold tracking-widest text-xs uppercase font-sans opacity-80">Founder & Head Trainer</p>
          </div>
        </div>

        {/* Tablet & Desktop layout — 12-col grid */}
        <div className="hidden sm:grid sm:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">

          {/* Left — Name */}
          <div className="sm:col-span-12 md:col-span-5 relative z-20 mb-6 md:mb-0">
            <p className="text-white font-bold tracking-[0.2em] text-xs uppercase mb-4 md:mb-6 font-sans">Featured Programs</p>
            <div className="border-l-4 md:border-l-6 lg:border-l-8 border-t-4 md:border-t-6 lg:border-t-8 border-white pt-4 md:pt-6 lg:pt-8 pl-4 md:pl-6 lg:pl-8 relative shadow-2xl inline-block">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-black tracking-tighter leading-[0.85] font-display uppercase -ml-2 md:-ml-3 lg:-ml-4 bg-brand-red inline-block pr-3 md:pr-4 lg:pr-6 drop-shadow-xl">
                KYOSHI ANIL<br />BARYA
              </h2>
            </div>
          </div>

          {/* Center — Image (tablet: full width below, desktop: center column) */}
          <div className="sm:col-span-12 md:col-span-3 relative h-[380px] sm:h-[420px] md:h-[450px] lg:h-[500px] z-10 sm:mb-6 md:mb-0">
            <Image
              src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780314601/featured_program_juny3z.png"
              alt="Kyoshi Anil Barya - Founder"
              fill
              className="object-contain object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Right — Quote */}
          <div className="sm:col-span-12 md:col-span-4 space-y-4 md:space-y-5 lg:space-y-8 relative z-20 md:pl-6 lg:pl-12">
            <p className="text-base sm:text-lg md:text-base lg:text-xl leading-relaxed font-light font-sans italic text-white drop-shadow-md">
              "Martial arts is about building strong character and discipline. We empower our students with the skills, confidence, and mindset to overcome challenges both on and off the mat. That's the Budo way."
            </p>
            <div className="text-3xl sm:text-4xl lg:text-5xl mt-4 font-light drop-shadow-md" style={{ fontFamily: "'Brush Script MT', cursive, serif" }}>
              Kyoshi Anil Barya
            </div>
            <p className="font-bold tracking-widest text-xs uppercase font-sans mt-2 opacity-80">Founder & Head Trainer</p>
          </div>

        </div>

      </div>
    </section>
  );
}
