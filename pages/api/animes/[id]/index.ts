import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import router from "../../../../lib/router";
import { Anime, CustomErrorData, CustomResponseData } from "../../../../types";

interface Data extends CustomResponseData {
  animes: any;
}

const prisma = new PrismaClient();

router.get = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | CustomErrorData>
) => {
  const { id } = req.query;

  try {
    const animes = await prisma.animes.findUnique({
      where: { id: +id },
    });

    res.send({ success: true, animes, params: req.query });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => router.handler(req, res);
