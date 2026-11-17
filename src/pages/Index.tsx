import {
  Cog,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Zap,
  Factory,
  Leaf,
  ShieldCheck,
  TrendingUp,
  Clock,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";

// Unique authentic assets
import biotechImage from "@/assets/bio-tech.jpeg";
import pharmaImage from "@/assets/pharma.jpg";
import automationImage from "@/assets/manufacturing-automation.jpg";
import renewableImage from "@/assets/renewable-energy.jpg";
import foodImage from "@/assets/food.jpg";
import softwareImage from "@/assets/software.jpeg";
import diversityImage from "@/assets/diversity.jpg";
import technicalImage from "@/assets/technical.jpeg";

const Index = () => {
  const services = [
    {
      title: "Strategic Engineering Advisory",
      description:
        "Comprehensive technical advisory and project leadership for complex engineering initiatives spanning cleanrooms, automated bioprocessing, and scalable manufacturing systems.",
      icon: Cog,
      image: pharmaImage,
      tags: ["Bioprocess Scale-up", "Facility Automation", "Process Validation", "cGMP Compliance"],
    },
    {
      title: "Specialized Technical Recruitment",
      description:
        "Precision talent acquisition connecting life sciences enterprises with high-caliber engineers, automation specialists, quality assurance directors, and project leaders.",
      icon: Users,
      image: diversityImage,
      tags: ["Direct Hire & Executive Search", "Project Team Augmentation", "Embedded Engineers", "Vetted Subject Matter Experts"],
    },
  ];

  const industries = [
    {
      title: "Life Sciences & Biotechnology",
      description:
        "Specialized engineering support for biopharmaceutical manufacturing, gene therapy labs, and precision biotechnology facilities.",
      image: biotechImage,
      badge: "Core Sector",
    },
    {
      title: "Industrial Automation & Robotics",
      description:
        "Intelligent automation architectures, SCADA, PLC programming, and robotics engineered to maximize throughput and compliance.",
      image: automationImage,
      badge: "High Demand",
    },
    {
      title: "Pharmaceutical Systems & Cleanrooms",
      description:
        "Commissioning, qualification, and validation (CQV) for FDA-regulated facilities, aseptic packaging, and sterile filling lines.",
      image: technicalImage,
      badge: "cGMP Standard",
    },
    {
      title: "Sustainable Infrastructure & Clean Energy",
      description:
        "Decarbonization, microgrid systems, and advanced power distribution infrastructure engineered for zero-emission operations.",
      image: renewableImage,
      badge: "Emerging",
    },
    {
      title: "Food & Beverage Process Engineering",
      description:
        "Sanitary design, automated mixing, and continuous processing solutions adhering to strict global food safety requirements.",
      image: foodImage,
      badge: "Specialized",
    },
    {
      title: "Software & Digital Healthcare Systems",
      description:
        "Enterprise digital infrastructure, cloud validation, laboratory information management systems (LIMS), and secure medical software.",
      image: softwareImage,
      badge: "Digital Health",
    },
  ];

  const valueProps = [
    {
      title: "Rigorous Technical Vetting",
      description: "Every candidate and consultant undergoes comprehensive peer-level screening by seasoned technical specialists.",
    },
    {
      title: "Rapid Deployment Velocity",
      description: "Accelerate your critical project timelines with our agile talent pipeline and guaranteed initial shortlist within 48 hours.",
    },
    {
      title: "Full Regulatory Compliance",
      description: "Deep familiarity with FDA 21 CFR Part 11, cGMP, ISO 13485, and global pharmaceutical quality standards.",
    },
    {
      title: "Flexible Engagement Models",
      description: "From single specialized contract consultants to turn-key managed engineering pods and permanent executive placement.",
    },
  ];

  return (
    <div className="bg-[#fcfaf7] text-slate-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <section className="px-3 py-6 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-slate-200/80 bg-white px-6 py-20 shadow-sm sm:px-10 md:py-24 lg:px-14">
          <div className="mb-16 max-w-3xl">
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              Our Core Disciplines
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Integrated engineering consulting & specialized recruitment.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We eliminate technical talent bottlenecks and deliver executive-grade project advisory for modern manufacturing and life sciences pioneers.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-slate-200/90 bg-[#faf8f5] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5"
              >
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md">
                      <service.icon className="h-6 w-6 text-emerald-700" />
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-semibold text-emerald-700 group-hover:text-emerald-800 transition-colors"
                  >
                    Learn more & inquire
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="px-3 py-6 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-slate-200/80 bg-white px-6 py-20 shadow-sm sm:px-10 md:py-24 lg:px-14">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800 border border-emerald-200/80">
              <Factory className="h-3.5 w-3.5 text-emerald-600" />
              Sectors We Serve
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Domain expertise engineered for mission-critical industries.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Our specialists understand the exact technical demands, safety protocols, and regulatory hurdles specific to each vertical.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-slate-200/80 bg-[#faf8f5] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-white/90 backdrop-blur-md px-2.5 py-0.5 text-xs font-semibold text-slate-800 shadow-sm">
                      {industry.badge}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition & KPI Section */}
      <section className="px-3 py-6 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-slate-200/80 bg-white px-6 py-20 shadow-sm sm:px-10 md:py-24 lg:px-14">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            {/* Left Value Props */}
            <div className="lg:col-span-7">
              <div className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                The Novyra Advantage
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-tight">
                Transforming how technical teams scale and execute.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed mb-10">
                Engineering excellence isn't just about placing resumes—it requires true technical fluency, verified industry experience, and rapid execution.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {valueProps.map((prop) => (
                  <div key={prop.title} className="rounded-2xl border border-slate-200/70 bg-[#faf8f5] p-5">
                    <div className="flex items-center gap-2.5 mb-2 font-bold text-slate-900 text-base">
                      <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      <h4>{prop.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right KPI & Testimonial Card */}
            <div className="lg:col-span-5">
              <div className="rounded-[24px] border border-slate-200 bg-gradient-to-b from-[#faf8f5] to-white p-7 sm:p-9 shadow-md">
                <div className="mb-6 flex items-center justify-between pb-6 border-b border-slate-200">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Proven Performance</h3>
                    <p className="text-xs text-slate-500">Measurable impact across client deployments</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                    <Award className="h-5 w-5" />
                  </div>
                </div>

                {/* KPI Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="rounded-xl bg-white p-4 border border-slate-200/70 shadow-xs">
                    <div className="text-3xl font-black text-slate-900 tracking-tight">99%</div>
                    <div className="text-xs font-medium text-slate-500 mt-1">Client Retention Rate</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 border border-slate-200/70 shadow-xs">
                    <div className="text-3xl font-black text-emerald-700 tracking-tight">&lt; 3 hrs</div>
                    <div className="text-xs font-medium text-slate-500 mt-1">Average Response Time</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 border border-slate-200/70 shadow-xs">
                    <div className="text-3xl font-black text-slate-900 tracking-tight">500+</div>
                    <div className="text-xs font-medium text-slate-500 mt-1">Technical Engagements</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 border border-slate-200/70 shadow-xs">
                    <div className="text-3xl font-black text-emerald-700 tracking-tight">100%</div>
                    <div className="text-xs font-medium text-slate-500 mt-1">cGMP & Vetted Credentials</div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="rounded-xl bg-white border border-slate-200/80 p-5 shadow-xs">
                  <div className="flex items-center gap-1 text-emerald-600 mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-3">
                    "Novyra delivered specialized automation and validation engineers who accelerated our biotechnology scale-up by several months. Their technical depth was outstanding."
                  </p>
                  <div className="text-xs font-semibold text-slate-900">
                    Director of Process Engineering, Global Biopharmaceutical Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 pb-8 pt-4 sm:px-6 md:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-6 py-20 text-center shadow-xl sm:px-12 md:py-24">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <Zap className="h-3.5 w-3.5" />
              Ready to Accelerate Your Projects?
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Partner with Novyra. <br />
              <span className="text-emerald-400">Experience True Technical Excellence.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Connect with our specialized team to explore how we can solve your immediate engineering challenges and scale your technical workforce.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="h-13 rounded-full bg-emerald-500 px-8 text-sm font-semibold text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 sm:h-14 sm:text-base transition-all"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-13 rounded-full border-slate-700 bg-slate-900/60 text-white hover:bg-slate-800 px-8 text-sm font-semibold sm:h-14 sm:text-base transition-all"
                >
                  Learn About Our Team
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
