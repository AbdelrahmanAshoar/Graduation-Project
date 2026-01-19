import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
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
              <Link href={"auth/sign-in"}>Sign in</Link>
            </Button>
            <Button className="bg-linear-to-r from-emerald-500 to-emerald-400 text-emerald-900">
              <Link href={"auth/sign-up"}>Sign up</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
