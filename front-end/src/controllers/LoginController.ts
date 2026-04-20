import AuthenticationModel from '../models/AuthenticationModel';
import type { Authentication } from '../interfaces/AuthenticationInterface';


export async function handleLogin(loginInfo: Authentication): Promise<object> {
  try {
    const auth = await AuthenticationModel.login(loginInfo);
    console.log(auth)
    return auth;
  } catch (error) {
    console.error("Error occurred while logging in:", error);
    return { error: "An error occurred while logging in" };
  }
}