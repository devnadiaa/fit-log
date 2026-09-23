"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

export default function WorkoutDetails() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        return res.json();
      })
      .then((data) => {
        setWorkout(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  const handleAddToPlan = () => {
    if (!workout) return;

    const savedPlan = localStorage.getItem("fitlog-plan");
    const plan: Workout[] = savedPlan ? JSON.parse(savedPlan) : [];

    const alreadyAdded = plan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.info("Workout is already in today's plan");
      return;
    }

    if (plan.length >= 5) {
      toast.warning("Today's plan is full");
      return;
    }

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify([...plan, workout])
    );

    toast.success("Added to today's plan");
  };

  const handleSaveForLater = () => {
    if (!workout) return;

    const savedWorkouts = localStorage.getItem("fitlog-saved");
    const saved: Workout[] = savedWorkouts
      ? JSON.parse(savedWorkouts)
      : [];

    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.info("Workout is already saved");
      return;
    }

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify([...saved, workout])
    );

    toast.success("Saved for later");
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#07080a]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#ccff00] border-t-transparent"></div>

          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            Loading Workout…
          </p>
        </div>
      </main>
    );
  }

  if (!workout) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#07080a] px-6">
        <div className="text-center">
          <span className="mb-3 block text-3xl">⚠️</span>

          <h2 className="text-sm font-black uppercase tracking-wider text-white">
            Workout Not Found
          </h2>

          <p className="mb-6 mt-1 text-xs text-zinc-500">
            Failed to connect to the fitness server.
          </p>

          <button
            onClick={() => router.push("/")}
            className="rounded-md bg-[#ccff00] px-5 py-3 text-[11px] font-extrabold uppercase tracking-wider text-black"
          >
            Back to Library
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#07080a] px-4 py-8 md:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-10 overflow-hidden rounded-2xl border border-zinc-900 bg-[#0c0d10] p-6 md:p-8 lg:flex-row">
          <div className="relative flex min-h-[350px] flex-1 items-center justify-center rounded-2xl border border-zinc-900/60 bg-[#13151a] p-6 md:p-12 lg:min-h-[520px]">
            <div className="relative aspect-square h-full w-full">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h1 className="mb-2 text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                {workout.name}
              </h1>

              <p className="mb-4 text-xs leading-relaxed text-zinc-500 md:text-sm">
                {workout.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-1.5">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded bg-[#ccff00] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wide text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <div className="mb-6 overflow-hidden rounded-xl border border-zinc-900 bg-[#111215]/40">
                {[
                  {
                    label: "EQUIPMENT",
                    value: workout.equipment,
                  },
                  {
                    label: "DIFFICULTY",
                    value: workout.difficulty,
                  },
                  {
                    label: "SETS",
                    value: workout.sets,
                  },
                  {
                    label: "REPS",
                    value: workout.reps,
                  },
                  {
                    label: "DURATION",
                    value: `${workout.duration} min`,
                  },
                  {
                    label: "CALORIES",
                    value: `${workout.caloriesBurned} kcal`,
                  },
                  {
                    label: "RATING",
                    value: `★ ${workout.rating}`,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-zinc-900 px-5 py-3.5 text-[11px] last:border-none"
                  >
                    <span className="font-bold uppercase tracking-wider text-zinc-500">
                      {item.label}
                    </span>

                    <span className="font-extrabold uppercase text-zinc-300">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="mb-3 text-[11px] font-black uppercase tracking-widest text-white">
                  INSTRUCTIONS
                </h3>

                <ol className="space-y-2.5">
                  {workout.instructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-2.5 text-xs leading-relaxed text-zinc-400 md:text-sm"
                    >
                      <span className="font-bold text-zinc-600">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-zinc-900/80 pt-4 sm:flex-row">
              <button
                onClick={handleAddToPlan}
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#ccff00] py-3.5 text-[11px] font-extrabold uppercase tracking-wider text-black transition-colors hover:bg-[#bbf200]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>

                <span>Add to today&apos;s plan</span>
              </button>

              <button
                onClick={handleSaveForLater}
                className="flex flex-1 items-center justify-center gap-2 rounded-md border border-zinc-800 bg-[#121316] py-3.5 text-[11px] font-extrabold uppercase tracking-wider text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-3.5 w-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>

                <span>Save for later</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}