import Layout from "@/components/ui/Layout";

export default function SpecialistProfile() {
  return (
    <Layout title="Specialist Profile">
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
    </Layout>
  );
}