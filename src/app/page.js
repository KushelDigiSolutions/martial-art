import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import AboutUs from '@/components/sections/AboutUs';
import Classes from '@/components/sections/Classes';
import Headmaster from '@/components/sections/Headmaster';
import Instructors from '@/components/sections/Instructors';
import Reviews from '@/components/sections/Reviews';
import CallToAction from '@/components/sections/CallToAction';

export default function Home() {
  return (
    <div className="bg-brand-dark min-h-screen font-sans selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Classes />
        <Headmaster />
        <Instructors />
        <Reviews />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
