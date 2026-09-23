"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import WorkoutCard, {
  Workout,
} from "../WorkoutCard/WorkoutCard";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

const WorkoutLibrary = ({ workouts }: WorkoutLibraryProps) => {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return a.duration - b.duration;
  });

  return (
    <section id="library" className="w-full px-4 py-12 md:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>

            <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
              THE LIBRARY
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="appearance-none rounded-lg border border-zinc-800 bg-[#121316] px-4 py-3 pr-10 text-xs font-bold uppercase tracking-wider text-white outline-none transition focus:border-[#ccff00]/50"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <ChevronDown
              size={15}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;