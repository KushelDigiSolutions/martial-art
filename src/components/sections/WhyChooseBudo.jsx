import React from 'react';
import { Medal, Shield, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Medal,
    title: 'Elite Instructors',
    description: 'Learn from seasoned black belts and former champions who have dedicated their lives to mastering their craft.'
  },
  {
    icon: Shield,
    title: 'Modern Facilities',
    description: 'Train in a state-of-the-art dojo equipped with premium mats, heavy bags, and professional training gear.'
  },
  {
    icon: Clock,
    title: 'Flexible Schedules',
    description: 'We offer morning, evening, and weekend classes to perfectly fit your busy professional or academic lifestyle.'
  },
  {
    icon: Users,
    title: 'Supportive Community',
    description: 'Join a family of martial artists who support, challenge, and elevate each other every single day.'
  }
];

export default function WhyChooseBudo() {
  return (
    <section className="bg-brand-dark text-white py-16 border-t border-b border-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16">
          <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase mb-4 font-sans">Why Budo</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter font-display uppercase drop-shadow-xl leading-tight">
            WHY CHOOSE BUDO<br className="hidden sm:block" /> MARTIAL ARTS ACADEMY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="group bg-[#0a0a0a] p-6 md:p-10 border-t-4 border-transparent hover:border-brand-red transition-all duration-300 hover:shadow-2xl hover:shadow-brand-red/10 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-16 h-16 bg-brand-gray flex items-center justify-center rounded-sm mb-8 transition-colors duration-300 group-hover:bg-brand-crimson">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-wide font-display uppercase">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed font-sans font-light text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
