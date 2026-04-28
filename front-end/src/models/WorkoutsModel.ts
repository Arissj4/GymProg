// @ts-ignore
import type { Workout } from '../interfaces/Workout';
import api from './api'


export default{
  async getWorkouts(): Promise<object> {
    return api.get("/workouts")
      .then((res: {data: object}) => res.data)
      .catch((error: any) => {
        throw error;
      });
  },

  async createWorkout(payload: Workout): Promise<object> {
    return api.post("/workouts", payload)
      .then((res: {data: object}) => res.data)
      .catch((error: any) => {
        throw error;
      });
  },
}