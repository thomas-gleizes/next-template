import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, ...rest }) => {
  return (
    <>
      <Header></Header>
      <main {...rest}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
};

export default Layout;
