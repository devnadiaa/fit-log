export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07080a]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#ccff00] border-t-transparent" />

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
          Loading workouts...
        </p>
      </div>
    </main>
  );
}