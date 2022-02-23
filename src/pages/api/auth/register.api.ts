import handler from "services/handler.service";

handler.post(async (req, res) => {
  res.send({ success: true });
});

export default handler;
