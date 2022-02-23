declare module "next/app" {
  import { NextPage } from "next";

  declare type Page<P = {}> = NextPage<P> & {
    layout?: Component<{ children: Node; P }>;
  };

  interface AppProps {
    pageProps: any;
    Component: Page & { layout?: Component };
  }
}
