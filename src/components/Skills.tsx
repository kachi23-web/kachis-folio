import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      icon: "🚀",
      skills: ["Node.js", "NestJS", "Laravel", "PHP", "RESTful APIs", "Microservices", "GraphQL"]
    },
    {
      title: "Frontend Technologies", 
      icon: "💻",
      skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Databases",
      icon: "🗄️", 
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Database Design", "Query Optimization"]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      skills: ["AWS", "Docker", "Git", "CI/CD", "Linux", "Server Management", "Cloud Architecture"]
    },
    {
      title: "Messaging & Queue Systems",
      icon: "📨",
      skills: ["Apache Kafka", "RabbitMQ", "Redis Pub/Sub", "Message Queues", "Event-Driven Architecture"]
    },
    {
      title: "Development Practices",
      icon: "⚡",
      skills: ["OOP/OOD", "SOLID Principles", "Design Patterns", "Test-Driven Development", "Agile", "Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 bg-card border-card-border card-shadow hover:border-lemon/50 transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-lemon">{category.title}</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-accent text-accent-foreground hover:bg-lemon hover:text-black transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;