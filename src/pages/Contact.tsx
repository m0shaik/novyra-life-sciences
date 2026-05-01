import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import officeBuildingImage from "@/assets/office-building.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration - Replace with your actual values from EmailJS dashboard
      // See EMAILJS_SETUP_GUIDE.md for detailed setup instructions
      const serviceId = 'YOUR_SERVICE_ID';     // Example: 'service_abc123' (from Email Services)
      const templateId = 'YOUR_TEMPLATE_ID';   // Example: 'template_xyz789' (from Email Templates)
      const publicKey = 'vwy_WPepTGVU90ncY';   // Your public key is already set

      // Validate EmailJS configuration
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID') {
        throw new Error('EmailJS not configured. Please check EMAILJS_SETUP_GUIDE.md');
      }

      // Email template parameters - these must match your EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.query,
        to_email: 'abdul@novyralifesciences.com',
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success feedback
      toast.success('Message sent successfully! We\'ll get back to you within 3 hours.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        query: ''
      });

    } catch (error) {
      console.error('Email sending failed:', error);

      // Specific error messages for common issues
      if (error instanceof Error) {
        if (error.message.includes('not configured')) {
          toast.error('Email service not configured. Please contact us directly at abdul@novyralifesciences.com');
        } else if (error.message.includes('not found')) {
          toast.error('Email configuration error. Please contact us directly at abdul@novyralifesciences.com');
        } else {
          toast.error('Failed to send message. Please try again or contact us directly at abdul@novyralifesciences.com');
        }
      } else {
        toast.error('Failed to send message. Please try again or contact us directly at abdul@novyralifesciences.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Corporate Headquarters",
      details: ["307 S Kendall Ave", "Kalamazoo, Michigan 49006"],
    },
    {
      icon: Phone,
      title: "Direct Communication",
      details: ["+1 858-744-3393"],
    },
    {
      icon: Mail,
      title: "Electronic Correspondence",
      details: ["abdul@novyralifesciences.com"],
    },
    {
      icon: Clock,
      title: "Operating Schedule",
      details: ["Monday - Friday: 7:30 AM - 7:00 PM EST"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 md:py-36 bg-gradient-to-br from-[#CBD6E2] to-[#CAE7D3] text-black border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 animate-fade-up text-black">Connect with Our Team</h1>
            <p className="text-xl md:text-2xl text-black/75 leading-relaxed animate-fade-up">
              Ready to transform your engineering capabilities? Let's explore how Novyra Life Sciences can accelerate your technical innovation and organizational success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-[#CAE7D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6">Professional Communication Channels</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Multiple pathways to engage with our engineering specialists. We're positioned to support your technical initiatives and strategic talent requirements.
              </p>

              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={item.title} className={`flex items-start space-x-4 animate-slide-in-left animate-stagger-${index + 1} hover-lift p-4 rounded-none border-2 border-black bg-white transition-all duration-300`}>
                    <div className="w-12 h-12 bg-[#CBD6E2] rounded-none border-2 border-black flex items-center justify-center flex-shrink-0 mt-1 animate-bounce-in animate-stagger-2 hover-pulse">
                      <item.icon className="w-6 h-6 text-secondary transition-transform duration-300 hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 animate-fade-up animate-stagger-3">{item.title}</h3>
                      <div className="space-y-1">
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground animate-fade-up animate-stagger-4 transition-colors duration-300 hover:text-black">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <div className="mt-12 p-6 bg-[#CBD6E2] rounded-none border-2 border-black animate-scale-in animate-stagger-5 hover-glow">
                <h3 className="font-semibold mb-2 text-black animate-fade-up">Rapid Response Commitment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed animate-fade-up animate-stagger-2">
                  We recognize the time-sensitive nature of engineering projects. Our dedicated team provides responses to all inquiries within 3 hours during business operations, with emergency technical support available around the clock.
                </p>
              </div>

              {/* Office Image */}
              <div className="mt-8 animate-fade-up animate-stagger-6">
                <div className="relative rounded-none overflow-hidden shadow-medium hover-lift border-2 border-black">
                  <img
                    src={officeBuildingImage}
                    alt="Novyra Life Sciences office building headquarters"
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 hover:opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white animate-slide-in-left animate-stagger-2 bg-black/70 p-4">
                    <h4 className="font-semibold mb-1">Corporate Headquarters</h4>
                    <p className="text-white/90 text-sm">Kalamazoo, Michigan 49006</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 animate-fade-up">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up animate-stagger-2">
                Ready to discuss your engineering needs? Fill out the form below and our team will get back to you within 3 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up animate-stagger-3">
              <div className="card-professional p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-muted-foreground/20 hover:border-primary/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-muted-foreground/20 hover:border-primary/40"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-muted-foreground/20 hover:border-primary/40"
                  />
                </div>

                <div className="space-y-2 mb-8">
                  <label htmlFor="query" className="text-sm font-medium text-muted-foreground">
                    Your Message *
                  </label>
                  <Textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleInputChange}
                    placeholder="Tell us about your engineering needs, project requirements, or how we can help your organization..."
                    required
                    rows={6}
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 border-muted-foreground/20 hover:border-primary/40 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-black hover:bg-black/80 text-white rounded-none shadow-golden hover:shadow-lg transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#CBD6E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Explore Our Facilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategically positioned in the vibrant Technology District, our headquarters provides an accessible environment optimized for collaborative engineering discussions and strategic planning sessions.
            </p>
          </div>

          <div className="bg-[#CAE7D3] rounded-none h-96 flex items-center justify-center relative overflow-hidden animate-fade-up hover-lift border-2 border-black">
            <div className="absolute inset-0 opacity-20 transition-opacity duration-500 hover:opacity-30">
              <img
                src={officeBuildingImage}
                alt="Office location map placeholder"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
            </div>
            <div className="text-center relative z-10 bg-white p-8 rounded-none border-2 border-black backdrop-blur-sm animate-scale-in animate-stagger-2 hover-glow">
              <MapPin className="w-16 h-16 text-black mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-2 animate-fade-up animate-stagger-3">Interactive Mapping Interface Coming Soon</h3>
              <p className="text-muted-foreground animate-fade-up animate-stagger-4">307 S Kendall Ave <br />Kalamazoo, Michigan 49006</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
