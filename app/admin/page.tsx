import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import NewVisitForm from "./NewVisitForm";

export const dynamic = "force-dynamic";

type PropertyOption = {
  id: string;
  address: string;
  nickname: string | null;
  clients: { name: string }[] | null;
};

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?redirect=/admin");

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile?.is_admin) {
    return (
      <div className="min-h-screen bg-navy-50 flex items-center justify-center p-6">
        <div className="bg-white border border-navy-100 rounded-xl p-8 max-w-md text-center">
          <h1 className="text-xl font-bold text-navy-900 mb-2">
            Admin access required
          </h1>
          <p className="text-navy-500 text-sm">
            Your account ({user.email}) is not an admin. Ask for the admin flag
            to be enabled on your profile.
          </p>
        </div>
      </div>
    );
  }

  const { data: properties } = await supabase
    .from("properties")
    .select("id, address, nickname, clients(name)")
    .order("created_at", { ascending: true });

  return (
    <div className="min-h-screen bg-navy-50 py-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl font-bold text-navy-900 mb-1">Log a Visit</h1>
        <p className="text-navy-500 text-sm mb-8">
          Internal tool — enter checklist results and upload photos for a
          completed visit.
        </p>
        <NewVisitForm properties={(properties ?? []) as PropertyOption[]} />
      </div>
    </div>
  );
}
