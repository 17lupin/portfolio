import { Code, Rocket, Target, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Web Development",
      description: "Hands-on experience with modern frameworks like Next.js, React, and full-stack development"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Strong analytical thinking and ability to tackle complex technical challenges"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Excellent communication skills and experience working in collaborative environments"
    },
    {
      icon: Rocket,
      title: "Growth Mindset",
      description: "Eager to learn new technologies and adapt to evolving industry standards"
    }
  ];

  return (
    <section id="about" className="py-20 gradient-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a ate web developer with a strong foundation in modern web technologies. 
              During my internship at Codsoft, I gained valuable hands-on experience building 
              responsive web applications and working with databases.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in full-stack development with a focus on creating user-friendly 
              interfaces and robust backend systems. My projects showcase my ability to integrate 
              complex technologies like AI voice processing, payment gateways, and real-time data management.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my Diploma in Computer Science Engineering, I'm always eager 
              to learn new technologies and take on challenges that help me grow as a developer.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="portfolio-card text-center">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;