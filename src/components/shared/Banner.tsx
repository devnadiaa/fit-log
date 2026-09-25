import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
});

const Banner = () => {
  return (
    <section className="w-full bg-[#07080a] px-4 py-1 md:px-6">
      <div className="mx-auto flex min-h-[448px] w-full max-w-[1232px] flex-col items-center justify-between rounded-none bg-[#121316] px-8 py-10 md:flex-row md:px-12 md:py-10">
        <div className="flex flex-1 flex-col items-start text-left">
          <span className="mb-4 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            Workout Library
          </span>

          <h1
            className={`${oswald.className} mb-5 text-4xl font-bold uppercase leading-[0.98] tracking-tight text-white md:text-[50px]`}
          >
            Train with intent. Log
            <br />
            every set.
          </h1>

          <p className="mb-6 max-w-[430px] font-sans text-xs font-medium leading-relaxed text-zinc-400 md:text-[13px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 font-sans text-[10px] font-extrabold uppercase tracking-wider text-black transition-colors hover:bg-[#bbf200]"
          >
            Browse Workouts
            <ArrowDown size={14} />
          </a>
        </div>

        <div className="flex w-full flex-1 justify-center md:justify-end">
          <div className="flex aspect-square w-full max-w-[300px] items-center justify-center">
            <Image
              src="/assets/banner.png"
              alt="Workout Figure"
              width={320}
              height={320}
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