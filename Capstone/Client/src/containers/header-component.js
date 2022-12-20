import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/context";
import { NavLink } from "react-router-dom";
import TreeIcon from "../images/icons8-trees-50.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  const { isLoggedIn, SetIsLoggedIn, setUsername, setAllEvents } = useContext(AppContext);
  function logout() {
    SetIsLoggedIn(false);
    setUsername(undefined);
    setTimeout(setAllEvents([]),300);
  }

  return (
    <div>   
        <Navbar bg="dark" expand="lg" variant="dark">
      <Container className="nav-container">
        <Navbar.Brand to="/" className="park-pioneer">
        <img className="logo" src={TreeIcon}></img>
            Park Pioneer
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
                Home
            </NavLink>
            <NavLink className="nav-link" to="/calendar">
                My Calendar
            </NavLink>
            <NavLink className="nav-link" to="/discover">
                Live Feeds
            </NavLink>
            {isLoggedIn ? 
            <div>
            <NavLink className="nav-link" onClick={logout} >
                Logout
            </NavLink>
            </div> : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        {isLoggedIn ? 
        <div className="jumbotronLoggedIn">
            <div className="content">
                <h1 id="jumbotron-title" className="display-4">Plan your National Parks Trip</h1>
                <p className="lead">
                We've compiled details about campgrounds, activities, and more so
                that you don't have to. Put it all on your own customizable calendar for optimal planning. 
                </p>
            </div> 
        </div>: 
        <div className="jumbotron">
            <div className="content">
            <h1 className="display-4">Plan your National Parks Trip</h1>
            <p className="lead">
            We've compiled details about campgrounds, activities, and more so
                that you don't have to. Put it all on your own customizable calendar for optimal planning. 
            </p>
            </div>
            <hr className="my-4" />
            <p className="lead">
            <NavLink
                className="btn btn-dark btn-lg"
                href="#"
                role="button"
                to="/login"
            >
                Sign in now!
            </NavLink>
            </p>
        </div>
        }
    </div>
    );
};

export default Header;
