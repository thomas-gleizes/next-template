import type { NextApiRequest, NextApiResponse } from "next";
import Router from "../../../router";

const router = new Router();

router.get(() => {
  console.log("ok");
});

export default router.handler;
