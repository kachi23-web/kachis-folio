import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Code2, Server, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Professional info */}
          <div className="fade-in">
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-lemon font-semibold">Software engineer</span> with over 
                5 years of professional experience in designing and building scalable digital solutions.
              </p>
              <p>
                My expertise lies in <span className="text-lemon">object-oriented programming (OOP/OOD)</span>, 
                microservices architecture, RESTful APIs, and creating robust backend systems that power 
                modern web applications.
              </p>
              <p>
                I specialize in <span className="text-lemon">Node.js, NestJS, Laravel</span>, and have extensive 
                experience with cloud technologies including <span className="text-lemon">AWS</span>, message 
                queuing systems like <span className="text-lemon">Apache Kafka</span>, and database technologies 
                including <span className="text-lemon">MongoDB and MySQL</span>.
              </p>
            </div>

            <div className="mt-8">
              <Button className="bg-lemon text-black hover:bg-lemon-dark font-semibold px-6 py-3">
              <a href="/Nwakobi-Onyeka-Software-Engineer-Resume-full.pdf" download="/Nwakobi-Onyeka-Software-Engineer-Resume-full.pdf">

                <Download className="mr-2" size={18} />
                Download Resume </a>
              </Button>
            </div>
          </div>

          {/* Right side - Quick stats/highlights */}
          <div className="slide-in-right">
            <div className="grid gap-6">
              <Card className="p-6 bg-card border-card-border card-shadow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-lemon/10 rounded-lg">
                    <Server className="text-lemon" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-lemon">Backend Architecture</h3>
                    <p className="text-muted-foreground">Microservices, APIs, Cloud Infrastructure</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-card-border card-shadow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-lemon/10 rounded-lg">
                    <Code2 className="text-lemon" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-lemon">Full Stack Development</h3>
                    <p className="text-muted-foreground">Modern web technologies, responsive design</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-card-border card-shadow">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-lemon/10 rounded-lg">
                    <Database className="text-lemon" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-lemon">Data Management</h3>
                    <p className="text-muted-foreground">Database design, optimization, analytics</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;