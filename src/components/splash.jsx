import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Splash = ({ children }) => {
  return (
    <div className="container container--splash">
      <div className="splash-text">
        <Link className="title" to="/">
          <h1>Terence Fox</h1>
        </Link>
        <h2 className="splash-header">UX Engineer</h2>
      </div>
      <div className="splash-image">
        <StaticImage
          src="../images/waterfall.jpg"
          alt="Fall waterfall"
          placeholder="blurred"
        />
      </div>
    </div>
  );
};

export default Splash;
