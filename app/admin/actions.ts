"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export type ActionResult = { ok: boolean; error?: string; visitId?: string };

// Creates a completed visit + uploads photos. Admin-only (enforced here AND by RLS).
export async function createVisit(formData: FormData): Promise<ActionResult> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { ok: false, error: "Not signed in." };

  // Server-side admin check (don't trust the client).
  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .maybeSingle();
  if (!profile?.is_admin) return { ok: false, error: "Admin access required." };

  const propertyId = String(formData.get("property_id") || "");
  const visitDate = String(formData.get("visit_date") || "");
  const inspectorName = String(formData.get("inspector_name") || "");
  const status = String(formData.get("status") || "completed");
  if (!propertyId || !visitDate) {
    return { ok: false, error: "Property and visit date are required." };
  }

  // Collect checklist_<key> fields into a JSON object.
  const checklist: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (key.startsWith("checklist_") && String(value).trim()) {
      checklist[key.replace("checklist_", "")] = String(value);
    }
  }

  const { data: visit, error: visitErr } = await supabase
    .from("visits")
    .insert({
      property_id: propertyId,
      visit_date: visitDate,
      inspector_name: inspectorName || null,
      status,
      checklist_data: Object.keys(checklist).length ? checklist : null,
    })
    .select("id")
    .single();

  if (visitErr || !visit) {
    return { ok: false, error: visitErr?.message || "Failed to save visit." };
  }

  // Upload photos (stored at <visit_id>/<file> so RLS path checks work).
  const files = formData.getAll("photos") as File[];
  const captions = formData.getAll("captions") as string[];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!file || file.size === 0) continue;
    const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const path = `${visit.id}/${crypto.randomUUID()}-${safe}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    const { error: upErr } = await supabase.storage
      .from("visit-photos")
      .upload(path, buffer, { contentType: file.type || "image/jpeg" });
    if (upErr) continue;

    await supabase.from("photos").insert({
      visit_id: visit.id,
      storage_url: path,
      caption: captions[i]?.trim() || null,
    });
  }

  revalidatePath("/portal");
  return { ok: true, visitId: visit.id };
}
