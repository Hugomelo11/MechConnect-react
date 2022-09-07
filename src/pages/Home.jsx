import React from "react";
import Hero from "../components/Hero.jsx";
import Body from "../components/Body.jsx";

import "../styles/Hero.css";
import "../styles/Header.css";
import "../styles/Body.css";
import Layout, { Content } from "antd/lib/layout/layout.js";
import Footer from "../components/Footer.jsx";
// import "./App.css";

function Home() {
  return (
    <>
      <Layout>
        <Content>
          <Hero />
          <Body />
        </Content>
      </Layout>
    </>
  );
}

export default Home;
