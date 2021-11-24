import type { NextApiRequest, NextApiResponse } from "next";
import Router from "../../../router";

const router = new Router();

router.get = (req: NextApiRequest, res: NextApiResponse) => {
  res.send({
    method: "GET",
    animes: [
      { id: 1, title: "Tokyo Ghoul" },
      { id: 2, title: "Inuyasha" },
    ],
  });
};

router.post = (req: NextApiRequest, res: NextApiResponse) => {
  res.send({
    method: "POST",
    animes: [
      { id: 1, title: "Tokyo Ghoul" },
      { id: 2, title: "Inuyasha" },
    ],
  });
};

router.delete = (req: NextApiRequest, res: NextApiResponse) => {
  res.send({
    method: "DELETE",
    animes: [
      { id: 1, title: "Tokyo Ghoul" },
      { id: 2, title: "Inuyasha" },
    ],
  });
};

export default (req: NextApiRequest, res: NextApiResponse) => router.handler(req, res);
