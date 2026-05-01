import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-engineering.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Fixed within hero section */}
      <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${heroImage})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="hero-text mb-6 animate-fade-up">
            Professional Engineering Solutions & Strategic Talent Acquisition
          </h1>

          <p className="hero-subtitle mb-8 max-w-3xl mx-auto animate-fade-up animate-stagger-2">
            Leading provider of specialized engineering expertise across automation systems, life sciences innovation,
            sustainable energy infrastructure, advanced manufacturing, food processing technology, and cutting-edge software solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in animate-stagger-3">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg shadow-golden hover:scale-105 transition-all duration-300 group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Key Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-scale-in animate-stagger-4 hover-glow p-4 rounded-lg transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-bounce-in animate-stagger-5">35+</div>
              <div className="text-white/80 text-sm md:text-base">Successful Deliveries</div>
            </div>
            <div className="text-center animate-scale-in animate-stagger-5 hover-glow p-4 rounded-lg transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-bounce-in animate-stagger-6">2+</div>
              <div className="text-white/80 text-sm md:text-base">Years of Innovation</div>
            </div>
            <div className="text-center animate-scale-in animate-stagger-6 hover-glow p-4 rounded-lg transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-bounce-in animate-stagger-6">10+</div>
              <div className="text-white/80 text-sm md:text-base">Technical Specialists</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/80 transition-colors duration-300">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;