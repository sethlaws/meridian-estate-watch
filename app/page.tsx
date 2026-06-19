import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ClipboardList,
  Wrench,
  Eye,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  ThumbsUp,
  Home,
  Droplets,
  Wind,
  Anchor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Home Watch Services in Charlotte, NC",
  description:
    "Meridian Estate Watch provides trusted home watch and property monitoring in Charlotte, NC and surrounding areas — Lake Norman, Ballantyne, Waxhaw and beyond. Protecting second homes, vacation properties, and estates while you're away. Schedule a free consultation.",
  alternates: { canonical: "https://meridianestatewatch.com" },
};

const services = [
  {
    icon: Eye,
    title: "Interior & Exterior Inspections",
    description:
      "Comprehensive walkthroughs of your entire property — inside and out — on a schedule you choose. We document everything with time-stamped photos.",
  },
  {
    icon: Wind,
    title: "HVAC & Climate Monitoring",
    description:
      "We verify your heating and cooling systems are running within safe ranges, protecting against mold, mildew, and costly equipment failure.",
  },
  {
    icon: Droplets,
    title: "Plumbing & Water Systems",
    description:
      "We run faucets, flush toilets, check for leaks, and verify the main water supply — catching issues before a slow drip becomes a flooded home.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Access Verification",
    description:
      "Every door, window, and lock is tested on each visit. We confirm your alarm system is armed and all access points are secure.",
  },
  {
    icon: Wrench,
    title: "Vendor & Contractor Coordination",
    description:
      "Need a repair while you're away? We meet contractors on-site, oversee the work, and send you a full update — so you never have to fly home for a service call.",
  },
  {
    icon: Home,
    title: "Arrival Preparation",
    description:
      "We prepare your home before you return — adjusting the thermostat, airing it out, and doing a final walk-through so it's ready and welcoming the moment you arrive.",
  },
  {
    icon: Anchor,
    title: "Marine Management & Maintenance",
    description:
      "Professional care for your boat, dock, and waterfront property — monitoring for water intrusion, securing your vessel, and coordinating maintenance so it's ready when you are.",
  },
];

const whyUs = [
  { icon: ClipboardList, text: "Detailed photo reports after every visit" },
  { icon: ShieldCheck, text: "Fully licensed and insured" },
  { icon: Clock, text: "Flexible scheduling — weekly, bi-weekly, or monthly" },
  { icon: ThumbsUp, text: "Locally owned and operated in Charlotte, NC" },
  { icon: Star, text: "Trusted by snowbirds and frequent travelers" },
  { icon: CheckCircle, text: "24/7 emergency contact availability" },
];

const process = [
  {
    step: "01",
    title: "Free Consultation",
    body:
      "We meet at your property, learn your schedule and concerns, and build a custom monitoring plan around your specific needs.",
  },
  {
    step: "02",
    title: "Tailored Inspection Plan",
    body:
      "You choose your visit frequency. We document your property's baseline condition and note anything that needs attention before you leave.",
  },
  {
    step: "03",
    title: "Regular Visits & Reports",
    body:
      "On every scheduled visit we inspect every area of your home and send you a photo report the same day — from anywhere in the world.",
  },
  {
    step: "04",
    title: "Immediate Issue Response",
    body:
      "If we find a problem, we contact you immediately, recommend a qualified contractor, and can manage the repair on your behalf.",
  },
];

const faqs = [
  {
    q: "What is home watch (estate watch)?",
    a: "Home watch — also called estate watch — is a regular, professional inspection of a vacant or unoccupied property. On each visit we walk the entire home inside and out, check the major systems, and send you a documented photo report so you always know your property's condition while you're away.",
  },
  {
    q: "How often should a vacant or second home be checked?",
    a: "Most insurance providers and home watch professionals recommend at least weekly visits for unoccupied homes. Many issues — like a slow plumbing leak or an HVAC failure — cause major damage within days, so regular visits are key. We offer weekly, bi-weekly, and monthly plans based on your needs.",
  },
  {
    q: "What areas around Charlotte do you serve?",
    a: "We serve Charlotte, NC and the surrounding communities, including the Lake Norman area (Cornelius, Davidson, Huntersville, Mooresville), South Charlotte and Ballantyne, and Union County (Waxhaw, Weddington, Marvin). If you're nearby and not listed, just ask — we likely cover your area.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Meridian Estate Watch is fully insured and carries professional liability coverage, and we follow National Home Watch Association best practices. Every inspection follows a documented checklist for consistency and accountability.",
  },
  {
    q: "Will my insurance require home watch visits?",
    a: "Many homeowners' insurance policies require that a vacant property be checked on a regular schedule — and some claims can be denied if it wasn't. Our documented, time-stamped reports give you proof that your home was being professionally monitored.",
  },
  {
    q: "What happens if you find a problem?",
    a: "If we find an issue, we contact you right away, recommend a qualified local contractor, and can coordinate and supervise the repair on your behalf — so you don't have to fly home for a service call.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ── HERO ── */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/estate-hero.jpg"
          alt="Luxury estate protected by Meridian Estate Watch"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-28 md:py-40">
          <div className="max-w-2xl">
            <span className="inline-block text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Charlotte&apos;s Trusted Estate Watch Professionals
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Home. Protected.{" "}
              <span className="text-gold-400">While You&apos;re Away.</span>
            </h1>
            <p className="text-lg md:text-xl text-navy-100 leading-relaxed mb-8">
              Professional estate watch services for second homeowners, seasonal
              travelers, and estate properties. We keep a trained eye on your
              property so small issues never become costly disasters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-4 rounded text-base transition-colors"
              >
                Get a Free Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/70 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded text-base transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-navy-800 text-white py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            {[
              { value: "Fully Insured", label: "Peace of Mind" },
              { value: "Photo Reports", label: "Every Visit" },
              { value: "24/7", label: "Emergency Contact" },
              { value: "Locally Owned", label: "Charlotte, NC" },
            ].map((t) => (
              <div key={t.value} className="py-2">
                <p className="font-bold text-gold-400 text-base">{t.value}</p>
                <p className="text-navy-300 text-xs mt-0.5">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS HOME WATCH ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6">
                What Is Estate Watch — And Why Does It Matter?
              </h2>
              <p className="text-navy-600 text-lg leading-relaxed mb-5">
                Estate watch — also known as home watch — is a scheduled,
                professional inspection of your unoccupied property while
                you&apos;re away. A trained inspector
                visits your home on a regular basis, checks every area inside
                and out, and documents the condition with detailed photo reports.
              </p>
              <p className="text-navy-600 leading-relaxed mb-5">
                Most major home disasters start small. A slow pipe leak. A
                failed air conditioning unit. A broken window seal. When
                nobody&apos;s watching, those minor issues escalate —
                undetected mold, structural water damage, and pest infestations
                can cost tens of thousands to remediate. Estate watch stops that
                spiral early.
              </p>
              <p className="text-navy-600 leading-relaxed mb-8">
                Whether you&apos;re a snowbird heading north for the summer, a
                frequent traveler, or managing an estate property, Meridian Home
                Watch provides the professional eyes and ears your home
                deserves.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold transition-colors"
              >
                See all our services <ArrowRight size={16} />
              </Link>
            </div>

            {/* Visual card stack */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Security Verified",
                  desc: "All entry points checked on every visit",
                },
                {
                  icon: ClipboardList,
                  title: "Photo Documented",
                  desc: "Time-stamped reports sent the same day",
                },
                {
                  icon: Wrench,
                  title: "Issue Managed",
                  desc: "We coordinate repairs so you don't have to",
                },
                {
                  icon: Clock,
                  title: "Your Schedule",
                  desc: "Weekly, bi-weekly, or monthly visits",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-navy-50 border border-navy-100 rounded-xl p-5"
                >
                  <Icon size={28} className="text-gold-500 mb-3" />
                  <h3 className="font-semibold text-navy-900 text-sm mb-1">
                    {title}
                  </h3>
                  <p className="text-navy-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2">
              Comprehensive Property Protection
            </h2>
            <p className="text-navy-500 mt-4 max-w-2xl mx-auto">
              Every service is designed around one goal: making sure your home
              is exactly as you left it — or better — when you return.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-7 shadow-sm border border-navy-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <h3 className="font-bold text-navy-900 mb-3">{title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded transition-colors"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2">
              Getting Started Is Simple
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map(({ step, title, body }) => (
              <div key={step} className="relative">
                <div className="text-5xl font-black text-navy-100 leading-none mb-4">
                  {step}
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
                Why Meridian
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Your Property Deserves Professionals
              </h2>
              <p className="text-navy-200 leading-relaxed mb-4">
                Any neighbor can glance at your driveway. Meridian Estate Watch
                performs thorough, documented inspections — the kind that
                actually catch problems and hold up with your insurance provider.
              </p>
              <p className="text-navy-200 leading-relaxed">
                We&apos;re locally based, fully insured, and carry professional
                liability coverage. We know the Charlotte market, the local
                contractors you can trust, and the seasonal challenges your home
                faces — from summer storms to winter freezes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={20} className="text-gold-400 mt-0.5 shrink-0" />
                  <span className="text-navy-100 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2">
              Built for Property Owners on the Move
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Snowbirds & Seasonal Residents",
                body:
                  "Spend months away with full confidence your home is being monitored and any issues are handled before you return.",
              },
              {
                title: "Second & Vacation Homeowners",
                body:
                  "Your beach house, mountain cabin, or lake home needs professional eyes year-round — not just when you visit.",
              },
              {
                title: "Frequent Travelers & Busy Professionals",
                body:
                  "Long business trips or extended vacations shouldn't mean leaving your primary residence unmonitored for weeks.",
              },
              {
                title: "Estate & Executor Properties",
                body:
                  "We provide reliable, documented monitoring for estate properties in probate, protecting the asset during a difficult transition.",
              },
              {
                title: "Homeowners Relocating",
                body:
                  "Waiting on a home sale while living elsewhere? We protect your vacant property from liability, squatters, and deterioration.",
              },
              {
                title: "Renovation Oversight",
                body:
                  "We can visit during active renovations to document progress, verify the property is secured after hours, and keep you informed.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="border-l-4 border-gold-500 pl-5 py-1"
              >
                <h3 className="font-bold text-navy-900 mb-2">{title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">
              Areas We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
              Estate Watch Services Across North Carolina
            </h2>
            <p className="text-navy-500 max-w-2xl mx-auto leading-relaxed">
              Meridian Estate Watch provides professional estate watch and
              property monitoring throughout Charlotte, North Carolina and the
              surrounding communities. Whether your second home sits on Lake
              Norman, in Ballantyne, or out in Waxhaw, we keep a trained eye on
              it while you&apos;re away.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                area: "Charlotte & Uptown",
                places: "Myers Park, SouthPark, Dilworth, Eastover, Ballantyne",
              },
              {
                area: "Lake Norman",
                places: "Cornelius, Davidson, Huntersville, Mooresville",
              },
              {
                area: "South Charlotte",
                places: "Ballantyne, Pineville, Matthews, Mint Hill",
              },
              {
                area: "Union County",
                places: "Waxhaw, Weddington, Marvin, Wesley Chapel",
              },
              {
                area: "Lake Wylie & Steele Creek",
                places: "Steele Creek, Lake Wylie, Fort Mill area",
              },
              {
                area: "Surrounding Communities",
                places: "Concord, Harrisburg, Indian Trail & more",
              },
            ].map(({ area, places }) => (
              <div
                key={area}
                className="bg-white border border-navy-100 rounded-xl p-5"
              >
                <h3 className="font-bold text-navy-900 mb-1">{area}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{places}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-navy-500 text-sm mt-8">
            Don&apos;t see your neighborhood?{" "}
            <Link href="/contact" className="text-gold-600 font-semibold hover:underline">
              Contact us
            </Link>{" "}
            — we likely serve your area too.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2">
              Estate Watch Questions, Answered
            </h2>
          </div>
          <div className="divide-y divide-navy-100">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-navy-900">
                  {q}
                  <span className="text-gold-500 text-xl ml-4 shrink-0 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-navy-600 leading-relaxed mt-3">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-gold-500 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Ready to Protect Your Property?
          </h2>
          <p className="text-navy-800 text-lg mb-8">
            Schedule a free, no-obligation consultation. We&apos;ll walk your
            property together, answer every question, and build a plan that fits
            your schedule and budget.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-10 py-4 rounded text-lg transition-colors"
          >
            Schedule Your Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
