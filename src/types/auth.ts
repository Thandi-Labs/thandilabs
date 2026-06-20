export interface AuthState {
  isAuthenticated: boolean;
  user: { id: string; name: string; email: string } | null;
}

// ── Request types ────────────────────────────────────────────────────────────

export interface LoginRequest {
  username: string; // email used as OAuth2 username field
  password: string;
  client_id?: string;
  client_secret?: string;
}

export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
  full_name: string;
}

export interface RefreshRequest {
  refresh_token: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  new_password: string;
}

// ── Response types ───────────────────────────────────────────────────────────

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
}

export interface RegisterResponse {
  id: string;
  email: string;
  username: string;
  full_name: string;
}

export interface VerifyTokenResponse {
  id: string;
  email: string;
  username: string;
  full_name: string;
  is_active: boolean;
}
