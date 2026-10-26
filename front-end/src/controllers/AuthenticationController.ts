import AuthenticationModel from "../models/AuthenticationModel";
import type { Authentication } from "../interfaces/AuthenticationInterface";

export default {
  async handleLogin(loginInfo: Authentication): Promise<object> {
    try {
      return await AuthenticationModel.login(loginInfo);
    } catch (error) {
      console.error("Error occurred while logging in:", error);
      return { error: "An error occurred while logging in" };
    }
  },

  async handleRegister(user: Authentication): Promise<object> {
    try {
      return await AuthenticationModel.register(user);
    } catch (error) {
      console.error("Error occurred while registering:", error);
      return { error: "An error occurred while registering" };
    }
  },

  async handleLogout(): Promise<object> {
    try {
      return await AuthenticationModel.logout();
    } catch (error) {
      console.log("BE - Logout user failed:", error);
      return { error: "An error occurred while logging out" };
    }
  },

  async checkUser(): Promise<object> {
    try {
      return await AuthenticationModel.checkUser();
    } catch (error) {
      console.error("Error occurred while checking user:", error);
      return { error: "An error occurred while checking user" };
    }
  },
};
