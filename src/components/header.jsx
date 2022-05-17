import * as React from "react";
import { Link } from "gatsby";

const Header = ({ location }) => {
  return (
    <header>
      <div className="title">
        {location.pathname === "/" ? (
          ""
        ) : (
          <h1>
            <Link to="/">Terence Fox</Link>
          </h1>
        )}
      </div>
      <nav>
        <ul>
          <li>
            <h2>
              <Link to="/work">Work</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="/photography">Photography</Link>
            </h2>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
