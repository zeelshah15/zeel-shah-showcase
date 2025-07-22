import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, TrendingUp, Sparkles, Zap, Award } from "lucide-react";

const ExperienceSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Backend & Gen AI Engineer",
      company: "Current Role",
      duration: "6+ Months",
      location: "India",
      type: "Full-time",
      highlights: [
        "Developed intelligent backend systems using Python and ML frameworks",
        "Implemented generative AI solutions for automated content generation",
        "Designed and optimized database architectures for scalable applications",
        "Collaborated with cross-functional teams to deliver AI-powered features",
        "Built RESTful APIs and microservices for AI model integration"
      ],
      technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker", "OpenAI GPT"]
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Improved system performance by 40% through efficient algorithm implementation",
      color: "text-primary"
    },
    {
      icon: Trophy,
      title: "AI Model Integration",
      description: "Successfully integrated multiple AI models into production systems",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Rapid Learning",
      description: "Quickly adapted to new technologies and frameworks in fast-paced environment",
      color: "text-secondary"
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6 bg-muted/30 relative">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Sparkles className="absolute top-20 right-20 w-6 h-6 text-primary/30 animate-float" style={{ animationDelay: '0s' }} />
        <Zap className="absolute top-1/3 left-10 w-5 h-5 text-accent/30 animate-float" style={{ animationDelay: '2s' }} />
        <Trophy className="absolute bottom-1/4 right-16 w-7 h-7 text-secondary/30 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary animate-glow-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <Zap className="w-8 h-8 text-accent animate-glow-pulse" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building innovative solutions and growing expertise in AI and backend development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className={`bg-gradient-card border-border/50 hover-glow transition-all duration-700 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Contributions:</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li 
                        key={i}
                        className={`flex items-start gap-3 text-muted-foreground transition-all duration-500 ${
                          inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                        style={{ transitionDelay: `${index * 200 + i * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className={`border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 ${
                          inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                        style={{ transitionDelay: `${index * 200 + i * 50 + 300}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className={`transition-all duration-800 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className={`bg-gradient-card border-border/50 hover-scale transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <achievement.icon className={`w-12 h-12 ${achievement.color} mx-auto mb-4 animate-glow-pulse`} />
                  <h4 className="font-bold text-lg mb-3 text-foreground">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;