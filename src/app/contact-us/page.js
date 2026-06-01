import Navbar from '@/components/layout/Navbar';
import FooterSection from '@/components/layout/FooterSection';
import ContactHero from '@/components/sections/contact/ContactHero';
import ContactForm from '@/components/sections/contact/ContactForm';
import PhoneEmailDetails from '@/components/sections/contact/PhoneEmailDetails';
import AcademyAddress from '@/components/sections/contact/AcademyAddress';
import GoogleMapIntegration from '@/components/sections/contact/GoogleMapIntegration';

export const metadata = {
  title: 'Contact Us — Budo Martial Arts Academy',
  description: 'Get in touch with Budo Martial Arts Academy. Find our address, phone, email, and social media links.',
};

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <ContactHero />
        <ContactForm />
        <PhoneEmailDetails />
        <AcademyAddress />
        <GoogleMapIntegration />
      </main>
      <FooterSection />
    </div>
  );
}
