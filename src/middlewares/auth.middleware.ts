import { NextApiRequest, NextApiResponse } from "next";

export const verify = async (req: NextApiRequest, res: NextApiResponse<any>, next) => {
  next();
};
