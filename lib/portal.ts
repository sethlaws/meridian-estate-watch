// Shared types + helpers for the client portal.

export type VisitStatus = "scheduled" | "completed" | "issue_flagged";

export type Visit = {
  id: string;
  property_id: string;
  inspector_name: string | null;
  visit_date: string;
  status: VisitStatus;
  checklist_data: Record<string, string> | null;
  created_at: string;
};

export type Property = {
  id: string;
  client_id: string;
  address: string;
  nickname: string | null;
  notes: string | null;
};

export type Photo = {
  id: string;
  visit_id: string;
  storage_url: string;
  caption: string | null;
};

export const STATUS_LABELS: Record<VisitStatus, string> = {
  scheduled: "Scheduled",
  completed: "Completed",
  issue_flagged: "Issue Flagged",
};

export const STATUS_STYLES: Record<VisitStatus, string> = {
  scheduled: "bg-navy-100 text-navy-700",
  completed: "bg-green-100 text-green-800",
  issue_flagged: "bg-red-100 text-red-800",
};

export function formatDate(d: string): string {
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Standard inspection checklist items (keys stored in visits.checklist_data).
export const CHECKLIST_ITEMS: { key: string; label: string }[] = [
  { key: "roofline", label: "Roofline & Exterior" },
  { key: "power", label: "Power & Electrical" },
  { key: "windows_doors", label: "Windows & Doors" },
  { key: "interior_moisture", label: "Interior / Moisture" },
  { key: "plumbing", label: "Plumbing & Water" },
  { key: "hvac", label: "HVAC & Climate" },
  { key: "security", label: "Security & Access" },
  { key: "pests", label: "Pests & Environment" },
];
