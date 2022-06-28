import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Entry from "../components/entry";
import Carousel from "../components/carousel";

// markup
const WorkPage = ({ location, data }) => {
  const items = data.allMarkdownRemark.edges.map(({ node }, i) => {
    return <Entry node={node} key={i.toString()} />;
  });

  return (
    <Layout location={location}>
      <Carousel items={items} />
    </Layout>
  );
};

export default WorkPage;

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
