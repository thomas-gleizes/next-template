import { apiHandler } from "services/handler.service";

const handler = apiHandler();

handler.post(async (req, res) => {
  res.send({ success: true });
});

export default handler;
