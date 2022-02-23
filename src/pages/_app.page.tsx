import { AppProps } from "next/app";
import { useMemo } from "react";

import UserContextProvider from "contexts/user.context";
import LayoutContextProvider from "contexts/layout.context";
import DefaultLayout from "components/layouts/DefaultLayout";
import { AlertDialog, ConfirmDialog, PromptDialog } from "components/dialog";

import "styles/globals.css";

const AllContextProvider: Component<ContextProviderProps> = ({ children }) => {
  return (
    <LayoutContextProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </LayoutContextProvider>
  );
};

const AllDialogs: Component<ContextProviderProps> = ({ children }) => {
  return (
    <>
      {children}
      <PromptDialog />
      <ConfirmDialog />
      <AlertDialog />
    </>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  const Layout: Component = useMemo(
    () => Component.layout || DefaultLayout,
    [Component.layout]
  );

  return (
    <AllContextProvider>
      <AllDialogs>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </AllDialogs>
    </AllContextProvider>
  );
};

export default App;
