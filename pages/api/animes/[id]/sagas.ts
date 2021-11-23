import type { NextApiRequest, NextApiResponse } from "next";
import { CustomResponse } from "../../../../types/server";

interface Data extends CustomResponse {
  success: boolean;
  animes: object;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log("Req", req.query);

  const animes = [
    { id: 3, title: "Tokyo Ghoul S2" },
    { id: 5, title: "Tokyo Ghoul RE" },
  ];

  res.status(200).send({ success: true, animes });
}
