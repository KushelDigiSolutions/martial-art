import React from 'react';
import Image from 'next/image';

const instructorsData = [
  {
    name: 'MARK TAYLOR',
    role: 'Instructor - Karate',
    image: 'https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-secondary-instructor-1.png',
  },
  {
    name: 'BEN ARNOLD',
    role: 'Instructor - Jiu Jitsu',
    image: 'https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-secondary-instructor-2.png',
  },
  {
    name: 'DANIEL LEE',
    role: 'Instructor - Kung Fu',
    image: 'https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-secondary-instructor-3.png',
  }
];

export default function Instructors() {
  return (
    <section className="bg-brand-dark text-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="text-center mb-20">
          <p className="text-brand-red font-bold tracking-[0.2em] text-sm uppercase mb-4">Core Network</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">OUR INSTRUCTORS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructorsData.map((instructor, index) => (
            <div key={index} className="flex flex-col items-center group relative cursor-pointer">
              {/* Text above image */}
              <div className="text-center mb-8 relative z-10">
                <p className="text-brand-red font-bold tracking-widest text-xs uppercase mb-2">
                  {instructor.role}
                </p>
                <h3 className="text-2xl font-black tracking-wider group-hover:text-brand-red transition-colors">
                  {instructor.name}
                </h3>
              </div>

              {/* Image container with angular red background */}
              <div className="relative w-full h-[400px] overflow-hidden bg-brand-gray flex justify-center items-end">
                {/* Red angle background */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-2/3 bg-brand-red transition-transform duration-500 group-hover:scale-105"
                  style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)' }}
                ></div>
                
                <div className="relative w-[280px] h-[350px] z-10">
                  <Image 
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-contain object-bottom transition-transform duration-500 group-hover:scale-110"
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
