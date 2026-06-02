import React from 'react';

export default function InstructorAndTrainingPhilosophy() {
  return (
    <section className="bg-[#050505] text-white py-14 border-t border-brand-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-24 items-start">

        {/* Left Side: Title */}
        <div className="md:col-span-5 relative">
          <p className="text-brand-red font-bold tracking-[0.2em] text-[10px] uppercase mb-4 font-sans">Founder, Academy Head</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.85] font-display uppercase break-words">
            KYOSHI ANIL<br />BARYA
          </h2>
        </div>

        {/* Right Side: Text + Signature */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-400 font-sans font-light text-sm sm:text-base leading-relaxed mt-2 md:mt-8 lg:mt-12">
          <div className="space-y-5">
            <p>
              Kyoshi Anil Barya began his martial arts journey in 1988 in Madhya Pradesh, India. With a deep passion for martial arts and self-defense, he dedicated himself to rigorous training in Karate and Taekwondo, completing four years of intensive practice in Gwalior.
            </p>
            <p>
              Over the years, he has actively participated in numerous martial arts competitions and championships at the State, National, and International levels, gaining valuable experience and recognition in the martial arts community.
            </p>
          </div>
          <div className="space-y-5 flex flex-col justify-between">
            <p>
              With decades of training, teaching, and leadership experience, Kyoshi Anil Barya has devoted his life to promoting martial arts education, character development, and physical fitness among students across India. His vision is to empower individuals through discipline, confidence, respect, and self-defense skills.
            </p>
            <div className="pt-4">
              <div className="text-3xl sm:text-4xl font-light text-white opacity-90 drop-shadow-sm" style={{ fontFamily: "'Brush Script MT', cursive, serif" }}>
                Kyoshi Anil Barya
              </div>
              <p className="text-brand-red font-bold tracking-[0.15em] text-xs uppercase font-sans mt-2">
                President &amp; Chief Technical Director (India) – BSKAI
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
