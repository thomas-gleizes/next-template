import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, User } from "@prisma/client";

import { CustomErrorData, CustomResponseData } from "../../../types";
import router from "../../../lib/router";
import security from "../../../lib/security";

interface Data extends CustomResponseData {
  user: any;
}

const prisma = new PrismaClient();

router.post = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | CustomErrorData>
) => {
  try {
    const { body: user } = req;

    user.password = await security.hash(`${user.password}-${user.email}`);

    const newUser: User = await prisma.user.create({
      data: user,
    });

    res.send({ success: true, user: newUser });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  router.handler(req, res);
}
