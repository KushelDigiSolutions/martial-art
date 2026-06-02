import React from 'react';
import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      {/* Full-width background image */}
      <Image
        src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600&q=80"
        alt="Contact Us"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Bottom-left aligned title */}
      <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-6 md:left-12 lg:left-20 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none font-display">
          CONTACT US
        </h1>
      </div>
    </section>
  );
}
