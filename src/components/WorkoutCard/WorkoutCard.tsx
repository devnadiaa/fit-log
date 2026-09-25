import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";

export interface Workout {
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

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-[#121316] transition duration-300 hover:border-[#ccff00]/40"
    >
      <div className="relative h-[180px] w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#1b250a] px-2 py-1 text-[10px] font-bold uppercase text-[#ccff00]"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold uppercase text-white transition group-hover:text-[#ccff00]">
          {workout.name}
        </h3>

        <p className="mt-1 text-xs text-zinc-500">
          {workout.equipment}
        </p>

        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-zinc-800 pt-3">
          <div>
            <div className="flex items-center gap-1 text-zinc-500">
              <Clock size={12} className="text-[#ccff00]" />
              <p className="text-[9px]">DURATION</p>
            </div>

            <p className="mt-1 text-xs font-bold text-white">
              {workout.duration} min
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1 text-zinc-500">
              <Flame size={12} className="text-[#ccff00]" />
              <p className="text-[9px]">CALORIES</p>
            </div>

            <p className="mt-1 text-xs font-bold text-white">
              {workout.caloriesBurned} kcal
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1 text-zinc-500">
              <Star size={12} className="text-[#ccff00]" />
              <p className="text-[9px]">RATING</p>
            </div>

            <p className="mt-1 text-xs font-bold text-white">
              {workout.rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;