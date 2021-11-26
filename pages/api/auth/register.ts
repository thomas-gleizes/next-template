import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { CustomErrorData, CustomResponseData, User } from "../../../types";
import router from "../../../lib/router";
import security from "../../../lib/security";
import UsersResources from "../../../resources/UsersResources";

interface Data extends CustomResponseData {
  user: User;
}

const prisma = new PrismaClient();

router.post = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | CustomErrorData>
) => {
  const { body: userData } = req;

  userData.password = await security.hash(userData.password);

  const [newUser, password] = UsersResources.one(
    await prisma.user.create({
      data: userData,
    })
  );

  newUser.token = security.sign(newUser);

  res.send({ success: true, user: newUser });
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  router.handler(req, res);
}
