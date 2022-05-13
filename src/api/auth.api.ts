import Api from "class/Api";
import apiService from "../services/api.service";

class AuthApi extends Api {
  constructor() {
    super(apiService, "auth");
  }

  public signIn(payload: SignInPayload) {
    return this.post<SignInResponse, SignInPayload>("/sign-in", payload);
  }
}

export default new AuthApi();
