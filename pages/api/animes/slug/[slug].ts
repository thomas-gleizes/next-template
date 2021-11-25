import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import router from "../../../../lib/router";
import { CustomErrorData, CustomResponseData } from "../../../../types";

interface Data extends CustomResponseData {
  anime: any;
}

const prisma = new PrismaClient();

router.get = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | CustomErrorData>
) => {
  const { slug } = req.query;

  try {
    const anime = await prisma.anime.findUnique({
      where: { slug: `${slug}` },
    });

    res.send({ success: true, anime, params: req.query });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => router.handler(req, res);
