import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-900 bg-[#07080a]">
      <div className="flex h-16 items-center justify-between px-6 md:px-12">
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

        <p className="text-right text-[10px] font-medium text-zinc-600">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
