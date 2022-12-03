import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        {/* <a
          class="btn text-white"
          style="background-color: #3b5998;"
          href="#!"
          role="button"
        >
          <i class="fab fa-facebook-f"></i>
        </a> */}
        <h4>321-456-7890</h4>
        <h4>parkshelp@parks.gov</h4>
      </div>
      {`Copyright © ANNIETAYLORJOSEPH ${year}`}
    </footer>
  );
};

export default Footer;
