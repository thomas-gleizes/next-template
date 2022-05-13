import { GetServerSidePropsContext, NextApiRequest } from "next";

import { loggerReplaceKey } from "resources/constants";
import ip from "utils/ip";
import trace from "../utils/trace";

function replaceKey(data: any) {
  const keys = Object.keys({ ...data });
  const result = {};

  for (const key of keys) {
    if (key in loggerReplaceKey) {
      result[key] = loggerReplaceKey[key];
    }
  }

  return { ...data, ...result };
}

export function apiLogger(req: NextApiRequest): any {
  trace(`(${ip(req)}) ${req.method} ${req.url}`);
}

export async function ssrLogger(context: GetServerSidePropsContext) {
  trace(`(${ip(context.req)}) ${context.req.method} ${context.resolvedUrl}`);
}
