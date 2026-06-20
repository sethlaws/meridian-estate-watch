"use client";

import { useState, FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

function LoginForm() {
  const params = useSearchParams();
  const redirect = params.get("redirect") || "/portal";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(
          redirect
        )}`,
      },
    });
    if (error) {
      setError(error.message);
      setStatus("error");
    } else {
      setStatus("sent");
    }
  }

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-navy-900">Client Portal</h1>
          <p className="text-navy-500 text-sm mt-2">
            Meridian Estate Watch — sign in to view your property reports.
          </p>
        </div>

        {status === "sent" ? (
          <div className="text-center bg-navy-50 border border-navy-100 rounded-xl p-6">
            <div className="text-3xl mb-3">📬</div>
            <h2 className="font-bold text-navy-900 mb-2">Check your email</h2>
            <p className="text-navy-600 text-sm">
              We sent a secure sign-in link to <strong>{email}</strong>. Click it
              to access your portal.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-navy-700 mb-1.5"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-navy-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gold-500 hover:bg-gold-600 disabled:opacity-60 text-navy-900 font-bold py-3 rounded-lg transition-colors"
            >
              {status === "sending" ? "Sending..." : "Send me a sign-in link"}
            </button>
            <p className="text-xs text-navy-400 text-center">
              No account yet? Contact us to get set up — accounts are created when
              we onboard you.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
