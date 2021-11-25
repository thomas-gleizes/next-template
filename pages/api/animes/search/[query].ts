import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { Anime, CustomErrorData, CustomResponseData } from "../../../../types";
import animesResources from "../../../../resources/AnimesRessources";
import router from "../../../../lib/router";

interface Data extends CustomResponseData {
  animes: Array<Anime>;
}

const prisma = new PrismaClient();

router.get = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | CustomErrorData>
) => {
  const { limit, skip, query } = req.query;

  try {
    const animes: Array<Anime> = animesResources.many(
      await prisma.anime.findMany({
        where: {
          canonical_title: {
            contains: `${query}`,
          },
        },
        take: +limit || 100,
        skip: +skip || 0,
      })
    );

    res.send({ success: true, animes, params: req.query });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  router.handler(req, res);
}
