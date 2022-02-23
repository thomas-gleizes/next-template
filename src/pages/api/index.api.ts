import handler from "services/handler.service";

handler.all((req, res) => {
  const routes = {
    "/": {
      GET: {
        desc: "display all routes",
      },
    },
  };

  res.status(200).send({ success: true, routes });
});

export default handler;
