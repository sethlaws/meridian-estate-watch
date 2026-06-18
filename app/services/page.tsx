import Link from "next/link";
import {
  Eye,
  Wind,
  Droplets,
  ShieldCheck,
  Wrench,
  Home,
  Sun,
  CloudLightning,
  Bug,
  Anchor,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Meridian Estate Watch",
  description:
    "Explore our full range of professional estate watch and property monitoring services in Charlotte, NC.",
};

const services = [
  {
    icon: Eye,
    title: "Interior & Exterior Inspections",
    description:
      "Our core service. On every scheduled visit, we conduct a full walkthrough of your property — every room, every access point, every major system. We document with time-stamped photos and send you a detailed report the same day.",
    checklist: [
      "All doors, windows, and locks tested",
      "Interior rooms checked for water intrusion, pest activity, and damage",
      "Exterior perimeter walked and documented",
      "Garage, outbuildings, and pool/spa inspected",
      "Photo report delivered after every visit",
    ],
  },
  {
    icon: Wind,
    title: "HVAC & Climate Monitoring",
    description:
      "A failed air conditioner in a Charlotte summer can lead to devastating mold within days. We verify thermostat settings, check that your system is operating within safe parameters, and flag any warning signs before they escalate.",
    checklist: [
      "Thermostat settings verified and logged",
      "Air handler and visible ductwork inspected",
      "Filter condition noted",
      "Temperature and humidity readings recorded",
      "Unusual sounds or odors reported immediately",
    ],
  },
  {
    icon: Droplets,
    title: "Plumbing & Water System Checks",
    description:
      "Water damage is the leading cause of catastrophic home loss in vacant properties. We run all faucets, flush all toilets, inspect under sinks, and verify the main water shut-off valve — so a drip never becomes a flood.",
    checklist: [
      "All faucets run and toilets flushed",
      "Under-sink areas and visible pipes inspected",
      "Water heater condition checked",
      "Main shut-off valve location documented",
      "Exterior hose bibs and irrigation verified",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Access Verification",
    description:
      "Vacant homes are targets. Every Meridian inspection includes a full security sweep — testing every entry point, confirming alarm systems are active, and looking for signs of tampering, trespassing, or vandalism.",
    checklist: [
      "All entry doors and locks tested",
      "Windows and sliding doors secured",
      "Alarm system confirmed armed and functional",
      "Motion-sensitive lighting verified",
      "Signs of unauthorized entry or vandalism noted",
    ],
  },
  {
    icon: Wrench,
    title: "Vendor & Contractor Coordination",
    description:
      "When repairs are needed, you shouldn't have to fly home. We meet licensed contractors at your property, supervise the work, verify it's completed correctly, and send you a full update with photos — seamless and stress-free.",
    checklist: [
      "Contractor scheduling and access coordination",
      "On-site supervision during service visits",
      "Quality verification upon completion",
      "Receipts and documentation forwarded to you",
      "Network of trusted local contractors available",
    ],
  },
  {
    icon: Home,
    title: "Arrival Preparation",
    description:
      "After months away, coming home should feel like a relief — not a chore. Before you return, we prepare your property so it's comfortable and welcoming from the moment you walk through the door.",
    checklist: [
      "Thermostat adjusted to comfortable settings",
      "Property aired out and inspected",
      "Final condition report completed",
      "Supplies restocked at your request",
      "Coordination with cleaning service if needed",
    ],
  },
  {
    icon: CloudLightning,
    title: "Storm Preparation & Damage Assessment",
    description:
      "The Carolinas see their share of severe weather. We offer pre-storm preparation visits to secure loose items and verify protection measures, and rapid post-storm assessments so you know your home's status immediately.",
    checklist: [
      "Pre-storm exterior securing",
      "Shutters, covers, and tarps verified",
      "Post-storm damage walk and photo documentation",
      "Emergency contractor dispatch if needed",
      "Insurance documentation support",
    ],
  },
  {
    icon: Sun,
    title: "Seasonal Property Services",
    description:
      "Opening and closing a seasonal property is a multi-step process. We manage the full checklist — whether you're heading north for the summer or returning south for the winter — so nothing gets missed.",
    checklist: [
      "Seasonal opening and closing checklists",
      "Appliance checks and restarts",
      "Water system activation or winterization",
      "Pool and spa seasonal preparation",
      "Landscaping and exterior readiness review",
    ],
  },
  {
    icon: Bug,
    title: "Pest & Environmental Monitoring",
    description:
      "Pests and mold thrive in unoccupied homes. We look for early warning signs on every visit — evidence of insect or rodent activity, unusual odors, moisture accumulation, or visible mold — and act quickly when found.",
    checklist: [
      "Pest activity evidence checked throughout",
      "Moisture and humidity levels monitored",
      "Visible mold or mildew noted and reported",
      "Pest control contractor referral available",
      "Foundation and crawl space access verified",
    ],
  },
  {
    icon: Anchor,
    title: "Marine Management & Maintenance",
    description:
      "Your boat or dock deserves the same professional care as your home. We monitor your vessel and waterfront property while you're away — checking for water intrusion, securing lines, and coordinating maintenance so everything is ready when you are.",
    checklist: [
      "Vessel checked for water intrusion and bilge operation",
      "Mooring lines, fenders, and covers inspected and secured",
      "Dock, lift, and waterfront structures examined",
      "Battery, shore power, and systems verified",
      "Cleaning, detailing, and repair coordination available",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Our Estate Watch Services
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto">
            Every service we offer is built around one promise: your home will
            be monitored, documented, and protected — no matter how long
            you&apos;re away.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
          {services.map(({ icon: Icon, title, description, checklist }, i) => (
            <div
              key={title}
              className={`grid md:grid-cols-2 gap-10 items-start ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center mb-5">
                  <Icon size={26} className="text-gold-400" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  {title}
                </h2>
                <p className="text-navy-600 leading-relaxed">{description}</p>
              </div>
              <div className={`bg-navy-50 rounded-xl p-6 ${i % 2 === 1 ? "[direction:ltr]" : ""}`}>
                <p className="text-xs font-semibold text-navy-400 uppercase tracking-widest mb-4">
                  What&apos;s Included
                </p>
                <ul className="space-y-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-navy-700">
                      <CheckCircle
                        size={16}
                        className="text-gold-500 mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-500 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-navy-800 text-lg mb-8">
            Every property is different. We&apos;ll walk your home with you,
            listen to your concerns, and recommend a plan that makes sense for
            your situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-10 py-4 rounded text-lg transition-colors"
          >
            Schedule a Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
