import { ArrowRight, CirclePlay, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-engineering.jpg";
import engineerMale from "@/assets/engineer-male.jpg";

const HeroSection = () => {
  return (
    <section className="bg-[#ded7bd] px-3 pb-4 pt-3 md:px-6 md:pb-6 md:pt-5">
      <div className="relative min-h-[calc(100vh-44px)] overflow-hidden rounded-[28px] border border-black/10 bg-[#fbf7ea] shadow-[0_22px_70px_rgba(31,28,18,0.12)]">
        <div className="absolute bottom-0 right-0 h-[45%] w-[42%] bg-[radial-gradient(circle_at_50%_50%,rgba(242,191,33,0.55),rgba(202,231,211,0.55)_40%,transparent_70%)] blur-2xl"></div>
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#CAE7D3]/40 blur-3xl"></div>

        <div className="grid min-h-[calc(100vh-44px)] lg:grid-cols-[1.55fr_1fr]">
          <div className="relative flex items-center px-6 py-32 sm:px-10 lg:px-16">
            <div className="max-w-4xl">
              <div className="mb-10 inline-flex items-center gap-3 text-base font-medium text-black">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#CBD6E2] shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                Building better technical teams
              </div>

              <h1 className="mb-8 max-w-3xl text-[clamp(4rem,8vw,8.2rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-[#111111]">
                Engineering talent made easier to find.
              </h1>

              <p className="mb-9 max-w-2xl text-lg leading-8 text-black/60">
                Novyra connects life sciences, manufacturing, automation, and technical teams with specialized engineering support.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link to="/contact">
                  <Button size="lg" className="h-16 rounded-full bg-[#111111] px-10 text-lg text-white hover:bg-black/80">
                    Book a Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about" className="flex items-center gap-3 text-base font-medium text-black">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black">
                    <CirclePlay className="h-4 w-4 fill-black text-black" />
                  </span>
                  See how it works
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[760px] border-t border-black/20 px-6 pb-12 pt-28 sm:px-10 lg:border-l lg:border-t-0 lg:px-12">
            <div className="absolute right-14 top-8 hidden h-40 w-44 rounded-full border-r border-t border-black/25 lg:block"></div>

            <div className="mx-auto flex max-w-[620px] flex-col gap-14">
              <div className="grid gap-10 xl:grid-cols-[240px_minmax(0,1fr)] xl:items-start xl:gap-16">
                <div className="rounded-2xl bg-white p-8 shadow-[0_28px_60px_rgba(31,28,18,0.12)]">
                <p className="mb-4 text-3xl font-semibold tracking-[-0.03em]">$1.2M</p>
                <p className="mb-8 text-xs uppercase tracking-[0.18em] text-black/45">Project Value</p>
                <div className="flex h-28 items-end gap-3">
                  {[48, 28, 42, 66, 35, 55, 26, 38, 58].map((height, index) => (
                    <span
                      key={index}
                      className="w-3 rounded-full bg-[#e9d99f]"
                      style={{ height: `${height}%` }}
                    ></span>
                  ))}
                </div>
                </div>

                <div className="max-w-sm pt-4 text-[1.65rem] leading-[1.25] tracking-[-0.04em] text-black xl:pt-10">
                  Make technical hiring feel secure, focused, and easy with <strong>NOVYRA</strong>
                </div>
              </div>

              <div className="grid gap-10 xl:grid-cols-[190px_minmax(0,1fr)] xl:items-start xl:gap-14">
                <div className="order-2 rounded-2xl bg-[#111111] p-7 text-white shadow-xl xl:order-1 xl:mt-28">
                  <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full border-[10px] border-white/30">
                    <span className="absolute inset-[-10px] rounded-full border-[10px] border-l-[#f2bf21] border-t-[#f2bf21]"></span>
                    <span className="relative text-lg font-semibold">62%</span>
                  </div>
                  <p className="text-sm">Placements</p>
                  <p className="text-xs text-white/45">By Novyra</p>
                </div>

                <div className="order-1 h-72 overflow-hidden rounded-3xl bg-[#ebe3c9] xl:order-2">
                  <img src={engineerMale} alt="Engineering consultant" className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="border-t border-black/35 pt-10">
                <div className="flex items-end justify-between gap-10">
                  <div className="min-w-0">
                    <p className="text-7xl font-light tracking-[-0.08em]">35<span className="text-3xl">+</span></p>
                    <p className="mt-3 max-w-48 text-lg leading-6 text-black/55">Successful implementations delivered</p>
                  </div>
                  <div className="flex h-28 w-28 shrink-0 flex-col justify-end">
                    {[0, 1, 2, 3, 4, 5].map((item) => (
                      <span key={item} className="-mt-2 h-8 rounded-[50%] border border-black bg-[#fbf7ea]"></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
