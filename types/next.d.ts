declare module "next/app" {
  import {
    GetServerSideProps,
    GetStaticPaths,
    GetStaticProps,
    NextApiRequest,
    NextApiResponse,
    NextPage,
  } from "next";
  import SessionService from "services/session.service";

  declare type Page<P = {}> = NextPage<P> & {
    layout?: Component<{ children: Node } & P>;
  };

  declare type ServerSideProps<T> = GetServerSideProps<T>;
  declare type StaticProps<T> = GetStaticProps<T>;
  declare type StaticPaths<T> = GetStaticPaths<T>;

  interface AppProps {
    pageProps: any;
    Component: Page & { layout?: Component };
  }

  declare type ApiRequest = NextApiRequest & {
    session: SessionService & { user?: User; token?: string };
  };
  declare type ApiResponse = NextApiResponse;
}
