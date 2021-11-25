import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { CustomErrorData, CustomResponseData } from "../../../types";
import router from "../../../lib/router";

interface Data extends CustomResponseData {
  animes: Array<any>;
}

const prisma = new PrismaClient();

router.get = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | CustomErrorData>
) => {
  const { limit, skip } = req.query;

  try {
    const animes: Array<any> = await prisma.anime.findMany({
      take: +limit || 10,
      skip: +skip || 0,
    });

    res.send({ success: true, animes, params: req.query });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => router.handler(req, res);
