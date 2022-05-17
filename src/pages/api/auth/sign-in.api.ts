import { ApiRequest, ApiResponse } from "next/app";
import { apiHandler } from "services/handler.service";
import { ApiError } from "errors";
import domUuid from "utils/domUuid";
import { generateToken } from "utils/jwt";

const handler = apiHandler();

handler.post(async (req: ApiRequest, res: ApiResponse) => {
  if (!req.body.username) throw new ApiError("Username is required", 400);

  const user: User = {
    id: domUuid(),
    name: req.body.username,
  };

  const token = generateToken({ user });
  req.session.set(user, token);

  res.send({ success: true, user, token: token });
});

export default handler;
