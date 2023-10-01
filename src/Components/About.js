import React from "react";
import { NavLink } from "react-router-dom"; 

function About() {
  return (
    <>
      {/* <Helmet>
        <title>About - SamFoodies</title>
        <meta name="description" content="Page description goes here." />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="author" content="Your Name" />
         </Helmet> */}
      {/* <!-------------breadcrumb=----------------------------------------------> */}
      <section className="about-main-banner">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center breadcrumb-section">
              <h3>About Us</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------breadcrumb END-------------------------------------------------------------- --> */}
      {/* <!-- ------------main banner-------------------------------------------------------------- --> */}
      <section className="about-main-banner">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://i.ibb.co/YRjDG6j/imgbin-cooking-woman-illustration-png.png"
                className="img-fluid"
                alt="bannerimg"
                border="0"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center ">
              <h1 className="py-4 headings-content font-weight-bold">
                ONLY FRESH AND HEALTHY PRODUCTS FOR YOU!
              </h1>
              <p className="">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sit amet efficitur tortor
              </p>
              <ul>
                <li>
                  <span
                    className="fa fa-dot-circle-o"
                    aria-hidden="true"
                  ></span>
                  Ut enim ad minim veniam
                </li>
                <li>
                  <span
                    className="fa fa-dot-circle-o"
                    aria-hidden="true"
                  ></span>
                  Quis nostrud exercitation ullamco laboris
                </li>
                <li>
                  <span
                    className="fa fa-dot-circle-o"
                    aria-hidden="true"
                  ></span>
                  Nisi ut aliquip ex ea commodo consequat
                </li>
                <li>
                  <span
                    className="fa fa-dot-circle-o"
                    aria-hidden="true"
                  ></span>
                  In et augue ornare, tempor massa in
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------main banner END-------------------------------------------------------------- --> */}
      {/* <!-- <%--..............Counting ......................................................--%> --> */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                    <div className="counter-4 mt-4">
                      <div className="counter-4-content">
                        <div className="counter-4-icon">
                          <i className="fa fa-globe"></i>
                        </div>
                        <span className="counter-4-value">15,000</span>
                      </div>
                      <h3>Happy Customers</h3>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="counter-4 mt-4">
                      <div className="counter-4-content">
                        <div className="counter-4-icon">
                          <i className="fa fa-globe"></i>
                        </div>
                        <span className="counter-4-value">1,670</span>
                      </div>
                      <h3>MASTER CHEF'S</h3>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="counter-4 mt-4">
                      <div className="counter-4-content">
                        <div className="counter-4-icon">
                          <i className="fa fa-globe"></i>
                        </div>
                        <span className="counter-4-value">9,807</span>
                      </div>
                      <h3>MASTER CHEF'S</h3>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="counter-4 mt-4">
                      <div className="counter-4-content">
                        <div className="counter-4-icon">
                          <i className="fa fa-globe"></i>
                        </div>
                        <span className="counter-4-value">21</span>
                      </div>
                      <h3>YEAR'S OF EXPERIENCE</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grey-bg c-no container-fluid">
              <div className="container">
                <div className="row" id="counter">
                  <div className="col-sm-4 counter-Txt">
                    {" "}
                    Customers{" "}
                    <span className="counter-value" data-count="10">
                      0
                    </span>{" "}
                    Million
                  </div>
                  <div className="col-sm-4 counter-Txt">
                    {" "}
                    Product{" "}
                    <span className="counter-value" data-count="25">
                      0
                    </span>{" "}
                    Thousand
                  </div>
                  <div className="col-sm-4 counter-Txt margin-bot-35">
                    {" "}
                    Team{" "}
                    <span className="counter-value" data-count="150">
                      0
                    </span>{" "}
                    Peoples
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- <%--..............Counting END......................................................--%> --> */}
      {/* <!-- ------------TEstimonials-------------------------------------------------------------- --> */}
      <section className="testimonial-section py-5">
        <div className="container-fluid bg-dangr">
          <div className="row">
            <div className="col-lg-4 col-md-10 offset-md-1 my-auto px-2 px-md-5">
              <h1 className="headings-content font-weight-bold">
                Hello. Our structure has been present for over 20 years. We make
                the best !
              </h1>
            </div>
            <div className="col-lg-3 col-sm-6 mt-2  px-2">
              <div className="testimonial-sub shadow">
                <img
                  src="https://i.ibb.co/0C8y0B7/chefs-2.jpg"
                  className="img-fluid img-responsive"
                  alt="testimonial-1"
                  border="0"
                />
                <div className="testimonial-content">
                  <h4 className="pt-3">Jimic Nasium</h4>
                  <p>BEST CHEF</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-2  px-2">
              <div className="testimonial-sub  shadow">
                <img
                  src="https://i.ibb.co/xq96g3j/chefs-1.jpg"
                  className="img-fluid img-responsive"
                  alt="testimonial-1"
                  border="0"
                />
                <div className="testimonial-content">
                  <h4 className="pt-3">Siri Nasium</h4>
                  <p>BEST CHEF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-2 pt-md-5">
          <div className="row">
            <div className="col-md-6 about-icon-main">
              <div className="icon-content icon-content1">
                <div className="about-icon about-icon1">
                  <i className="fas fa-utensils "></i>
                </div>
                <div className="about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean egestas magna at porttitor vehicula nullam augue
                    ipsum dolor.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="icon-content icon-content2">
                <div className="about-icon">
                  <i className="fas fa-utensils "></i>
                </div>
                <div className="about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean egestas magna at porttitor vehicula nullam augue
                    ipsum dolor.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 about-icon-main">
              <div className="icon-content icon-content1">
                <div className="about-icon about-icon1">
                  <i className="fas fa-utensils "></i>
                </div>
                <div className="about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean egestas magna at porttitor vehicula nullam augue
                    ipsum dolor.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="icon-content icon-content2">
                <div className="about-icon">
                  <i className="fas fa-utensils "></i>
                </div>
                <div className="about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean egestas magna at porttitor vehicula nullam augue
                    ipsum dolor.
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------TEstimonials-------------------------------------------------------------- --> */}
      {/* <!-- ------------About Section 2-------------------------------------------------------------- --> */}
      <section className="about-page-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-3">
              <div className="video-section position-relative">
                {/* <!-- <span><i className="fas fa-2x fa-play"></i></span> --> */}
                <a
                  href="https://youtu.be/dCVEY88Fn1k"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-4"
                >
                  <span>
                    <i className="fas fa-2x fa-play"></i>
                  </span>
                  <img
                    src="https://i.ibb.co/R4HGmxx/video2.jpg"
                    className="img-fluid"
                  />
                </a>
              </div>
              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog d-flex flex-column justify-content-center modal-dialog-centered">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/_4aS5vXNLVw"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------About Section END 2-------------------------------------------------------------- --> */}
    </>
  );
}

export default About;
