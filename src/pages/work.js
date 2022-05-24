import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Entry from "../components/entry";
import Masonry from "react-masonry-component";

// markup
const IndexPage = ({ location, data }) => {
  const masonryOptions = {
    columnWidth: ".cv-entry",
    gutter: 20,
    itemSelector: ".cv-entry",
  };

  const items = data.allMarkdownRemark.edges.map(({ node }) => {
    return <Entry node={node} />;
  });

  const imageContainer = (
    <div className="cv-entry cv-entry--image container">
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
  items.splice(1, 0, imageContainer);

  return (
    <Layout location={location}>
      <Masonry
        className="entry-grid"
        elementType={"div"}
        options={masonryOptions}
      >
        {items}
      </Masonry>
    </Layout>
  );
};

export default IndexPage;

export const postsQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
