import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { Anime, CustomErrorData, CustomResponseData } from "../../../../types";
import animesResources from "../../../../resources/AnimesRessources";
import router from "../../../../lib/router";

interface Data extends CustomResponseData {
  anime: Anime;
}

const prisma = new PrismaClient();

router.get = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | CustomErrorData>
) => {
  const { slug } = req.query;

  try {
    const anime: Anime = animesResources.one(
      await prisma.anime.findUnique({
        where: { slug: `${slug}` },
      })
    );

    res.send({ success: true, anime, params: req.query });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  router.handler(req, res);
}
