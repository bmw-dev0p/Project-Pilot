import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';
// import { Navbar as Navbar, Nav, Button, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const NavigationBar = () => {
  // State to track the login status
  const [loginCheck, setLoginCheck] = useState(false);

  // Function to check if the user is logged in using auth.loggedIn() method
  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);  // Set loginCheck to true if user is logged in
    }
  };

  // useEffect hook to run checkLogin() on component mount and when loginCheck state changes
  useEffect(() => {
    checkLogin();  // Call checkLogin() function to update loginCheck state
  }, [loginCheck]);  // Dependency array ensures useEffect runs when loginCheck changes

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        {/* Navbar Brand (Title) */}
        <Navbar.Brand as={Link} to="/">
          Project Pilot
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Add navigation links if needed */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/board">Board</Nav.Link>
          </Nav>

          {/* Right side of the Navbar */}
          <div>
            {
              // Conditional rendering based on loginCheck state
              !loginCheck ? (
                <>
                  {/* Render Sign Up and Login buttons if the user is not logged in */}
                  {/* <Button variant="outline-primary" className="me-2" as={Link} to="/signup">Sign Up</Button>
                  <Button variant="outline-success" as={Link} to="/login">Login</Button> */}
                   {/* <Nav.Link as={Link} to="/signup">Signup</Nav.Link> */}
                   {/* <Nav.Link as={Link} to="/login">Login</Nav.Link> */}
                   <p>logo here?</p>
                   
                </>
              ) : (
                <Button variant="outline-danger" onClick={() => auth.logout()}>Logout</Button>
              )
            }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
