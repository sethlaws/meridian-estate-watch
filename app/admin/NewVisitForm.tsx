"use client";

import { useState, FormEvent } from "react";
import { CHECKLIST_ITEMS } from "@/lib/portal";
import { createVisit } from "./actions";

type PropertyOption = {
  id: string;
  address: string;
  nickname: string | null;
  clients: { name: string }[] | null;
};

const STATUS_OPTIONS = [
  { value: "completed", label: "Completed" },
  { value: "issue_flagged", label: "Issue Flagged" },
  { value: "scheduled", label: "Scheduled" },
];

const CHECKLIST_VALUES = ["OK", "Issue", "N/A"];

export default function NewVisitForm({
  properties,
}: {
  properties: PropertyOption[];
}) {
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("saving");
    setMessage("");
    const fd = new FormData(form);
    const res = await createVisit(fd);
    if (res.ok) {
      setStatus("done");
      setMessage("Visit saved successfully.");
      form.reset();
    } else {
      setStatus("error");
      setMessage(res.error || "Something went wrong.");
    }
  }

  const labelCls = "block text-sm font-medium text-navy-700 mb-1.5";
  const inputCls =
    "w-full border border-navy-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-navy-100 rounded-xl p-6 space-y-5"
    >
      <div>
        <label className={labelCls} htmlFor="property_id">
          Property
        </label>
        <select id="property_id" name="property_id" required className={inputCls}>
          <option value="">Select a property…</option>
          {properties.map((p) => (
            <option key={p.id} value={p.id}>
              {p.clients?.[0]?.name ? `${p.clients[0].name} — ` : ""}
              {p.nickname ? `${p.nickname} (${p.address})` : p.address}
            </option>
          ))}
        </select>
        {properties.length === 0 && (
          <p className="text-xs text-red-600 mt-1">
            No properties exist yet. Add a client + property in the Supabase
            table editor first.
          </p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls} htmlFor="visit_date">
            Visit Date
          </label>
          <input
            id="visit_date"
            name="visit_date"
            type="date"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="status">
            Status
          </label>
          <select
            id="status"
            name="status"
            className={inputCls}
            defaultValue="completed"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="inspector_name">
          Inspector Name
        </label>
        <input
          id="inspector_name"
          name="inspector_name"
          type="text"
          placeholder="e.g. Seth"
          className={inputCls}
        />
      </div>

      <div>
        <p className={labelCls}>Checklist</p>
        <div className="space-y-2">
          {CHECKLIST_ITEMS.map((item) => (
            <div key={item.key} className="grid grid-cols-2 gap-3 items-center">
              <span className="text-sm text-navy-700">{item.label}</span>
              <select
                name={`checklist_${item.key}`}
                className={inputCls}
                defaultValue=""
              >
                <option value="">—</option>
                {CHECKLIST_VALUES.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="photos">
          Photos
        </label>
        <input
          id="photos"
          name="photos"
          type="file"
          accept="image/*"
          multiple
          className="block w-full text-sm text-navy-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-navy-100 file:text-navy-700 file:font-semibold"
        />
        <p className="text-xs text-navy-400 mt-1">
          Select multiple photos at once. (Captions can be added later.)
        </p>
      </div>

      {message && (
        <p
          className={`text-sm ${status === "error" ? "text-red-600" : "text-green-700"}`}
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "saving"}
        className="w-full bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-navy-900 font-bold py-3 rounded-lg transition-colors"
      >
        {status === "saving" ? "Saving…" : "Save Visit"}
      </button>
    </form>
  );
}
