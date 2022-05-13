import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiRequest,
  PreviewData,
  NextApiResponse,
} from "next";
import { ParsedUrlQuery } from "querystring";
import httpStatus from "http-status";
import nc from "next-connect";

import { apiLogger, ssrLogger } from "middlewares/logger.middleware";
import queryParser from "middlewares/queryParser.middleware";
import { withSessionSsr } from "services/session.service";
import trace from "utils/trace";
import { ApiError, SchemaError, SsrError } from "errors";

export const apiHandler = () =>
  nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res) => {
      if (err instanceof ApiError) {
        trace("ApiError", err.message);
        return res.status(err.code).json({ error: err.message });
      } else if (err instanceof SchemaError) {
        trace("SchemaError", err.message);
        return res.status(err.code).json({ error: err.message, schemaError: err.data });
      } else if (process.env.NODE_ENV !== "production") {
        trace("Dev Error", err.stack);
        console.log("API ERROR :", err.stack);

        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
      } else {
        trace("ProductionError", err.stack);

        return res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .json({ error: "Internal server error" });
      }
    },
    onNoMatch: (req, res) => {
      console.log("No match");
      trace("No match route", req.url);

      res.status(httpStatus.METHOD_NOT_ALLOWED).json({ error: "Method not allowed" });
    },
  })
    .use(apiLogger)
    .use(queryParser);

export function ssrHandler<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
>(
  handler: (context: GetServerSidePropsContext<Q>) => Promise<GetServerSidePropsResult<P>>
): GetServerSideProps<P, Q, D> {
  // @ts-ignore
  return withSessionSsr<P, Q, D>(async (context) => {
    try {
      ssrLogger(context);

      return await handler(context);
    } catch (error) {
      if (error instanceof SsrError) {
        trace("SsrError", error.stack);

        return {
          props: {
            error: error.parse(),
          },
        };
      } else if (process.env.NODE_ENV !== "production") {
        return {
          props: {
            error: {
              statusCode: httpStatus.INTERNAL_SERVER_ERROR,
              message: error.message || "Internal server error",
            },
          },
        };
      } else {
        return {
          props: {
            error: {
              statusCode: httpStatus.INTERNAL_SERVER_ERROR,
              message: "Internal server error",
            },
          },
        };
      }
    }
  });
}
