import { ApiRequest, ApiResponse } from "next/app";
import { apiHandler } from "services/handler.service";
import { ApiError } from "errors";
import domUuid from "utils/domUuid";

const handler = apiHandler();

handler.post(async (req: ApiRequest, res: ApiResponse) => {
  if (!req.body.username) throw new ApiError("Username is required", 400);

  const user: User = {
    id: domUuid(),
    name: req.body.username,
  };

  req.session.create(user, "token");

  res.send({ success: true, user });
});

export default handler;
