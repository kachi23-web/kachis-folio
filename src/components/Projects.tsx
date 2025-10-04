import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce application with payment processing, inventory management, and real-time analytics. Built with microservices architecture for scalability.",
      techStack: ["Nest.js", "React", "MongoDB", "AWS", "Stripe API"],
      features: ["Payment Gateway Integration", "Real-time Inventory", "Analytics Dashboard", "Admin Panel"],
      type: "Full Stack Application",
      liveUrl: "https://adrxp.com",
      githubUrl: "https://adrxp.com",
    },
    {
      title: "Fundraising Application",
      description: "Modern fundraising platform enabling secure donations, campaign management, and social sharing. Implemented robust backend with comprehensive reporting.",
      techStack: ["NestJS", "Next.js", "Mongodb", "Payment APIs"],
      features: ["Campaign Management", "Secure Payments", "Social Integration", "Reporting Dashboard"],
      type: "Web Application",
      liveUrl: "https://oncrowdr.com",
      githubUrl: "https://oncrowdr.com",
    },
    {
      title: "Learning Management System",
      description: "Comprehensive LMS with course creation, student progress tracking, and interactive content delivery. Features real-time communication and analytics.",
      techStack: ["Laravel", "React", "MySQL"],
      features: ["Course Creation", "Progress Tracking", "Live Classes", "Content Management"],
      type: "Educational Platform",
      liveUrl: "https://mychatapp.com",
      githubUrl: "https://github.com/myname/chatapp",
    },
    // {
    //   title: "Job Recruitment Platform",
    //   description: "AI-powered recruitment platform matching candidates with opportunities. Includes advanced filtering, automated screening, and interview scheduling.",
    //   techStack: ["Node.js", "TypeScript", "MongoDB", "Kafka", "Machine Learning APIs"],
    //   features: ["AI Matching", "Automated Screening", "Interview Scheduling", "Analytics"],
    //   type: "Enterprise Application"
    // },
    // {
    //   title: "Inventory Management System",
    //   description: "Real-time inventory tracking system with predictive analytics, automated reordering, and comprehensive reporting for supply chain optimization.",
    //   techStack: ["NestJS", "React", "PostgreSQL", "Redis", "Chart.js"],
    //   features: ["Real-time Tracking", "Predictive Analytics", "Automated Alerts", "Supply Chain Optimization"],
    //   type: "Business Application"
    // },
    // {
    //   title: "Community Reporting Tool",
    //   description: "Civic engagement platform for community issue reporting and tracking. Features geolocation, photo uploads, and government integration.",
    //   techStack: ["Node.js", "React Native", "MongoDB", "AWS", "Google Maps API"],
    //   features: ["Geolocation", "Photo Uploads", "Issue Tracking", "Government Integration"],
    //   type: "Mobile Application"
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of applications I've built, demonstrating expertise in full-stack development and system architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-6 bg-card border-card-border card-shadow hover:border-lemon/50 transition-all duration-300 fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="text-lemon border-lemon/50">
                    {project.type}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-lemon mb-3 group-hover:text-lemon-muted transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>



              <div className="mb-4">
  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
  <div className="flex flex-wrap gap-1">
    {project.features.map((feature) => (
      <Badge 
        key={feature}
        variant="secondary"
        className="text-xs bg-accent/50 text-accent-foreground"
      >
        {feature}
      </Badge>
    ))}
  </div>
</div>

<div className="mb-6">
  <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
  <div className="flex flex-wrap gap-1">
    {project.techStack.map((tech) => (
      <Badge 
        key={tech}
        className="text-xs bg-lemon/10 text-lemon border-lemon/20"
        variant="outline"
      >
        {tech}
      </Badge>
    ))}
  </div>
</div>

{/* Action buttons */}
<div className="flex gap-3">
  {project.liveUrl && (
    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
      <Button 
        size="sm" 
        className="bg-lemon text-black hover:bg-lemon-dark w-full"
      >
        <ExternalLink size={16} className="mr-2" />
        View Project
      </Button>
    </a>
  )}
  
  {project.githubUrl && (
    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
      <Button 
        variant="outline" 
        size="sm"
        className="border-lemon/50 text-lemon hover:bg-lemon hover:text-black"
      >
        <Github size={16} />
      </Button>
    </a>
  )}
</div>




              {/* <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.features.map((feature) => (
                    <Badge 
                      key={feature}
                      variant="secondary"
                      className="text-xs bg-accent/50 text-accent-foreground"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <Badge 
                      key={tech}
                      className="text-xs bg-lemon/10 text-lemon border-lemon/20"
                      variant="outline"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div> */}

              {/* <div className="flex gap-3">
                <Button 
                size="sm" 
                className="bg-lemon text-black hover:bg-lemon-dark flex-1"
                >
                <ExternalLink size={16} className="mr-2" />
                  View Project
                </Button>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-lemon/50 text-lemon hover:bg-lemon hover:text-black"
                >
                  <Github size={16} />
                </Button>
              </div> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;