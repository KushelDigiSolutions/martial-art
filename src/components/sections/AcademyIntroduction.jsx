import React from 'react';
import Image from 'next/image';

export default function AcademyIntroduction() {
  return (
    <section className="bg-[#050505] text-white relative py-16 overflow-hidden">
      {/* Decorative dark red diagonal block */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-crimson opacity-10 clip-diagonal-left hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
        
        {/* Left: Image with offset red box */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
          {/* Red Offset Shadow/Block */}
          <div className="absolute top-8 -right-8 w-full h-full bg-brand-red hidden md:block"></div>
          
          <div className="relative h-full w-full bg-brand-gray border-l-4 border-brand-red overflow-hidden shadow-2xl">
            <Image 
              src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780315029/MARTIAL_ARTS_zzzuhd.png"
              alt="Martial Arts Training"
              fill
              className="object-cover p-2 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-8 z-20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-0.5 bg-brand-red"></div>
            <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">Academy Introduction</p>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] font-display uppercase">
            MARTIAL ARTS ACADEMY IN <br className="hidden md:block" /> VASUNDHARA ENCLAVE, DELHI
          </h2>
          
          <div className="space-y-6 text-gray-300 font-sans font-light text-lg">
            <p className="leading-relaxed">
              Welcome to <strong className="text-white font-bold">Budo Martial Arts Academy</strong>, founded by <strong className="text-brand-red">Anil Barya</strong>. We believe in training to build character, not to create fighters. Join our community and discover your inner strength through disciplined, professional training rooted in traditional martial arts principles.
            </p>
            <p className="leading-relaxed text-base text-gray-400">
              Our academy offers comprehensive martial arts programs for all ages and skill levels. We emphasize discipline, respect, physical fitness, and mental resilience. Whether you're looking to compete, learn practical self-defense, gain confidence, or achieve your fitness goals, we have a class tailored just for you.
            </p>
          </div>
          
          <div className="pt-4">
            <a href="/about-us" className="group text-white font-bold text-sm tracking-[0.2em] uppercase transition-colors inline-flex items-center space-x-3 font-sans">
              <span className="border-b-2 border-brand-red pb-1 group-hover:text-brand-red transition-colors">Read More</span>
              <span className="text-brand-red group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
