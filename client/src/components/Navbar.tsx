import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import logo from '../assets/pilot-logo.png';
import '../index.css';

const NavigationBar = () => {
  // State to track the login status
  const [loginCheck, setLoginCheck] = useState(false);
  const [profilePicture, setProfilePicture] = useState('');

  // Function to check if the user is logged in using auth.loggedIn() method
  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);  // Set loginCheck to true if user is logged in
    }
  };

  // Fetch profile picture when user is logged in
  const fetchProfilePicture = async () => {
    if (loginCheck) {
      const userProperties = await auth.getUserProperties(); // Get user properties
      const userPicture = userProperties?.img; // Get the profile picture from user properties
      setProfilePicture(userPicture || '');
    }
  };

  // useEffect hook to run checkLogin() on component mount and when loginCheck state changes
  useEffect(() => {
    checkLogin();  // Call checkLogin() function to update loginCheck state
  }, [loginCheck]);  // Dependency array ensures useEffect runs when loginCheck changes

  // useEffect to fetch the profile picture when logged in
  useEffect(() => {
    fetchProfilePicture();
  }, [loginCheck]); // Fetch the profile picture whenever loginCheck changes

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
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/board">Board</Nav.Link>
          </Nav>

          {/* Right side of the Navbar */}
          <div>
            {
              // Conditional rendering based on loginCheck state
              !loginCheck ? (
                <>
                  {/* Render logo if the user is not logged in */}
                  <img className='logo-small' src={logo} alt='pilot-logo' />
                </>
              ) : (
                <>
                  {/* when logged in, display the profile picture as a link to the user page */}
                  <Link to="/user">
                    <img src={profilePicture} alt="Profile" className="profile-pic" />
                  </Link>
                  <Button variant="outline-danger" onClick={() => auth.logout()}>Logout</Button>
                </>
              )
            }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
