import React from 'react';
import Image from 'next/image';

export default function TrainingEnvironment() {
  return (
    <section className="relative bg-[#050505] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[600px]">
        
        {/* Left Side: Environment Image (Map/Dojo vibe) */}
        <div className="relative w-full h-[400px] lg:h-auto overflow-hidden">
          {/* subtle grayscale filter to match the screenshot's map style */}
          <Image 
            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780316955/budo_martial_qeugib.png"
            alt="Training Environment"
            fill
            className="object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
          />
        </div>

        {/* Right Side: Information Box */}
        <div className="flex items-center justify-center p-8 sm:p-12 lg:p-24 relative bg-black border-l-4 border-brand-red">
          <div className="max-w-md w-full relative z-10">
            <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase mb-6 font-sans">Facilities</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.1] font-display uppercase mb-8">
              STATE OF THE ART<br/> TRAINING DOJO
            </h2>
            
            <p className="text-gray-400 font-sans font-light leading-relaxed mb-8">
              Our academy boasts 5,000 square feet of premium training space. Featuring high-density tatami mats, heavy bag racks, and a dedicated strength & conditioning zone, our environment is meticulously designed to optimize your training experience and prevent injury.
            </p>

           
          </div>
        </div>

      </div>
    </section>
  );
}
