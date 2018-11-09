import React from "react";
import Layout from "../components/Layout";
import AaBlockquote from "../components/AaBlockquote/AaBlockquote";

const NotFoundPage = () => (
  <Layout>
    <div>
      <AaBlockquote quote="Oops, this page doesn't exist, please contact us if you can't find what you're looking for" />
    </div>
  </Layout>
);

export default NotFoundPage;
