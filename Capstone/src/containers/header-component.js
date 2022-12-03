import React from "react";

const Header = () => {
  return (
    <div>
      <div className="home-header">
        <h2>Park Planner</h2>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" to="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              My Calendar
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" to="/discover">
              Live Feeds
            </a>
          </li>
        </ul>
      </div>
      <div className="jumbotron">
        <h1 className="display-4">Plan your National Parks Trip</h1>
        <p className="lead">
          We've compiled details about campgrounds, activities, and more so that
          you don't have to. Sync to your Google Calendar for easy access to
          your itinerary.
        </p>
        <hr className="my-4" />
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Sign in now!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
