import React, { useState } from "react";

function CTA(props) {
  const [emailValue, setEmailValue] = useState("");
  const handleEmailCodetxtBox = (event) => {
    setEmailValue(event.target.value);
  };
  const handlePromoCodeEmail = (event) => {
    event.preventDefault();
    props.alert(
      "success",
      `${emailValue} Thank you for subscribing to our newsletter!`
    );
  };

  return (
    <>
      <section className="promocode-section py-2">
        <div className="container py-md-4">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://i.ibb.co/7XdCDzM/img3.png"
                className="img-fluid"
                alt="img3"
                border="0"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h6 className="py-2">FOR 30% DISCOUNT</h6>
              <h2 className="headings py-2">GET OUR PROMOCODE NOW</h2>
              <p className="py-2">
                Uspendisse efficitur orci urna. In et augue ornare, tempor massa
                in, luctus sapien. Proin a diam et dui fermentum molestie vel id
                neque.
              </p>
              <h6 className="py-2">Never Miss a Deal From Foodies</h6>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="email"
                  placeholder="Enter Your Email Id"
                  aria-label="Search"
                  onChange={handleEmailCodetxtBox}
                  value={emailValue}
                />
                {!emailValue ? (
                  <label htmlFor="" className="text-danger">
                    Enter your email
                  </label>
                ) : null}
                <button
                  className="btn btn-outline-primary my-2 my-sm-0"
                  type="submit"
                  onClick={handlePromoCodeEmail}
                >
                  Get Promocode
                </button>
              </form>
              <p className="py-2">(Or) To Get Our Mobile Apps</p>
              <div className="py-2 promocode-icon d-flex flex-row">
                <a href="#">
                  <span>
                    <i className="fas fa-play"></i>
                  </span>
                </a>
                <a href="#">
                  <span>
                    <i className="fab fa-apple"></i>
                  </span>
                </a>
                <a href="#">
                  <span>
                    <i className="fab fa-windows"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;
