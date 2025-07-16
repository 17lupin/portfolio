import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "Delhi Skill and Entrepreneurship University",
      location: "Shakarpur, Delhi",
      duration: "2022 – 2025",
      grade: "CGPA: 7.9",
      status: "Completed",
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "12th – Higher Secondary Education (CBSE)",
      institution: "CBSE Board",
      location: "Delhi",
      duration: "2022",
      grade: "Percentage: 78%",
      status: "Completed",
      color: "from-green-500 to-emerald-500"
    },
    {
      degree: "10th – Higher Secondary Education (CBSE)",
      institution: "CBSE Board", 
      location: "Delhi",
      duration: "2020",
      grade: "Percentage: 67%",
      status: "Completed",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section id="education" className="py-20 gradient-section">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="portfolio-card">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Currently Pursuing' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <h4 className="text-lg text-primary font-semibold mb-2">{edu.institution}</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-3 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{edu.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="portfolio-card max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Academic Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Computer Science</div>
                <div className="text-muted-foreground">Specialization</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">3+ Years</div>
                <div className="text-muted-foreground">Technical Education</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;