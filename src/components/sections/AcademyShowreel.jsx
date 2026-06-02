'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function AcademyShowreel() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section className="bg-[#050505] text-white py-12 sm:py-16 relative border-t border-brand-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left — Video */}
          <div
            className="relative w-full overflow-hidden border-l-4 border-brand-red cursor-pointer group shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/dlzxiy0tl/video/upload/v1780382150/martial_arts_academy_csn9w8.mp4"
              className="w-full h-auto max-h-[60vh] object-cover block"
              muted
              loop
              playsInline
              preload="metadata"
              onEnded={() => setPlaying(false)}
            />

            {/* Dark overlay */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                playing ? 'opacity-0 pointer-events-none' : 'opacity-40'
              }`}
            />

            {/* Play / Pause — center */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
              }`}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-red flex items-center justify-center shadow-[0_0_40px_rgba(255,14,52,0.6)] transition-all duration-300 group-hover:scale-110">
                {playing ? (
                  <Pause className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
                ) : (
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1" />
                )}
              </div>
            </div>

            {/* Mute toggle — bottom right */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 w-10 h-10 bg-black/70 hover:bg-brand-red flex items-center justify-center transition-colors duration-300 z-10"
              aria-label={muted ? 'Unmute' : 'Mute'}
            >
              {muted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </button>

            {/* Label — bottom left */}
            <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 border-l-2 border-brand-red pointer-events-none">
              <p className="text-white text-xs font-bold tracking-widest uppercase font-sans">
                Budo Martial Arts Academy
              </p>
              <p className="text-brand-red text-[10px] font-sans uppercase tracking-widest mt-0.5">
                Vasundhara Enclave, Delhi
              </p>
            </div>
          </div>

          {/* Right — Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-brand-red"></div>
              <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">
                See Us In Action
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight font-display uppercase">
              EXPERIENCE THE<br />
              <span className="text-brand-red">BUDO ACADEMY</span>
            </h2>

            <div className="w-12 h-1 bg-brand-red"></div>

            <p className="text-gray-400 font-sans font-light text-base lg:text-lg leading-relaxed">
              Step inside Budo Martial Arts Academy and witness the energy, discipline, and dedication that defines our training. From beginners to advanced practitioners, every student trains with purpose under expert guidance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
