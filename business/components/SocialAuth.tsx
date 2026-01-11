import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


export default function SocialAuth({ text }: { text: string }) {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-3 text-slate-400 text-sm mb-4">
        <span className="flex-1 h-px bg-slate-800" />
        {text}
        <span className="flex-1 h-px bg-slate-800" />
      </div>

      <div className="flex justify-center gap-4">
        <button className="hover:shadow shadow-accent hover:cursor-pointer">
          <FcGoogle size={24} />
        </button>
        <button className="hover:shadow shadow-accent hover:cursor-pointer">
          <FaFacebookSquare size={24} color="#1877F2" />
        </button>
        <button className="hover:shadow shadow-accent hover:cursor-pointer">
          <FaApple size={24} />
        </button>
      </div>
    </div>
  )
}
