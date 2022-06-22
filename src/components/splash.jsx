import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Splash = ({ children }) => {
  return (
    <div className="container container--splash">
      <div className="splash--header">
        <Link className="title" to="/">
          <h1>Terence Fox</h1>
        </Link>
        <h2>UX Engineer</h2>
      </div>
      <div className="splash--content">
        <div className="splash--image">
          <StaticImage
            src="../images/waterfall.jpg"
            alt="Fall waterfall"
            placeholder="blurred"
          />
        </div>
        <div className="splash--intro">
          I'm a Brooklyn-based front end web developer that is committed to
          delivering pixel perfect interfaces that work beautifully across the
          full spectrum of digital devices. Focusing on building user
          interfaces, I've contributed to web-based applications for Fortune 500
          companies across a variety of industries. I have deep expertise in the
          food & hospitality industries as well as experience in healthcare,
          manufacturing and finance. I'm strongly motivated to find innovative
          solutions to problems through collaboration and design-led thinking.
          As a former chef, I'm strongly self-motivated and learned early in my
          career the value of committing to learning new things each day as well
          as lifting up and empowering your teammates. If you think I could help
          make your product great, reach out and let's talk!
        </div>
      </div>
    </div>
  );
};

export default Splash;
