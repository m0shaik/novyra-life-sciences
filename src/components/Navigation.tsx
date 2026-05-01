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
    <nav className="fixed left-4 right-4 top-4 z-50 rounded-[24px] border border-black/10 bg-[#fbf7ea]/88 backdrop-blur-md md:left-8 md:right-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-3 transition-all duration-300 hover:opacity-80">
            <img src={logo} alt="Novyra Life Sciences logo" className="h-11 w-11 object-contain md:h-12 md:w-12" />
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-[#111111] transition-colors duration-300">
                Novyra
              </h1>
              <p className="text-xs md:text-sm text-black/55 transition-colors duration-300">Life Sciences</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive(item.path)
                  ? "bg-black text-white"
                  : "text-black hover:bg-black/5"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="default" size="sm" className="ml-4 rounded-full bg-black px-5 text-white hover:bg-black/80">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full p-2 text-black transition-all duration-300 hover:bg-black/5 md:hidden"
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
        <div className="rounded-b-[24px] border-t border-black/10 bg-[#fbf7ea] md:hidden">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 animate-fade-up animate-stagger-${index + 1} ${isActive(item.path)
                  ? "bg-black text-white"
                  : "text-black hover:bg-black/5"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 animate-fade-up animate-stagger-4">
              <Link to="/contact">
                <Button variant="default" size="sm" className="w-full rounded-full bg-black text-white hover:bg-black/80">
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
