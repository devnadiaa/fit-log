import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
});

const Banner = () => {
  return (
    <section className="w-full bg-[#07080a] px-6 py-4 md:px-12">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-between gap-12 rounded-2xl bg-[#121316] px-8 py-14 md:flex-row md:px-16 md:py-24">
        <div className="flex flex-[1.2] flex-col items-start text-left">
          <span className="mb-5 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            Workout Library
          </span>

          <h1
            className={`${oswald.className} mb-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white md:text-[58px]`}
          >
            Train with intent. Log
            <br />
             every set.
          </h1>

          <p className="mb-8 max-w-md font-sans text-sm font-medium leading-relaxed text-zinc-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-6 py-4 font-sans text-[11px] font-extrabold uppercase tracking-wider text-black transition-colors hover:bg-[#bbf200]"
          >
            Browse Workouts
            <ArrowDown size={15} />
          </a>
        </div>

        <div className="flex w-full flex-1 justify-center md:justify-end">
          <div className="flex aspect-square w-full max-w-[420px] items-center justify-center">
            <Image
              src="/assets/banner.png"
              alt="Workout Figure"
              width={445}
              height={445}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
