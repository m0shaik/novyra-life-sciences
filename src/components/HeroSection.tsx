import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-engineering.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-gradient-to-br from-[#CAE7D3] to-[#CBD6E2]">
      <div className="absolute inset-x-0 top-20 h-2 bg-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div>
          <div className="mb-5 inline-flex rounded-none bg-white px-4 py-2 text-sm font-medium text-black border-2 border-black shadow-soft">
            Engineering talent, delivered with clarity
          </div>
          <h1 className="hero-text mb-6 animate-fade-up">
            Professional Engineering Solutions & Strategic Talent Acquisition
          </h1>

          <p className="hero-subtitle mb-8 max-w-3xl animate-fade-up animate-stagger-2">
            Leading provider of specialized engineering expertise across automation systems, life sciences innovation,
            sustainable energy infrastructure, advanced manufacturing, food processing technology, and cutting-edge software solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start animate-scale-in animate-stagger-3">
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-black/80 text-white rounded-none px-8 py-4 text-lg shadow-golden hover:scale-105 transition-all duration-300 group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
            <div className="bg-white text-left animate-scale-in animate-stagger-4 hover-glow p-5 rounded-none border-2 border-black transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2 animate-bounce-in animate-stagger-5">35+</div>
              <div className="text-black/70 text-sm md:text-base">Successful Deliveries</div>
            </div>
            <div className="bg-[#CBD6E2] text-left animate-scale-in animate-stagger-5 hover-glow p-5 rounded-none border-2 border-black transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2 animate-bounce-in animate-stagger-6">2+</div>
              <div className="text-black/70 text-sm md:text-base">Years of Innovation</div>
            </div>
            <div className="bg-white text-left animate-scale-in animate-stagger-6 hover-glow p-5 rounded-none border-2 border-black transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2 animate-bounce-in animate-stagger-6">10+</div>
              <div className="text-black/70 text-sm md:text-base">Technical Specialists</div>
            </div>
          </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute -left-5 -top-5 h-full w-full bg-white border-2 border-black"></div>
            <img
              src={heroImage}
              alt="Engineering team at work"
              className="relative h-[420px] w-full object-cover border-2 border-black shadow-strong"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-6 w-1/2 bg-[#CBD6E2] border-t-2 border-r-2 border-black"></div>
    </section>
  );
};

export default HeroSection;
