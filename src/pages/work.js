import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Entry from "../components/entry";
import Masonry from "react-masonry-component";

// markup
const IndexPage = ({ location, data }) => {
  useEffect(() => {
    window.onresize = () => {
      let timer;
      clearTimeout(timer);
      timer = setTimeout(() => console.log(window.innerWidth), 250);
    };
  });
  const masonryOptions = {
    columnWidth: ".cv-entry",
    itemSelector: ".cv-entry",
    percentPosition: true,
  };

  const items = data.allMarkdownRemark.edges.map(({ node }) => {
    return <Entry node={node} />;
  });

  const imageContainer = (
    <div className="cv-entry cv-entry--image">
      <div className="work-image">
        <StaticImage
          className="image"
          src="../images/waterfall2.jpg"
          alt="Fall waterfall"
          placeholder="blurred"
        />
      </div>
    </div>
  );

  return (
    <Layout location={location}>
      <Masonry
        className="entry-grid"
        elementType={"div"}
        options={masonryOptions}
      >
        {items.slice(0, 5)}
      </Masonry>
    </Layout>
  );
};

export default IndexPage;

export const postsQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___longDate], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            date
            title
            subtitle
            tags
          }
        }
      }
    }
  }
`;
