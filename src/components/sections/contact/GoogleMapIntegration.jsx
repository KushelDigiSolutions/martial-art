import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

export default function GoogleMapIntegration() {
  return (
    <section className="bg-black text-white py-12 md:py-20 px-4 sm:px-6 border-b border-brand-gray">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-brand-red"></div>
            <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">Our Location</p>
            <div className="w-8 h-0.5 bg-brand-red"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter font-display uppercase">
            GOOGLE MAP <span className="text-brand-red">INTEGRATION</span>
          </h2>
          <p className="mt-4 text-brand-light-gray font-sans font-light max-w-lg mx-auto text-base leading-relaxed">
            Locate our academy on the map and plan your visit with ease.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative border-t-4 border-brand-red overflow-hidden shadow-[0_20px_60px_rgba(255,14,52,0.15)]">

          {/* Google Maps Embed */}
          <div className="relative w-full h-[450px] md:h-[550px]">
            <iframe
              title="Budo Martial Arts Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.9399021808545!2d77.31208617549964!3d28.60157967568162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM2JzA1LjciTiA3N8KwMTgnNTIuOCJF!5e0!3m2!1sen!2sin!4v1780309277100!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>

          {/* Overlay Info Card */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-xs bg-black/95 border-l-4 border-brand-red p-6 shadow-2xl">
            <div className="flex items-start space-x-3 mb-4">
              <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-black font-display uppercase text-base tracking-wide">
                  Budo Martial Arts
                </p>
                <p className="text-brand-light-gray font-sans font-light text-sm mt-1 leading-relaxed">
                  Vasundhara Enclave,<br />Delhi - 110096<br />Beside Dharamshila Cancer Hospital
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Vasundhara+Enclave+Delhi+110096"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-brand-red text-xs font-bold tracking-widest uppercase font-sans hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Info Strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Parking', value: 'Free parking available in Vasundhara Enclave complex' },
            { label: 'Public Transit', value: 'Easily accessible via metro and local transportation' },
            { label: 'Accessibility', value: 'Wheelchair accessible entrance and facilities available' },
          ].map((info, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-brand-gray p-5 hover:border-brand-red transition-colors duration-300">
              <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase font-sans mb-2">{info.label}</p>
              <p className="text-brand-light-gray text-sm font-sans font-light leading-relaxed">{info.value}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
