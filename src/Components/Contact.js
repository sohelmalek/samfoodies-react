import React from "react";
import { NavLink } from "react-router-dom";

function Contact() {
  
  return (
    <>
      <section className="about-main-banner">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center breadcrumb-section">
              <h3>Contact Us</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------breadcrumb END-------------------------------------------------------------- --> */}

      {/* <!-- ------------contact form-------------------------------------------------------------- --> */}
      <section className="contact-form border-bottom-cust py-5">
        <div className="contact-form-sub">
          <div className="container">
            <div className="row">
              <div className="col-12 my-2 my-md-4">
                <h2 className="headings">Get In Touch</h2>
              </div>
              <div className="col-sm-6">
                <form>
                  <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="Fname"
                      className="form-control"
                      id="fname"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="Lname"
                      className="form-control"
                      id="lname"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </form>
              </div>
              <div className="col-sm-6">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Write Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn custom-btn btn-primary">
                  Sen Now
                </button>
              </div>
              <div className="contact-map mt-4 mt-md-5 col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14556.384014840027!2d72.89878108141853!3d22.41113213750314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1610217162109!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{
                    border: "0",
                    height: "25rem",
                    width: "100%",
                  }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------contact form END-------------------------------------------------------------- --> */}
    </>
  );
}

export default Contact;
