import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// markup
const IndexPage = ({ location, data }) => {
  return (
    <Layout location={location}>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return <div dangerouslySetInnerHTML={{ __html: node.html }} />;
      })}
    </Layout>
  );
};

export default IndexPage;

export const postsQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`;
