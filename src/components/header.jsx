import * as React from "react";
import { Link } from "gatsby";

const Header = ({ location }) => {
  return (
    <header>
      <div
        className={`title ${location.pathname === "/" ? "title--hide" : ""}`}
      >
        <h1>Terence Fox</h1>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <a href="mailto:terencecfox@gmail.com" target="_blank">
          <span className="tag">email</span>
        </a>
        <a href="https://www.linkedin.com/in/terencefox/" target="_blank">
          <span className="tag">linkedin</span>
        </a>
        <a href="https://github.com/TerenceFox" target="_blank">
          <span className="tag">github</span>
        </a>
      </div>
      <nav>
        <ul>
          <li className="nav--link">
            <Link to="/" activeClassName="active">
              work
            </Link>
          </li>
          <li className="nav--link">
            <Link to="/photography" activeClassName="active">
              photography
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
