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
  const [items, setItems] = useState([]);

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

  const imageToggle = (e) => {
    if (e.target.outerWidth >= 768) {
      let newItems = [...items];
      newItems.splice(1, 0, imageContainer);
      setItems(newItems);
    } else {
      let newItems = items.filter((item) => item !== "image");
      setItems(newItems);
    }
  };

  useEffect(() => {
    setItems(
      data.allMarkdownRemark.edges.map(({ node }, i) => {
        return <Entry node={node} key={i.toString()} />;
      })
    );
    window.onresize = (e) => {
      let timer;
      clearTimeout(timer);
      timer = setTimeout(imageToggle(e), 250);
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
        {items.slice(start, end)}
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
