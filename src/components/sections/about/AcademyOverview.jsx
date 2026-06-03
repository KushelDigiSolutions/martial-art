import React from 'react';
import Image from 'next/image';

export default function AcademyOverview() {
  return (
    <section className="bg-black text-white relative py-14 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-stretch">

        {/* Left Side: Overview & Stats */}
        <div className="flex flex-col justify-between relative z-20 space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-black tracking-tighter leading-[1.1] font-display uppercase mb-6">
              ASSOCIATE WITH BUDO SHITO-RYU KARATE ASSOCIATION OF INDIA
            </h2>
            <div className="w-16 h-1 bg-brand-red mb-4"></div>
            <p className="text-brand-red font-bold tracking-[0.15em] text-sm uppercase font-sans mb-1">
              KYOSHI ANIL BARYA
            </p>
            <p className="text-brand-light-gray font-sans font-light text-xs sm:text-sm tracking-widest uppercase">
              PRESIDENT &amp; CHIEF TEC. DIRECTOR (INDIA) — BSKAI
            </p>
            <div className="w-16 h-1 bg-brand-red mb-6 mt-4"></div>
            <div className="space-y-4 text-gray-400 font-sans font-light leading-relaxed text-sm sm:text-base">
              <p>
                Welcome to BUDO Martial Art Academy, associated with BUDO SHITO-RYU KARATE ASSOCIATION OF INDIA (BSKAI).
              </p>
              <p>
                At BUDO Martial Art Academy, we are committed to developing confidence, discipline, fitness, and self-defense skills through professional martial arts training. Our academy provides high-quality instruction in Karate and Taekwondo for students of all ages, helping them achieve physical excellence and mental strength.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 border-t border-brand-gray mt-auto">
            <div className="pt-5 pr-3 sm:pr-6 md:pr-8">
              <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black font-display tracking-wider mb-1 text-white">2020</p>
              <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-brand-red font-sans leading-snug">Founded by Kyoshi<br />Anil Barya</p>
            </div>
            <div className="pt-5 px-3 sm:px-6 md:px-8 border-l border-brand-gray">
              <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black font-display tracking-wider mb-1 text-white">500+</p>
              <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-brand-red font-sans">Active Students</p>
            </div>
            <div className="pt-5 pl-3 sm:pl-6 md:pl-8 border-l border-brand-gray">
              <p className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black font-display tracking-wider mb-1 text-white">10+</p>
              <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-brand-red font-sans leading-snug">Certified<br />Trainers</p>
            </div>
          </div>
        </div>

        {/* Right Side: Logo */}
        <div className="relative w-full flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
          <Image
            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780468290/martial_logo_u7r0pg.jpg"
            alt="BUDO SHITO-RYU KARATE ASSOCIATION Logo"
            width={1000}
            height={800}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
          />
        </div>

      </div>
    </section>
  );
}
