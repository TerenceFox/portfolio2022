import * as React from "react";

const Footer = () => {
  return (
    <footer>
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
    </footer>
  );
};

export default Footer;
