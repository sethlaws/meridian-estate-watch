import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  STATUS_LABELS,
  STATUS_STYLES,
  formatDate,
  type VisitStatus,
} from "@/lib/portal";

export const dynamic = "force-dynamic";

type PropertyRow = {
  id: string;
  address: string;
  nickname: string | null;
  visits: { status: VisitStatus; visit_date: string }[];
};

export default async function DashboardPage() {
  const supabase = await createClient();

  // RLS ensures only the client's own properties come back.
  const { data: properties } = await supabase
    .from("properties")
    .select("id, address, nickname, visits(status, visit_date)")
    .order("created_at", { ascending: true });

  const rows = (properties ?? []) as PropertyRow[];

  return (
    <div>
      <h1 className="text-2xl font-bold text-navy-900 mb-1">Your Properties</h1>
      <p className="text-navy-500 text-sm mb-8">
        Select a property to view its visit history and reports.
      </p>

      {rows.length === 0 ? (
        <div className="bg-white border border-navy-100 rounded-xl p-8 text-center text-navy-500">
          No properties are linked to your account yet. Please contact us if you
          believe this is an error.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-5">
          {rows.map((p) => {
            const latest = [...p.visits].sort((a, b) =>
              b.visit_date.localeCompare(a.visit_date)
            )[0];
            return (
              <Link
                key={p.id}
                href={`/portal/property/${p.id}`}
                className="block bg-white border border-navy-100 rounded-xl p-6 hover:shadow-md hover:border-navy-200 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {p.nickname && (
                      <h2 className="font-bold text-navy-900">{p.nickname}</h2>
                    )}
                    <p
                      className={
                        p.nickname
                          ? "text-navy-500 text-sm"
                          : "font-bold text-navy-900"
                      }
                    >
                      {p.address}
                    </p>
                  </div>
                  {latest && (
                    <span
                      className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLES[latest.status]}`}
                    >
                      {STATUS_LABELS[latest.status]}
                    </span>
                  )}
                </div>
                <p className="text-navy-400 text-xs mt-4">
                  {latest
                    ? `Last visit: ${formatDate(latest.visit_date)}`
                    : "No visits recorded yet"}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
