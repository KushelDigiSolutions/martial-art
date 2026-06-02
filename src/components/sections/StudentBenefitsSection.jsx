import React from 'react';
import { Activity, Brain, Target } from 'lucide-react';

const benefits = [
  {
    icon: Activity,
    title: 'Peak Physical Fitness',
    description: 'Transform your body with high-intensity cardiovascular conditioning, strength training, and flexibility drills built into every session.'
  },
  {
    icon: Brain,
    title: 'Mental Clarity',
    description: 'Develop unbreakable focus and mental discipline. The meditative aspects of our training help reduce stress and improve concentration.'
  },
  {
    icon: Target,
    title: 'Practical Self-Defense',
    description: 'Learn real-world, proven techniques that will give you the confidence to protect yourself and your loved ones in any situation.'
  }
];

export default function StudentBenefitsSection() {
  return (
    <section className="bg-brand-darker text-white py-12 sm:py-16 relative border-b border-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase mb-4 font-sans">Transform Your Life</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter font-display uppercase drop-shadow-xl leading-tight">
            STUDENT BENEFITS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-[#0a0a0a] border border-brand-gray p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-red cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-red transform -translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
                <IconComponent className="w-10 h-10 text-brand-red mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                <h3 className="text-xl sm:text-2xl font-black mb-4 tracking-wide font-display uppercase">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed font-sans font-light text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
