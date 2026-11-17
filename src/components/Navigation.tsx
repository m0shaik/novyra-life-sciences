import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed left-3 right-3 top-3 z-50 transition-all duration-300 sm:left-6 sm:right-6 sm:top-4 md:left-8 md:right-8 ${
        isScrolled
          ? "rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl"
          : "rounded-2xl border border-slate-200/60 bg-white/85 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3 transition-opacity duration-200 hover:opacity-90">
            <img src={logo} alt="Novyra Life Sciences logo" className="h-10 w-10 object-contain md:h-11 md:w-11" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  Novyra
                </span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
              </div>
              <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">Life Sciences</p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden items-center space-x-2 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="ml-3 pl-3 border-l border-slate-200">
              <Link to="/contact">
                <Button
                  size="sm"
                  className="rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-all"
                >
                  Book a Consultation
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            className="rounded-full p-2 text-slate-700 transition-all duration-200 hover:bg-slate-100 md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="border-t border-slate-100 rounded-b-2xl bg-white px-4 py-4 shadow-lg md:hidden animate-fade-in">
          <div className="space-y-1.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
                  Book a Consultation
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
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
