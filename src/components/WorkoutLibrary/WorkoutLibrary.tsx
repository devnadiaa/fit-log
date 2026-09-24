"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import WorkoutCard, { Workout } from "../WorkoutCard/WorkoutCard";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

const WorkoutLibrary = ({ workouts }: WorkoutLibraryProps) => {
  const [search, setSearch] = useState("");

  const searchText = search.toLowerCase();

  const filteredWorkouts = workouts.filter((workout) => {
    const workoutName = workout.name.toLowerCase();

    const muscleGroup = workout.muscleGroups.some((muscle) =>
      muscle.toLowerCase().includes(searchText)
    );

    return workoutName.includes(searchText) || muscleGroup;
  });

  return (
    <section id="library" className="w-full px-4 py-12 md:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8">
          <div className="mb-6">
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

          <div className="relative w-full md:w-1/2">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search workouts or muscle groups..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-[#121316] py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-[#ccff00]"
            />
          </div>
        </div>

        {filteredWorkouts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-800 bg-[#0c0d10] px-6 py-16 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
              NO WORKOUT FOUND
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              Try searching with another workout name or muscle group.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredWorkouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkoutLibrary;