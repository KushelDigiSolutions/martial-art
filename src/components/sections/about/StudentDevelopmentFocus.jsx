import React from 'react';
import Image from 'next/image';

const focusAreas = [
  {
    title: 'PHYSICAL CONDITIONING',
    subtitle: 'BODY',
    image: 'https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-secondary-instructor-1.png',
  },
  {
    title: 'TECHNICAL MASTERY',
    subtitle: 'SKILL',
    image: 'https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-secondary-instructor-2.png',
  },
  {
    title: 'MENTAL FORTITUDE',
    subtitle: 'MIND',
    image: 'https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-secondary-instructor-3.png',
  }
];

export default function StudentDevelopmentFocus() {
  return (
    <section className="bg-black text-white py-16 sm:py-24 lg:py-32 relative border-t border-brand-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-24">
          <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase mb-4 font-sans">Core Pillars</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter font-display uppercase drop-shadow-xl">
            STUDENT DEVELOPMENT FOCUS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {focusAreas.map((area, index) => (
            <div key={index} className="flex flex-col items-center group relative cursor-pointer">
              
              <div className="text-center mb-8 relative z-10">
                <p className="text-brand-red font-bold tracking-[0.2em] text-[10px] uppercase mb-2 font-sans">
                  {area.subtitle}
                </p>
                <h3 className="text-2xl lg:text-3xl font-black tracking-wide font-display group-hover:text-brand-red transition-colors duration-300">
                  {area.title}
                </h3>
              </div>

              {/* Image container with angular red background */}
              <div className="relative w-full h-[320px] md:h-[450px] overflow-hidden flex justify-center items-end bg-[#050505] shadow-lg">
                <div 
                  className="absolute bottom-0 left-0 w-full h-[75%] bg-brand-crimson transition-transform duration-700 group-hover:scale-105"
                  style={{ clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 100%)' }}
                ></div>
                
                <div className="relative w-[300px] h-[400px] z-10 transition-transform duration-500 group-hover:scale-110 origin-bottom">
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
