import { ApiRequest, ApiResponse } from "next/app";
import SessionService from "services/session.service";

export function sessionMiddleware(req: ApiRequest, res: ApiResponse, next) {
  try {
    req.session = new SessionService(req, res);
  } catch (e) {
    console.log(e);
  }

  next();
}
