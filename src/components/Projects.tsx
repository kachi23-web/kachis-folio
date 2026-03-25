import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from 'lucide-react';
import adrxp from "@/assets/adrxp.png";
import oncrowdr from "@/assets/oncrowdr.png";
import funcity from "@/assets/funcity.png";
import quikchow from "@/assets/quikchow.png";
import modeluniverse from "@/assets/modeluniverse.png";
import dreamsport from "@/assets/dreamsport.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce application with payment processing, inventory management, and real-time analytics. Built with microservices architecture for scalability.",
      techStack: ["PHP", "Laravel", "MySQL", "React", "Stripe API"],
      features: ["Payment Gateway Integration", "Real-time Inventory", "Analytics Dashboard", "Admin Panel"],
      type: "Full Stack Application",
      liveUrl: "https://adrxp.com",
      // githubUrl: "https://adrxp.com",
      image: adrxp,
    },
    {
      title: "Fundraising Application",
      description: "Modern fundraising platform enabling secure donations, campaign management, and social sharing. Implemented robust backend with comprehensive reporting.",
      techStack: ["NestJS", "Next.js", "Mongodb", "Payment APIs"],
      features: ["Campaign Management", "Secure Payments", "Social Integration", "Reporting Dashboard"],
      type: "Web Application",
      liveUrl: "https://www.oncrowdr.com",
      image: oncrowdr,
    },
    {
      title: "Solution Funcity",
      description: "Ticketing and booking platform for an amusement park covering rides, games, and events. Built with ReactJS and NestJS with integrated payment processing.",
      techStack: ["ReactJS", "NestJS", "Payment APIs"],
      features: ["Ticketing System", "Ride & Event Booking", "Real-time Validation", "Secure Payments"],
      type: "Full Stack Application",
      liveUrl: "https://solutionfuncity.com",
      githubUrl: "",
      image: funcity,
    },
    {
      title: "Quikchow",
      description: "Food delivery web app connecting customers with local restaurants. Features real-time order tracking, menu management, and seamless checkout experience.",
      techStack: ["React", "Node.js", "MongoDB", "Payment APIs"],
      features: ["Order Tracking", "Menu Management", "Restaurant Dashboard", "Delivery Scheduling"],
      type: "Web Application",
      liveUrl: "https://quickchow.afristuff.com",
      githubUrl: "",
      image: quikchow,
    },
    {
      title: "Model of the Universe",
      description: "Fashion and modelling competition platform showcasing talent, managing registrations, and hosting competition events with a sleek, modern design.",
      techStack: ["React", "Node.js", "MySQL", "CSS3"],
      features: ["Model Profiles", "Competition Registration", "Event Management", "Gallery Showcase"],
      type: "Fashion & Modelling Platform",
      liveUrl: "https://modeluniverse.org",
      githubUrl: "",
      image: modeluniverse,
    },
    {
      title: "Sporting Business Website",
      description: "Professional website for a badminton and tennis sports business. Features court booking, event listings, membership management, and a modern responsive design.",
      techStack: ["React", "Node.js", "MySQL", "WordPress"],
      features: ["Court Booking", "Event Listings", "Membership Management", "Responsive Design"],
      type: "Business Website",
      liveUrl: "https://dreamsport.vercel.app",
      githubUrl: "",
      image: dreamsport,
    },
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
              className="p-0 bg-card border-card-border card-shadow hover:border-lemon/50 transition-all duration-300 fade-in group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image placeholder */}
              <div className="w-full h-44 bg-accent/30 flex items-center justify-center border-b border-card-border">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <div className="w-12 h-12 rounded-full bg-lemon/10 flex items-center justify-center">
                      <ExternalLink size={20} className="text-lemon/50" />
                    </div>
                    <span className="text-xs">Project Preview</span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div>
                  <Badge variant="outline" className="text-lemon border-lemon/50 mb-3">
                    {project.type}
                  </Badge>
                  <h3 className="text-xl font-bold text-lemon mb-2 group-hover:text-lemon-muted transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs bg-accent/50 text-accent-foreground">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} className="text-xs bg-lemon/10 text-lemon border-lemon/20" variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.liveUrl || "#"}
                    target={project.liveUrl ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex-1"
                    onClick={!project.liveUrl ? (e) => e.preventDefault() : undefined}
                  >
                    <Button
                      size="sm"
                      className="bg-lemon text-black hover:bg-lemon-dark w-full disabled:opacity-50"
                      disabled={!project.liveUrl}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      {project.liveUrl ? "View Project" : "Coming Soon"}
                    </Button>
                  </a>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-lemon/50 text-lemon hover:bg-lemon hover:text-black">
                        <Github size={16} />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;