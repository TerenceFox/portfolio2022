import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Entry from "../components/entry";
import Masonry from "react-masonry-component";

// markup
const IndexPage = ({ location, data }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const items = data.allMarkdownRemark.edges.map(({ node }, i) => {
    return <Entry node={node} key={i.toString()} />;
  });

  const imageContainer = (
    <div className="cv-entry cv-entry--image" key="image">
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

  let timer;
  useEffect(() => {
    window.onresize = (e) => {
      clearTimeout(timer);
      timer = setTimeout(console.log("hi"), 250);
    };
  }, []);

  const masonryOptions = {
    columnWidth: ".cv-entry",
    itemSelector: ".cv-entry",
    percentPosition: true,
  };

  const pageBack = () => {
    setStart(5);
    setEnd(11);
  };

  const pageForward = () => {
    setStart(0);
    setEnd(5);
  };

  return (
    <Layout location={location}>
      <Masonry
        className="entry-grid"
        elementType={"div"}
        options={masonryOptions}
      >
        {items[start]}
        {imageContainer}
        {items.slice(start + 1, end - 1)}
      </Masonry>
      <button onClick={pageBack}> {`<-`}</button>
      <button onClick={pageForward}> {`->`}</button>
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
