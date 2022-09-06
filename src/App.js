import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MechPage from "./pages/MechPage.jsx";
import Home from "./pages/Home.jsx";
import { Layout } from "antd";


import "./styles/Hero.css";
import "./styles/Header.css";
import "./styles/Body.css";
import "./App.css";

function App() {
  return (
    
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="MechPage" element={<MechPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
