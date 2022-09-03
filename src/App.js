import React from 'react';
// import { BrowserRouter, Route, Routes} from 'react-router-dom' 
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import './styles/Hero.css'
import './styles/Header.css'
import './styles/Body.css'
import "./App.css";


function App() {
  return (
    <body>
      <header>
        <Header />
      </header>
      <Hero />
      <Body />
      <Footer/>
    </body>
  );
}
 
export default App;
