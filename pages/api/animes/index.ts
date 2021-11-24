import type { NextApiRequest, NextApiResponse } from "next";
import Router from "../../../router";

const router = new Router();

router.get = (req: NextApiRequest, res: NextApiResponse) => {
  console.log({method: "GET"});
}

router.post = (req: NextApiRequest, res: NextApiResponse) => {
  console.log({method: "POST"});
}

router.delete = (req: NextApiRequest, res: NextApiResponse) => {
  console.log({ method: "DELETE" });
}

export default router.handler;
