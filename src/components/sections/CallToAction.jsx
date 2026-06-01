import React from 'react';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="bg-brand-red text-white py-32 relative overflow-hidden">
      
      {/* Background Graphic Mask */}
      <div className="absolute top-0 right-0 h-full w-2/3 opacity-30 hidden lg:block clip-diagonal-right bg-black"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter leading-[0.85] font-display uppercase drop-shadow-xl z-20 relative">
              JOIN CLASS<br/>TODAY!
            </h2>
          </div>
          <div className="space-y-10 max-w-md ml-auto relative z-20">
            <p className="text-xl leading-relaxed font-sans font-light drop-shadow-md">
              Ready to begin your journey? Sign up for a class today and experience the unparalleled physical and mental benefits of elite martial arts training.
            </p>
            <button className="px-10 py-5 bg-white text-brand-red text-sm font-black tracking-widest hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(0,0,0,0.3)] uppercase font-sans cursor-pointer">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      
      {/* Large Jump Kick Overlay Image */}
      <div className="hidden lg:block absolute bottom-0 left-[40%] transform -translate-x-1/2 w-[600px] h-[800px] pointer-events-none z-10 -mb-20">
        <Image 
          src="https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-school-cta-bg-1.png"
          alt="Jump Kick Martial Artist"
          fill
          className="object-contain object-bottom scale-[1.3] drop-shadow-2xl"
        />
      </div>
      
      {/* Red triangle overlay blending to give sharp cuts */}
      <div className="absolute top-0 right-1/4 w-1/4 h-full bg-brand-crimson hidden md:block opacity-50 pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
    </section>
  );
}
