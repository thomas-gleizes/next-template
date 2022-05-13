import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";

import {
  apiLogger as apiLoggerService,
  ssrLogger as ssrLoggerService,
} from "services/logger.service";

export function apiLogger(req: NextApiRequest, res: NextApiResponse, next): void {
  apiLoggerService(req);

  next();
}

export function ssrLogger(context: GetServerSidePropsContext): void {
  ssrLoggerService(context).catch((e) => console.log("ssr log failed :", e));
}
