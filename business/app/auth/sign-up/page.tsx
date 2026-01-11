import SocialAuth from "@/components/SocialAuth";
import Link from "next/link";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800">
      <div className="w-full max-w-xl bg-slate-900 rounded-md text-center shadow-2xl p-6 md:p-12 border border-slate-700">
        
        <h1 className="text-2xl font-semibold text-slate-200 mb-1">Join Now</h1>
        <p className="text-slate-400 mb-6">Create your account</p>

        <div className="grid grid-cols-2 gap-1 md:gap-3 mb-4">
          <button className="border rounded-md text-left bg-emerald-900 border-emerald-600 py-3 md:p-3 hover:border-emerald-500 transition cursor-pointer flex items-center justify-evenly md:gap-4">
            <div>
              <Image
                src="/bag.png"
                alt="Hire Specialists"
                width={32}
                height={32}
                className="w-8 h-8 object-contain opacity-80"
              />
            </div>
            <div>
              <p className="text-emerald-400 font-medium">I’m a Client</p>
              <p className="text-sm text-emerald-600">Hire Specialists</p>
            </div>
          </button>

          <button className="border rounded-md text-left bg-gray-700 border-bg-gray-600 py-3 md:p-3 hover:border-gray-500 transition cursor-pointer flex items-center justify-evenly md:gap-4">
            <div>
              <Image
                src="/laptop1.png"
                alt="Hire specialists"
                width={34}
                height={34}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <p className="text-gray-400 text-[16px]">I’m a Service Provider</p>
              <p className="text-sm text-gray-400 opacity-80">Find Work</p>
            </div>
          </button>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="
                w-full px-4 py-3 my-2 rounded-sm
                bg-slate-800
                border border-slate-700
                text-slate-200
                placeholder:text-slate-500
                focus:outline-none
                focus:ring-1 focus:ring-slate-500
            "
          />
          <input
            type="email"
            placeholder="Email Address"
            className="
                w-full px-4 py-3 my-2 rounded-sm
                bg-slate-800
                border border-slate-700
                text-slate-200
                placeholder:text-slate-500
                focus:outline-none
                focus:ring-1 focus:ring-slate-500
            "
          />
          <input
            type="password"
            placeholder="Create a Password"
            className="
                w-full px-4 py-3 my-2 rounded-sm
                bg-slate-800
                border border-slate-700
                text-slate-200
                placeholder:text-slate-500
                focus:outline-none
                focus:ring-1 focus:ring-slate-500
            "
          />

          <label className="flex items-start my-4 gap-2 text-sm text-slate-600">
            <input type="checkbox" className="mt-1" />I agree to the{" "}
            <span className="text-green-600">
              Terms of Service & Privacy Policy
            </span>
          </label>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700">
            Get Started
          </button>
        </form>

        <SocialAuth text="Or sign up with" />

        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-green-600">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
