import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-lemon" size={24} />,
      label: "Email",
      value: "onyekanwaks@gmail.com",
      href: "mailto:onyekanwaks@gmail.com"
    },
    {
      icon: <Phone className="text-lemon" size={24} />,
      label: "Phone", 
      value: "+234 815 666 9858",
      href: "tel:+2348156669858"
    },
    {
      icon: <Linkedin className="text-lemon" size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/nwakobi-onyeka",
      href: "https://linkedin.com/in/nwakobi-onyeka"
    },
    {
      icon: <Github className="text-lemon" size={24} />,
      label: "GitHub",
      value: "https://github.com/kachi23-web",
      href: "https://github.com/kachi23-web"
    },
    {
      icon: <MapPin className="text-lemon" size={24} />,
      label: "Location",
      value: "Nigeria",
      href: null
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-lemon mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations. Whether you have a specific project in mind or just want 
              to connect, feel free to reach out.
            </p>

            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-lg hover:border-lemon/50 transition-colors">
                  <div className="p-2 bg-lemon/10 rounded-lg">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="text-foreground hover:text-lemon transition-colors font-medium"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">{contact.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <Card className="p-6 bg-card border-card-border card-shadow">
              <h3 className="text-2xl font-bold text-lemon mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="Your name"
                      className="bg-input border-border focus:border-lemon"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="your.email@example.com"
                      className="bg-input border-border focus:border-lemon"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="Project discussion, job opportunity, etc."
                    className="bg-input border-border focus:border-lemon"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="bg-input border-border focus:border-lemon resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-lemon text-black hover:bg-lemon-dark font-semibold py-3"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;