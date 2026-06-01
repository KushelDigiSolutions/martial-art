import React from 'react';
import { Shield } from 'lucide-react';

export default function AcademyValues() {
  return (
    <section 
      className="relative h-[400px] flex items-center justify-center bg-brand-dark overflow-hidden"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dd9tagtiw/image/upload/v1780141678/download_1_ksjs0g.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 text-center px-8 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mb-8 bg-black/50 backdrop-blur-sm">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-widest font-display uppercase text-white drop-shadow-2xl max-w-4xl leading-tight">
          WE ARE ETERNAL STUDENTS OF OUR ARTS
        </h2>
      </div>
    </section>
  );
}
