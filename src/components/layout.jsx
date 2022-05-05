import * as React from "react";
import Header from "../components/header";
import "../styles/styles.scss";

const Layout = ({ children, location }) => {
  return (
    <div className="wrapper">
      <Header location={location} />
      <main>{children}</main>
      <footer>
        <h3>Contact</h3>
      </footer>
    </div>
  );
};

export default Layout;
