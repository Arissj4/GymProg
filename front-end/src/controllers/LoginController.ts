import AuthenticationModel from '../models/AuthenticationModel';
import type { Authentication } from '../interfaces/AuthenticationInterface';


export async function handleLogin(loginInfo: Authentication): Promise<number> {
  try {
    const auth = await AuthenticationModel.login(loginInfo) as { error?: string };
    if(auth.error === "User not found"){
      return 401;
    } else {
      return 200;
    }
  } catch (error) {
    console.error("Error occurred while logging in:", error);
    return 500;
  }
}