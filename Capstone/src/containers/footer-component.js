import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>
        <div className="footer-header">
          <h5>parkshelp@parks.gov</h5>
          <h5>312-456-7890</h5>
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
