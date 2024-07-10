// src/pages/works.tsx

import React from "react";
import Works from "../components/Works";
import ComicFetcher from "../components/ComicFetcher";
import Layout from "../components/Layout";

const WorksPage: React.FC = () => (
  <>
    <Layout>
      <Works />
      <ComicFetcher />
    </Layout>
  </>
);

export default WorksPage;
