import type { Authentication } from "../interfaces/AuthenticationInterface";
import api from "./api";
import axios from "axios";

export default {
  async register(user: Authentication): Promise<object> {
    // const registerRes = await fetch(`/api/auth/register`, {
    //   method: "POST",
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(user),
    // })
    // const data = await registerRes.json();
    return api
      .post("/auth/register", user)
      .then((res: { data: object }) => res.data)
      .catch((error: unknown) => {
        if (axios.isAxiosError(error)) {
          return {
            error: error.response?.data?.error ?? "Registration failed",
          };
        }
        return { error: "Unexpected error occurred" };
      });
  },

  async login(auth: Authentication): Promise<object> {
    // const loginRes = await fetch("/api/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(auth),
    // });
    // const data = await loginRes.json();
    return api
      .post("/auth/login", auth)
      .then((res: { data: object }) => res.data)
      .catch((error: unknown) => {
        if (axios.isAxiosError(error)) {
          return {
            error: error.response?.data?.error ?? "Registration failed",
          };
        }
        return { error: "Unexpected error occurred" };
      });
  },

  async logout(): Promise<object> {
    return api
      .post("/auth/logout")
      .then((res: { data: object }) => res.data)
      .catch((error: unknown) => {
        if (axios.isAxiosError(error)) {
          return {
            error: error.response?.data?.error ?? "Registration failed",
          };
        }
        return { error: "Unexpected error occurred" };
      });
  },

  async checkUser(): Promise<object> {
    return api
      .get("/auth/user")
      .then((res: { data: object }) => res.data)
      .catch((error: unknown) => {
        if (axios.isAxiosError(error)) {
          return {
            error: error.response?.data?.error ?? "Registration failed",
          };
        }
        return { error: "Unexpected error occurred" };
      });
    /* try {
      const res = await fetch("/api/auth/user");

      if(!res.ok){
        return { error: "User not authenticated" };
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return { error: "Error occurred while checking user" };
    } */
  },
};
