import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const skills: string[] = [
  "Web Development",
  "Mobile Apps",
  "UI / UX Design",
  "Graphic Design",
  "Branding",
  "Content Writing",
  "Copywriting",
  "Translation",
  "SEO",
  "Digital Marketing",
  "Social Media Management",
  "Video Editing",
  "Motion Graphics",
  "Data Analysis",
  "AI & Automation",
  "Machine Learning",
  "Virtual Assistance",
  "Customer Support",
  "Accounting",
  "Online Tutoring",
  "Game Development",
  "No-Code / Low-Code",
  "Cybersecurity",
  "Cloud Services",
];

export default function App() {
  return (
    <main className="min-h-screen bg-slate-800 text-slate-200">
      {/* ================= Navbar ================= */}
      <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={36} height={36} />
            <span className="text-lg font-semibold">WorkBridge</span>
          </div>

          <div className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a className="hover:text-emerald-400" href="#features">
              Features
            </a>
            <a className="hover:text-emerald-400" href="#how">
              How it works
            </a>
            <a className="hover:text-emerald-400" href="#talent">
              Talent
            </a>
            <a className="hover:text-emerald-400" href="#clients">
              Clients
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-slate-300 hover:text-emerald-400"
            >
              <Link href={'auth/sign-in'}>Sign in</Link>
            </Button>
            <Button className="bg-linear-to-r from-emerald-500 to-emerald-400 text-emerald-900">
              <Link href={'auth/sign-up'}>Sign up</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* ================= Hero ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Turn your skills into real opportunities
              <span
                className="
                  block mt-3
                  bg-linear-to-r from-emerald-500 to-emerald-400
                  bg-clip-text text-transparent
                  text-2xl md:text-3xl
                  font-mono font-semibold tracking-widest
                "
              >
                OR
              </span>
              Hire top talent in minutes
            </h1>

            <p className="max-w-xl text-slate-300">
              A smart business services platform powered by AI for faster matching,
              trusted profiles, and clearer decisions.
            </p>

            <Button
              size="lg"
              className="bg-linear-to-r from-emerald-500 to-emerald-400 text-emerald-900"
            >
              <Link href={'auth/sign-up'}>Get Started</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-emerald-400/20 blur-2xl" />
            <Image
              src="/people.png"
              alt="Specialists-Clients collaboration"
              width={700}
              height={500}
              className="relative rounded-3xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* ================= Features ================= */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Platform Features
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              [
                "AI Skill Matching",
                "Smart algorithms match clients with the best talent.",
              ],
              [
                "Verified Profiles",
                "AI-based validation and trust indicators.",
              ],
              ["Fast Hiring", "Hire faster with clear proposals and insights."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-slate-800 p-6"
              >
                <h3 className="mb-2 font-semibold text-emerald-400">{title}</h3>
                <p className="text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= How it works ================= */}
      <section id="how" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            How It Works
          </h2>

          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div>
              <p className="mb-2 text-xl font-semibold">1. Post or Join</p>
              <p className="text-slate-400">
                Clients post jobs, Service Providers create profiles.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xl font-semibold">2. AI Matching</p>
              <p className="text-slate-400">
                AI analyzes skills and requirements.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xl font-semibold">3. Collaborate</p>
              <p className="text-slate-400">Work online and deliver results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Talent ================= */}
      <section id="talent" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Talent & Online Services
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}  
                className="rounded-xl border border-slate-500/20 bg-slate-500/10 p-4 text-center text-sm font-medium text-slate-400"
              >
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Clients ================= */}
      <section id="clients" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Built for Clients
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Hire faster, reduce risk, and build long-term remote teams using
            AI-powered insights.
          </p>
        </div>
      </section>
    </main>
  );
}




function AIBadge({ label }: { label: string }) {
  return (
    <span className="
      inline-flex items-center gap-1
      rounded-full
      bg-green-500/10
      px-3 py-1
      text-xs
      font-medium
      text-green-400
      border border-green-500/20
    ">
      🤖 {label}
    </span>
  );
}
