import Layout from "@/components/ui/Layout"
import { Button } from "@/components/ui/button";

export default function ClientDashboard() {
  return (
    <Layout title="Client Dashboard">
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
    </Layout>
  );
}