import type { Workout } from "../interfaces/Workout";
import WorkoutModel from "../models/WorkoutsModel";

export default {
  async getWorkouts(): Promise<object> {
    try {
      return await WorkoutModel.getWorkouts();
    } catch (error) {
      console.error("FE - Loading Workouts failed:", error);
      return { error: "An error occurred while getting workouts" };
    }
  },

  async handleCreateWorkout(payload: Workout): Promise<object> {
    try {
      return await WorkoutModel.createWorkout(payload);
    } catch (error) {
      console.error("FE - Creation Workout failed:", error);
      return { error: "An error occurred while creating workout" };
    }
  },
};
