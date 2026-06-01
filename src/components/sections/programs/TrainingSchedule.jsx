'use client';

import { Clock, CalendarDays } from 'lucide-react';

const schedule = [
  {
    day: 'Monday',
    sessions: [
      { program: 'Kids Martial Arts', time: '4:00 PM – 5:00 PM' },
      { program: 'Teen Martial Arts', time: '5:15 PM – 6:15 PM' },
      { program: 'Adult Self-Defense', time: '6:30 PM – 8:00 PM' },
    ],
  },
  {
    day: 'Tuesday',
    sessions: [
      { program: 'Fitness & Conditioning', time: '6:00 AM – 7:00 AM' },
      { program: 'Kids Martial Arts', time: '4:00 PM – 5:00 PM' },
      { program: 'Adult Martial Arts', time: '6:30 PM – 8:00 PM' },
    ],
  },
  {
    day: 'Wednesday',
    sessions: [
      { program: 'Kids Martial Arts', time: '4:00 PM – 5:00 PM' },
      { program: 'Teen Competition Prep', time: '5:15 PM – 6:30 PM' },
      { program: 'Adult Self-Defense', time: '6:30 PM – 8:00 PM' },
    ],
  },
  {
    day: 'Thursday',
    sessions: [
      { program: 'Fitness & Conditioning', time: '6:00 AM – 7:00 AM' },
      { program: 'Kids Martial Arts', time: '4:00 PM – 5:00 PM' },
      { program: 'Adult Martial Arts', time: '6:30 PM – 8:00 PM' },
    ],
  },
  {
    day: 'Friday',
    sessions: [
      { program: 'Kids Martial Arts', time: '4:00 PM – 5:00 PM' },
      { program: 'Teen Martial Arts', time: '5:15 PM – 6:15 PM' },
      { program: 'Open Sparring (All Levels)', time: '6:30 PM – 8:00 PM' },
    ],
  },
  {
    day: 'Saturday',
    sessions: [
      { program: 'Family Martial Arts', time: '9:00 AM – 10:00 AM' },
      { program: 'Belt Testing & Workshops', time: '10:30 AM – 12:00 PM' },
    ],
  },
];

export default function TrainingSchedule() {
  return (
    <section className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-0.5 bg-brand-red" />
            <p className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase font-sans">
              Weekly Classes
            </p>
            <div className="w-12 h-0.5 bg-brand-red" />
          </div>

          <h2 className="font-display font-black tracking-tighter uppercase text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9] mb-6">
            Training
            <br />
            <span className="text-brand-red">Schedule</span>
          </h2>

          <p className="font-sans font-light text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto">
            Plan your training week. Our schedule offers multiple sessions
            across all programs so you never miss a chance to train.
          </p>
        </div>

        {/* Schedule Table — Desktop */}
        <div className="hidden md:block">
          <div className="border border-gray-800 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-brand-red">
              <div className="px-6 py-4 flex items-center space-x-2">
                <CalendarDays className="w-5 h-5 text-white" />
                <span className="font-display font-black uppercase tracking-wider text-sm text-white">
                  Day
                </span>
              </div>
              <div className="px-6 py-4">
                <span className="font-display font-black uppercase tracking-wider text-sm text-white">
                  Program
                </span>
              </div>
              <div className="px-6 py-4 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-white" />
                <span className="font-display font-black uppercase tracking-wider text-sm text-white">
                  Time
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {schedule.map((daySchedule, dayIndex) =>
              daySchedule.sessions.map((session, sessionIndex) => {
                const isEvenRow = (dayIndex + sessionIndex) % 2 === 0;
                return (
                  <div
                    key={`${dayIndex}-${sessionIndex}`}
                    className={`grid grid-cols-3 ${
                      isEvenRow ? 'bg-[#111]' : 'bg-[#0a0a0a]'
                    } border-t border-gray-800/50 transition-all duration-300 hover:bg-brand-red/10 hover:border-l-4 hover:border-l-brand-red group cursor-default`}
                  >
                    {/* Day column — only show day name for first session of that day */}
                    <div className="px-6 py-4">
                      {sessionIndex === 0 ? (
                        <span className="font-display font-black uppercase tracking-tight text-base text-white group-hover:text-brand-red transition-colors duration-300">
                          {daySchedule.day}
                        </span>
                      ) : (
                        <span className="text-gray-600 text-sm">↳</span>
                      )}
                    </div>

                    {/* Program name */}
                    <div className="px-6 py-4">
                      <span className="font-sans font-light text-gray-300 text-base group-hover:text-white transition-colors duration-300">
                        {session.program}
                      </span>
                    </div>

                    {/* Time */}
                    <div className="px-6 py-4">
                      <span className="font-sans text-gray-400 text-sm tracking-wide group-hover:text-brand-red transition-colors duration-300">
                        {session.time}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Schedule Cards — Mobile */}
        <div className="md:hidden space-y-4">
          {schedule.map((daySchedule, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-[#111] border border-gray-800 overflow-hidden"
            >
              {/* Day header */}
              <div className="bg-brand-red px-5 py-3 flex items-center space-x-2">
                <CalendarDays className="w-4 h-4 text-white" />
                <span className="font-display font-black uppercase tracking-wider text-sm text-white">
                  {daySchedule.day}
                </span>
              </div>

              {/* Sessions */}
              <div className="divide-y divide-gray-800/50">
                {daySchedule.sessions.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="px-5 py-4 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-sans font-light text-white text-sm">
                        {session.program}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1.5 flex-shrink-0">
                      <Clock className="w-3.5 h-3.5 text-brand-red" />
                      <span className="font-sans text-gray-400 text-xs tracking-wide">
                        {session.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center space-x-3 bg-[#111] border border-gray-800 px-6 py-3">
            <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            <p className="font-sans font-light text-gray-500 text-sm">
              Schedule subject to change. Private lessons available by
              appointment. Contact us for holiday schedules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
