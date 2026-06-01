import React from 'react';
import Image from 'next/image';

export default function ProgramsOverview() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      {/* Full-width background image */}
      <Image
        src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780316961/budo_martial_academy_zrsi3i.png"
        alt="Programs"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Bottom-left aligned title */}
      <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-6 md:left-12 lg:left-20 z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none font-display">
          PROGRAMS
        </h1>
      </div>
    </section>
  );
}
