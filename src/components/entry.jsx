import * as React from "react";

const Entry = ({ node }) => {
  return (
    <div className="container cv-entry">
      <div className="year">
        <span className="tag">{node.frontmatter.date}</span>
      </div>
      <div className="content">
        <h2>{node.frontmatter.title}</h2>
        <h3>{node.frontmatter.subtitle}</h3>
        <span className="tag">{node.frontmatter.tags}</span>
        <div className="body" dangerouslySetInnerHTML={{ __html: node.html }} />
      </div>
    </div>
  );
};

export default Entry;
