import Layout from "@/components/ui/Layout";

export default function HomeAfterLogin() {
  return (
    <Layout title="Welcome back">
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
    </Layout>
  );
}