import React from 'react';
import Image from 'next/image';

const focusAreas = [
  {
    title: 'PHYSICAL CONDITIONING',
    subtitle: 'BODY',
    image: 'https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780315029/MARTIAL_ARTS_zzzuhd.png',
  },
  {
    title: 'TECHNICAL MASTERY',
    subtitle: 'SKILL',
    image: 'https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780315466/martialarts_ofrjic.png',
  },
  {
    title: 'MENTAL FORTITUDE',
    subtitle: 'MIND',
    image: 'https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780313356/hero_banner_ft43hc.png',
  },
];

export default function StudentDevelopmentFocus() {
  return (
    <section className="bg-black text-white py-12 sm:py-16 lg:py-20 relative border-t border-brand-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 md:mb-12">
          <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase mb-4 font-sans">Core Pillars</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter font-display uppercase drop-shadow-xl leading-tight">
            STUDENT DEVELOPMENT FOCUS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 md:gap-8">
          {focusAreas.map((area, index) => (
            <div key={index} className="flex flex-col items-center group relative cursor-pointer">

              <div className="text-center mb-6 relative z-10">
                <p className="text-brand-red font-bold tracking-[0.2em] text-[10px] uppercase mb-2 font-sans">
                  {area.subtitle}
                </p>
                <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-black tracking-wide font-display group-hover:text-brand-red transition-colors duration-300">
                  {area.title}
                </h3>
              </div>

              {/* Image container */}
              <div className="relative w-full h-[280px] sm:h-[300px] md:h-[360px] lg:h-[400px] overflow-hidden flex justify-center items-end bg-[#050505] shadow-lg">
                <div
                  className="absolute bottom-0 left-0 w-full h-[75%] bg-brand-crimson transition-transform duration-700 group-hover:scale-105"
                  style={{ clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 100%)' }}
                ></div>
                <div className="relative w-[220px] sm:w-[240px] md:w-[260px] lg:w-[300px] h-[300px] sm:h-[320px] md:h-[380px] lg:h-[400px] z-10 transition-transform duration-500 group-hover:scale-110 origin-bottom">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-contain object-bottom drop-shadow-2xl"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
