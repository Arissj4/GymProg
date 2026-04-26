import AuthenticationModel from '../models/AuthenticationModel';
import type { Authentication } from '../interfaces/AuthenticationInterface';


export default {
  async handleLogin(loginInfo: Authentication): Promise<object> {
    try {
      const auth = await AuthenticationModel.login(loginInfo);
      return auth;
    } catch (error) {
      console.error("Error occurred while logging in:", error);
      return { error: "An error occurred while logging in" };
    }
  },

  async handleRegister(user: Authentication): Promise<object> {
    try {
      const result = await AuthenticationModel.register(user);
      return result;
    } catch (error) {
      console.error("Error occurred while registering:", error);
      return { error: "An error occurred while registering" };
    }
  },

  async handleLogout(): Promise<object> {
    try {
       const logout = await AuthenticationModel.logout();
       return logout;
    } catch (error) {
      return { error: "An error occurred while logging out"};
    }
  },

  async checkUser(): Promise<object> {
    try {
      const user = await AuthenticationModel.checkUser();
      return user;
    } catch (error) {
      console.error("Error occurred while checking user:", error);
      return { error: "An error occurred while checking user" };
    }
  },

}