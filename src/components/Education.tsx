import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Federal University of Technology Minna",
      year: "2018",
      type: "degree",
      description: "Comprehensive study in computer science fundamentals, software engineering principles, and system design."
    },
    {
      degree: "Web Application Development Diploma", 
      institution: "Federal University of Technology Minna",
      year: "2012",
      type: "diploma",
      description: "Focused training in web technologies, database management, and application development methodologies."
    }
  ];

  return (
    <section id="education" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning in computer science and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={`${edu.institution}-${edu.year}`}
              className="p-6 bg-card border-card-border card-shadow hover:border-lemon/50 transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-lemon/10 rounded-lg flex-shrink-0">
                  {edu.type === 'degree' ? (
                    <GraduationCap className="text-lemon" size={24} />
                  ) : (
                    <Award className="text-lemon" size={24} />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-lemon mb-2">{edu.degree}</h3>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{edu.institution}</h4>
                  <div className="text-muted-foreground text-sm mb-3">
                    Completed: {edu.year}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;