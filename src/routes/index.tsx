import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImage from "@/assets/hero-studio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Continuum Consults — Branding, Design & Bespoke Software | Kampala",
      },
      {
        name: "description",
        content:
          "Continuum Consults is a Kampala studio delivering branding, design and bespoke software — from identity and branded merchandise to custom web applications. Request a quote online.",
      },
      {
        property: "og:title",
        content: "Continuum Consults — Branding, Design & Bespoke Software",
      },
      {
        property: "og:description",
        content:
          "One Kampala studio, three disciplines: branding, design and bespoke software. Start a project today.",
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

const SERVICES = [
  "Branding",
  "Design",
  "Bespoke software",
  "Multiple / not sure yet",
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      <Header />
      <Hero />
      <Capabilities />
      <Process />
      <RequestSection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="/"
          className="font-display text-lg leading-none tracking-tight"
        >
          CONTINUUM<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-8 font-body text-sm text-muted sm:flex">
          <a href="#pillars" className="transition-colors hover:text-foreground">
            Capabilities
          </a>
          <a href="#process" className="transition-colors hover:text-foreground">
            Process
          </a>
          <a href="#request" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        <a
          href="#request"
          className="rounded-full bg-foreground px-4 py-2 font-body text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Request a quote
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <img
        src={heroImage}
        alt="A Continuum designer sketching a brand identity in the studio"
        className="h-[78vh] min-h-[520px] w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
      <div className="absolute inset-0">
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-12 sm:px-8 sm:pb-16">
          <p className="animate-fade mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/85 sm:text-sm">
            Kampala · Branding / Design / Software
          </p>
          <h1 className="animate-rise max-w-[16ch] font-display text-[13vw] leading-[0.92] text-white sm:text-[8vw] lg:text-[6.5rem]">
            We build brands, design them, and build the software behind them.
          </h1>
          <div className="animate-rise mt-8 flex flex-wrap items-center gap-4 [animation-delay:260ms]">
            <a
              href="#request"
              className="rounded-full bg-primary px-6 py-3 font-body font-medium text-primary-foreground transition-colors hover:bg-white hover:text-foreground"
            >
              Start a project
            </a>
            <a
              href="#pillars"
              className="rounded-full border border-white/40 px-6 py-3 font-body font-medium text-white/90 transition-colors hover:bg-white hover:text-foreground"
            >
              See capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    number: "01",
    title: "Branding",
    body: "Identity systems, naming, and branded merchandise — apparel, uniforms, corporate gifts and signage that hold up from a business card to a billboard.",
  },
  {
    number: "02",
    title: "Design",
    body: "Packaging, collateral, HR materials, and digital interfaces designed with intention, not decoration — on-brand across every touchpoint.",
  },
  {
    number: "03",
    title: "Bespoke Software",
    body: "Custom web applications, portals and internal tools built to fit how your business actually runs — and to grow with it.",
  },
];

function Capabilities() {
  return (
    <section
      id="pillars"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <h2 className="max-w-[14ch] font-display text-4xl tracking-tight text-balance sm:text-5xl">
          Three disciplines, one studio
        </h2>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
          (a) Capabilities
        </p>
      </div>
      <div className="grid gap-px overflow-hidden rounded-2xl bg-border ring-1 ring-black/5 sm:grid-cols-3">
        {PILLARS.map((pillar, i) => (
          <div
            key={pillar.number}
            className="animate-rise bg-surface p-7 sm:p-8"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="font-mono text-xs tracking-[0.15em] text-primary">
              {pillar.number}
            </span>
            <h3 className="mt-4 font-display text-2xl tracking-tight">
              {pillar.title}
            </h3>
            <p className="mt-3 max-w-[34ch] font-body text-sm leading-relaxed text-muted text-pretty">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  {
    label: "Step 01",
    title: "Listen",
    body: "We start with your goals, constraints, and the market you're entering.",
  },
  {
    label: "Step 02",
    title: "Shape",
    body: "Strategy, identity, and architecture come together in tight, reviewable rounds.",
  },
  {
    label: "Step 03",
    title: "Ship",
    body: "We deliver build-ready assets and working software, then stay close.",
  },
];

function Process() {
  return (
    <section id="process" className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-[12ch] font-display text-4xl tracking-tight text-balance sm:text-5xl">
            How we work
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-white/50">
            (b) Process
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.label} className="border-t border-white/20 pt-5">
              <span className="font-mono text-xs tracking-[0.15em] text-primary">
                {step.label}
              </span>
              <h3 className="mt-3 font-display text-xl tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[30ch] font-body text-sm leading-relaxed text-white/70 text-pretty">
                {step.body}
              </p>
            </div>
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

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError("Please tell us your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      new FormData(e.target as HTMLFormElement).get("email")?.toString() ?? ""
    )) {
      setError("Please enter a valid email address so we can reply.");
      return;
    }
    setError(null);

    const subject = encodeURIComponent(
      `Project request — ${service} — ${name.trim()}${company.trim() ? ` (${company.trim()})` : ""}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Company: ${company.trim() || "—"}`,
        `Service: ${service}`,
        `Reply-to: ${new FormData(e.target as HTMLFormElement).get("email")?.toString().trim()}`,
        "",
        "Project details:",
        message.trim() || "(no details given)",
      ].join("\n")
    );
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm placeholder:text-muted/60 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40";

  return (
    <section
      id="request"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-primary">
            (c) Request
          </p>
          <h2 className="max-w-[14ch] font-display text-4xl tracking-tight text-balance sm:text-5xl">
            Tell us what you're building.
          </h2>
          <p className="mt-4 max-w-[40ch] font-body text-muted text-pretty">
            Send a request and we'll reply within one business day. Prefer to
            talk? Reach us directly.
          </p>
          <div className="mt-10 space-y-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                Email
              </p>
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="font-body text-lg font-medium transition-colors hover:text-primary"
              >
                {BUSINESS_EMAIL}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                Phone
              </p>
              <a
                href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}
                className="block font-body text-lg font-medium transition-colors hover:text-primary"
              >
                {PHONE_PRIMARY}
              </a>
              <a
                href={`tel:${PHONE_SECONDARY.replace(/\s/g, "")}`}
                className="block font-body text-lg font-medium transition-colors hover:text-primary"
              >
                {PHONE_SECONDARY}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                Studio
              </p>
              <p className="font-body text-lg font-medium">
                Bukoto II, Ntinda Kigoowa
                <br />
                P.O. Box 188488, Kampala, Uganda
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl bg-surface p-6 ring-1 ring-black/5 sm:p-8"
        >
          <div>
            <label className="mb-2 block font-body text-sm font-medium" htmlFor="name">
              Your name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Amina Okello"
              maxLength={100}
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-2 block font-body text-sm font-medium" htmlFor="email">
              Email for our reply
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              maxLength={255}
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-2 block font-body text-sm font-medium" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Nile & Co"
              maxLength={100}
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-2 block font-body text-sm font-medium" htmlFor="service">
              Service interested in
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={inputClass}
            >
              {SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block font-body text-sm font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="A few lines about your project, timeline, and budget range."
              maxLength={1000}
              className={`${inputClass} resize-none`}
            />
          </div>
          {error && (
            <p className="font-body text-sm text-destructive">{error}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3.5 font-body font-medium text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Send request
          </button>
          {sent ? (
            <p className="text-center font-body text-sm text-primary">
              Your email app should now be open with your request ready — just
              press send. You can also write us directly at {BUSINESS_EMAIL}.
            </p>
          ) : (
            <p className="text-center font-body text-xs text-muted">
              No spam. We reply personally.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <p className="font-display text-lg tracking-tight">
          CONTINUUM<span className="text-primary">.</span>
        </p>
        <p className="font-mono text-xs tracking-[0.1em] text-muted">
          P.O. Box 188488 · Kampala · Uganda
        </p>
        <p className="font-body text-xs text-muted">
          © {new Date().getFullYear()} Continuum Consults
        </p>
      </div>
    </footer>
  );
}
