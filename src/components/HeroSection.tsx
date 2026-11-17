import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lab-background.jpg";

const HeroSection = () => {
  return (
    <section className="px-3 pb-3 pt-3 sm:px-6 sm:pb-6 sm:pt-4 md:px-8">
      <div className="relative min-h-[calc(100vh-32px)] overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-900 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] md:rounded-[36px]">
        {/* Background Laboratory Image */}
        <div
          className="absolute inset-0 bg-cover bg-[position:45%_center] md:bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        {/* Sophisticated Multi-layer Gradient Scrim for crystal clear readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 md:w-3/4 lg:w-3/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent sm:hidden"></div>

        {/* Hero Content */}
        <div className="relative flex min-h-[calc(100vh-32px)] items-center px-6 py-28 sm:px-12 md:py-36 lg:px-16">
          <div className="max-w-3xl">
            {/* Live Status Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50/90 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-emerald-800 shadow-sm backdrop-blur-md sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
              </span>
              <span>Premier Life Sciences & Technical Consulting</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-6xl lg:leading-[1.1]">
              Engineering talent <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700">
                made easier to find.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 max-w-2xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-700">
              Novyra bridges high-growth life sciences, biotechnology, and advanced manufacturing organizations with specialized engineering experts, validation leaders, and project teams.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="h-13 rounded-full bg-slate-900 px-7 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 sm:h-14 sm:px-8 sm:text-base transition-all"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-13 rounded-full border-slate-300 bg-white/90 px-7 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md hover:bg-white sm:h-14 sm:px-8 sm:text-base transition-all"
                >
                  Our Capabilities
                </Button>
              </Link>
            </div>

            {/* Trust & Verification Strip */}
            <div className="mt-12 pt-8 border-t border-slate-200/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3.5">
                Key Standards & Technical Disciplines
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  cGMP & FDA Regulatory Compliance
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Robotics & Process Automation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  3-Hour Rapid Response SLA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
