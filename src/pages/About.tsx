import { Users, Target, Award, Globe } from "lucide-react";
import teamMeetingImage from "@/assets/team-meeting.jpg";
import engineerFemaleImage from "@/assets/engineer-female.jpg";
import engineerMaleImage from "@/assets/engineer-male.jpg";
import manufacturingImage from "@/assets/technical.jpeg";

const About = () => {
  const services = [
    {
      title: "Executive Search & Strategic Recruitment",
      description: "Advanced talent acquisition for senior engineering leadership positions across automation systems, life sciences innovation, and sustainable energy infrastructure sectors.",
      icon: Users,
    },
    {
      title: "Human Capital Development & Training",
      description: "Comprehensive human resources optimization and professional advancement programs specifically designed for high-performance technical teams and engineering organizations.",
      icon: Target,
    },
    {
      title: "Engineering Consultancy & Project Delivery",
      description: "Elite engineering consultants and specialized project-based staffing for sophisticated technical initiatives and complex system implementations across multiple disciplines.",
      icon: Award,
    },
  ];

  const expertise = [
    "Industrial Automation & Robotics",
    "Life Sciences & Biotechnology Innovation",
    "Sustainable Energy & Smart Infrastructure",
    "Food & Beverage Technology Systems",
    "Next-Generation Manufacturing Solutions",
    "Software Engineering & Digital Transformation",
  ];

  return (
    <div>{/* SEO tags */}
      <title>About Novyra Life Sciences - Engineering Consulting Excellence</title>
      {/* Hero Section */}
      <section className="py-24 md:py-36 bg-gradient-to-br from-[#CAE7D3] to-[#CBD6E2] text-black border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 animate-fade-up text-black">Discover Novyra <span className="text-black">Life Sciences</span></h1>
            <p className="text-xl md:text-2xl text-black/75 leading-relaxed animate-fade-up">
              Pioneering the future through advanced engineering consultancy, strategic talent acquisition, and transformative technical solutions across dynamic industry landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slide-in-left">
              <div className="aspect-w-4 aspect-h-3 rounded-none overflow-hidden shadow-medium hover-lift border-2 border-black">
                <img
                  src={teamMeetingImage}
                  alt="Professional engineering team meeting discussing technical projects"
                className="w-full h-96 object-cover rounded-none transition-transform duration-700 hover:scale-105"
              />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#CBD6E2] p-6 rounded-none text-black border-2 border-black shadow-golden animate-bounce-in animate-stagger-3 hover-pulse">
                <div className="text-2xl font-bold">2+</div>
                <div className="text-sm">Years of Innovation</div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="mb-6 animate-fade-up">Our Technical Leadership Legacy</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed animate-fade-up animate-stagger-2">
                Established upon the foundational belief that extraordinary engineering talent catalyzes innovation, Novyra Life Sciences has evolved into the distinguished partner of choice for organizations committed to advancing their technical capabilities and achieving operational transformation.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up animate-stagger-3">
                Our holistic methodology integrates profound industry insight with innovative recruitment strategies, guaranteeing our clients access to elite engineering talent while providing professionals with transformative career opportunities that define industry leadership.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center animate-scale-in animate-stagger-4 hover-glow p-4 rounded-none border-2 border-black bg-[#CAE7D3] transition-all duration-300">
                  <div className="text-3xl font-bold text-black mb-2">35+</div>
                  <div className="text-sm text-muted-foreground">Successful Implementations</div>
                </div>
                <div className="text-center animate-scale-in animate-stagger-5 hover-glow p-4 rounded-none border-2 border-black bg-[#CBD6E2] transition-all duration-300">
                  <div className="text-3xl font-bold text-black mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Technical Specialists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-[#CBD6E2] border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Integrated Engineering Solutions Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From strategic recruitment to specialized consulting expertise, we provide comprehensive solutions that address every dimension of your engineering and technical talent requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className={`card-professional p-8 text-center hover-lift animate-fade-up animate-stagger-${index + 1}`}>
                <div className="w-16 h-16 bg-[#CAE7D3] rounded-none border-2 border-black flex items-center justify-center mx-auto mb-6 animate-bounce-in animate-stagger-3 hover-pulse">
                  <service.icon className="w-8 h-8 text-secondary transition-transform duration-300 hover:scale-110" />
                </div>
                <h3 className="mb-4 text-xl animate-fade-up animate-stagger-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed animate-fade-up animate-stagger-5">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Leadership Section */}


      {/* Mission & Values Section */}
      <section className="py-20 bg-[#CAE7D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white p-8 rounded-none shadow-medium animate-slide-in-left hover-lift border-2 border-black">
              <h3 className="mb-4 animate-fade-up">Our Strategic Vision</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed animate-fade-up animate-stagger-2">
                To catalyze innovation and operational transformation by connecting exceptional engineering talent with visionary organizations, fostering enduring partnerships that advance technological progress and sustainable development across industries.
              </p>
              <h4 className="mb-3 text-lg font-semibold animate-fade-up animate-stagger-3">Foundational Principles</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="animate-fade-up animate-stagger-4 transition-colors duration-300 hover:text-black">• Uncompromising technical excellence and precision</li>
                <li className="animate-fade-up animate-stagger-5 transition-colors duration-300 hover:text-black">• Ethical leadership in all professional engagements</li>
                <li className="animate-fade-up animate-stagger-6 transition-colors duration-300 hover:text-black">• Innovation through strategic collaborative partnerships</li>
                <li className="animate-fade-up animate-stagger-6 transition-colors duration-300 hover:text-black">• Dedication to environmental sustainability and responsibility</li>
              </ul>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src={manufacturingImage}
                alt="Advanced manufacturing facility showcasing engineering excellence"
                className="w-full h-96 object-cover rounded-none border-2 border-black shadow-medium transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-none transition-opacity duration-300 hover:opacity-50"></div>
              <div className="absolute bottom-6 left-6 text-white animate-fade-up animate-stagger-2 bg-black/70 p-4">
                <h4 className="text-xl font-semibold mb-2">Technical Innovation Excellence</h4>
                <p className="text-white/90">Delivering transformative solutions across all industries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-white border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Specialized Technical Competencies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive domain expertise across mission-critical engineering sectors, empowering us to understand distinctive challenges and deliver specialized solutions with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((area, index) => (
              <div key={area} className={`bg-[#CBD6E2] p-6 rounded-none border-2 border-black hover-glow transition-all duration-300 animate-fade-up animate-stagger-${(index % 6) + 1}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-black rounded-full animate-pulse-slow"></div>
                  <h4 className="font-semibold transition-colors duration-300 hover:text-black">{area}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#CAE7D3] text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-black">Frequently Asked Questions</h2>
            <p className="text-xl text-black/75 leading-relaxed">
              Common questions about our engineering consulting and staffing services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-none shadow-soft border-2 border-black hover-lift animate-fade-up animate-stagger-1">
              <h3 className="mb-3 text-lg font-semibold transition-colors duration-300 hover:text-black">What types of engineering roles do you specialize in?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in automation & robotics, life sciences, utilities & renewable energy, food & beverage, manufacturing, and technology engineering roles. From entry-level positions to executive leadership, we cover the full spectrum of technical talent across these industries.
              </p>
            </div>

            <div className="bg-[#CBD6E2] p-6 rounded-none shadow-soft border-2 border-black hover-lift animate-fade-up animate-stagger-2">
              <h3 className="mb-3 text-lg font-semibold transition-colors duration-300 hover:text-black">How long does the typical recruitment process take?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our recruitment timeline varies based on role complexity and requirements. For standard engineering positions, we typically deliver qualified candidates within 2-3 weeks. Executive search and highly specialized roles may take 4-6 weeks to ensure we find the perfect match for your organization's needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-none shadow-soft border-2 border-black hover-lift animate-fade-up animate-stagger-3">
              <h3 className="mb-3 text-lg font-semibold transition-colors duration-300 hover:text-black">Do you offer temporary or contract staffing solutions?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes, we provide flexible staffing solutions including temporary, contract-to-hire, and permanent placements. Our contract staffing is ideal for project-based work, seasonal demands, or when you need specialized expertise for a defined period.
              </p>
            </div>

            <div className="bg-[#CBD6E2] p-6 rounded-none shadow-soft border-2 border-black hover-lift animate-fade-up animate-stagger-4">
              <h3 className="mb-3 text-lg font-semibold transition-colors duration-300 hover:text-black">What sets Novyra <span className="text-black">Life Sciences</span> apart from other staffing agencies?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our deep industry expertise and engineering background allow us to truly understand technical requirements and cultural fit. We maintain long-term relationships with both clients and candidates, ensuring quality matches that drive mutual success. Our 98% client satisfaction rate reflects our commitment to excellence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-none shadow-soft border-2 border-black hover-lift animate-fade-up animate-stagger-5">
              <h3 className="mb-3 text-lg font-semibold transition-colors duration-300 hover:text-black">Do you provide consulting services beyond staffing?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Absolutely. We offer comprehensive engineering consulting including project management, process optimization, technical assessments, and strategic planning. Our consultants bring hands-on experience from leading engineering projects across diverse industries.
              </p>
            </div>

            <div className="bg-[#CBD6E2] p-6 rounded-none shadow-soft border-2 border-black hover-lift animate-fade-up animate-stagger-6">
              <h3 className="mb-3 text-lg font-semibold transition-colors duration-300 hover:text-black">What geographic regions do you serve?</h3>
              <p className="text-muted-foreground leading-relaxed">
                While our headquarters serves the local market, we have a national network of engineering professionals and can support client needs across the United States. We also assist with remote and hybrid positions that allow for flexible geographic arrangements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-none shadow-soft border-2 border-black hover-lift animate-fade-up animate-stagger-6">
              <h3 className="mb-3 text-lg font-semibold transition-colors duration-300 hover:text-black">How do you ensure candidate quality and technical competency?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our rigorous vetting process includes technical assessments, comprehensive background checks, and in-depth interviews conducted by our engineering professionals. We verify certifications, evaluate project portfolios, and assess both technical skills and cultural alignment with your organization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
