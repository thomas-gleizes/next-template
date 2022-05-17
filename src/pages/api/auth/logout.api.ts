import { apiHandler } from "services/handler.service";
import { ApiRequest, ApiResponse } from "next/app";

const handler = apiHandler();

handler.all(async (req: ApiRequest, res: ApiResponse) => {
  req.session.destroy();

  res.send({ success: true });
});

export default handler;
