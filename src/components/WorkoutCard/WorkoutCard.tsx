import Image from "next/image";
import Link from "next/link";

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
    <Link href={`/workout/${workout.id}`}>
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#121316] transition hover:border-[#ccff00]/40">
        <div className="relative h-52 w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#1b250a] px-2.5 py-1 text-[10px] font-bold text-[#ccff00]"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white">
            {workout.name}
          </h3>

          <p className="mt-2 text-xs text-zinc-500">
            {workout.equipment}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-zinc-800 pt-4">
            <div>
              <p className="text-[10px] text-zinc-500">DURATION</p>
              <p className="mt-1 text-sm font-bold text-white">
                {workout.duration} min
              </p>
            </div>

            <div>
              <p className="text-[10px] text-zinc-500">CALORIES</p>
              <p className="mt-1 text-sm font-bold text-white">
                {workout.caloriesBurned}
              </p>
            </div>

            <div>
              <p className="text-[10px] text-zinc-500">RATING</p>
              <p className="mt-1 text-sm font-bold text-white">
                ★ {workout.rating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;