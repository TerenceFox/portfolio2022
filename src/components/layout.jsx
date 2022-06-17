import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/styles.scss";

const Layout = ({ children, location }) => {
  const [activePage, setActivePage] = React.useState("home");
  React.useEffect(() => {
    if (location.pathname === "/" || !location.pathname) {
      setActivePage("home");
    } else {
      setActivePage(location.pathname.slice(1));
    }
  });
  return (
    <div className={`wrapper wrapper--${activePage}`}>
      <Header location={location} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
