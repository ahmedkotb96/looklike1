import Navigation from "@/components/LandingPage/Navigation";
import HeroSection from "@/components/LandingPage/HeroSection";
import ServicesSection from "@/components/LandingPage/ServicesSection";
import TeamSection from "@/components/LandingPage/TeamSection";
import TrustedCompaniesSection from "@/components/LandingPage/TrustedCompaniesSection";
import PortfolioSection from "@/components/LandingPage/PortfolioSection";
import ContactSection from "@/components/LandingPage/ContactSection";
import Footer from "@/components/LandingPage/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Trusted Companies Section */}
      <TrustedCompaniesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
