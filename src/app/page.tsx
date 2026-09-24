import Banner from "../components/shared/Banner";
import WorkoutLibrary from "../components/WorkoutLibrary/WorkoutLibrary";
import { Workout } from "../components/WorkoutCard/WorkoutCard";

async function getWorkouts() {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

export default async function Home() {
  const workouts: Workout[] = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#07080a]">
      <Banner />

      <WorkoutLibrary workouts={workouts} />
    </main>
  );
}
