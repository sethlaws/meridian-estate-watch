import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Meridian Estate Watch"
            className="h-10 w-auto mb-4"
          />
          <p className="text-sm leading-relaxed text-navy-300">
            Professional estate watch and property monitoring services. We protect
            your home while you&apos;re away — so you can travel with complete
            peace of mind.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Property Inspections",
              "Interior & Exterior Checks",
              "HVAC & Plumbing Monitoring",
              "Security Verification",
              "Vendor Coordination",
              "Storm Preparation",
              "Arrival Preparation",
              "Marine Management & Maintenance",
            ].map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" />
              <span>Charlotte, NC & Surrounding Areas</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-gold-400 shrink-0" />
              <a
                href="tel:+17048791198"
                className="hover:text-white transition-colors"
              >
                1-704-879-1198
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-gold-400 shrink-0" />
              <a
                href="mailto:info@meridianestatewatch.com"
                className="hover:text-white transition-colors"
              >
                info@meridianestatewatch.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800 py-5 text-center text-xs text-navy-500">
        © {new Date().getFullYear()} Meridian Estate Watch, a Subsidiary of
        Meridian Consulting Group LLC. All rights reserved.
      </div>
    </footer>
  );
}
