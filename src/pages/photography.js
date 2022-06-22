import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Masonry from "react-masonry-component";

const IndexPage = ({ location, data }) => {
  const images = data.allImageSharp.nodes
    .filter((node) => node.parent.relativeDirectory === "photography")
    .map((node) => {
      return getImage(node);
    });
  return (
    <Layout location={location}>
      <p>
        Interested in buying prints?{" "}
        <a href="mailto:terencecfox@gmail.com">Shoot me an email.</a>
      </p>
      <div className="photo-grid">
        {images.map((image, i) => {
          console.log(image);
          return (
            <div className="photo-wrapper" id={`photo${i + 1}`}>
              <GatsbyImage image={image} key={i} alt="art photo" />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const photosQuery = graphql`
  query {
    allImageSharp {
      nodes {
        gatsbyImageData(formats: WEBP, placeholder: BLURRED, width: 1600)
        parent {
          ... on File {
            relativeDirectory
          }
        }
      }
    }
  }
`;
