import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import placeholderBrand from "@/assets/meta-data-image.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#CAE7D3]/95 backdrop-blur-md border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-3 transition-all duration-300 hover:opacity-90">
            <img
              src={placeholderBrand}
              alt="Temporary Novyra brand placeholder"
              className="w-11 h-11 md:w-12 md:h-12 rounded-none object-cover border-2 border-black"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-black transition-colors duration-300">
                Novyra <span className="text-black">Life Sciences</span>
              </h1>
              <p className="text-xs md:text-sm text-black/70 transition-colors duration-300">Life sciences engineering and technical staffing</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-none relative overflow-hidden group ${isActive(item.path)
                  ? "text-black bg-[#CBD6E2] border border-black"
                  : "text-black hover:text-black hover:bg-white/50 hover:scale-105"
                  }`}
              >
                <span className="relative z-10">{item.name}</span>
                {!isActive(item.path) && (
                  <span className="absolute inset-0 bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                )}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="default" size="sm" className="ml-4 bg-black text-white hover:bg-black/80 rounded-none transition-all duration-300 hover:scale-105">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-none text-black hover:bg-white/50 transition-all duration-300 hover:scale-110"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}
              />
              <X
                size={24}
                className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#CAE7D3] border-t-2 border-black shadow-medium animate-slide-in-left">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-none text-sm font-medium transition-all duration-300 animate-fade-up animate-stagger-${index + 1} hover:scale-105 ${isActive(item.path)
                  ? "text-black bg-[#CBD6E2] border border-black"
                  : "text-black hover:bg-white/50"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 animate-fade-up animate-stagger-4">
              <Link to="/contact">
                <Button variant="default" size="sm" className="w-full bg-black text-white hover:bg-black/80 rounded-none transition-all duration-300 hover:scale-105">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
