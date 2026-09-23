import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#07080a] border-b border-zinc-900 sticky top-0 z-50">
      <div className="w-full flex h-16 items-center justify-between px-6 md:px-12">
        
        <Link href="/" className="flex items-center gap-2.5">
          <Image 
            src="/assets/logo.png" 
            alt="FitLog" 
            width={22} 
            height={22} 
            className="h-5.5 w-5.5 object-contain" 
          />
          <span className="text-[13px] font-black tracking-widest text-white uppercase font-sans">
            FitLog
          </span>
        </Link>

        <div className="flex items-center gap-1 bg-[#121418]/40 p-1 rounded-full border border-zinc-800/20">
          <Link 
            href="/" 
            className="rounded-full bg-[#1b250a] px-4 py-1.5 text-[11px] font-bold text-[#ccff00] border border-[#ccff00]/10 shadow-[0_0_20px_rgba(204,255,0,0.12)] transition-all"
          >
            Workouts
          </Link>
          <Link 
            href="/my-plan" 
            className="px-4 py-1.5 text-[11px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-6 text-[11px] font-medium">
          <Link href="/my-plan" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors">
            <span className="text-zinc-400">Plan</span>
            <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#ccff00] text-[10px] font-black text-black">
              0
            </span>
          </Link>
          
          <Link href="/my-plan" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors">
            <span className="text-zinc-400">Saved</span>
            <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full border border-zinc-700 text-[10px] text-zinc-500 font-bold bg-[#121418]/30">
              0
            </span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;