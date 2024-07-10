import React from "react";
import MainContent from "../components/MainContent";
import BackgroundImage from "../components/BackgroundImage";
import Layout from "../components/Layout"

const HomePage: React.FC = () => (
  <>
    <Layout>
      <MainContent />
      <BackgroundImage />
    </Layout>
  </>
);

export default HomePage;
