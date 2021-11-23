import { NextApiRequest, NextApiResponse } from "next";

import { Router as RouterInterface } from "../types/server";

class Router implements RouterInterface {
  get: (req: NextApiRequest, res: NextApiResponse) => void;
  post: (req: NextApiRequest, res: NextApiResponse) => void;

  handler(req: NextApiRequest, res: NextApiResponse): any {
    if (req.method === "GET") {
      this.get(req, res);
      return;
    } else if (req.method === "POST") {
      this.post(req, res);
      return;
    } else {
      res.status(404).send({ message: "method doesn't exist" });
    }
  }
}

export default Router;
