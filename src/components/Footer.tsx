import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const services = [
        "Engineering Consulting",
        "Technical Staffing",
        "Executive Search",
        "Project Management",
        "HR & Training Development",
    ];

    const industries = [
        "Automation & Robotics",
        "Life Sciences",
        "Renewable Energy",
        "Manufacturing",
        "Food & Beverage",
        "Technology",
    ];

    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center space-x-3 mb-6">
                            <img
                                src={logo}
                                alt="Novyra Life Sciences Logo"
                                className="w-10 h-10"
                            />
                            <div>
                                <h3 className="text-lg font-bold text-white">
                                    Novyra <span className="text-primary">Life Sciences</span>
                                </h3>
                                <p className="text-xs text-secondary-foreground/80">Life sciences engineering & consulting</p>
                            </div>
                        </Link>
                        <p className="text-secondary-foreground/80 leading-relaxed mb-6">
                            Premier engineering consulting and technical staffing solutions across automation,
                            life sciences, renewable energy, and advanced manufacturing industries.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-sm">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>517-303-6867</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm">
                                <Mail className="w-4 h-4 text-primary" />
                                <span>info@novyra.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>1735 winding rd
                                    Suite 107
                                    Muskegon, Mi 49444
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-secondary-foreground/80 hover:text-primary transition-smooth text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#"
                                    className="text-secondary-foreground/80 hover:text-primary transition-smooth text-sm"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-secondary-foreground/80 hover:text-primary transition-smooth text-sm"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service} className="text-secondary-foreground/80 text-sm">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Industries</h4>
                        <ul className="space-y-3">
                            {industries.map((industry) => (
                                <li key={industry} className="text-secondary-foreground/80 text-sm">
                                    {industry}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-secondary-foreground/20 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-secondary-foreground/80 text-sm">
                            © {currentYear} Novyra <span className="text-primary">Life Sciences</span>. All rights reserved.
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-8 h-8 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
