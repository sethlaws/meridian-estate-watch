import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact a Charlotte Home Watch Professional",
  description:
    "Contact Meridian Estate Watch to schedule a free home watch consultation for your Charlotte, NC area property. Call 1-704-879-1198 or send us a message.",
  alternates: { canonical: "https://meridianestatewatch.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
            Let&apos;s Talk
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Schedule Your Free Consultation
          </h1>
          <p className="text-navy-200 text-lg max-w-xl mx-auto">
            No pressure, no obligation. We&apos;ll walk your property, answer
            your questions, and put together a custom plan that fits your needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-8">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-navy-700" />
                </div>
                <div>
                  <p className="text-sm text-navy-400 font-medium mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+17048791198"
                    className="text-navy-900 font-semibold hover:text-gold-600 transition-colors"
                  >
                    1-704-879-1198
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-navy-700" />
                </div>
                <div>
                  <p className="text-sm text-navy-400 font-medium mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@meridianestatewatch.com"
                    className="text-navy-900 font-semibold hover:text-gold-600 transition-colors"
                  >
                    info@meridianestatewatch.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-navy-700" />
                </div>
                <div>
                  <p className="text-sm text-navy-400 font-medium mb-1">
                    Service Area
                  </p>
                  <p className="text-navy-900 font-semibold">
                    Charlotte, NC & Surrounding Communities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-navy-700" />
                </div>
                <div>
                  <p className="text-sm text-navy-400 font-medium mb-1">
                    Availability
                  </p>
                  <p className="text-navy-900 font-semibold">
                    Mon – Fri: 8 AM – 6 PM
                  </p>
                  <p className="text-navy-500 text-sm">
                    24/7 Emergency Contact Available for Clients
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-navy-50 border border-navy-100 rounded-xl p-6">
              <h3 className="font-bold text-navy-900 mb-2">
                What to Expect from Your Consultation
              </h3>
              <ul className="space-y-2 text-sm text-navy-600">
                {[
                  "We visit your property at your convenience",
                  "Full walkthrough with notes on your home's specific risks",
                  "Custom monitoring plan and visit frequency recommendation",
                  "Straightforward, transparent pricing — no surprises",
                  "No contracts required to get started",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold-500 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-8">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
