import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import router from "../../../../lib/router";
import { CustomErrorData, CustomResponseData } from "../../../../types";

interface Data extends CustomResponseData {
  animes: Array<any>;
}

const prisma = new PrismaClient();

router.get = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | CustomErrorData>
) => {
  const { limit, skip, query } = req.query;

  try {
    const animes: Array<any> = await prisma.anime.findMany({
      where: {
        canonical_title: {
          contains: `${query}`,
        },
      },
      take: +limit || 100,
      skip: +skip || 0,
    });

    res.send({ success: true, animes, params: req.query });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => router.handler(req, res);
