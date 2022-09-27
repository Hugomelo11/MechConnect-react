import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout.js";
import Header from "./components/Header.jsx";
import FooterSec from "./components/Footer.jsx";
import MechPage from "./pages/MechPage.jsx";
import Home from "./pages/Home.jsx";
import Login from "./components/Login.jsx";


import "./App.css";

function App() {
  // const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const myUser = localStorage.getItem("user");
    if (myUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Layout>
        <Content>
          <Header />
        </Content>
      </Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {isLoggedIn ? (
          <Route path="MechPage" element={<MechPage />} />
        ) : (
          <Route
            path="Login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
        )}
      </Routes>
      <FooterSec />
    </>
  );
}

export default App;
