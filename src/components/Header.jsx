
import { Link } from "react-router-dom";
import {  Nav, Button } from "react-bootstrap";



export default function Header() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
  }

  return (
    <>
    <Nav activeKey="/home" className="App-header">
      <a href="/"><img src="./Logos/MechConnectLogo.png" alt="MechConnect logo" className="header-logo"/></a>
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
