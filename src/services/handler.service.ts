import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res) => {
    res.status(500).send({ success: false, message: "Internal error" });
  },
  onNoMatch: (req, res) => {
    res.status(405).send({ error: "method not allowed" });
  },
}).use((req, res, next) => {
  // Add logger her

  next();
});

export default handler;
