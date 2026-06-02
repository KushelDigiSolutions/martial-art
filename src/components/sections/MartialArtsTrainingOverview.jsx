import React from 'react';

const classesData = [
  {
    title: 'KARATE',
    description: 'Focus on striking techniques such as punching, kicking, knee strikes, and elbow strikes in a disciplined environment.',
  },
  {
    title: 'MUAY THAI',
    description: 'Known as the "art of eight limbs", utilizing fists, elbows, knees, and shins for devastating striking power.',
  },
  {
    title: 'MMA',
    description: 'A dynamic, full-contact combat sport combining techniques from boxing, wrestling, jiu-jitsu, and Muay Thai into a comprehensive fighting system.',
  },
  {
    title: 'BOXING',
    description: 'The sweet science of striking, focusing on footwork, head movement, and throwing powerful, precise punches in a structured environment.',
  }
];

export default function MartialArtsTrainingOverview() {
  return (
    <section 
      className="relative py-16 bg-brand-dark bg-opacity-90 bg-blend-overlay text-white"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dd9tagtiw/image/upload/v1780141678/download_1_ksjs0g.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/85"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase mb-4 font-sans">Training Overview</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter font-display uppercase drop-shadow-xl leading-tight">MARTIAL ARTS TRAINING OVERVIEW</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {classesData.map((cls, index) => (
            <div key={index} className="group cursor-pointer flex flex-col items-start bg-transparent transition-all duration-300">
              <div className="w-full h-1 bg-brand-gray mb-6 relative">
                <div className="absolute top-0 left-0 h-full w-12 bg-brand-red transition-all duration-500 ease-out group-hover:w-full"></div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4 tracking-wide font-display uppercase">{cls.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed font-sans font-light flex-grow text-sm sm:text-base">
                {cls.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
