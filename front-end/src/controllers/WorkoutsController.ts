import type { Workout } from "../interfaces/Workout";
import WorkoutModel from "../models/WorkoutsModel";

export default{
  async getWorkouts(): Promise<object> {
    try {
      const workouts = await WorkoutModel.getWorkouts();
      return workouts;
    } catch (error) {
      return ({error: "An error occurred while getting workouts"});
    }
  },

  async handleCreateWorkout(payload: Workout): Promise<object> {
    try {
      const workout = await WorkoutModel.createWorkout(payload);
      return workout;
    } catch (error) {
      return ({error: "An error occurred while creating workout"});
    }
  },
}