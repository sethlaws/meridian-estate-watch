"use client";

import { FormEvent } from "react";

const RECIPIENT = "info@meridianestatewatch.com";

const propertyLabels: Record<string, string> = {
  primary: "Primary Home (Extended Travel)",
  second: "Second / Vacation Home",
  seasonal: "Seasonal / Snowbird Property",
  estate: "Estate / Executor Property",
  vacant: "Vacant / For-Sale Property",
  other: "Other",
};

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = (data.get("firstName") as string)?.trim() || "";
    const lastName = (data.get("lastName") as string)?.trim() || "";
    const email = (data.get("email") as string)?.trim() || "";
    const phone = (data.get("phone") as string)?.trim() || "";
    const propertyKey = (data.get("propertyType") as string) || "";
    const property = propertyLabels[propertyKey] || "Not specified";
    const message = (data.get("message") as string)?.trim() || "";

    const subject = `Website Inquiry from ${firstName} ${lastName}`.trim();
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Property Type: ${property}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
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
        className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 rounded-lg transition-colors text-base"
      >
        Send Message
      </button>
      <p className="text-xs text-navy-400 text-center">
        We typically respond within one business day.
      </p>
    </form>
  );
}
