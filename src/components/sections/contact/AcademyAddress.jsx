import React from 'react';
import { MapPin, Navigation, Building2, Flag } from 'lucide-react';

const addressDetails = [
  {
    icon: Building2,
    label: 'Academy Name',
    value: 'Budo Martial Arts Academy',
  },
  {
    icon: MapPin,
    label: 'Street Address',
    value: 'Vasundhara Enclave',
  },
  {
    icon: Flag,
    label: 'City, State & ZIP',
    value: 'Delhi - 110096, India',
  },
  {
    icon: Navigation,
    label: 'Nearest Landmark',
    value: 'Beside Dharamshila Cancer Hospital',
  },
];

export default function AcademyAddress() {
  return (
    <section className="bg-[#050505] text-white py-12 md:py-20 px-4 sm:px-6 border-b border-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-brand-red"></div>
            <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">Find Us</p>
            <div className="w-8 h-0.5 bg-brand-red"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter font-display uppercase">
            ACADEMY <span className="text-brand-red">ADDRESS</span>
          </h2>
          <p className="mt-4 text-brand-light-gray font-sans font-light max-w-lg mx-auto text-base leading-relaxed">
            Visit us in person and experience our world-class training facility firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — Address Details */}
          <div className="space-y-6">
            {addressDetails.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-5 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-gray flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300 cursor-pointer">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase font-sans mb-1">
                      {item.label}
                    </p>
                    <p className="text-white font-sans font-medium text-base leading-snug">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Directions Button */}
            <div className="pt-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-brand-red text-white text-sm font-black tracking-widest uppercase hover:bg-white hover:text-brand-red transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,14,52,0.3)] font-sans cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right — Visual Card */}
          <div className="relative">
            <div
              className="relative h-72 lg:h-96 overflow-hidden"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780315466/martialarts_ofrjic.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              {/* Address overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-black font-display uppercase text-lg tracking-wide">
                      Budo Martial Arts Academy
                    </p>
                    <p className="text-brand-light-gray font-sans font-light text-sm mt-1">
                      Vasundhara Enclave,<br />Delhi - 110096<br />Beside Dharamshila Cancer Hospital
                    </p>
                  </div>
                </div>
              </div>

              {/* Red corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand-red" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 bg-brand-red">
              {[
                { value: '5K+', label: 'Students' },
                { value: '15+', label: 'Years Open' },
                { value: '3', label: 'Locations' },
              ].map((stat, i) => (
                <div key={i} className="py-5 text-center border-r border-red-700 last:border-r-0">
                  <p className="text-white font-black font-display text-2xl uppercase">{stat.value}</p>
                  <p className="text-white/70 text-xs font-sans uppercase tracking-widest mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
