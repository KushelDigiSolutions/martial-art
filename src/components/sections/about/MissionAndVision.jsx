import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function MissionAndVision() {
  return (
    <section 
      className="relative bg-brand-dark py-16 sm:py-24 lg:py-32 text-white bg-blend-overlay bg-opacity-95"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dd9tagtiw/image/upload/v1780141678/download_2_rh5pj6.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Heavy dark overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 relative z-10 space-y-12 md:space-y-24">
        
        {/* OUR VISION */}
        <div>
          <div className="w-full h-px bg-brand-gray mb-12 relative">
             <div className="absolute top-0 left-0 h-[2px] w-32 bg-brand-red"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter font-display uppercase">OUR VISION</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-gray-300 font-sans font-light leading-relaxed text-lg md:text-xl">
                To forge an unbreakable community of martial artists globally, continuously pushing the boundaries of physical and mental potential, and creating a world where discipline and respect reign supreme in everyday life.
              </p>
            </div>
          </div>
        </div>

        {/* OUR MISSION */}
        <div>
          <div className="w-full h-px bg-brand-gray mb-12 relative">
             <div className="absolute top-0 left-0 h-[2px] w-32 bg-brand-red"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter font-display uppercase">OUR MISSION</h2>
            </div>
            <div className="md:col-span-8 space-y-8">
              <p className="text-gray-300 font-sans font-light leading-relaxed text-lg md:text-xl">
                Our mission is to provide the highest caliber of martial arts instruction accessible to anyone willing to put in the work. We dedicate ourselves to the empowerment of our students by instilling confidence, physical health, and an unshakeable mindset.
              </p>
              
              <ul className="space-y-4 text-gray-400 font-sans font-light text-sm">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span>Deliver elite, authentic martial arts training.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span>Cultivate a safe, supportive, and inclusive dojo environment.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span>Promote lifelong physical fitness and mental resilience.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
