import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const topFunction = () => {
    alert("sohel")
  };
  return (
    <>
      <section className="footer-section py-5">
        <footer>
          <div className="container ">
            <div className="row border-bottom pb-5">
              <div className="col-lg-4">
                <span className="navbar_brand d-flex" to="/">
                  <Link to="/">Sam Foodies</Link>
                </span>
                <p className="my-4">
                  Duis imperdiet sapien tortor, vitae congue diam auctor vitae.
                  Aliquam eget turpis ornare, euismod ligul aeget, enenatis dui.
                </p>
              </div>
              <div className="col-lg-4 ">
                <div className="row">
                  <div className="col-6  footer-link">
                    <h3>Pages</h3>
                    <Link to="/">
                      <i className="fas mt-4 fa-angle-right"></i> Home
                    </Link>
                    <Link to="/about">
                      <i className="fas fa-angle-right"></i> About Us
                    </Link>

                    <Link to="blogs">
                      <i className="fas fa-angle-right"></i> Blogs
                    </Link>
                    <Link to="/contact">
                      <i className="fas fa-angle-right"></i> Contact Us
                    </Link>
                  </div>

                  <div className="col-6 pr-0 footer-link">
                    <h3> </h3>
                    <Link to="/menu" className="">
                      <i className="fas mt-4 fa-angle-right"></i> Foodies Menu
                    </Link>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> Privacy Policy
                    </Link>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> Terms and
                      conditions
                    </Link>
                    <Link to="#">
                      <i className="fas fa-angle-right"></i> FAQ
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  pl-lg-5 footer-link">
                <h3>Subscribe Here Now</h3>
                <form className=" my-2 ">
                  <div className="d-flex">
                    <input
                      className="border input-field border-right-none"
                      type="text"
                      placeholder="Email Address"
                      name="emailaddress"
                    />{" "}
                    <i className="fab fa-telegram-plane"></i>
                  </div>
                </form>
                <p>
                  Subscribe to our mailing list and get updates to your email
                  inbox.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex flex-row flex-wrap justify-content-between">
                <div className="copyright">
                  <p className="my-3">@ 2023 Foodies. All rights reserved.</p>
                </div>
                <div className="py-sm-3 pb-2 pb-sm-0 promocode-icon d-flex flex-row">
                  <Link to="#">
                    <span>
                      <i className="fab fa-facebook-f"></i>
                    </span>
                  </Link>
                  <Link to="#">
                    <span>
                      <i className="fab fa-twitter"></i>
                    </span>
                  </Link>
                  <Link to="#">
                    <span>
                      <i className="fab fa-instagram"></i>
                    </span>
                  </Link>
                  <Link to="#">
                    <span>
                      <i className="fab fa-google"></i>
                    </span>
                  </Link>
                  <Link to="#">
                    <span>
                      <i className="fab fa-github"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <button
          onClick={topFunction}
          className="top-icon"
          id="myBtn"
          title="Go to top"
        >
          <i className="fas fa-level-up-alt"></i>
        </button>
      </section>
    </>
  );
}

export default Footer;
