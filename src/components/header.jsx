import * as React from "react";
import { Link } from "gatsby";

const Header = ({ location }) => {
  return (
    <header>
      <div className="title">
        {location.pathname === "/" ? (
          ""
        ) : (
          <Link to="/">
            <h1>Terence Fox</h1>
          </Link>
        )}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/work">
              <h2>Work</h2>
            </Link>
          </li>
          <li>
            <Link to="/photography">
              <h2>Photography</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
