import { MdVerifiedUser } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { PiReadCvLogoFill } from "react-icons/pi";

export default function CompleteProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800">
      <div className="w-full max-w-2xl bg-slate-900 rounded-lg shadow-2xl p-6 md:p-12 border border-slate-700">
        <h1 className="text-2xl font-semibold text-center text-slate-200 mb-1">
          Complete Your Profile(Later)
        </h1>
        <p className="text-slate-400 text-center mb-6">
          Build Trust & Grow Your Success
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="border flex gap-3 rounded-lg p-4 border-slate-500/20 bg-slate-500/10">
            <div>
              <MdVerifiedUser className="text-5xl text-green-400" />
            </div>
            <div>
              <p className="font-medium text-slate-300">Get AI Verified</p>
              <p className="text-sm text-slate-400">Boost Your Profile Credibility</p>
            </div>
          </div>

          <div className="border flex gap-3 rounded-lg p-4 border-slate-500/20 bg-slate-500/10">
            <div>
              <FaUser className="text-5xl text-green-400" />
            </div>
            <div>
              <p className="font-medium text-slate-300">Add Profile Picture</p>
              <p className="text-sm text-slate-400">Make a Great First Impression</p>
            </div>
          </div>
          <div className="border flex gap-3 rounded-lg p-4 border-slate-500/20 bg-slate-500/10">
            <div>
              <PiReadCvLogoFill className="text-5xl text-green-400" />
            </div>
            <div>
              <p className="font-medium text-slate-300">Upload Your CV</p>
              <p className="text-sm text-slate-400">Boost Your Credibility</p>
            </div>
          </div>
          <div className="border flex gap-3 rounded-lg p-4 border-slate-500/20 bg-slate-500/10">
            <div>
              <IoCard className="text-5xl text-green-400" />
            </div>
            <div>
              <p className="font-medium text-slate-300">Add Payment Method</p>
              <p className="text-sm text-slate-400">Get Paid Seamlessly</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 border text-slate-300 rounded-lg py-3">
            Skip for Now
          </button>
          <button className="flex-1 bg-green-600 text-white rounded-lg py-3">
            Complete Profile
          </button>
        </div>
      </div>
    </div>
  );
}
