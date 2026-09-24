"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      const planData = localStorage.getItem("fitlog-plan");
      const savedData = localStorage.getItem("fitlog-saved");

      setPlanCount(planData ? JSON.parse(planData).length : 0);
      setSavedCount(savedData ? JSON.parse(savedData).length : 0);
    };

    updateCounts();

    const interval = setInterval(updateCounts, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const isWorkoutActive = pathname === "/";
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#07080a]">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 md:px-12">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={22}
            height={22}
            className="h-5.5 w-5.5 object-contain"
          />

          <span className="font-sans text-[13px] font-black uppercase tracking-widest text-white">
            FitLog
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-zinc-800/20 bg-[#121418]/40 p-1 sm:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-1.5 text-[11px] font-bold transition-all ${
              isWorkoutActive
                ? "border border-[#ccff00]/10 bg-[#1b250a] text-[#ccff00] shadow-[0_0_20px_rgba(204,255,0,0.12)]"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-1.5 text-[11px] font-bold transition-all ${
              isMyPlanActive
                ? "border border-[#ccff00]/10 bg-[#1b250a] text-[#ccff00] shadow-[0_0_20px_rgba(204,255,0,0.12)]"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 text-[11px] font-medium">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 sm:gap-2"
          >
            <span>Plan</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ccff00] text-[10px] font-black text-black">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-200 sm:gap-2"
          >
            <span>Saved</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-zinc-700 bg-[#121418]/30 text-[10px] font-bold text-zinc-500">
              {savedCount}
            </span>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center border-t border-zinc-900 px-4 py-2 sm:hidden">
        <div className="flex w-full items-center justify-center gap-1 rounded-full border border-zinc-800/20 bg-[#121418]/40 p-1">
          <Link
            href="/"
            className={`flex-1 rounded-full px-4 py-1.5 text-center text-[11px] font-bold transition-all ${
              isWorkoutActive
                ? "bg-[#1b250a] text-[#ccff00]"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`flex-1 rounded-full px-4 py-1.5 text-center text-[11px] font-bold transition-all ${
              isMyPlanActive
                ? "bg-[#1b250a] text-[#ccff00]"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            My Plan
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
