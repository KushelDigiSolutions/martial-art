import React from 'react';
import { Shield } from 'lucide-react';

export default function AcademyValues() {
  return (
    <section
      className="relative min-h-[280px] sm:min-h-[350px] flex items-center justify-center bg-brand-dark overflow-hidden"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dd9tagtiw/image/upload/v1780141678/download_1_ksjs0g.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-4 sm:px-8 flex flex-col items-center py-12">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center mb-6 bg-black/50">
          <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-wide font-display uppercase text-white drop-shadow-2xl max-w-4xl leading-tight">
          WE ARE ETERNAL STUDENTS OF OUR ARTS
        </h2>
      </div>
    </section>
  );
}
