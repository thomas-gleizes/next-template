import cookie from "cookie";

import { apiHandler } from "services/handler.service";
import { ApiError } from "errors";
import domUuid from "utils/domUuid";

const handler = apiHandler();

handler.post(async (req, res) => {
  if (!req.body.username) throw new ApiError("Username is required", 400);

  const user: User = {
    id: domUuid(),
    name: req.body.username,
  };

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("user", JSON.stringify(user), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      secure: true,
    })
  );

  res.send({ success: true, user });
});

export default handler;
