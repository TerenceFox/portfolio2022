import * as React from "react";
import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer> Footer goes here.</footer>
    </div>
  );
};

export default Layout;
