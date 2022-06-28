import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Splash = ({ location, children }) => {
  return (
    <div className="container container--splash">
      <div className="splash--content">
        <div className="splash--image">
          <StaticImage
            src="../images/waterfall.jpg"
            alt="Fall waterfall"
            placeholder="blurred"
          />
        </div>
        <div className="splash--intro">
          <div className="splash--header">
            <Link className="title" to="/">
              <h1>Terence Fox</h1>
            </Link>
            <h2>UX Engineer</h2>
          </div>
          <p>
            I'm a Brooklyn-based front end web developer that is committed to
            delivering pixel perfect interfaces that work beautifully across the
            full spectrum of digital devices. Focusing on building user
            interfaces, I've helped Fortune 500 companies build web-based
            applications across a variety of industries. I have deep expertise
            in the food & hospitality industries as well as experience in
            healthcare, manufacturing and finance. I'm strongly motivated to
            find innovative solutions to problems through collaboration and
            design-led thinking. As a former chef, I'm strongly self-motivated
            and learned early in my career the value of committing to learning
            new things each day as well as lifting up and empowering your
            teammates. I'm open to new opportunities; if your team is in need of
            a UX Engineer,
            <a href="mailto:terencecfox@gmail.com" target="_blank">
              <span className="accent"> let's talk!</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Splash;
