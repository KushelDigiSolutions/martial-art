import Navbar from '@/components/layout/Navbar';
import FooterSection from '@/components/layout/FooterSection';
import AboutUs from '@/components/sections/about/AboutUs';
import AcademyOverview from '@/components/sections/about/AcademyOverview';
import InstructorAndTrainingPhilosophy from '@/components/sections/about/InstructorAndTrainingPhilosophy';
import MissionAndVision from '@/components/sections/about/MissionAndVision';
import AcademyValues from '@/components/sections/about/AcademyValues';
import StudentDevelopmentFocus from '@/components/sections/about/StudentDevelopmentFocus';
import TrainingEnvironment from '@/components/sections/about/TrainingEnvironment';

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <AboutUs />
        <AcademyOverview />
        <InstructorAndTrainingPhilosophy />
        <MissionAndVision />
        <AcademyValues />
        <StudentDevelopmentFocus />
        <TrainingEnvironment />
      </main>
      <FooterSection />
    </div>
  );
}
