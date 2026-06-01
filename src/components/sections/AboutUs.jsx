import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="bg-brand-dark text-white relative">
      {/* Decorative Red Background Element */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-brand-red" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>

      <div className="max-w-7xl mx-auto px-8 py-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="relative h-[600px] w-full bg-brand-gray border-l-4 border-brand-red">
          <Image 
            src="https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-school-about-us-img.jpg"
            alt="About Us - Martial Arts"
            fill
            className="object-cover p-4"
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-8">
          <p className="text-brand-red font-bold tracking-[0.2em] text-sm uppercase">About Us</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            MARTIAL ARTS SCHOOL IN THE CITY OF NEW YORK
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            There's a lot of places to get into fights. Here at GELUD, we learn to fight so we don't have to. Join our community and discover your inner strength.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our school offers a comprehensive martial arts program for all ages and skill levels. We emphasize discipline, respect, and physical fitness. Whether you're looking to compete, learn self-defense, or simply get in shape, we have a class for you.
          </p>
          <button className="text-white font-bold text-sm tracking-[0.2em] uppercase border-b-2 border-brand-red pb-1 hover:text-brand-red transition-colors inline-flex items-center space-x-2">
            <span>Read More</span>
            <span className="text-brand-red">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
