import type { NextApiRequest, NextApiResponse } from "next";

import router from "../../../lib/router";

router.get = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.send({});
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => router.handler(req, res);
