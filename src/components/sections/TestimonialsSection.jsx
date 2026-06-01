import React from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <section className="bg-brand-dark text-white py-16 sm:py-24 lg:py-32 relative border-t border-brand-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-12 md:mb-24">
          <div className="space-y-8 relative z-20">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-0.5 bg-brand-red"></div>
              <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">Testimonials</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter font-display uppercase">TESTIMONIALS SECTION</h2>
            
            <div className="relative pt-12">
              <span className="absolute top-0 left-0 text-brand-red opacity-20 text-[8rem] font-display leading-none -ml-4 -mt-8">"</span>
              <p className="text-xl md:text-3xl font-light leading-relaxed font-sans italic relative z-10 pl-4 border-l-2 border-brand-red">
                Disciplined, challenging, and incredibly fulfilling. BUDO martial arts has transformed not just my physical strength, but my mental fortitude. I've gained confidence I never knew I had.
              </p>
              <div className="mt-8 pl-4 flex items-center space-x-4">
                <span className="font-bold tracking-widest uppercase text-sm font-sans">Sarah Jenkins</span>
                <span className="w-12 h-0.5 bg-brand-red"></span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full mt-12 lg:mt-0">
            {/* Dark red background accent offset */}
            <div className="absolute top-12 right-12 w-full h-full bg-brand-red hidden md:block"></div>
            <div className="relative h-full w-full bg-[#050505] shadow-2xl overflow-hidden border-b-4 border-l-4 border-brand-red">
              <Image 
                src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780315466/martialarts_ofrjic.png"
                alt="TESTIMONIALS SECTION"
                fill
                className="object-cover p-3 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Small Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-brand-gray/40">
          <div className="flex space-x-6 group cursor-pointer bg-[#050505] p-8 hover:bg-[#0a0a0a] transition-colors border-l-4 border-transparent hover:border-brand-red">
            <div className="w-20 h-20 bg-brand-gray relative flex-shrink-0 overflow-hidden rounded-full border-2 border-brand-red">
               <Image src="https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-art-school-hero-img.png" alt="User 1" fill className="object-cover object-top" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 font-light italic mb-4 leading-relaxed text-sm font-sans">
                "What I love about this school is the sense of community. The instructors genuinely care about your progress."
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-xs font-bold tracking-widest uppercase font-sans text-brand-red">Mike Ross</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-6 group cursor-pointer bg-[#050505] p-8 hover:bg-[#0a0a0a] transition-colors border-l-4 border-transparent hover:border-brand-red">
            <div className="w-20 h-20 bg-brand-gray relative flex-shrink-0 overflow-hidden rounded-full border-2 border-brand-red">
               <Image src="https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-school-head-master-1.png" alt="User 2" fill className="object-cover object-top" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-300 font-light italic mb-4 leading-relaxed text-sm font-sans">
                "The Kung Fu classes here are authentic and rigorous. This is by far the highest level of instruction I've ever received."
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-xs font-bold tracking-widest uppercase font-sans text-brand-red">Jessica Pearson</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
