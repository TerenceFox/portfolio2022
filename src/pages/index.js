import * as React from "react";
import Layout from "../components/layout";
import Splash from "../components/splash";

// markup
const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Splash />
    </Layout>
  );
};

export default IndexPage;
