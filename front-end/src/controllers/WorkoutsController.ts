import WorkoutModel from "../models/WorkoutsModel";

export default{
  async getWorkouts(): Promise<object> {
    try {
      const workouts = await WorkoutModel.getWorkouts();
      return workouts;
    } catch (error) {
      return ({error: "An error occurred while getting workouts"});
    }
  }
}