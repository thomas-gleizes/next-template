import React from "react";

interface Props {
  children: RNode;
}

const DefaultLayout: Component<Props> = ({ children }) => {
  return <main className="p-10">{children}</main>;
};

export default DefaultLayout;
