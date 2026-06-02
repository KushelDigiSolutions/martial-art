import React from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <section className="bg-brand-dark text-white py-16 sm:py-20 relative border-t border-brand-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header + Featured Quote + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12 md:mb-16">

          {/* Left — Header & Quote */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-0.5 bg-brand-red"></div>
              <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">Testimonials</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter font-display uppercase leading-tight">WHAT OUR STUDENTS SAY</h2>
            <div className="relative pt-8">
              <span className="absolute top-0 left-0 text-brand-red opacity-20 text-[6rem] sm:text-[8rem] font-display leading-none -ml-2 sm:-ml-4 -mt-6 sm:-mt-8">"</span>
              <p className="text-base sm:text-xl font-light leading-relaxed font-sans italic relative z-10 pl-4 border-l-2 border-brand-red">
                Budo Martial Arts Academy has truly transformed my life. The training here has made me physically stronger and mentally resilient. Under the guidance of Kyoshi Anil Barya, every session pushes you to become the best version of yourself.
              </p>
              <div className="mt-6 pl-4 flex items-center space-x-4">
                <span className="font-bold tracking-widest uppercase text-sm font-sans">Priya Sharma</span>
                <span className="w-12 h-0.5 bg-brand-red"></span>
                <span className="text-brand-light-gray text-xs font-sans">Karate Student</span>
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative h-[280px] sm:h-[380px] lg:h-[480px] w-full mt-4 lg:mt-0">
            <div className="absolute top-8 right-8 w-full h-full bg-brand-red hidden md:block"></div>
            <div className="relative h-full w-full bg-[#050505] shadow-2xl overflow-hidden border-b-4 border-l-4 border-brand-red">
              <Image
                src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780315466/martialarts_ofrjic.png"
                alt="Martial Arts Training"
                fill
                className="object-cover p-3 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Small Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-brand-gray/40">

          <div className="flex space-x-5 group cursor-pointer bg-[#050505] p-6 sm:p-8 hover:bg-[#0a0a0a] transition-colors border-l-4 border-transparent hover:border-brand-red">
           
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 font-light italic mb-3 leading-relaxed text-sm font-sans">
                "What I love most about this academy is the sense of community. The instructors genuinely care about every student's progress and push you to achieve your full potential."
              </p>
              <p className="text-xs font-bold tracking-widest uppercase font-sans text-brand-red">Rahul Verma</p>
              <p className="text-gray-500 text-xs font-sans mt-0.5">Taekwondo Student</p>
            </div>
          </div>

          <div className="flex space-x-5 group cursor-pointer bg-[#050505] p-6 sm:p-8 hover:bg-[#0a0a0a] transition-colors border-l-4 border-transparent hover:border-brand-red">
           
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 font-light italic mb-3 leading-relaxed text-sm font-sans">
                "The Karate classes here are authentic and rigorous. Training under Kyoshi Anil Barya is a truly unique experience — this is the highest level of martial arts instruction I have ever received."
              </p>
              <p className="text-xs font-bold tracking-widest uppercase font-sans text-brand-red">Anjali Singh</p>
              <p className="text-gray-500 text-xs font-sans mt-0.5">Karate Student</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
