import { Code, Database, Settings, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["JavaScript", "Python", "C", "SQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Settings,
      title: "Frameworks & Technologies",
      skills: ["React", "Next.js", "Express", "HTML", "CSS", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Databases & Tools",
      skills: ["MongoDB", "MySQL", "VS Code", "Postman", "Linux"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="portfolio-card text-center">
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="relative">
                    <div className="px-3 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-smooth">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="portfolio-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Technical Proficiency</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">7.9</div>
                <div className="text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground">Weeks Internship</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;