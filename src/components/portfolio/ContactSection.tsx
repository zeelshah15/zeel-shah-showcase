import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Linkedin, Github, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [inView, setInView] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zeel.shah@email.com",
      href: "mailto:zeel.shah@email.com",
      color: "text-primary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
      color: "text-secondary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXX",
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/zeel-shah",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/zeel-shah",
      color: "hover:text-purple-400"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/91XXXXXXXXX",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-800 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="bg-gradient-card border-border/50 hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 ${
                      inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-card border-border/50 hover-glow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-muted/30 hover:bg-muted/50 text-muted-foreground ${social.color} transition-all duration-300 hover-scale ${
                        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-800 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <Card className="bg-gradient-card border-border/50 hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-muted/50 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-muted/50 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-muted/50 border-border/50 focus:border-primary min-h-[120px]"
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 pt-8 border-t border-border/50 transition-all duration-800 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '600ms' }}>
          <p className="text-muted-foreground">
            © 2024 Zeel Shah. Built with passion and cutting-edge technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;