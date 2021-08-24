import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <>
      <Header />
      <main {...props} />
      <Footer />
    </>
  );
};

export default Layout;
