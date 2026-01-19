import { Button } from "@/components/ui/button";

/* =========================
   Shared Layout
========================= */
function Layout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-800 text-slate-200">
      <header className="border-b border-slate-700 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold">{title}</h1>
          <Button className="bg-green-600 hover:bg-green-500 text-black">New Action</Button>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-6 py-10">{children}</section>
    </main>
  );
}

/* =========================
   Home After Login
========================= */
export function Home() {
  return (
    <DashboardLayout title="Welcome back">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-slate-700/60 p-6">
          <p className="text-sm text-slate-400">Active Projects</p>
          <p className="text-3xl font-bold">3</p>
        </div>
        <div className="rounded-xl bg-slate-700/60 p-6">
          <p className="text-sm text-slate-400">Messages</p>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="rounded-xl bg-slate-700/60 p-6">
          <p className="text-sm text-slate-400">AI Matches</p>
          <p className="text-3xl font-bold text-green-400">98%</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* =========================
   Specialist Dashboard
========================= */
export function SpecialistDashboard() {
  return (
    <DashboardLayout title="Specialist Dashboard">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl bg-slate-700/60 p-6">
          <h3 className="mb-4 font-semibold">Available Jobs</h3>
          <ul className="space-y-3 text-sm">
            <li className="rounded-lg bg-slate-800 p-3">Landing Page – React</li>
            <li className="rounded-lg bg-slate-800 p-3">Mobile App UI</li>
            <li className="rounded-lg bg-slate-800 p-3">AI Automation Script</li>
          </ul>
        </div>
        <div className="rounded-xl bg-slate-700/60 p-6">
          <h3 className="mb-4 font-semibold">Your Stats</h3>
          <p className="text-slate-400">Completed Projects: 24</p>
          <p className="text-slate-400">Rating: ⭐ 4.9</p>
          <p className="text-green-400 mt-2">AI Trust Score: High</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* =========================
   Client Dashboard
========================= */
export function ClientDashboard() {
  return (
    <DashboardLayout title="Client Dashboard">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl bg-slate-700/60 p-6">
          <h3 className="mb-4 font-semibold">Posted Jobs</h3>
          <ul className="space-y-3 text-sm">
            <li className="rounded-lg bg-slate-800 p-3">E-commerce Website</li>
            <li className="rounded-lg bg-slate-800 p-3">Brand Identity Design</li>
          </ul>
        </div>
        <div className="rounded-xl bg-slate-700/60 p-6">
          <h3 className="mb-4 font-semibold">AI Suggestions</h3>
          <p className="text-slate-400">3 specialists match your needs</p>
          <Button className="mt-4 bg-green-600 text-black hover:bg-green-500">View Matches</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* =========================
   Specialist Profile Page
========================= */
export function SpecialistProfile() {
  return (
    <DashboardLayout title="Specialist Profile">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-xl bg-slate-700/60 p-6 md:col-span-1">
          <div className="h-24 w-24 rounded-full bg-slate-500 mb-4" />
          <h3 className="font-semibold">Ahmed Hassan</h3>
          <p className="text-sm text-slate-400">Full Stack Developer</p>
          <span className="mt-3 inline-block rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs text-green-400">AI Verified</span>
        </div>
        <div className="rounded-xl bg-slate-700/60 p-6 md:col-span-2">
          <h3 className="mb-3 font-semibold">About</h3>
          <p className="text-slate-400 text-sm">
            Experienced developer specializing in React, Next.js, and AI-powered solutions.
          </p>
          <h4 className="mt-6 mb-2 font-semibold">Skills</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {["React", "Next.js", "Node.js", "AI Tools", "UI/UX"].map((s) => (
              <span key={s} className="rounded-full bg-slate-800 px-3 py-1">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
