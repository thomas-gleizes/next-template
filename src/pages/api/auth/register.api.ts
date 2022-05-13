import { apiHandler } from "services/handler.service";
import { withSessionApi } from "services/session.service";

const handler = apiHandler();

handler.post(async (req, res) => {
  res.send({ success: true });
});

export default withSessionApi(handler);
