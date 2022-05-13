import { NextApiRequest, NextApiResponse } from "next";

export default function queryParser(req: NextApiRequest, res: NextApiResponse, next): void {
  Object.entries(req.query).forEach(([key, value]) => {
    if (key.match(/\[\]$/)) {
      req.query[key.replace(/\[\]$/, "")] = value;
      delete req.query[key];
    }
  });

  next();
}
