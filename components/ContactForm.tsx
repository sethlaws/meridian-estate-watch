"use client";

import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkoadonp";

const propertyLabels: Record<string, string> = {
  primary: "Primary Home (Extended Travel)",
  second: "Second / Vacation Home",
  seasonal: "Seasonal / Snowbird Property",
  estate: "Estate / Executor Property",
  vacant: "Vacant / For-Sale Property",
  other: "Other",
};

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Provide a friendly, readable property-type label to the email
    const propertyKey = (data.get("propertyType") as string) || "";
    data.set("propertyType", propertyLabels[propertyKey] || "Not specified");
    // Give the notification email a clear subject line
    const firstName = (data.get("firstName") as string)?.trim() || "";
    const lastName = (data.get("lastName") as string)?.trim() || "";
    data.set("_subject", `Website Inquiry from ${firstName} ${lastName}`.trim());

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-navy-50 border border-navy-100 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">
          Thank you — your message has been sent!
        </h3>
        <p className="text-navy-600 text-sm">
          We&apos;ve received your inquiry and will be in touch within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-navy-700 mb-1.5"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full border border-navy-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            placeholder="Jane"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-navy-700 mb-1.5"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full border border-navy-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-navy-700 mb-1.5"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-navy-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-navy-700 mb-1.5"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full border border-navy-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          placeholder="(000) 000-0000"
        />
      </div>

      <div>
        <label
          htmlFor="propertyType"
          className="block text-sm font-medium text-navy-700 mb-1.5"
        >
          Property Type
        </label>
        <select
          id="propertyType"
          name="propertyType"
          className="w-full border border-navy-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white"
        >
          <option value="">Select one...</option>
          <option value="primary">Primary Home (Extended Travel)</option>
          <option value="second">Second / Vacation Home</option>
          <option value="seasonal">Seasonal / Snowbird Property</option>
          <option value="estate">Estate / Executor Property</option>
          <option value="vacant">Vacant / For-Sale Property</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-700 mb-1.5"
        >
          Tell Us About Your Property
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border border-navy-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
          placeholder="Location, how long the property will be unoccupied, any specific concerns..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-gold-500 hover:bg-gold-600 disabled:opacity-60 disabled:cursor-not-allowed text-navy-900 font-bold py-4 rounded-lg transition-colors text-base"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 text-center">
          Sorry — something went wrong sending your message. Please try again, or
          email us directly at info@meridianestatewatch.com.
        </p>
      )}
      <p className="text-xs text-navy-400 text-center">
        We typically respond within one business day.
      </p>
    </form>
  );
}
