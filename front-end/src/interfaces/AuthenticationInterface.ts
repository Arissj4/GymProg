// Data send to the BE side for registration
import type { User } from "./User.ts";

export interface AuthenticationInformation {
  email: string;
  verifyEmail?: string;
  password: string;
  verifyPassword?: string;
}

// Authenticated user returned by the BE
export interface AuthenticatedUser {
  id: number;
  name: string;
  email: string;
  authenticated: boolean;
}

// Successful authentication response
export interface AuthSuccessResponse {
  user: User;
}

// Failed authentication response
export interface AuthErrorResponse {
  error: string;
}

// Combined response type
export type AuthResponse = AuthSuccessResponse | AuthErrorResponse;
