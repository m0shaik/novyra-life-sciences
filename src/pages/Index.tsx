import { Cog, Users, Award, ArrowRight, CheckCircle, Zap, Factory, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import renewableImage from "@/assets/diversity.jpg";
import manufacturingImage from "@/assets/pharma.jpg";
import foodProcessingImage from "@/assets/bio-tech.jpeg";
import sustainableImage from "@/assets/renewable-energy.jpg";
import foodImage from "@/assets/food.jpg";
import softwareImage from "@/assets/software.jpeg";




const Index = () => {
  const services = [
    {
      title: "Strategic Engineering Consulting",
      description: "Comprehensive technical advisory services and project leadership for sophisticated engineering challenges spanning industrial automation, sustainable manufacturing, and next-generation energy systems.",
      icon: Cog,
      image: manufacturingImage,
    },
    {
      title: "Specialized Technical Recruitment",
      description: "Elite talent acquisition solutions connecting innovative organizations with exceptional engineering professionals who possess deep domain expertise and proven track records in technical excellence.",
      icon: Users,
      image: renewableImage,
    },
  ];

  const industries = [
    {
      title: "Industrial Automation & Robotics",
      description: "Cutting-edge automation technologies and intelligent robotic systems designed to optimize manufacturing workflows and operational efficiency.",
      image: manufacturingImage,
    },
    {
      title: "Life Sciences & Biotechnology",
      description: "Specialized engineering support for pharmaceutical innovation, biotechnology research, and precision medical device development initiatives.",
      image: foodProcessingImage,
    },
    {
      title: "Sustainable Energy & Infrastructure",
      description: "Renewable energy system design and utility infrastructure modernization focused on environmental sustainability and grid optimization.",
      image: sustainableImage,
    },
    {
      title: "Food & Beverage Technology",
      description: "Advanced process engineering and automation solutions ensuring food safety standards while maximizing production efficiency and quality control.",
      image: foodImage,
    },
    {
      title: "Advanced Manufacturing Systems",
      description: "Industry 4.0 implementation strategies and intelligent manufacturing solutions that transform traditional production environments into smart factories.",
      image: manufacturingImage,
    },
    {
      title: "Software & Technology Innovation",
      description: "Enterprise software engineering and advanced system architecture for transformative technology solutions and digital infrastructure development.",
      image: softwareImage,
    },
  ];

  const benefits = [
    "Enhanced project delivery velocity and precision",
    "Access to world-class engineering talent and expertise",
    "Revolutionary technical methodologies and best practices",
    "Comprehensive talent pipeline development strategies",
    "Implementation of cutting-edge industry standards",
    "Flexible engineering team scaling and augmentation",
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <section className="bg-[#ded7bd] px-3 py-4 md:px-6 md:py-6">
        <div className="rounded-[28px] bg-[#fbf7ea] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] animate-fade-up">Integrated Engineering Excellence Under One Roof</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up">
              Strategic Engineering Advisory, Advanced Project Leadership, and Elite Technical Talent Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div key={service.title} className={`card-professional overflow-hidden hover-lift ${index === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Professional engineering solutions`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-8 md:p-12">
                  <div className="w-14 h-14 bg-[#CAE7D3] rounded-2xl flex items-center justify-center mb-6 animate-bounce-in animate-stagger-3">
                    <service.icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="mb-4 animate-fade-up animate-stagger-4">{service.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-up animate-stagger-5">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="bg-[#ded7bd] px-3 py-4 md:px-6 md:py-6">
        <div className="rounded-[28px] bg-[#CAE7D3] py-20 md:py-28 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-black text-5xl tracking-[-0.04em]">Domain-Specific Technical Mastery</h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              Profound technical understanding across mission-critical engineering sectors and emerging technology landscapes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={industry.title} className={`bg-[#fbf7ea] rounded-[24px] shadow-soft border border-black/10 hover-glow transition-smooth overflow-hidden group animate-fade-up animate-stagger-${(index % 6) + 1}`}>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={`${industry.title} - Engineering expertise`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/35 transition-opacity duration-300 group-hover:opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-lg text-black transition-colors duration-300">{industry.title}</h3>
                  <p className="text-black/70 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-[#ded7bd] px-3 py-4 md:px-6 md:py-6">
        <div className="rounded-[28px] bg-[#fbf7ea] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="mb-6 text-5xl tracking-[-0.04em]">Transform. Optimize. Excel.</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up animate-stagger-2">
                Our distinguished engineering teams leverage advanced technical knowledge alongside proven implementation frameworks to achieve outstanding outcomes. From strategic planning through final deployment, we champion innovation and drive operational transformation.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className={`flex items-center space-x-3 animate-fade-up animate-stagger-${index + 3}`}>
                    <CheckCircle className="w-5 h-5 text-black flex-shrink-0 animate-bounce-in animate-stagger-3" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-professional p-8 text-center animate-slide-in-right hover-glow">
              <Award className="w-16 h-16 text-black mx-auto mb-6 animate-float" />
              <h3 className="mb-4 animate-fade-up animate-stagger-2">Technical Consultancy recognition from clients. </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed animate-fade-up animate-stagger-3">
                Honored for exceptional engineering innovation and superior project execution across diverse technical specializations and industry verticals.
              </p>

              {/* Client Testimonials */}
              <div className="space-y-6 mb-8">
                <div className="bg-[#CAE7D3] rounded-2xl p-4 animate-fade-up animate-stagger-4">
                  <div className="flex items-center justify-center mb-2">
                    <span className="font-semibold text-black">Pfizer</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Novyra Life Sciences helped us find exceptionally talented engineers who seamlessly integrated into our biotechnology projects. Their technical expertise and professionalism exceeded our expectations."
                  </p>
                </div>

                <div className="bg-[#CBD6E2] rounded-2xl p-4 animate-fade-up animate-stagger-5">
                  <div className="flex items-center justify-center mb-2">
                    <span className="font-semibold text-black">Novartis</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Working with Novyra Life Sciences transformed our approach to technical recruitment. They consistently deliver world-class engineering talent that drives innovation in our pharmaceutical operations."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="animate-scale-in animate-stagger-4">
                  <div className="text-2xl font-bold text-black mb-1">99%</div>
                  <div className="text-muted-foreground">Client Success Rate</div>
                </div>
                <div className="animate-scale-in animate-stagger-5">
                  <div className="text-2xl font-bold text-black mb-1">24/7</div>
                  <div className="text-muted-foreground">Technical Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ded7bd] px-3 pb-4 pt-4 md:px-6 md:pb-6 md:pt-6">
        <div className="rounded-[28px] bg-[#CBD6E2] py-20 md:py-28 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-black text-5xl tracking-[-0.04em] animate-fade-up">Join Forces with Novyra. Witness True Excellence.</h2>
          <p className="text-xl text-black/75 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-up animate-stagger-2">
            Our distinguished engineering professionals possess the technical mastery and proven experience to propel your organization forward. Connect with us to explore how we can transform your engineering objectives into remarkable achievements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in animate-stagger-3">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-full bg-black text-white hover:bg-black/80 border-black px-8 py-4 text-lg hover-glow transition-all duration-300">
                Connect with Our Team
              </Button>
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
