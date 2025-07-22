import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="space-y-6">
          {/* Greeting with typing effect */}
          <div className="animate-fade-in">
            <p className="text-primary text-lg font-medium tracking-wide">
              Hello, I'm
            </p>
          </div>

          {/* Name with glow effect */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Zeel Shah
            </h1>
          </div>

          {/* Title with emphasis */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Backend & Gen AI Engineer
            </h2>
          </div>

          {/* Description */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about building intelligent systems and scalable backend solutions. 
              With 6+ months of experience in AI/ML and backend development, I create 
              innovative solutions that drive technological advancement.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center pt-8" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={scrollToSkills}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3 text-lg font-medium"
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 px-8 py-3 text-lg font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className="w-6 h-6 text-primary cursor-pointer hover:text-primary-glow transition-colors"
            onClick={scrollToSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;