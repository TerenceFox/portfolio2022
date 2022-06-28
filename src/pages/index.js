import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Splash from "../components/splash";
import Entry from "../components/entry";
import Carousel from "../components/carousel";

// markup
const IndexPage = ({ location, data }) => {
  const items = data.allMarkdownRemark.edges.map(({ node }, i) => {
    return <Entry node={node} key={i.toString()} />;
  });

  return (
    <Layout location={location}>
      <Splash location={location} />
      <Carousel items={items} />
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
