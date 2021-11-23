import type { NextApiRequest, NextApiResponse } from "next";
import { CustomResponse } from "../../../../types/server";

interface Data extends CustomResponse {
  success: boolean;
  anime: object;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log("Req", req.query);

  const anime = {
    id: 1,
    title: "Tokyo Ghoul",
  };

  res.status(200).send({ success: true, anime });
}
