import type { Exercise } from "./Exercise";

export interface Workout {
  id?: string;
  title: string;
  exercises: Exercise[];
}