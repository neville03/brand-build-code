import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-team.jpg";

const FEATURES = ["Branding & Design", "Software Engineering", "Product Strategy"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:py-10">
        {/* Left: headline, tagline, call to action */}
        <div className="relative z-10">
          <h1 className="animate-rise font-display text-5xl uppercase leading-[1.02] sm:text-6xl lg:text-7xl">
            Digital products
            <span className="block">built around</span>
            <span className="block text-primary">your ambition.</span>
          </h1>
          <p className="animate-rise mt-6 max-w-md text-balance text-base leading-relaxed text-muted [animation-delay:140ms] sm:text-lg">
            Distinct branding, design, and software engineering for growing businesses.
          </p>
          <div className="animate-rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 [animation-delay:260ms]">
            <Button
              asChild
              className="rounded-full px-7 ring-2 ring-brand-bright ring-offset-2 ring-offset-background"
            >
              <a href="#contact">
                Start a project <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-muted">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-brand-bright" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: single image in a rounded frame */}
        <div className="animate-fade relative mx-auto w-full max-w-[26rem] [animation-delay:200ms] lg:max-w-[28rem]">
          <div aria-hidden="true" className="absolute -bottom-5 -left-5 h-[86%] w-[86%] rounded-[2.5rem] bg-gradient-to-tr from-primary to-brand-bright" />
          <div aria-hidden="true" className="absolute -right-4 -top-4 h-[60%] w-[60%] rounded-[2.5rem] border-2 border-brand-bright" />
          <div aria-hidden="true" className="absolute -right-8 bottom-10 h-24 w-24 opacity-40 [background-image:radial-gradient(var(--color-primary)_1.6px,transparent_1.6px)] [background-size:14px_14px]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-[6px] border-background shadow-2xl">
            <img
              src={heroImage}
              alt="A Continuum team working together around a shared desk"
              width={1200}
              height={1800}
              className="size-full object-cover object-[50%_35%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
