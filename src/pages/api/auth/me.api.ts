import { apiHandler } from "services/handler.service";
import { ApiRequest, ApiResponse } from "next/app";
import { verifyUser } from "middlewares/auth.middleware";

const handler = apiHandler();

handler.get(verifyUser, async (req: ApiRequest, res: ApiResponse) => {
  res.send({ success: true, user: req.session.user });
});

export default handler;
