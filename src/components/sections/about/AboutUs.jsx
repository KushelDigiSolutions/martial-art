import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="relative h-[70vh] md:h-[85vh] lg:h-[100vh] overflow-hidden">
      {/* Full-width background image */}
      <Image
        src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780313356/hero_banner_ft43hc.png"
        alt="About Us"
        fill
        className="object-cover object-top"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Bottom-left aligned title */}
      <div className="absolute bottom-12 md:bottom-16 lg:bottom-20 left-6 md:left-12 lg:left-20 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none font-display">
          ABOUT US
        </h1>
      </div>
    </section>
  );
}
