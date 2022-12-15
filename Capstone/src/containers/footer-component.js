import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>
        <div className="footer-header">
          <h2>312-456-7890</h2>
          <h2>parkshelp@parks.gov</h2>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {`Copyright © ANNIETAYLORJOSEPH ${year}`}
    </footer>
  );
};

export default Footer;
