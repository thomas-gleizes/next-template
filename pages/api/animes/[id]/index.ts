import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { Anime, CustomErrorData, CustomResponseData } from "../../../../types";
import animesRessources from "../../../../resources/AnimesRessources";
import router from "../../../../lib/router";

interface Data extends CustomResponseData {
  anime: Anime;
}

const prisma = new PrismaClient();

router.get = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | CustomErrorData>
) => {
  const { id } = req.query;

  try {
    const anime: Anime = animesRessources.one(
      await prisma.anime.findUnique({
        where: { id: +id },
      })
    );

    res.send({ success: true, anime, params: req.query });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => router.handler(req, res);
