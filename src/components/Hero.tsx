import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 123, 191, 0.9) 0%, rgba(0, 150, 136, 0.8) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="section-container relative z-10">
        <div className="text-center text-white animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-primary-glow mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Badarpur, Delhi</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">Vivek</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-gray-200">
            Full Stack Web Developer
          </h2>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Enthusiastic fresher with hands-on experience in web development projects and a strong desire to grow in a professional environment.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-bounce"
            >
              View My Work
            </Button>
            
          
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a 
              href="mailto:k17vivek@gmail.com"
              className="text-white hover:text-primary-glow transition-smooth hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/vivek-kumar-a0b72a275"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-glow transition-smooth hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
            <a 
              href="https://github.com/17lupin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-glow transition-smooth hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            
          
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-primary-glow transition-smooth"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;