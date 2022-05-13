import { apiHandler } from "services/handler.service";
import { withSessionApi } from "services/session.service";

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

export default withSessionApi(handler);
