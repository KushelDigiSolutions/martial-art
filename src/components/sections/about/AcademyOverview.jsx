import React from 'react';
import Image from 'next/image';

export default function AcademyOverview() {
  return (
    <section className="bg-black text-white relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
        
        {/* Left Side: Overview & Stats */}
        <div className="space-y-6 lg:space-y-10 relative z-20">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] font-display uppercase mb-6">
              BUDO MARTIAL ARTS ACADEMY<br className="hidden md:block"/> IN VASUNDHARA ENCLAVE, DELHI
            </h2>
            <div className="w-16 h-1 bg-brand-red mb-6"></div>
            <p className="text-gray-400 font-sans font-light leading-relaxed text-base max-w-lg">
              Founded by Anil Barya, we are dedicated to providing the highest quality martial arts instruction in a safe and positive environment. Our holistic approach emphasizes both physical prowess and mental discipline, equipping our students with life-changing skills.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-brand-gray">
            <div className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-black font-display tracking-wider mb-2">2020</p>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-red font-sans">Founded by Anil Barya</p>
            </div>
            <div className="text-center md:text-left border-l border-brand-gray pl-8">
              <p className="text-3xl md:text-4xl font-black font-display tracking-wider mb-2">500+</p>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-red font-sans">Active Students</p>
            </div>
            <div className="text-center md:text-left border-l border-brand-gray pl-8">
              <p className="text-3xl md:text-4xl font-black font-display tracking-wider mb-2">10+</p>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-red font-sans">Certified Trainers</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-full mt-12 lg:mt-0 flex justify-center lg:justify-end items-center">
          <div className="relative z-10 w-full">
            <Image 
              src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780315029/MARTIAL_ARTS_zzzuhd.png"
              alt="Anil Barya - Founder"
              width={1000}
              height={800}
              className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
