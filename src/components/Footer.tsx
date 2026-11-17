import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services & Expertise", path: "/about#services" },
    { name: "Contact & Inquiries", path: "/contact" },
  ];

  const services = [
    "Strategic Engineering Consulting",
    "Technical Talent Recruitment",
    "Automation & Robotics Solutions",
    "CQV & Regulatory Compliance",
    "Turnkey Project Management",
  ];

  const industries = [
    "Biotechnology & Life Sciences",
    "Pharmaceutical Manufacturing",
    "Industrial Automation & Robotics",
    "Clean Energy & Decarbonization",
    "Medical Devices & Digital Health",
  ];

  return (
    <footer className="border-t border-slate-200/80 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Novyra Life Sciences logo" className="h-10 w-10 object-contain brightness-0 invert" />
              <div>
                <span className="text-xl font-bold tracking-tight text-white">Novyra</span>
                <span className="ml-1 text-xs uppercase tracking-wider text-emerald-400 font-semibold">Life Sciences</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premier engineering advisory and specialized technical talent recruitment supporting life sciences, automation, and advanced manufacturing leaders nationwide.
            </p>
            <div className="pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Disciplines */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Specialized Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              {industries.map((ind) => (
                <li key={ind} className="text-slate-400">
                  {ind}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+18587443393" className="hover:text-white transition-colors">
                  +1 (858) 744-3393
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:hr@novyralifesciences.com" className="hover:text-white transition-colors">
                  hr@novyralifesciences.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>307 S Kendall Ave, Kalamazoo, MI 49006</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Novyra Life Sciences LLC. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/about" className="hover:text-slate-400 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">
              Contact & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
