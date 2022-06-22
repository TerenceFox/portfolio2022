import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Entry from "../components/entry";
import Masonry from "react-masonry-component";

// markup
const WorkPage = ({ location, data }) => {
  const items = data.allMarkdownRemark.edges.map(({ node }, i) => {
    return <Entry node={node} key={i.toString()} />;
  });
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [total, setTotal] = useState(items.length);
  const [imgToggle, setImgToggle] = useState(false);

  const imageContainer = (
    <div className="cv-entry cv-entry--image" key="image">
      <div className="work--image">
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

  const pageForward = () => {
    if (start >= 5) {
      const newStart = start - 5;
      const newEnd = end - 5;
      setEnd(newEnd > 5 ? newEnd : 5);
      setStart(newStart > 0 ? newStart : 0);
    }
  };

  const pageBack = () => {
    if (end < total) {
      const newStart = start + 5;
      const newEnd = end + 5;
      setStart(newStart);
      setEnd(newEnd);
    }
  };

  return (
    <Layout location={location}>
      {imgToggle && (
        <>
          <div className="page-buttons">
            <svg
              onClick={pageForward}
              width="50"
              height="50"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillOpacity="0"
                d="M3.35453 25.9463L48.5 2.47068V47.6161L3.35453 25.9463Z"
                stroke="black"
              />
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className={end <= 5 ? "active" : ""}
                cx="25"
                cy="25"
                r="23.5"
                stroke="black"
                fillOpacity="0"
              />
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className={end > 5 && end <= 10 ? "active" : ""}
                cx="25"
                cy="25"
                r="23.5"
                stroke="black"
                fillOpacity="0"
              />
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className={end > 10 && end <= 15 ? "active" : ""}
                cx="25"
                cy="25"
                r="23.5"
                stroke="black"
                fillOpacity="0"
              />
            </svg>
            <svg
              onClick={pageBack}
              width="50"
              height="50"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.6455 25.9463L1.5 2.47068V47.6161L46.6455 25.9463Z"
                stroke="black"
                fillOpacity="0"
              />
            </svg>
          </div>
          <Masonry
            className="entry-grid"
            elementType={"div"}
            options={masonryOptions}
          >
            {items[start]}
            {imageContainer}
            {items.slice(start + 1, end)}
          </Masonry>
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
