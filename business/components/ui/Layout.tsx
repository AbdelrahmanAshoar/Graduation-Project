import { Button } from "./button";

export default function Layout({ title, children }: { title: string; children: React.ReactNode }) {
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