import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ClientLogos } from '@/components/ClientLogos';
import { ServicesSection } from '@/components/ServicesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { WhyUsSection } from '@/components/WhyUsSection';
import { TeamSection } from '@/components/TeamSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <ServicesSection />
        <ProcessSection />
        <CaseStudiesSection />
        <WhyUsSection />
        <TeamSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
