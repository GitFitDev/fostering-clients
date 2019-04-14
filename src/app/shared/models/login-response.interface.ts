export interface LoginResponse {
  result?: {
      email?: string;
      uid?: string;
      message?: string;
  }
  error?: {
      code?: string;
      message?: string;
  }
}
