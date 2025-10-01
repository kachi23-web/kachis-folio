import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: "mailto:nwakobi.onyeka@email.com",
      label: "Email"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/onyeka-nwakobi-3297297b/",
      label: "LinkedIn"
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/kachi23-web", 
      label: "GitHub"
    }
  ];

  return (
    <footer className="py-12 bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-lemon mb-2">Nwakobi Onyeka</h3>
            <p className="text-muted-foreground"> Stack Software Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 bg-accent rounded-full text-muted-foreground hover:text-lemon hover:bg-lemon/10 transition-all duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-card-border">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Nwakobi Onyeka. Made with 
              <Heart size={16} className="text-lemon" fill="currentColor" />
              and lots of code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;