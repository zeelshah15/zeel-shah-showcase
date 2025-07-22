import HeroSection from "@/components/portfolio/HeroSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import CustomCursor from "@/components/effects/CustomCursor";
import SpotlightEffect from "@/components/effects/SpotlightEffect";

const Index = () => {
  return (
    <div className="min-h-screen relative" style={{ cursor: 'none' }}>
      {/* Custom Cursor and Spotlight Effects */}
      <CustomCursor />
      <SpotlightEffect />
      
      {/* Portfolio Content */}
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Index;
