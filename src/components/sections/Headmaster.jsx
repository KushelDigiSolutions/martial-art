import React from 'react';
import Image from 'next/image';

export default function Headmaster() {
  return (
    <section className="bg-brand-red text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Text Box */}
        <div className="md:col-span-5 relative z-20">
          <p className="text-white font-bold tracking-[0.2em] text-sm uppercase mb-4">Meet The Founder</p>
          <div className="border-l-4 border-t-4 border-white pt-8 pl-8 relative">
            {/* The name is huge and overlaps */}
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-none -ml-4 bg-brand-red inline-block pr-4">
              ANIL<br/>BARYA
            </h2>
          </div>
        </div>

        {/* Center Image */}
        <div className="md:col-span-3 relative h-[600px] -my-32 z-10 hidden md:block">
          <Image 
            src="https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-school-head-master-1.png"
            alt="Anil Barya - Founder"
            fill
            className="object-contain object-bottom scale-125 origin-bottom"
          />
        </div>

        {/* Right Quote */}
        <div className="md:col-span-4 space-y-6 relative z-20 md:pl-12">
          <p className="text-lg leading-relaxed font-light italic">
            "Martial arts is not just about physical strength; it's about building character and discipline. At Budo Martial Arts Academy, we train our students to be confident, respectful, and focused. Our mission is to empower individuals of all ages to overcome challenges and become the best version of themselves—both on and off the mat."
          </p>
          {/* Faux Signature */}
          <div className="text-4xl" style={{ fontFamily: "'Brush Script MT', cursive" }}>
            Anil Barya
          </div>
        </div>
      </div>
      
      {/* Decorative dark triangles in background to match reference roughly */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-dark opacity-10" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-dark opacity-10" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
    </section>
  );
}
