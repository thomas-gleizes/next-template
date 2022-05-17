import cookie from "cookie";

import { ApiRequest, ApiResponse } from "next/app";

export default class SessionService {
  private readonly _req: ApiRequest;
  private readonly _res: ApiResponse;

  private _isAuthenticated: boolean;

  private static secure: boolean = process.env.NODE_ENV === "production";
  private static domain: string = process.env.NEXT_PUBLIC_APP_DOMAIN;
  private static sessionName: string = process.env.NEXT_PUBLIC_AUTH_COOKIE;

  constructor(req: ApiRequest, res: ApiResponse) {
    this._req = req;
    this._res = res;
    this._isAuthenticated = false;

    try {
      const values: { [key: string]: string } = JSON.parse(req.cookies[SessionService.sessionName]);

      for (const [key, value] of Object.entries(values)) {
        this[key] = value;
        this._isAuthenticated = true;
      }
    } catch (e) {}
  }

  private setCookie(content: any, age: number): void {
    this._res.setHeader(
      "Set-Cookie",
      cookie.serialize(SessionService.sessionName, JSON.stringify(content), {
        secure: SessionService.secure,
        domain: SessionService.domain,
        httpOnly: true,
        maxAge: age,
        path: "/",
      })
    );
  }

  public setWithJsonWebToken(tokenPayload: { [key: string]: any }): void {
    for (const [key, value] of Object.entries(tokenPayload)) this[key] = value;

    this._isAuthenticated = true;
  }

  public set(user: User, token: string): void {
    this.setCookie({ user, token }, 60 * 60 * 24);

    this["user"] = user;
    this["token"] = token;
    this._isAuthenticated = true;
  }

  public destroy(): void {
    this.setCookie(null, 0);

    delete this["user"];
    delete this["token"];
    this._isAuthenticated = false;
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }
}
