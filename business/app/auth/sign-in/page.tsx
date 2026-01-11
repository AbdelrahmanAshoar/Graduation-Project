import SocialAuth from "@/components/SocialAuth"
import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800 text-slate-200">
      <div className="w-full max-w-lg bg-slate-900 rounded-md text-center shadow-2xl p-6 md:p-12 border border-slate-700">
      <h1 className="text-2xl font-semibold text-slate-200 mb-1">Sign In to Your Account</h1>
        <form className="space-y-4 pt-6">
          <input
            type="text"
            placeholder="Email or Username"
            className="
                w-full px-4 py-3 my-3 rounded-sm
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
            placeholder="Password"
            className="
                w-full px-4 py-3 my-3 rounded-sm
                bg-slate-800
                border border-slate-700
                text-slate-200
                placeholder:text-slate-500
                focus:outline-none
                focus:ring-1 focus:ring-slate-500
            "
          />

          <div className="text-right">
            <Link
              href="#"
              className="text-sm text-green-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700">
            Sign In
          </button>
        </form>

        <SocialAuth text="Or continue with" />

        <p className="text-center text-sm text-slate-500 mt-6">
          New to the platform?{" "}
          <Link href="/auth/sign-up" className="text-green-600">
            Join Now
          </Link>
        </p>
      </div>
    </div>
  )
}
