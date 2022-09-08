import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import FooterSec from "./components/Footer.jsx";
import MechPage from "./pages/MechPage.jsx";
import Home from "./pages/Home.jsx";
import { Layout } from "antd";
import Login from "./components/Login.jsx";

// import "./styles/Hero.css";
// import "./styles/Header.css";
// import "./styles/Body.css";
import "./App.css";
import { Content } from "antd/lib/layout/layout.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Layout>
        <Content>
          <Header />
        </Content>
      </Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {isLoggedIn
         ?<Route path="MechPage" element={<MechPage />} />
         :<Route path="Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        }
      </Routes>
      <FooterSec />
    </BrowserRouter>
  );
}

export default App;
