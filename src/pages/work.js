import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Entry from "../components/entry";
import Masonry from "react-masonry-component";

// markup
const IndexPage = ({ location, data }) => {
  const items = data.allMarkdownRemark.edges.map(({ node }, i) => {
    return <Entry node={node} key={i.toString()} />;
  });
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [total, setTotal] = useState(items.length);
  const [imgToggle, setImgToggle] = useState(false);

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

  const imageToggle = (width) => {
    if (width > 768 && !imgToggle) {
      setImgToggle(true);
    } else {
      setImgToggle(false);
    }
  };

  let timer;
  useEffect(() => {
    imageToggle(window.innerWidth);
    window.onresize = (e) => {
      clearTimeout(timer);
      timer = setTimeout(imageToggle.bind(this, e.target.outerWidth), 250);
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
      {imgToggle && (
        <>
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
        </>
      )}
      {!imgToggle && (
        <>
          <Masonry
            className="entry-grid"
            elementType={"div"}
            options={masonryOptions}
          >
            {items}
          </Masonry>
        </>
      )}
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
