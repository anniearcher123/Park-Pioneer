import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
    {/* <!-- Footer --> */}
<footer className="text-center text-lg-start bg-dark text-muted">
  {/* <!-- Section: Social media --> */}
  {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* <!-- Left --> */}
    {/* <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div> */} 
    {/* <!-- Left -->

    <!-- Right --> */}
    {/* <div>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon="fa-brands fa-facebook" />
      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon="fa-brands fa-twitter" />
      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon="fa-brands fa-google" />
      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon="fa-brands fa-instagram" />
      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      </a>
      <a href="" className="me-4 text-reset">
      <FontAwesomeIcon icon="fa-brands fa-github" />
      </a>
    </div> */}
    {/* <!-- Right --> */}
  {/* </section> */}
  {/* <!-- Section: Social media -->

  <!-- Section: Links  --> */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Park Pioneer
          </h6>
          <p>
            Find activities you love and plan your national park trip today!
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */} 
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
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
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            parkpioneer@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  -->

  <!-- Copyright --> */}
  <div className="text-center p-4" >
    <p>Copyright © ANNIETAYLORJOSEPH2022</p>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
</div>




    // <footer className="bg-dark">
    //   <div className="section">
    //     <div className="footer-header">
    //       <h5>parkshelp@parks.gov</h5>
    //       <h5>312-456-7890</h5>
    //       <ul className="nav justify-content-center">
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/">
    //             Home
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   {`Copyright © ANNIETAYLORJOSEPH ${year}`}
    // </footer>
  );
};

export default Footer;
