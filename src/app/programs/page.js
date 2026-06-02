import Navbar from '@/components/layout/Navbar';
import FooterSection from '@/components/layout/FooterSection';
import ProgramsOverview from '@/components/sections/programs/ProgramsOverview';
import KidsProgram from '@/components/sections/programs/KidsProgram';
import TeenProgram from '@/components/sections/programs/TeenProgram';
import AdultProgram from '@/components/sections/programs/AdultProgram';
import ProgramCategories from '@/components/sections/programs/ProgramCategories';
import SelfDefense from '@/components/sections/programs/SelfDefense';
import FitnessDiscipline from '@/components/sections/programs/FitnessDiscipline';
import BeltProgression from '@/components/sections/programs/BeltProgression';
import ProgramBenefits from '@/components/sections/programs/ProgramBenefits';


export default function ProgramsPage() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <ProgramsOverview />
        <KidsProgram />
        <TeenProgram />
        <AdultProgram />
        <ProgramCategories />
        <SelfDefense />
        <FitnessDiscipline />
        <BeltProgression />
        <ProgramBenefits />
    
      </main>
      <FooterSection />
    </div>
  );
}
