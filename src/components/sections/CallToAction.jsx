import React from 'react';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="bg-brand-red text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-1/2 opacity-50 hidden md:block">
        <Image 
          src="https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-school-cta-bg-1.png"
          alt="CTA Background"
          fill
          className="object-cover object-left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
              JOIN CLASS<br/>TODAY!
            </h2>
          </div>
          <div className="space-y-8 max-w-md ml-auto">
            <p className="text-lg leading-relaxed">
              Ready to begin your journey? Sign up for a class today and experience the physical and mental benefits of martial arts training.
            </p>
            <button className="px-8 py-4 bg-white text-brand-red text-sm font-bold tracking-wider hover:bg-brand-dark hover:text-white transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      
      {/* Red triangle overlay blending into image */}
      <div className="absolute top-0 right-1/4 w-1/4 h-full bg-brand-red hidden md:block" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
    </section>
  );
}
