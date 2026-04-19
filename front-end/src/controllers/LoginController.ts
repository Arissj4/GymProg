import AuthenticationModel from '../models/AuthenticationModel';
import type { Authentication } from '../interfaces/AuthenticationInterface';


export async function handleLoginClick(loginInfo: Authentication): Promise<void> {
  try {
    const auth = await AuthenticationModel.handleLogin(loginInfo);
    console.log("Login successful:", auth);
  } catch (error) {
    console.error("Error occurred while logging in:", error);
  }
}

export function handleRegisterClick(): void {
  console.log("Register button clicked");
}