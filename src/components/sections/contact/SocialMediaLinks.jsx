import React from 'react';
import Link from 'next/link';

// Custom SVG icons for social platforms
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const socialPlatforms = [
  {
    name: 'Facebook',
    handle: '@GELUDMartialArts',
    followers: '12.4K',
    description: 'Follow us for daily training tips, event announcements, and community highlights.',
    icon: FacebookIcon,
    href: '#',
    color: '#1877F2',
  },
  {
    name: 'Instagram',
    handle: '@gelud_martial',
    followers: '28.7K',
    description: 'See our students in action, behind-the-scenes training, and transformation stories.',
    icon: InstagramIcon,
    href: '#',
    color: '#E1306C',
  },
  {
    name: 'YouTube',
    handle: 'GELUD Academy',
    followers: '9.2K',
    description: 'Watch full training sessions, technique breakdowns, and student testimonials.',
    icon: YoutubeIcon,
    href: '#',
    color: '#FF0000',
  },
  {
    name: 'X (Twitter)',
    handle: '@gelud_arts',
    followers: '5.1K',
    description: 'Stay updated with quick tips, news, and martial arts insights from our coaches.',
    icon: TwitterIcon,
    href: '#',
    color: '#000000',
  },
  {
    name: 'TikTok',
    handle: '@geludmartial',
    followers: '41.3K',
    description: 'Short-form training clips, challenges, and viral martial arts content.',
    icon: TiktokIcon,
    href: '#',
    color: '#010101',
  },
];

export default function SocialMediaLinks() {
  return (
    <section className="bg-[#050505] text-white py-12 md:py-20 px-4 sm:px-6 border-b border-brand-gray">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-0.5 bg-brand-red"></div>
            <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">Stay Connected</p>
            <div className="w-8 h-0.5 bg-brand-red"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter font-display uppercase">
            SOCIAL MEDIA <span className="text-brand-red">LINKS</span>
          </h2>
          <p className="mt-4 text-brand-light-gray font-sans font-light max-w-lg mx-auto text-base leading-relaxed">
            Join our growing online community and stay connected with the GELUD family across all platforms.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {socialPlatforms.slice(0, 3).map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <Link
                key={index}
                href={platform.href}
                className="group bg-[#0a0a0a] border border-brand-gray hover:border-brand-red p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,14,52,0.12)] block"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-brand-gray flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
                    <IconComponent />
                  </div>
                  <div className="text-right">
                    <p className="text-white font-black font-display text-xl uppercase">{platform.followers}</p>
                    <p className="text-brand-light-gray text-xs font-sans uppercase tracking-widest">Followers</p>
                  </div>
                </div>

                {/* Platform Name */}
                <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase font-sans mb-1">
                  {platform.name}
                </p>
                <p className="text-white font-black font-display uppercase text-lg tracking-wide mb-3">
                  {platform.handle}
                </p>

                {/* Divider */}
                <div className="w-8 h-0.5 bg-brand-red mb-4 group-hover:w-full transition-all duration-500"></div>

                {/* Description */}
                <p className="text-gray-500 text-sm font-sans font-light leading-relaxed">
                  {platform.description}
                </p>

                {/* Follow CTA */}
                <div className="mt-6 flex items-center space-x-2 text-brand-red text-xs font-bold tracking-widest uppercase font-sans group-hover:text-white transition-colors duration-300">
                  <span>Follow Now</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Row — 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {socialPlatforms.slice(3).map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <Link
                key={index}
                href={platform.href}
                className="group bg-[#0a0a0a] border border-brand-gray hover:border-brand-red p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,14,52,0.12)] block"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-brand-gray flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
                    <IconComponent />
                  </div>
                  <div className="text-right">
                    <p className="text-white font-black font-display text-xl uppercase">{platform.followers}</p>
                    <p className="text-brand-light-gray text-xs font-sans uppercase tracking-widest">Followers</p>
                  </div>
                </div>
                <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase font-sans mb-1">{platform.name}</p>
                <p className="text-white font-black font-display uppercase text-lg tracking-wide mb-3">{platform.handle}</p>
                <div className="w-8 h-0.5 bg-brand-red mb-4 group-hover:w-full transition-all duration-500"></div>
                <p className="text-gray-500 text-sm font-sans font-light leading-relaxed">{platform.description}</p>
                <div className="mt-6 flex items-center space-x-2 text-brand-red text-xs font-bold tracking-widest uppercase font-sans group-hover:text-white transition-colors duration-300">
                  <span>Follow Now</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Community Banner */}
        <div className="mt-8 bg-brand-red p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase font-sans mb-2">Join The Community</p>
            <h3 className="text-white font-black font-display uppercase text-3xl md:text-4xl tracking-tight leading-tight">
              96,700+ MARTIAL ARTISTS<br className="hidden md:block" /> FOLLOW OUR JOURNEY
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {socialPlatforms.map((p, i) => {
              const Icon = p.icon;
              return (
                <Link
                  key={i}
                  href={p.href}
                  className="w-12 h-12 bg-white/10 hover:bg-white flex items-center justify-center text-white hover:text-brand-red transition-all duration-300"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
