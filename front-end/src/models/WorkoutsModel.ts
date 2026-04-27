// @ts-ignore
import api from './api'


export default{
  async getWorkouts(): Promise<object> {
    return api.get("/workouts")
      .then((res: {data: object}) => res.data)
      .catch((error: any) => {
        throw error;
      });
  },
}