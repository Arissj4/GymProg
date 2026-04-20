import type { Authentication } from "../interfaces/AuthenticationInterface";
import AuthenticationModel from "../models/AuthenticationModel";

export async function handleRegister(user: Authentication): Promise<object> {
  try {
    const result = await AuthenticationModel.register(user);
    return result;
  } catch (error) {
    console.error("Error occurred while registering:", error);
    return { error: "An error occurred while registering" };
  }
}