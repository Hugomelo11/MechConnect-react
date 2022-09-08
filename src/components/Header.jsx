
import { Link } from "react-router-dom";
import {  Nav, Button } from "react-bootstrap";


export default function Header() {
  return (
    <>
    <Nav activeKey="/home" className="App-header">
      <img src="MechConnectLogo.png" alt="MechConnect logo" className="header-logo"/>
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
    {/* <Button className="login-button" as={Link} to="./Login">Login</Button> */}
    </Nav>
    </>
  );
}
