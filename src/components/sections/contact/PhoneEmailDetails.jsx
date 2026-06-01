import React from 'react';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const contactDetails = [
  {
    icon: Phone,
    label: 'Call Us',
    primary: '+91 88008 44647',
    secondary: 'Mon – Sat, 8AM – 10PM',
    description: 'Tap to call us directly anytime during working hours',
    href: 'tel:+918800844647',
  },
  {
    icon: Mail,
    label: 'Email Us',
    primary: 'budomartialarts69@gmail.com',
    secondary: 'We reply within 24 hours',
    description: 'Send us your queries and we will get back to you soon',
    href: 'mailto:budomartialarts69@gmail.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    primary: 'Mon – Sat',
    secondary: '8:00 AM – 10:00 PM',
    description: 'We are closed on Sundays and national holidays',
    href: null,
  },
  {
    icon: MessageCircle,
    label: 'Live Chat',
    primary: 'Chat with our team',
    secondary: 'Instant support available',
    description: 'Response time under 5 minutes during working hours',
    href: null,
  },
];

export default function PhoneEmailDetails() {
  return (
    <section className="bg-black text-white py-12 md:py-20 px-4 sm:px-6 border-b border-brand-gray">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-brand-red"></div>
            <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">Reach Out</p>
            <div className="w-8 h-0.5 bg-brand-red"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter font-display uppercase">
            PHONE & <span className="text-brand-red">EMAIL</span> DETAILS
          </h2>
          <p className="mt-4 text-brand-light-gray font-sans font-light max-w-lg mx-auto text-base leading-relaxed">
            Multiple ways to connect with us. Choose what works best for you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, index) => {
            const IconComponent = item.icon;
            const CardWrapper = item.href ? 'a' : 'div';
            return (
              <CardWrapper
                key={index}
                {...(item.href ? { href: item.href } : {})}
                className="group bg-[#0a0a0a] border border-brand-gray hover:border-brand-red p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,14,52,0.12)] cursor-pointer block"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-brand-gray flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Label */}
                <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase font-sans mb-3">
                  {item.label}
                </p>

                {/* Primary */}
                <p className="text-white font-black text-base font-sans tracking-wide leading-tight break-all">
                  {item.primary}
                </p>

                {/* Secondary */}
                <p className="text-brand-light-gray text-sm font-sans font-light mt-1">
                  {item.secondary}
                </p>

                {/* Divider */}
                <div className="w-8 h-0.5 bg-brand-red my-4 group-hover:w-full transition-all duration-500"></div>

                {/* Description */}
                <p className="text-gray-500 text-xs font-sans leading-relaxed">
                  {item.description}
                </p>
              </CardWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}


