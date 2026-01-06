import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profilePhoto from "/assets/main.jpeg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-primary/40 animate-float" />
        <div className="absolute top-40 left-32 w-3 h-3 rounded-full bg-secondary/40 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 right-40 w-5 h-5 rounded-full bg-accent/40 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-3 h-3 rounded-full bg-primary/30 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="opacity-0 animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
                Data Scientist & ML Engineer
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-slide-up stagger-1">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Chanchal</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 opacity-0 animate-slide-up stagger-2 text-balance">
              Building intelligent data pipelines and ML systems that transform raw data into actionable insights. 
              Currently pursuing MS in Data Science at University at Buffalo.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 opacity-0 animate-slide-up stagger-3">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl glass text-foreground font-semibold hover:bg-muted/50 transition-all duration-300"
              >
                View Projects
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 opacity-0 animate-slide-up stagger-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:chanchal.bundele@outlook.com"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="opacity-0 animate-fade-in relative">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-full gradient-bg blur-2xl opacity-40 animate-pulse-glow" />
              
              {/* Image container with border */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1 gradient-bg">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img 
                    src={profilePhoto} 
                    alt="Chanchal Bundele - Data Scientist" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Orbiting dot */}
              <div className="absolute inset-0 animate-orbit">
                <div className="w-3 h-3 rounded-full bg-primary glow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
