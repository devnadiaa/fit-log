"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Flame, Check, X } from "lucide-react";
import { toast } from "react-toastify";

interface Workout {
  id: number;
  name: string;
  image: string;
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
}

const MyPlan = () => {
  const [activeTab, setActiveTab] = useState("plan");
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const planData = localStorage.getItem("fitlog-plan");
    const savedData = localStorage.getItem("fitlog-saved");

    setWorkouts(planData ? JSON.parse(planData) : []);
    setSaved(savedData ? JSON.parse(savedData) : []);
    setLoading(false);
  }, []);

  const currentWorkouts = activeTab === "plan" ? workouts : saved;

  const totalMinutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const handleRemove = (id: number) => {
    const updatedWorkouts = workouts.filter(
      (workout) => workout.id !== id
    );

    setWorkouts(updatedWorkouts);
    localStorage.setItem("fitlog-plan", JSON.stringify(updatedWorkouts));

    toast.success("Workout removed");
  };

  const handleRemoveSaved = (id: number) => {
    const updatedSaved = saved.filter(
      (workout) => workout.id !== id
    );

    setSaved(updatedSaved);
    localStorage.setItem("fitlog-saved", JSON.stringify(updatedSaved));

    toast.success("Workout removed from saved");
  };

  const handleDone = (id: number) => {
    const updatedWorkouts = workouts.filter(
      (workout) => workout.id !== id
    );

    setWorkouts(updatedWorkouts);
    localStorage.setItem("fitlog-plan", JSON.stringify(updatedWorkouts));

    toast.success("Workout completed");
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#07080a]">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          Loading workouts...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#07080a] px-4 py-10 md:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8">
          <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-[#ccff00]">
            TODAY&apos;S WORKOUT
          </p>

          <h1 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-zinc-900 bg-[#121316] p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              Exercises
            </p>

            <p className="mt-2 text-2xl font-black text-white">
              {workouts.length}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-900 bg-[#121316] p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              Minutes
            </p>

            <p className="mt-2 text-2xl font-black text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-900 bg-[#121316] p-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
              Calories
            </p>

            <p className="mt-2 text-2xl font-black text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="mb-6 flex w-fit rounded-lg border border-zinc-800 bg-[#121316] p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-md px-5 py-2 text-[11px] font-bold uppercase tracking-wider transition ${
              activeTab === "plan"
                ? "bg-[#ccff00] text-black"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-md px-5 py-2 text-[11px] font-bold uppercase tracking-wider transition ${
              activeTab === "saved"
                ? "bg-[#ccff00] text-black"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {currentWorkouts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-800 bg-[#0c0d10] px-6 py-16 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
              NOTHING HERE YET
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-md bg-[#ccff00] px-5 py-3 text-[11px] font-extrabold uppercase tracking-wider text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {currentWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#121316]"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative h-52 w-full sm:h-auto sm:w-48">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-black uppercase text-white">
                          {workout.name}
                        </h2>

                        <p className="mt-1 text-xs text-zinc-500">
                          {workout.equipment}
                        </p>
                      </div>

                      <div className="flex translate-y-2 items-center gap-2">
                        <Link
                          href={`/workout/${workout.id}`}
                          className="rounded-md border border-zinc-800 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
                        >
                          View Details
                        </Link>

                        {activeTab === "plan" && (
                          <button
                            onClick={() => handleDone(workout.id)}
                            className="flex items-center gap-2 rounded-md bg-[#ccff00] px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-black"
                          >
                            <Check size={14} />
                            Mark as Done
                          </button>
                        )}

                        <button
                          onClick={() =>
                            activeTab === "plan"
                              ? handleRemove(workout.id)
                              : handleRemoveSaved(workout.id)
                          }
                          className="text-zinc-600 transition hover:text-red-400"
                        >
                          <X size={17} />
                        </button>
                      </div>
                    </div>

                    <div className="mt-5 flex gap-6">
                      <div className="flex items-center gap-1.5 text-zinc-500">
                        <Clock size={14} />
                        <span className="text-[10px] font-bold">
                          {workout.duration} MIN
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-zinc-500">
                        <Flame size={14} />
                        <span className="text-[10px] font-bold">
                          {workout.caloriesBurned} KCAL
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-zinc-500">
                        <span className="text-[#ccff00]">★</span>
                        <span className="text-[10px] font-bold">
                          {workout.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlan;