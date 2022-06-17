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
              <Link to="/work" activeClassName="active">
                Work
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="/photography" activeClassName="active">
                Photography
              </Link>
            </h2>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
