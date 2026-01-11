import Layout from "@/components/ui/Layout";

export default function SpecialistDashboard() {
  return (
    <Layout title="Specialist Dashboard">
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
    </Layout>
  );
}