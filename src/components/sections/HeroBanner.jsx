import React from 'react';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section 
      className="relative min-h-[85vh] bg-brand-dark flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dd9tagtiw/image/upload/v1780141678/download_juyo1s.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center pt-24 sm:pt-28 md:pt-32 pb-12 lg:pb-16">
        
        {/* Left Content */}
        <div className="text-white space-y-8 max-w-xl z-20">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-0.5 bg-brand-red"></div>
            <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">Train with experience coach</p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.1] md:leading-[0.9] font-display uppercase drop-shadow-2xl">
            BUDO MARTIAL<br className="hidden md:block" /> ARTS ACADEMY.
          </h1>
          <p className="text-gray-300 text-lg font-light max-w-md leading-relaxed font-sans mt-6">
            Master traditional martial arts with certified instructors. Build strength, confidence, and discipline. Perfect for all ages and skill levels.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
            <a
              href="tel:+918800844647"
              className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white text-sm font-black tracking-widest uppercase hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(255,14,52,0.3)] text-center"
            >
              CALL NOW
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] z-10 mt-8 md:mt-0">
          <Image 
            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780483682/Kyoshi_Anil_Barya_bb8uwl.png"
            alt="Martial Arts Student"
            fill
            className="object-contain object-center drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
