import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-lemon/5 via-transparent to-transparent" />
      
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-gradient">Nwakobi Onyeka</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
              Designing and building scalable digital solutions with precision.
              <br />
              <span className="text-lemon">5+ years</span> of crafting robust backend architectures and seamless user experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-lemon text-black hover:bg-lemon-dark font-semibold px-8 py-3 glow-effect"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-lemon text-lemon hover:bg-lemon hover:text-black font-semibold px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="text-lemon hover:text-lemon-muted transition-colors duration-300 animate-bounce"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-10 fade-in">
    
    {/* Profile Picture */}
    <div className="flex-shrink-0">
      <img 
        src="/onyeka-headshot.png" 
        alt="Nwakobi Onyeka" 
        className="w-75 h-75 shadow-lg object-cover"
        // className="w-48 h-48 rounded-full border-4 border-lemon shadow-lg object-cover"
      />
    </div>

    {/* Text Content */}
    <div className="text-center md:text-left flex-1">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        <span className="text-gradient">Nwakobi Onyeka</span>
      </h1>
      <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
        Software Engineer
      </h2>
      <p className="text-lg md:text-xl text-foreground max-w-2xl leading-relaxed">
        Designing and building scalable digital solutions with precision.
        <br />
        <span className="text-lemon">5+ years</span> of crafting robust backend architectures and seamless user experiences.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12 mt-8">
        <Button 
          size="lg" 
          className="bg-lemon text-black hover:bg-lemon-dark font-semibold px-8 py-3 glow-effect"
          onClick={() => scrollToSection('projects')}
        >
          View My Work
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="border-lemon text-lemon hover:bg-lemon hover:text-black font-semibold px-8 py-3"
          onClick={() => scrollToSection('contact')}
        >
          Contact Me
        </Button>
      </div>

      <div className="flex justify-center md:justify-start">
        <button
          onClick={() => scrollToSection('about')}
          className="text-lemon hover:text-lemon-muted transition-colors duration-300 animate-bounce"
        >
          {/* <ArrowDown size={32} /> */}
        </button>
      </div>
    </div>
  </div>
</div>


      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-lemon rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-lemon rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-lemon rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;