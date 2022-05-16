import { apiHandler } from "services/handler.service";

const handler = apiHandler();

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
