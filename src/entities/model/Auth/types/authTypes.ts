export interface IAuthState {
  email: string;
  password: string;
}

export interface AuthSchema {
  isLoading: boolean;
  token: string | null;
}
