import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-900 bg-[#07080a]">
      <div className="flex min-h-24 flex-col items-center justify-center gap-3 px-6 py-5 md:h-16 md:flex-row md:justify-between md:gap-0 md:px-12">
        <div className="flex items-center gap-2.5">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={22}
            height={22}
            className="h-5.5 w-5.5 object-contain"
          />

          <span className="text-[13px] font-black uppercase tracking-widest text-white">
            FITLOG
          </span>
        </div>

        <p className="text-center text-[10px] font-medium leading-relaxed text-zinc-600 md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;