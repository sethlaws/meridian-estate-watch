import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  CHECKLIST_ITEMS,
  STATUS_LABELS,
  STATUS_STYLES,
  formatDate,
  type Photo,
  type Visit,
} from "@/lib/portal";

export const dynamic = "force-dynamic";

function statusTone(value: string): string {
  const v = value.toLowerCase();
  if (v.includes("issue") || v.includes("problem") || v.includes("flag") || v.includes("fail"))
    return "text-red-700 bg-red-50 border-red-200";
  if (v.includes("n/a") || v.includes("not checked"))
    return "text-navy-500 bg-navy-50 border-navy-100";
  return "text-green-800 bg-green-50 border-green-200";
}

export default async function VisitPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  // RLS returns the visit only if its property belongs to the logged-in client.
  const { data: visit } = await supabase
    .from("visits")
    .select("id, property_id, inspector_name, visit_date, status, checklist_data, created_at")
    .eq("id", id)
    .maybeSingle();

  if (!visit) notFound();
  const v = visit as Visit;

  const { data: property } = await supabase
    .from("properties")
    .select("id, address, nickname")
    .eq("id", v.property_id)
    .maybeSingle();

  const { data: photoRows } = await supabase
    .from("photos")
    .select("id, visit_id, storage_url, caption")
    .eq("visit_id", id);

  const photos = (photoRows ?? []) as Photo[];

  // Create short-lived signed URLs for the private photo bucket.
  const signed = await Promise.all(
    photos.map(async (p) => {
      const { data } = await supabase.storage
        .from("visit-photos")
        .createSignedUrl(p.storage_url, 60 * 60);
      return { ...p, url: data?.signedUrl ?? "" };
    })
  );

  const checklist = v.checklist_data ?? {};
  const entries = CHECKLIST_ITEMS.filter((item) => item.key in checklist).map(
    (item) => ({ label: item.label, value: checklist[item.key] })
  );
  // Include any extra keys not in the standard list.
  Object.keys(checklist).forEach((k) => {
    if (!CHECKLIST_ITEMS.some((i) => i.key === k)) {
      entries.push({ label: k.replace(/_/g, " "), value: checklist[k] });
    }
  });

  return (
    <div>
      <Link
        href={`/portal/property/${v.property_id}`}
        className="text-sm text-navy-500 hover:text-navy-900 transition-colors"
      >
        ← Back to visit history
      </Link>

      <div className="mt-3 mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Visit Report</h1>
          <p className="text-navy-500">
            {property?.nickname || property?.address} · {formatDate(v.visit_date)}
          </p>
          {v.inspector_name && (
            <p className="text-navy-400 text-sm mt-1">
              Inspector: {v.inspector_name}
            </p>
          )}
        </div>
        <span
          className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full ${STATUS_STYLES[v.status]}`}
        >
          {STATUS_LABELS[v.status]}
        </span>
      </div>

      {v.status === "issue_flagged" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 text-red-800 text-sm">
          ⚠️ An issue was flagged during this visit. See the highlighted items
          below — we&apos;ll be in touch with details and next steps.
        </div>
      )}

      {/* Checklist */}
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-4">
        Inspection Checklist
      </h2>
      {entries.length === 0 ? (
        <p className="text-navy-500 text-sm mb-10">
          No checklist details recorded for this visit.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {entries.map((e) => (
            <div
              key={e.label}
              className={`border rounded-lg p-4 ${statusTone(e.value || "")}`}
            >
              <p className="text-xs font-semibold uppercase tracking-wide opacity-70 capitalize">
                {e.label}
              </p>
              <p className="font-medium mt-1">{e.value || "—"}</p>
            </div>
          ))}
        </div>
      )}

      {/* Photos */}
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-4">
        Photos ({signed.length})
      </h2>
      {signed.length === 0 ? (
        <p className="text-navy-500 text-sm">No photos for this visit.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {signed.map((p) => (
            <figure
              key={p.id}
              className="bg-white border border-navy-100 rounded-xl overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.url}
                alt={p.caption || "Visit photo"}
                className="w-full h-44 object-cover"
              />
              {p.caption && (
                <figcaption className="text-navy-600 text-xs p-3">
                  {p.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
