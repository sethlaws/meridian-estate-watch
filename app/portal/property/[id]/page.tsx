import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  STATUS_LABELS,
  STATUS_STYLES,
  formatDate,
  type Property,
  type Visit,
} from "@/lib/portal";

export const dynamic = "force-dynamic";

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  // RLS returns the property only if it belongs to the logged-in client.
  const { data: property } = await supabase
    .from("properties")
    .select("id, client_id, address, nickname, notes")
    .eq("id", id)
    .maybeSingle();

  if (!property) notFound();
  const prop = property as Property;

  const { data: visits } = await supabase
    .from("visits")
    .select("id, property_id, inspector_name, visit_date, status, checklist_data, created_at")
    .eq("property_id", id)
    .order("visit_date", { ascending: false });

  const visitRows = (visits ?? []) as Visit[];

  return (
    <div>
      <Link
        href="/portal"
        className="text-sm text-navy-500 hover:text-navy-900 transition-colors"
      >
        ← Back to properties
      </Link>

      <div className="mt-3 mb-8">
        <h1 className="text-2xl font-bold text-navy-900">
          {prop.nickname || prop.address}
        </h1>
        {prop.nickname && <p className="text-navy-500">{prop.address}</p>}
      </div>

      <h2 className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-4">
        Visit History
      </h2>

      {visitRows.length === 0 ? (
        <div className="bg-white border border-navy-100 rounded-xl p-8 text-center text-navy-500">
          No visits have been logged for this property yet.
        </div>
      ) : (
        <ol className="relative border-l-2 border-navy-100 ml-2 space-y-6">
          {visitRows.map((v) => (
            <li key={v.id} className="ml-6">
              <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-gold-500 border-2 border-white" />
              <Link
                href={`/portal/visit/${v.id}`}
                className="block bg-white border border-navy-100 rounded-xl p-5 hover:shadow-md hover:border-navy-200 transition-all"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-bold text-navy-900">
                    {formatDate(v.visit_date)}
                  </p>
                  <span
                    className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[v.status]}`}
                  >
                    {STATUS_LABELS[v.status]}
                  </span>
                </div>
                {v.inspector_name && (
                  <p className="text-navy-500 text-sm mt-1">
                    Inspector: {v.inspector_name}
                  </p>
                )}
                <p className="text-gold-600 text-sm font-semibold mt-3">
                  View full report →
                </p>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
