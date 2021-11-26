import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { CustomErrorData, CustomResponseData, User } from "../../../types";
import router from "../../../lib/router";
import Security from "../../../lib/security";
import usersResources from "../../../resources/UsersResources";

interface Data extends CustomResponseData {
  user: User;
}

const prisma = new PrismaClient();

router.post = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | CustomErrorData>
) => {
  const { body: userData } = req;

  userData.password = await Security.hash(userData.password);

  const [newUser, password]: [User, string] = usersResources.one(
    await prisma.user.create({
      data: userData,
    })
  );

  newUser.token = Security.sign(newUser);

  res.send({ success: true, user: newUser });
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  router.handler(req, res);
}
