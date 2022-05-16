import cookie from "cookie";

import { ApiRequest, ApiResponse } from "next/app";

const SessionService = {
  create() {},
};

// export default class SessionService {
//   private readonly _req: ApiRequest;
//   private readonly _res: ApiResponse;
//
//   private static secure: boolean = process.env.NODE_ENV === "production";
//   private static domain: string = process.env.NEXT_PUBLIC_APP_DOMAIN;
//
//   constructor(req: ApiRequest, res: ApiResponse) {
//     this._req = req;
//     this._res = res;
//   }
//
//   private setCookie(key: string, content: any): void {
//     this._res.setHeader(
//       "Set-Cookie",
//       cookie.serialize(key, JSON.stringify(content), {
//         secure: SessionService.secure,
//         domain: SessionService.domain,
//         httpOnly: true,
//         maxAge: 60 * 60 * 24 * 7,
//         path: "/",
//       })
//     );
//   }
//
//   create(user: User, token: string): void {
//     this.setCookie("user", user);
//     this.setCookie("token", token);
//   }
//
//   destroy(): void {}
// }
