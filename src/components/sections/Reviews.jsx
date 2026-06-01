import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="bg-brand-darker text-white py-24 relative">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <p className="text-brand-red font-bold tracking-[0.2em] text-sm uppercase">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">STUDENT REVIEWS</h2>
            
            <div className="relative pt-8">
              <Quote className="absolute top-0 left-0 w-12 h-12 text-brand-red opacity-50" />
              <p className="text-xl md:text-2xl font-light leading-relaxed italic relative z-10 pl-8">
                "Disciplined, challenging, and incredibly fulfilling. GELUD martial arts has transformed not just my physical strength, but my mental fortitude. I've gained confidence I never knew I had."
              </p>
              <div className="mt-6 pl-8 flex items-center space-x-4">
                <span className="font-bold tracking-wider uppercase text-sm">Sarah Jenkins</span>
                <span className="w-10 h-0.5 bg-brand-red"></span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full">
            {/* Dark red background accent offset */}
            <div className="absolute top-8 right-8 w-full h-full bg-brand-red hidden md:block"></div>
            <div className="relative h-full w-full bg-brand-gray">
              <Image 
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1780141678/download_2_rh5pj6.jpg"
                alt="Student Reviews"
                fill
                className="object-cover p-2"
              />
            </div>
          </div>
        </div>

        {/* Small Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 pt-16 border-t border-brand-gray border-opacity-30">
          <div className="flex space-x-6">
            <div className="w-16 h-16 bg-brand-gray relative flex-shrink-0 overflow-hidden rounded-sm">
               <Image src="https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-art-school-hero-img.png" alt="User 1" fill className="object-cover object-top" />
            </div>
            <div>
              <p className="text-gray-400 font-light italic mb-4 leading-relaxed text-sm">
                "What I love about this school is the sense of community. The instructors genuinely care about your progress, and everyone supports each other. It's like a second family."
              </p>
              <p className="text-xs font-bold tracking-wider uppercase">Mike Ross</p>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="w-16 h-16 bg-brand-gray relative flex-shrink-0 overflow-hidden rounded-sm">
               <Image src="https://websitedemos.net/martial-arts-04/wp-content/uploads/sites/686/2020/09/martial-arts-school-head-master-1.png" alt="User 2" fill className="object-cover object-top" />
            </div>
            <div>
              <p className="text-gray-400 font-light italic mb-4 leading-relaxed text-sm">
                "The Kung Fu classes here are authentic and rigorous. I've studied martial arts for years, and this is by far the highest level of instruction I've ever received."
              </p>
              <p className="text-xs font-bold tracking-wider uppercase">Jessica Pearson</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
