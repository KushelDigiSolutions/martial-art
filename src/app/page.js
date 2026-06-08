import Navbar from '@/components/layout/Navbar';
import FooterSection from '@/components/layout/FooterSection';
import HeroBanner from '@/components/sections/HeroBanner';
import AcademyIntroduction from '@/components/sections/AcademyIntroduction';
import MartialArtsTrainingOverview from '@/components/sections/MartialArtsTrainingOverview';
import AcademyShowreel from '@/components/sections/AcademyShowreel';
import WhyChooseBudo from '@/components/sections/WhyChooseBudo';
import FeaturedPrograms from '@/components/sections/FeaturedPrograms';
import StudentBenefitsSection from '@/components/sections/StudentBenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';


export default function Home() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <HeroBanner />
        <AcademyIntroduction />
        <MartialArtsTrainingOverview />
        <AcademyShowreel />
        <WhyChooseBudo />
        <FeaturedPrograms />
        <StudentBenefitsSection />
        <TestimonialsSection />
      </main>
      <FooterSection />
    </div>
  );
}
