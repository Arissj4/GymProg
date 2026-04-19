import type { Authentication } from "../interfaces/AuthenticationInterface";

export default {
  async login(auth: Authentication): Promise<object> {
      // Implement login logic here
      try{
        const loginRes = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(auth),
        });
        const data = await loginRes.json();
        return data;
      } catch (error) {
        return { error: "Error occurred while logging in" };
      }
  }
}