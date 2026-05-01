import { ArrowRight, CirclePlay, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lab-background.jpg";

const HeroSection = () => {
  return (
    <section className="bg-[#ded7bd] px-3 pb-4 pt-3 md:px-6 md:pb-6 md:pt-5">
      <div className="relative min-h-[calc(100vh-44px)] overflow-hidden rounded-[28px] border border-black/10 shadow-[0_22px_70px_rgba(31,28,18,0.12)]">
        <div
          className="absolute inset-0 bg-cover bg-[position:42%_center] md:bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/48 via-white/24 to-black/18 md:bg-gradient-to-r md:from-white/88 md:via-white/62 md:to-white/18"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:from-black/22"></div>

        <div className="relative flex min-h-[calc(100vh-44px)] items-center px-6 py-32 sm:px-10 lg:px-16">
          <div className="max-w-4xl rounded-[28px] bg-white/58 p-5 shadow-soft backdrop-blur-[2px] sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0">
            <div className="mb-10 inline-flex items-center gap-3 rounded-full bg-white/72 px-4 py-3 text-base font-medium text-black shadow-soft backdrop-blur-sm md:bg-white/78 md:backdrop-blur-md">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CAE7D3] shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </span>
              Building better technical teams
            </div>

            <h1 className="mb-8 max-w-4xl text-[clamp(3.35rem,14vw,8.2rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-[#111111]">
              Engineering talent made easier to find.
            </h1>

            <p className="mb-9 max-w-2xl rounded-3xl bg-white/72 px-5 py-4 text-lg font-medium leading-8 text-black/82 shadow-soft backdrop-blur-md md:bg-white/64">
              Novyra connects life sciences, manufacturing, automation, and technical teams with specialized engineering support.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link to="/contact">
                <Button size="lg" className="h-16 rounded-full bg-[#111111] px-10 text-lg text-white hover:bg-black/80">
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about" className="flex items-center gap-3 rounded-full bg-white/70 px-4 py-3 text-base font-medium text-black backdrop-blur-md">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black">
                  <CirclePlay className="h-4 w-4 fill-black text-black" />
                </span>
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
