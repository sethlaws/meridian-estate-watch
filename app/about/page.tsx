import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, Star, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Meridian Estate Watch",
  description:
    "Learn about Meridian Estate Watch — locally owned, fully insured, and dedicated to protecting Charlotte-area properties.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Accountability",
    body:
      "Every visit is documented with photos and a written report. You never have to take our word for it — you see the evidence of every inspection.",
  },
  {
    icon: Users,
    title: "Relationship-Driven",
    body:
      "We get to know your property and your preferences. We're not a transaction — we're your long-term partner in property care.",
  },
  {
    icon: Star,
    title: "Professional Standards",
    body:
      "We follow National Home Watch Association best practices, carry full liability insurance, and hold our inspections to a documented checklist every time.",
  },
  {
    icon: MapPin,
    title: "Locally Rooted",
    body:
      "We live and work in the Charlotte region. We know local contractors, local weather patterns, and local risks — and that makes us better at protecting your home.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            About Meridian Estate Watch
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto">
            A locally owned and operated estate watch company serving Charlotte,
            NC and surrounding communities. We protect properties — and the
            peace of mind of the people who own them.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-navy-600">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
            <p className="mb-5 leading-relaxed">
              Welcome to Meridian Estate Watch, your trusted partner in home and
              estate watch services in the Charlotte and Mecklenburg area. I&apos;m
              Seth, and with over 15 years of experience overseeing high-value
              assets, I bring a legacy of care and attention to detail. As a
              retired yacht captain, I understand the importance of security,
              discretion, and professionalism when it comes to safeguarding your
              home or estate. Whether you are away for a season or need regular
              property checks, I offer peace of mind through tailored, proactive
              services. Let me watch over what matters most—so you can enjoy life
              with confidence.
            </p>
            <p className="mb-5 leading-relaxed">
              Meridian Estate Watch was founded on a simple observation:
              too many homeowners were leaving their properties unprotected for
              months at a time and hoping for the best. A neighbor glancing at
              the driveway, a friend grabbing the mail — these are kind gestures,
              but they&apos;re not property protection.
            </p>
            <p className="mb-5 leading-relaxed">
              We built Meridian to fill that gap. Our service provides the
              professional, documented, insured property monitoring that vacant
              and seasonal homes genuinely need — the kind that catches a slow
              pipe leak before it becomes a flooded basement, or identifies a
              failing HVAC unit before mold takes hold.
            </p>
            <p className="mb-5 leading-relaxed">
              We serve second homeowners, seasonal residents, estate executors,
              relocating families, and anyone who needs professional eyes on
              their property. We&apos;re proud to be locally owned and operated,
              and we take the trust our clients place in us seriously. When
              you&apos;re thousands of miles away, you need to know that someone
              who cares is watching over your home.
            </p>
            <p className="leading-relaxed">
              That&apos;s exactly who we are.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">
              Our Values
            </span>
            <h2 className="text-3xl font-bold text-navy-900 mt-2">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-xl p-8 shadow-sm border border-navy-100">
                <Icon size={28} className="text-gold-500 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">{title}</h3>
                <p className="text-navy-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-gold-500 text-sm font-semibold uppercase tracking-widest">
            Where We Work
          </span>
          <h2 className="text-3xl font-bold text-navy-900 mt-2 mb-6">
            Serving Charlotte & Surrounding Communities
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed mb-8">
            Meridian Estate Watch currently serves the greater Charlotte,
            NC metropolitan area. If you&apos;re unsure whether we cover your
            location, reach out — we&apos;re always expanding our service area
            and happy to discuss your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Charlotte",
              "Ballantyne",
              "Huntersville",
              "Cornelius",
              "Davidson",
              "Mooresville",
              "Concord",
              "Waxhaw",
              "Matthews",
              "Fort Mill, SC",
            ].map((city) => (
              <span
                key={city}
                className="bg-navy-100 text-navy-700 text-sm font-medium px-4 py-2 rounded-full"
              >
                {city}
              </span>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-4 rounded transition-colors"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
