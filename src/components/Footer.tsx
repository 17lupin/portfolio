import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vivek</h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Web Developer passionate about creating innovative solutions 
              and building amazing user experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:k17vivek@gmail.com"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-kumar-a0b72a275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/17lupin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-smooth">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-smooth">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-smooth">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'JavaScript', 'MongoDB', 'Tailwind'].map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Vivek. Made with 
           
            and passion for web development.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;