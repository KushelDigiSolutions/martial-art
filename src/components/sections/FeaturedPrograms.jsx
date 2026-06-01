import React from 'react';
import Image from 'next/image';

export default function FeaturedPrograms() {
  return (
    <section className="bg-brand-red text-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      
      {/* Decorative dark clip-paths in background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-dark opacity-20 clip-diagonal-right pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/4 h-full bg-brand-dark opacity-10 clip-diagonal-left pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Text Box (The Massive Name) */}
        <div className="md:col-span-5 relative z-20">
          <p className="text-white font-bold tracking-[0.2em] text-xs uppercase mb-6 font-sans">Featured Programs</p>
          <div className="border-l-8 border-t-8 border-white pt-8 pl-8 relative shadow-2xl">
            {/* The name is huge and overlaps */}
            <h2 className="text-5xl lg:text-[7rem] font-black tracking-tighter leading-[0.85] font-display uppercase -ml-4 bg-brand-red inline-block pr-6 drop-shadow-xl">
              ANIL<br/>BARYA
            </h2>
          </div>
        </div>

        {/* Center Image */}
        <div className="md:col-span-3 relative h-[500px] z-10 hidden md:block">
          <Image 
            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780314601/featured_program_juny3z.png
            "
            alt="Anil Barya - Founder"
            fill
            className="object-contain object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Right Quote */}
        <div className="md:col-span-4 space-y-8 relative z-20 md:pl-12 pt-16 md:pt-0">
          <p className="text-xl leading-relaxed font-light font-sans italic text-white drop-shadow-md">
            "Martial arts is about building strong character and discipline. We empower our students with the skills, confidence, and mindset to overcome challenges both on and off the mat. That's the Budo way."
          </p>
          {/* Faux Signature */}
          <div className="text-5xl mt-6 font-light drop-shadow-md" style={{ fontFamily: "'Brush Script MT', cursive, serif" }}>
            Anil Barya
          </div>
          <p className="font-bold tracking-widest text-xs uppercase font-sans mt-2 opacity-80">Founder & Head Trainer</p>
        </div>
      </div>
      
    </section>
  );
}
