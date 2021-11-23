import { NextApiRequest, NextApiResponse } from "next";

export interface CustomResponse {
  success: boolean;
}

export interface Router {
  get?: (req: NextApiRequest, res: NextApiResponse) => any;
  post?: (req: NextApiRequest, res: NextApiResponse) => any;
  delete?: (req: NextApiRequest, res: NextApiResponse) => any;
  put?: (req: NextApiRequest, res: NextApiResponse) => any;
  patch?: (req: NextApiRequest, res: NextApiResponse) => any;
  handler: (req: NextApiRequest, res: NextApiResponse) => any;
}
