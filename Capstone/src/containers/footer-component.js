import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <h4>123-456-7890</h4>
        <h4>parkshelp@parks.gov</h4>
      </div>
      {`Copyright © ANNIETAYLORJOSEPH ${year}`}
    </footer>
  );
};

export default Footer;
