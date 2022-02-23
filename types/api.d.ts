interface DefaultResponse {}

interface DefaultRequest {}

interface SignInPayload {
  username: string;
  password: string;
  rememberMe: string;
}

interface SignInResponse {
  user: User;
  token: string;
}
