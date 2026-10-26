import api from "./api";
import type { Workout } from "../interfaces/Workout";
import axios from "axios";

export default {
  async getWorkouts(): Promise<object> {
    return api
      .get("/workouts")
      .then((res: { data: object }) => res.data)
      .catch((error: unknown) => {
        if(axios.isAxiosError(error)){
          return {
            error: error.response?.data?.error ?? "Internal Server Error",
          };
        }

        return {error: "Unexpected error occurred while getting workouts"};
      });
  },

  async createWorkout(payload: Workout): Promise<object> {
    return api
      .post("/workouts", payload)
      .then((res: { data: object }) => res.data)
      .catch((error: unknown) => {
        if(axios.isAxiosError(error)){
          return {
            error: error.response?.data?.error ?? "Internal Server Error",
          };
        }

        return {error: "Unexpected error occurred while creating workout"};
      });
  },
};
