import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/context";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, SetIsLoggedIn } = useContext(AppContext);
  function logout() {
    SetIsLoggedIn(false);
  }

  return (
    <div>
      <div className="home-header">
        <h2>Park Pioneer</h2>
        <ul className="nav justify-content-center">
          <li className="nav-item">
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
      {isLoggedIn ? 
        <div className="jumbotronLoggedIn">
            <div className="content">
                <h1 className="display-4">Plan your National Parks Trip</h1>
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
              className="btn btn-primary btn-lg"
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
