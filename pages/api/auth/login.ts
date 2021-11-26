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
  const {
    body: { email, password },
  } = req;

  const [user, hash]: [User, string] = UsersResources.one(
    await prisma.user.findUnique({
      where: { email },
    })
  );

  throw new Error("eror");

  if (!user || !(await security.compare(password, hash))) {
    res.status(401).send({ error: "email/password wrong" });
  }

  user.token = security.sign(user);

  res.send({ success: true, user });
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  router.handler(req, res);
}
