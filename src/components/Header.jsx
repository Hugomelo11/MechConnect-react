
import { Link } from "react-router-dom";
import {  Nav, Button } from "react-bootstrap";
import { useState } from "react";



export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
  }

  return (
    <>
    <Nav activeKey="/home" className="App-header">
      <img src="./Logos/MechConnectLogo.png" href="/" alt="MechConnect logo" className="header-logo"/>
      <Nav.Item>
        <Nav.Link as={Link} to="/" className="home-button">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="./MechPage" className="about-us-btn">
          MechPage
        </Nav.Link>
      </Nav.Item>
    <Nav.Item>

      <Nav.Link  variant="primary" className="login-button" as={Link} to="/Login">
        Login
      </Nav.Link>
      <Nav.Link  variant="primary" className="logout-button" onClick={handleLogout}>
        Logout
      </Nav.Link>
    </Nav.Item>
    </Nav>
    </>
  );
}
