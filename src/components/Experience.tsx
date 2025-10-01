import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "United State of Africa",
      period: "2023 - 2024",
      location: "Remote",
      achievements: [
        "Architected and implemented scalable microservices using NestJS and Node.js",
        "Optimized database performance resulting in 40% faster query execution",
        "Led integration of Apache Kafka for real-time data processing"
      ]
    },
    {
      title: "Backend Developer", 
      company: "Crowdr",
      period: "2023 - 2024",
      location: "Remote",
      achievements: [
        "Developed RESTful APIs serving 100k+ daily requests with 99.9% uptime",
        "Implemented robust authentication and authorization systems",
        "Designed and optimized MongoDB schemas for complex data relationships"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Probbity Technologies", 
      period: "2022 - Present",
      location: "Nigeria",
      achievements: [
        "Built end-to-end web applications using React, Node.js, and cloud technologies",
        "Deployed applications on AWS with auto-scaling and load balancing",
        "Collaborated with cross-functional teams to deliver customer-focused solutions"
      ]
    },
    {
      title: "Full Stack Developer / Project Coordinator",
      company: "Aspilos Foundation",
      period: "2021 - 2024", 
      location: "Nigeria",
      achievements: [
        "Coordinated multiple development projects and managed technical roadmaps",
        "Implemented comprehensive testing strategies reducing bugs by 60%",
        "Mentored junior developers and established coding best practices"
      ]
    },
    {
      title: "Junior Backend Developer",
      company: "Paritie",
      period: "2020 - 2021",
      location: "Nigeria", 
      achievements: [
        "Developed core backend features for e-commerce platform using Laravel",
        "Integrated third-party payment gateways and shipping APIs",
        "Optimized application performance through caching and database indexing"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digi-Realm",
      period: "2018 - 2020",
      location: "Nigeria",
      achievements: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Implemented database designs and data migration strategies", 
        "Developed automated testing suites for quality assurance"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            5+ years of building scalable solutions across various industries and technologies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lemon/30 hidden lg:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${exp.period}`}
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="p-6 bg-card border-card-border card-shadow hover:border-lemon/50 transition-all duration-300 lg:ml-20 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[4.5rem] top-8 w-4 h-4 bg-lemon rounded-full border-4 border-background hidden lg:block" />
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-lemon mb-2">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col lg:text-right text-muted-foreground">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-lemon rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;