import React, { createContext, useState } from "react";
import { useContextFactory } from "../hooks";

const LayoutContext = createContext<LayoutContext>(null);

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useLayoutContext = useContextFactory<LayoutContext>(LayoutContext);

const LayoutContextProvider: Component<ContextProviderProps> = ({ children }) => {
  const dialogState = useState<Dialog>({
    type: null,
    text: "",
    resolve: null,
  });

  return (
    <LayoutContext.Provider value={{ dialogState }}>{children}</LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
