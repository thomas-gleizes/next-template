import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const Header: React.FunctionComponent<Props> = (props) => {
  return <header {...props} />;
};

export default Header;
