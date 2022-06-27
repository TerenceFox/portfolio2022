import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/styles.scss";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terence Fox | UX Engineer</title>
        <link rel="canonical" href="https://www.terencefox.me" />
      </Helmet>
      <Header location={location} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
