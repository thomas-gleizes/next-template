import type { NextApiRequest, NextApiResponse } from "next";
import { CustomResponse } from "../../../types/server";
import Router from "../../../router";

interface Data extends CustomResponse {
  success: boolean;
  animes: Array<object>;
}

const router = new Router();

router.get = function (req: NextApiRequest, res: NextApiResponse) {
  console.log("ici get");

  res.send({ success: true });
};

router.post = function (req: NextApiRequest, res: NextApiResponse) {
  console.log("la post");

  res.send({ success: true, body: req.body });
};

export default router.handler;
