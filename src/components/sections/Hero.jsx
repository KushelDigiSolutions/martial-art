import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen bg-brand-dark flex items-center pt-24 overflow-hidden"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dd9tagtiw/image/upload/v1780141678/download_juyo1s.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-8 max-w-xl">
          <p className="text-brand-red font-bold tracking-[0.2em] text-sm uppercase">Train with the best</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
            MARTIAL ARTS SCHOOL.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-md leading-relaxed">
            From self-defense to striking, BJJ to weapons, you'll find it all right here.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button className="px-8 py-4 bg-brand-red text-white text-sm font-bold tracking-wider hover:bg-white hover:text-brand-red transition-colors">
              JOIN CLASS
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 italic font-serif">David Jones</span>
              <span className="text-xs tracking-wider text-gray-400 uppercase">Headmaster</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex justify-end self-end relative h-[800px] -mb-24">
          <Image 
            src="https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-art-school-hero-img.png"
            alt="Martial Arts Student"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* Decorative Red shape bottom left (optional based on exact design, but gives the aggressive theme) */}
      <div className="absolute bottom-0 left-0 w-1/3 h-2 bg-brand-red z-20"></div>
    </section>
  );
}
