import { DAY, YEAR } from "resources/constants";

const AUTH_USER = "next_user";
const AUTH_TOKEN = "next_token";
const AUTH_TIME = "next_time";

export default {
  isLoggingIn(): boolean {
    const user = this.getUser();
    if (user) {
      return Object.keys(user).length > 0;
    }

    return false;
  },

  getUser(): User | null {
    this.checkTimeout();
    try {
      const user: User = JSON.parse(localStorage.getItem(AUTH_USER) as string);

      if (user) return user;
    } catch (e) {}

    return null;
  },

  setUser(user: User, rememberMe: boolean): void {
    this.addTimeout(rememberMe);
    localStorage.setItem(AUTH_USER, JSON.stringify(user));
  },

  getToken(): string {
    this.checkTimeout();
    return localStorage.getItem(AUTH_TOKEN) as string;
  },

  setToken: (token: string): void => {
    localStorage.setItem(AUTH_TOKEN, token);
  },

  logout(): void {
    localStorage.clear();
  },

  checkTimeout(): boolean {
    const setupTime = parseInt(localStorage.getItem(AUTH_TIME) as string);

    if (setupTime == null || Date.now() > setupTime) {
      localStorage.clear();
      return false;
    }

    return true;
  },

  addTimeout(rememberMe: boolean): void {
    let timestamp = Date.now();
    if (rememberMe) timestamp += YEAR;
    else timestamp += DAY;

    localStorage.setItem(AUTH_TIME, timestamp.toString());
  },
};
