import { useState, useEffect } from "react";
import { ChevronDown, Sparkles, Zap, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import developerSilhouette from "@/assets/developer-silhouette.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-primary/40 animate-float" style={{ animationDelay: '0s' }} />
        <Zap className="absolute top-1/3 right-1/4 w-8 h-8 text-accent/40 animate-float" style={{ animationDelay: '2s' }} />
        <Code2 className="absolute bottom-1/3 left-1/3 w-7 h-7 text-secondary/40 animate-float" style={{ animationDelay: '4s' }} />
        <Sparkles className="absolute bottom-1/4 right-1/3 w-5 h-5 text-primary/40 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Greeting with typing effect */}
            <div className="animate-fade-in flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary animate-glow-pulse" />
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

            {/* Title with emphasis and icons */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light flex items-center gap-3 flex-wrap justify-center lg:justify-start">
                <Zap className="w-6 h-6 text-accent" />
                Backend & Gen AI Engineer
                <Code2 className="w-6 h-6 text-primary" />
              </h2>
            </div>

            {/* Description */}
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate about building intelligent systems and scalable backend solutions. 
                With 6+ months of experience in AI/ML and backend development, I create 
                innovative solutions that drive technological advancement.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="animate-slide-up flex flex-col sm:flex-row gap-4 pt-8" style={{ animationDelay: '0.8s' }}>
              <Button 
                onClick={scrollToSkills}
                variant="gradient"
                className="px-8 py-3 text-lg font-medium"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Explore My Work
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 text-lg font-medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code2 className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className={`relative lg:block hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Glowing border */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-glow-pulse"></div>
              
              {/* Main image */}
              <img
                src={developerSilhouette}
                alt="AI Developer"
                className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-elegant hover-scale"
              />
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
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