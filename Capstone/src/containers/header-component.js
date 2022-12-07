import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/context";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, SetIsLoggedIn } = useContext(AppContext);
  function login() {
    SetIsLoggedIn(true);
  }

  return (
    <div>
      <div className="home-header">
        <h2>Park Planner</h2>
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
        </ul>
      </div>
      {isLoggedIn ? null : (
        <div className="jumbotron">
          <h1 className="display-4">Plan your National Parks Trip</h1>
          <p className="lead">
            We've compiled details about campgrounds, activities, and more so
            that you don't have to. Sync to your Google Calendar for easy access
            to your itinerary.
          </p>
          <hr className="my-4" />
          <p className="lead">
            <button
              className="btn btn-primary btn-lg"
              href="#"
              role="button"
              onClick={login}
            >
              Sign in now!
            </button>
          </p>
        </div>
      )}
    </div>
  );
};
export default Header;
