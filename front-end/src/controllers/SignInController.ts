import type { Authentication } from "../interfaces/AuthenticationInterface";
import AuthenticationModel from "../models/AuthenticationModel";

export async function handleRegister(user: Authentication): Promise<number> {
  try {
    const result = await AuthenticationModel.register(user);
    console.log("User registered:", result);
    return 200;
  } catch (error) {
    console.error("Error occurred while registering:", error);
    return 500;
  }
}