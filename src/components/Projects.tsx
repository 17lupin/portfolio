import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Medical AI Voice Agent",
      description: "A real-time medical voice assistant web app enabling users to share health issues and receive AI-generated responses with automatic report generation.",
      tech: ["Next.js", "Tailwind", "Clerk", "Shadcn UI", "Vapi AI", "MongoDB", "REST APIs"],
      features: [
        "Real-time voice interaction with AI",
        "Speech-to-text transcription",
        "Secure session management",
        "Automatic report generation",
        "Responsive UI design"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Get Me Coin – Support Platform",
      description: "A platform like 'Buy Me a Coffee' with integrated payment gateway, secure authentication, and comprehensive user management system.",
      tech: ["Next.js", "Tailwind CSS", "Razorpay", "NextAuth", "MongoDB"],
      features: [
        "Payment gateway integration",
        "Secure authentication system",
        "User profile management",
        "Real-time form validation",
        "Payment history tracking"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 gradient-section">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card group">
              <div className={`w-full h-48 bg-gradient-to-br ${project.color} rounded-lg mb-6 flex items-center justify-center relative overflow-hidden`}>
                <div className="text-white text-6xl font-bold opacity-20">
                  {project.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 pt-4 border-t">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                <Button size="sm" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;