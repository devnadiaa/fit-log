import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#07080a] px-6">
      <div className="text-center">
        <p className="mb-3 text-7xl font-black tracking-tight text-[#ccff00]">
          404
        </p>

        <h1 className="text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
          Page Not Found
        </h1>

        <p className="mx-auto mb-7 mt-3 max-w-md text-sm leading-relaxed text-zinc-500">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-flex rounded-md bg-[#ccff00] px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-wider text-black transition-colors hover:bg-[#bbf200]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}