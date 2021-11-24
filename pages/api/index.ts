import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  console.log("Req", req.query);

  const routes = {};

  res.status(200).send({ success: true, routes });
}
