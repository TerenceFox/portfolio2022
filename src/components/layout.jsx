import * as React from "react";
import Header from "../components/header";
import "../styles/styles.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>
        <h3>Contact</h3>
      </footer>
    </div>
  );
};

export default Layout;
