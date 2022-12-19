import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/context";
import { NavLink } from "react-router-dom";
import TreeIcon from "../images/icons8-trees-50.png"



const Header = () => {
  const { isLoggedIn, SetIsLoggedIn, setUsername, setAllEvents } = useContext(AppContext);
  function logout() {
    SetIsLoggedIn(false);
    setUsername(undefined);
    setTimeout(setAllEvents([]),300);
  }

  return (
    <div>     
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark home-header">
        <img className="logo" src={TreeIcon}></img>
        <a className="navbar-brand">Park Pioneer</a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item ">
                <NavLink className="nav-link" to="/">
                    Home
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/calendar">
                    My Calendar
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/discover">
                    Live Feeds
                </NavLink>
                </li>
                {isLoggedIn ? 
                <li className="nav-item">
                <NavLink className="nav-link" onClick={logout} >
                    Logout
                </NavLink>
                </li> : null}
            </ul>
        </div>
        </nav>
        {isLoggedIn ? 
        <div className="jumbotronLoggedIn">
            <div className="content">
                <h1 id="jumbotron-title" className="display-4">Plan your National Parks Trip</h1>
                <p className="lead">
                We've compiled details about campgrounds, activities, and more so
                that you don't have to. Sync to your Google Calendar for easy
                access to your itinerary.
                </p>
            </div> 
        </div>: 
        <div className="jumbotron">
            <div className="content">
            <h1 className="display-4">Plan your National Parks Trip</h1>
            <p className="lead">
                We've compiled details about campgrounds, activities, and more so
                that you don't have to. Sync to your Google Calendar for easy
                access to your itinerary.
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
