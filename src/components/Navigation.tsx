import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-all duration-300 hover:opacity-80 hover:scale-105">
            <img
              src={logo}
              alt="Novyra Life Sciences Logo"
              className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 hover:rotate-12"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-foreground transition-colors duration-300 hover:text-primary">
                Novyra <span className="text-primary">Life Sciences</span>
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground transition-colors duration-300 hover:text-primary/80">Life sciences engineering and technical staffing</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-md relative overflow-hidden group ${isActive(item.path)
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5 hover:scale-105"
                  }`}
              >
                <span className="relative z-10">{item.name}</span>
                {!isActive(item.path) && (
                  <span className="absolute inset-0 bg-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                )}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="default" size="sm" className="ml-4 transition-all duration-300 hover:scale-105 hover:shadow-golden">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-110"
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
        <div className="md:hidden bg-background border-t border-border/50 shadow-medium animate-slide-in-left">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 animate-fade-up animate-stagger-${index + 1} hover:scale-105 ${isActive(item.path)
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 animate-fade-up animate-stagger-4">
              <Link to="/contact">
                <Button variant="default" size="sm" className="w-full transition-all duration-300 hover:scale-105 hover:shadow-golden">
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