import handler from "services/handler.service";

handler.post(async (req, res) => {
  console.log("Ok");

  res.send({ success: true });
});

export default handler;
