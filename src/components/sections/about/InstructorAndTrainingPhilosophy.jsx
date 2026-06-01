import React from 'react';

export default function InstructorAndTrainingPhilosophy() {
  return (
    <section className="bg-[#050505] text-white py-24 border-t border-brand-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-24 items-start">
        
        {/* Left Side: Massive Title */}
        <div className="md:col-span-5 relative">
          <p className="text-brand-red font-bold tracking-[0.2em] text-[10px] uppercase mb-4 font-sans">Founder, Academy Head</p>
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.85] font-display uppercase">
            ANIL<br/>BARYA
          </h2>
        </div>

        {/* Right Side: 2 Columns of Philosophy Text */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-400 font-sans font-light text-sm leading-relaxed mt-4 md:mt-12">
          <div className="space-y-6">
            <p>
              "My vision for Budo Martial Arts Academy is to create a sanctuary where discipline meets compassion. Traditional martial arts training builds not just strong fighters, but strong individuals with unshakeable character, integrity, and respect for all."
            </p>
            <p>
              "Every student here is on a personal journey. We don't just teach techniques; we mentor individuals to overcome their limitations. Success means seeing our students achieve their goals, gain confidence, and become better versions of themselves."
            </p>
          </div>
          <div className="space-y-6 flex flex-col justify-between">
            <p>
              "At Budo, we blend traditional wisdom with modern training methods. Martial arts is a lifelong commitment to growth. Whether you're just starting or a seasoned practitioner, there's always something new to learn and master."
            </p>
            <div className="pt-8">
              <div className="text-5xl font-light text-white opacity-90 drop-shadow-sm" style={{ fontFamily: "'Brush Script MT', cursive, serif" }}>
                Anil Barya
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
