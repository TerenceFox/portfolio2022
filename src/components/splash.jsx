import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Splash = ({ children }) => {
  return (
    <div class="container">
      <h2>UX Engineer</h2>
      <div className="splash">
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
