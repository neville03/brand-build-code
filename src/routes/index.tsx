import { createFileRoute } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Code2, Zap } from "lucide-react";
import { useCallback, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import catalogueAsset from "@/assets/continuum-catalogue.pdf.asset.json";
import logoAsset from "@/assets/continuum-mark.png.asset.json";
import apparelAsset from "@/assets/work-apparel.jpg.asset.json";
import merchandiseAsset from "@/assets/work-merchandise.jpg.asset.json";
import umbrellasAsset from "@/assets/work-umbrellas.jpg.asset.json";
import uniformsAsset from "@/assets/work-uniforms.jpg.asset.json";
import heroImage from "@/assets/hero-studio.jpg";
import aboutImage from "@/assets/about-studio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Continuum Consults — Brand Identity, Design & Bespoke Software" },
      {
        name: "description",
        content:
          "Continuum Consults builds powerful brand identities and bespoke software for ambitious businesses in Kampala and beyond.",
      },
      {
        property: "og:title",
        content: "Continuum Consults — Brand Identity, Design & Bespoke Software",
      },
      {
        property: "og:description",
        content:
          "Brand strategy, identity, marketing materials, websites, mobile applications and custom software from one Kampala studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const BUSINESS_EMAIL = "continuumconsults@gmail.com";
const PHONE_PRIMARY = "+256 775 690 138";
const PHONE_SECONDARY = "+256 701 026 078";
const SERVICES = ["Brand Identity & Design", "Bespoke Software Solutions", "Both / not sure yet"];

const WORK = [
  { image: apparelAsset.url, label: "Branded apparel", number: "01" },
  { image: uniformsAsset.url, label: "Corporate uniforms", number: "02" },
  { image: merchandiseAsset.url, label: "Promotional merchandise", number: "03" },
  { image: umbrellasAsset.url, label: "Outdoor branding", number: "04" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      <Header />
      <Hero />
      <WorkCarousel />
      <About />
      <Services />
      <Process />
      <RequestSection />
      <Footer />
    </div>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Continuum Consults home">
      <img src={logoAsset.url} alt="" className={compact ? "size-9 object-contain" : "size-11 object-contain"} />
      <span className="leading-none">
        <strong className="block font-display text-lg font-normal uppercase">Continuum</strong>
        <span className="mt-1 block font-body text-[0.55rem] uppercase tracking-[0.24em] text-muted">Consults</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Brand compact />
        <nav aria-label="Main navigation" className="flex items-center gap-4 text-xs font-semibold sm:gap-8 sm:text-sm">
          <a href="#about" className="transition-colors hover:text-primary">About us</a>
          <a href="#services" className="transition-colors hover:text-primary">Our services</a>
          <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
        </nav>
      </div>
    </header>
  );
}

const HERO_FEATURES = [
  { icon: Zap, label: "Branding & Design" },
  { icon: Code2, label: "Software Engineering" },
  { icon: BarChart3, label: "Product Strategy" },
];

function Hero() {
  return (
    <section id="top" className="relative min-h-[calc(100svh-5rem)] overflow-hidden">
      <img src={heroImage} alt="A designer developing a visual identity in the studio" className="absolute inset-0 size-full object-cover" width={1920} height={1280} />
      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col justify-end px-5 pb-10 pt-24 sm:px-8 sm:pb-12">
        <h1 className="animate-rise max-w-[16ch] text-balance font-display text-4xl leading-[1.05] text-on-image drop-shadow-md sm:text-5xl">
          Digital products built around <span className="text-brand-bright">your ambition.</span>
        </h1>
        <p className="animate-rise mt-6 max-w-md text-base leading-relaxed text-on-image/90 [animation-delay:140ms] sm:text-lg">
          Distinct branding, design, and software engineering for growing businesses.
        </p>
        <Button asChild className="animate-rise mt-8 w-fit [animation-delay:260ms]">
          <a href="#contact">Start a project <ArrowRight className="size-4" aria-hidden="true" /></a>
        </Button>
        <div className="animate-fade mt-12 grid grid-cols-1 gap-5 border-t border-on-image/30 pt-6 [animation-delay:400ms] sm:grid-cols-3 sm:gap-8">
          {HERO_FEATURES.map((feature) => (
            <div key={feature.label} className="flex items-center gap-3">
              <feature.icon className="size-5 shrink-0 text-brand-bright" aria-hidden="true" />
              <span className="text-sm font-medium text-on-image">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const previous = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section aria-label="Selected work" className="overflow-hidden bg-primary py-14 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-pale">Selected work</p>
            <h2 className="mt-3 font-display text-4xl text-on-image sm:text-5xl">Made to be noticed</h2>
          </div>
          <div className="flex gap-2">
            <Button type="button" size="icon" variant="outline" onClick={previous} aria-label="Previous image"><ArrowLeft className="size-4" /></Button>
            <Button type="button" size="icon" variant="outline" onClick={next} aria-label="Next image"><ArrowRight className="size-4" /></Button>
          </div>
        </div>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4">
            {WORK.map((item) => (
              <figure key={item.label} className="min-w-0 flex-[0_0_86%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]">
                <div className="aspect-[4/5] overflow-hidden bg-surface">
                  <img src={item.image} alt={item.label} className="size-full object-cover transition-transform duration-500 hover:scale-[1.02]" />
                </div>
                <figcaption className="mt-4 flex items-center justify-between border-t border-brand-pale/30 pt-3 text-sm">
                  <span>{item.label}</span><span className="font-mono text-xs text-brand-pale">{item.number}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">About us</p>
          <h2 className="mt-4 max-w-[17ch] font-display text-4xl leading-tight sm:text-5xl">We bring strategy, creativity and technology together.</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">Continuum Consults helps businesses move from an idea to a clear identity, then into the digital tools and experiences needed to serve customers and scale.</p>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img src={aboutImage} alt="The Continuum Consults team reviewing brand work together in the studio" className="aspect-[4/3] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]" width={1200} height={1504} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

const SERVICE_ITEMS = [
  {
    number: "01",
    title: "Brand Identity & Design",
    body: "We translate your vision into a powerful business identity that builds a commanding market presence. From core strategy to custom logos, brand guidelines, flyers, and marketing materials, we engineer everything your business needs to stand out.",
  },
  {
    number: "02",
    title: "Bespoke Software Solutions",
    body: "We engineer high-performance websites, mobile applications, and web ecosystems tailored precisely to your operational needs. Our custom software bridges the gap between complex functionality and stunning user experience to scale your business.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 flex items-end justify-between gap-4 border-b border-border pb-6">
          <h2 className="font-display text-4xl sm:text-5xl">Our services</h2>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">What we do</p>
        </div>
        <div className="divide-y divide-border">
          {SERVICE_ITEMS.map((service) => (
            <article key={service.number} className="grid gap-5 py-10 md:grid-cols-[5rem_1fr_1.25fr] md:gap-8">
              <span className="font-mono text-sm text-primary">{service.number}</span>
              <h3 className="font-display text-3xl leading-tight">{service.title}</h3>
              <div>
                <p className="leading-relaxed text-muted">{service.body}</p>
                {service.number === "01" && (
                  <Button asChild variant="outline" className="mt-6 text-primary">
                    <a href={catalogueAsset.url} target="_blank" rel="noopener noreferrer">View catalogue <ArrowUpRight className="size-4" /></a>
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { number: "01", title: "Listen", body: "We start by learning about your goals, your budget, and the market you want to enter." },
  { number: "02", title: "Shape", body: "We design your brand or build your software, sharing our work with you in quick steps for your feedback." },
  { number: "03", title: "Ship", body: "We deliver your finished designs or working software, then stay around to support you." },
];

function Process() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-bright">Our process</p>
        <h2 className="mt-3 font-display text-4xl text-on-image sm:text-5xl">How We Work</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {STEPS.map((step) => (
            <article key={step.number} className="border-t border-on-image/20 pt-5">
              <span className="font-mono text-xs text-brand-bright">{step.number}</span>
              <h3 className="mt-5 font-display text-2xl text-on-image">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-on-image/70">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RequestSection() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email")?.toString().trim() ?? "";
    if (name.trim().length < 2) { setError("Please tell us your name."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email address so we can reply."); return; }
    setError(null);
    const subject = encodeURIComponent(`Project request — ${service} — ${name.trim()}${company.trim() ? ` (${company.trim()})` : ""}`);
    const body = encodeURIComponent([`Name: ${name.trim()}`, `Company: ${company.trim() || "—"}`, `Service: ${service}`, `Reply-to: ${email}`, "", "Project details:", message.trim() || "(no details given)"].join("\n"));
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputClass = "w-full rounded-md border border-input bg-background px-4 py-3 text-sm placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">Contact</p>
          <h2 className="max-w-[12ch] font-display text-4xl sm:text-5xl">Tell us what you’re building.</h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">Send your request and we’ll reply within one business day.</p>
          <div className="mt-10 space-y-5 text-sm">
            <a href={`mailto:${BUSINESS_EMAIL}`} className="block font-semibold hover:text-primary">{BUSINESS_EMAIL}</a>
            <div><a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`} className="block hover:text-primary">{PHONE_PRIMARY}</a><a href={`tel:${PHONE_SECONDARY.replace(/\s/g, "")}`} className="block hover:text-primary">{PHONE_SECONDARY}</a></div>
            <p>Bukoto II, Ntinda Kigoowa<br />P.O. Box 188488, Kampala, Uganda</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 border-t-4 border-primary bg-surface p-6 sm:p-8">
          <Field label="Your name" id="name"><input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Amina Okello" maxLength={100} className={inputClass} /></Field>
          <Field label="Email for our reply" id="email"><input id="email" name="email" type="email" placeholder="you@company.com" maxLength={255} className={inputClass} /></Field>
          <Field label="Company" id="company"><input id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Nile & Co" maxLength={100} className={inputClass} /></Field>
          <Field label="Service interested in" id="service"><select id="service" value={service} onChange={(e) => setService(e.target.value)} className={inputClass}>{SERVICES.map((item) => <option key={item}>{item}</option>)}</select></Field>
          <Field label="Message" id="message"><textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project, timeline and budget range." maxLength={1000} className={`${inputClass} resize-none`} /></Field>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full">Send request <ArrowRight className="size-4" /></Button>
          <p className="text-center text-xs text-muted">{sent ? `Your email app should now be open. You can also write to ${BUSINESS_EMAIL}.` : "No spam. We reply personally."}</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return <div><label className="mb-2 block text-sm font-semibold" htmlFor={id}>{label}</label>{children}</div>;
}

function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <Brand />
        <p className="font-mono text-xs uppercase tracking-[0.12em]">Kampala · Uganda</p>
        <p className="text-xs">© {new Date().getFullYear()} Continuum Consults</p>
      </div>
    </footer>
  );
}