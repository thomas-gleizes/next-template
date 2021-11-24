import type { NextApiRequest, NextApiResponse } from "next";
import router from "../../../../lib/router";

router.get = (req: NextApiRequest, res: NextApiResponse) => {
  res.send({
    method: "GET",
    animes: { id: 1, title: "Tokyo Ghoul" },
  });
};

export default (req: NextApiRequest, res: NextApiResponse) => router.handler(req, res);
