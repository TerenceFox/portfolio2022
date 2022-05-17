import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Entry from "../components/entry";

// markup
const IndexPage = ({ location, data }) => {
  return (
    <Layout location={location}>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return <Entry node={node} />;
      })}
      <div className="container--image">
        <div className="work-image">
          <StaticImage
            classname="image"
            src="../images/waterfall2.jpg"
            alt="Fall waterfall"
            placeholder="blurred"
          />
        </div>
      </div>
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
            date
            title
            client
            tags
          }
        }
      }
    }
  }
`;
