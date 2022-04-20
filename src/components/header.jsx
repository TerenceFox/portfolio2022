import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <Link to="/">Title Goes Here</Link>
      <nav>
        <ul>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/photography">Photography</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
