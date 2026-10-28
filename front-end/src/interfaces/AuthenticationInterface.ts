// Data send to the BE side for registration
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
  user: AuthenticatedUser;
}

// Failed authentication response
export interface AuthErrorResponse {
  error: string;
}

// Combined response type
export type AuthResponse = AuthSuccessResponse | AuthErrorResponse;
