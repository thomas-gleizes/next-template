import { ApiRequest, ApiResponse } from "next/app";
import { verifyToken } from "utils/jwt";
import { ApiError } from "errors";

export const verifyUser = async (req: ApiRequest, res: ApiResponse, next) => {
  try {
    const bearerToken = req.session.token || req.headers.authorization?.replace("Bearer ", "");
    const tokenPayload = verifyToken(bearerToken);

    console.log(req.session.isAuthenticated);

    if (!req.session.isAuthenticated) {
      req.session.setWithJsonWebToken(tokenPayload);
    } else {
      console.log("ELSE");
    }
  } catch (e) {
    throw new ApiError(401, "Access denied");
  }

  next();
};
