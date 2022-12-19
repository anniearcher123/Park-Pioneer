import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
    {/* <!-- Footer --> */}
<footer className="text-center text-lg-start bg-dark text-muted">
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4" id="footer-heading">
            <i className="fas fa-gem me-3"></i>Park Pioneer
          </h6>
          <p>
            Find activities you love and plan your national park trip today!
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4" id="footer-heading">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">National Park Services</a>
          </p>
          <p>
            <a href="#!" className="text-reset">My Calendar</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Live Feeds</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Register</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4" id="footer-heading">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            parkpioneer@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>

      </div>

    </div>
  </section>

  <div className="text-center p-4" >
    <p>Copyright © ANNIETAYLORJOSEPH2022</p>
  </div>
</footer>

</div>
  );
};

export default Footer;
