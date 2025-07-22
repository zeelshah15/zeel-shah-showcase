import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  Server, 
  Code, 
  MessageSquare, 
  Users, 
  Lightbulb, 
  Target,
  Zap,
  GitBranch,
  Sparkles,
  Cpu
} from "lucide-react";
import aiBrain from "@/assets/ai-brain.jpg";
import backendInfrastructure from "@/assets/backend-infrastructure.jpg";

const SkillsSection = () => {
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

  const technicalSkills = [
    { name: "Python", level: 85, icon: Code },
    { name: "Node.js", level: 80, icon: Server },
    { name: "Machine Learning", level: 75, icon: Brain },
    { name: "Database Design", level: 80, icon: Database },
    { name: "API Development", level: 85, icon: Zap },
    { name: "Git/Version Control", level: 80, icon: GitBranch },
  ];

  const softSkills = [
    { name: "Communication", level: 90, icon: MessageSquare },
    { name: "Team Collaboration", level: 85, icon: Users },
    { name: "Problem Solving", level: 88, icon: Lightbulb },
    { name: "Goal-Oriented", level: 92, icon: Target },
  ];

  const SkillCard = ({ skills, title, gradientClass }: { 
    skills: any[], 
    title: string, 
    gradientClass: string 
  }) => (
    <Card className="bg-gradient-card border-border/50 hover-glow h-full">
      <CardHeader>
        <CardTitle className={`text-xl font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className={`space-y-2 transition-all duration-500 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <skill.icon className="w-4 h-4 text-primary" />
                <span className="font-medium">{skill.name}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {skill.level}%
              </Badge>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className={`h-2 rounded-full bg-gradient-to-r ${gradientClass} transition-all duration-1000 ease-out`}
                style={{ 
                  width: inView ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 100 + 200}ms`
                }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A blend of technical prowess and interpersonal skills that drive innovation and collaboration
          </p>
        </div>

        {/* Visual Showcase */}
        <div className={`grid lg:grid-cols-2 gap-12 mb-16 transition-all duration-800 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '300ms' }}>
          {/* AI & ML Section */}
          <Card className="bg-gradient-card border-border/50 hover-glow overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={aiBrain} 
                alt="AI and Machine Learning" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-6 h-6 text-primary" />
                  <Sparkles className="w-4 h-4 text-accent animate-glow-pulse" />
                </div>
                <h3 className="text-xl font-bold text-foreground">AI & Machine Learning</h3>
                <p className="text-sm text-muted-foreground">Building intelligent systems with cutting-edge ML algorithms</p>
              </div>
            </div>
          </Card>

          {/* Backend Development Section */}
          <Card className="bg-gradient-card border-border/50 hover-glow overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={backendInfrastructure} 
                alt="Backend Infrastructure" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-2">
                  <Server className="w-6 h-6 text-primary" />
                  <Cpu className="w-4 h-4 text-accent animate-glow-pulse" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Backend Development</h3>
                <p className="text-sm text-muted-foreground">Scalable architectures and robust API solutions</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <SkillCard 
            skills={technicalSkills}
            title="Technical Skills"
            gradientClass="from-primary to-accent"
          />
          <SkillCard 
            skills={softSkills}
            title="Soft Skills"
            gradientClass="from-secondary to-primary"
          />
        </div>

        {/* Additional Tech Stack */}
        <div className={`mt-16 text-center transition-all duration-800 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '400ms' }}>
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "TensorFlow", "PyTorch", "FastAPI", "Django", "PostgreSQL", 
              "MongoDB", "Docker", "AWS", "Jupyter", "Pandas", "NumPy", "OpenAI GPT"
            ].map((tech, index) => (
              <Badge 
                key={tech}
                variant="outline"
                className={`text-sm py-2 px-4 border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 hover-scale ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${600 + index * 50}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;