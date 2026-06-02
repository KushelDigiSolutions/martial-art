import React from 'react';
import Image from 'next/image';

const instructorsData = [
  {
    name: 'MARK TAYLOR',
    role: 'KARATE COACH',
    image: 'https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-secondary-instructor-1.png',
  },
  {
    name: 'BEN ARNOLD',
    role: 'KUNG FU COACH',
    image: 'https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-secondary-instructor-2.png',
  },
  {
    name: 'DANIEL LEE',
    role: 'JIU-JITSU COACH',
    image: 'https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-secondary-instructor-3.png',
  }
];

export default function Instructors() {
  return (
    <section className="bg-brand-dark text-white py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 md:mb-12">
          <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase mb-4 font-sans">Expert Trainers</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter font-display uppercase drop-shadow-xl">OUR INSTRUCTORS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {instructorsData.map((instructor, index) => (
            <div key={index} className="flex flex-col items-center group relative cursor-pointer">
              {/* Text above image */}
              <div className="text-center mb-6 relative z-10">
                <p className="text-brand-red font-bold tracking-[0.2em] text-[10px] uppercase mb-2 font-sans">
                  {instructor.role}
                </p>
                <h3 className="text-2xl sm:text-3xl font-black tracking-wide font-display group-hover:text-brand-red transition-colors duration-300">
                  {instructor.name}
                </h3>
              </div>

              {/* Image container with angular red background */}
              <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px] overflow-hidden flex justify-center items-end bg-[#050505]">
                {/* Red angle background */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-[75%] bg-brand-crimson transition-transform duration-700 group-hover:scale-105"
                  style={{ clipPath: 'polygon(0 25%, 100% 0, 100% 100%, 0 100%)' }}
                ></div>
                
                <div className="relative w-[260px] sm:w-[280px] md:w-[280px] lg:w-[300px] h-[360px] sm:h-[400px] md:h-[400px] lg:h-[400px] z-10 transition-transform duration-500 group-hover:scale-110 origin-bottom">
                  <Image 
                    src={instructor.image}
                    alt={instructor.name}
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
