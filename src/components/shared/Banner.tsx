import Image from "next/image";

const Banner = () => {
  return (
    <section className="w-full bg-[#07080a] px-6 md:px-12 py-4 flex justify-center">
      <div className="w-full max-w-[1440px] bg-[#121316] rounded-2xl px-8 py-14 md:py-24 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex-[1.2] flex flex-col items-start text-left">
          <span className="text-[11px] font-bold text-[#ccff00] tracking-[0.25em] uppercase mb-5 font-sans">
            Workout Library
          </span>
          
          <h1 className="text-4xl md:text-[58px] font-black tracking-tight text-white uppercase leading-[1.05] mb-6 font-sans">
            Train with intent. <br />
            Log every set.
          </h1>
          
          <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-md mb-8 font-sans">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it 
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          
          <button className="bg-[#ccff00] hover:bg-[#bbf200] text-black font-extrabold text-[11px] uppercase tracking-wider px-6 py-4 rounded-md transition-colors font-sans">
            Browse Workouts
          </button>
        </div>

        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="w-full max-w-[420px] aspect-square flex items-center justify-center">
            <Image
              src="/assets/banner.png"
              alt="Workout Figure"
              width={445}
              height={445}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
