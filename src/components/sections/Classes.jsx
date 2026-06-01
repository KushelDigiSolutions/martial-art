import React from 'react';

const classesData = [
  {
    title: 'KARATE',
    description: 'Focus on striking techniques such as punching, kicking, knee strikes, and elbow strikes.',
  },
  {
    title: 'MUAY THAI',
    description: 'Known as the "art of eight limbs", utilizing fists, elbows, knees, and shins.',
  },
  {
    title: 'JIU JITSU',
    description: 'Focuses on grappling and ground fighting, teaching how to defend against larger opponents.',
  },
  {
    title: 'KUNG FU',
    description: 'A range of martial arts styles originating in China, focusing on discipline and technique.',
  }
];

export default function Classes() {
  return (
    <section 
      className="relative py-24 bg-brand-dark bg-opacity-90 bg-blend-overlay text-white"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dd9tagtiw/image/upload/v1780141678/download_1_ksjs0g.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-brand-red font-bold tracking-[0.2em] text-sm uppercase mb-4">Our Classes</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">MARTIAL ARTS CLASSES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classesData.map((cls, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="border-t-2 border-brand-red w-12 mb-6 transition-all duration-300 group-hover:w-full"></div>
              <h3 className="text-2xl font-bold mb-4 tracking-wider">{cls.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {cls.description}
              </p>
              <button className="text-sm font-bold tracking-[0.2em] uppercase hover:text-brand-red transition-colors inline-flex items-center space-x-2">
                <span>Read More</span>
                <span className="text-brand-red">&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
