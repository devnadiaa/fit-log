"use client";

import WorkoutCard, { Workout } from "../WorkoutCard/WorkoutCard";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

const WorkoutLibrary = ({ workouts }: WorkoutLibraryProps) => {
  return (
    <section id="library" className="w-full px-4 py-12 md:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8">
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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;