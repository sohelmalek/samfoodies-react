import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CTA from "./CTA";

function Home() {
  document.title ="new";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      });
  }, []);
  return (
    <>
      {/* <!-- ------------main banner-------------------------------------------------------------- --> */}
      <section className="main-banner" id="home">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center ">
              <h1 className="py-md-4 py-0 headings-content font-weight-bold">
                Eat Fresh <br />
                Eat Healthy <br />
                {/* followers : {data.followers} */}
              </h1>
              <p className="">
                {" "}
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt
              </p>
           
              <span>
                <Link to="/menu" className="btn btn-sm custom-btn">
                  View Our Menu
                </Link>
              </span>
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              {/* <img
                src="https://i.ibb.co/z4v6tYH/bannerimg.png"
                className="img-fluid"
                alt="bannerimg"
                border="0"
              /> */}
              <img
                src="https://i.ibb.co/z4v6tYH/bannerimg.png"
                className="img-fluid"
                alt="bannerimg"
                border="0"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------main banner END-------------------------------------------------------------- --> */}

      {/* <!-- ------------About Section-------------------------------------------------------------- --> */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <img
                src="https://i.ibb.co/kxxmwYZ/about.png"
                className="img-fluid"
                alt="bannerimg"
                border="0"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center ">
              <h1 className="py-4 headings-content font-weight-bold">
                Welcome To Our<span> Foodies</span>
              </h1>
              <p>
                Aptent taciti sociosqu ad litora conubia nostra, per inceptos
                himenaeos. Aenean volutpat elementum ante, id eleifend eros
                luctus sit.
              </p>
              <p>
                Nunc vel pellentesque. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Aenean
                volutpat elementum ante, id eleifend eros luctus sit amet. vel
                tincidunt erat neque non ipsum. Ut sollicitudin pharetra enim.
              </p>
              <span>
                <Link to="/about" className="btn btn-sm custom-btn">
                  Read More
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------About Section END-------------------------------------------------------------- --> */}
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
                  <Link to="#">Read More</Link>
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
                  <Link to="#">Read More</Link>
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
                  <Link to="#">Read More</Link>
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
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------TEstimonials-------------------------------------------------------------- --> */}
      {/* <!-- ------------About Section 2-------------------------------------------------------------- --> */}
      <section className="about-section py-5" id="cookingvideo">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mt-md-3 d-flex flex-column justify-content-center ">
              <h1 className="py-md-4 headings-content font-weight-bold">
                YOU CAN WATCH OUR COOKING VIDEO PROCESS!
              </h1>
              <p>
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Non quae, consequatur
                voluptatem ad.
              </p>
              <span>
                <Link
                  to="https://youtu.be/dCVEY88Fn1k"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="btn btn-sm custom-btn"
                >
                  Play Video
                </Link>
              </span>
            </div>
            <div className="col-lg-7 mt-3">
              <div className="video-section position-relative">
                {/* <!-- <span><i className="fas fa-2x fa-play"></i></span> --> */}
                <Link
                  to="https://youtu.be/dCVEY88Fn1k"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-4 index-video-img"
                >
                  <span>
                    <i className="fas fa-2x fa-play"></i>
                  </span>
                  <img
                    src="https://i.ibb.co/sPvVXhL/video.jpg"
                    className="img-fluid"
                  />
                </Link>
              </div>
              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered d-flex flex-column justify-content-center modal-dialog-centered">
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
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------About Section END 2-------------------------------------------------------------- --> */}
      {/* <!-- ------------Blog Post-------------------------------------------------------------- --> */}
      <section className="blog-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="blog-post-heading headings my-sm-2 pt-sm-4 pb-sm-2">
                Blog Post
              </h1>
            </div>
            <div className="col-lg-4 mt-md-2 my-lg-0 col-md-6">
              <div className="blog-main border p-4 d-flex flex-column">
                <div className="blog-date pb-4">
                  <span className="">
                    21<sup>st</sup>september
                  </span>
                </div>
                <Link to="/bloginner">
                  <img
                    src="https://i.ibb.co/Swp7xHD/blog1.jpg"
                    className="img-fluid w-100"
                    alt="blog1"
                    border="0"
                  />
                </Link>
                <Link to="/bloginner" className="blog-title py-2">
                  Nunc consequat justo id commodo feugiat
                </Link>
                <ul className="admin-list m-0 p-0">
                  <li>
                    <Link to="/bloginner">
                      <span
                        className="fa fa-user-circle"
                        aria-hidden="true"
                      ></span>
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link to="/bloginner">
                      <span className="fa fa-heart" aria-hidden="true"></span>9
                      Likes
                    </Link>
                  </li>
                  <li>
                    <Link to="/bloginner">
                      <span
                        className="fa fa-comments"
                        aria-hidden="true"
                      ></span>
                      9 Comments
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mt-3 my-lg-0 col-md-6">
              <div className="blog-main border p-4 d-flex flex-column">
                <div className="blog-date pb-4">
                  <span className="">
                    25<sup>st</sup>september
                  </span>
                </div>
                <Link to="/bloginner">
                  <img
                    src="https://i.ibb.co/qRtMbsj/blog4.jpg"
                    className="img-fluid w-100"
                    alt="blog1"
                    border="0"
                  />
                </Link>
                <Link to="/bloginner" className="blog-title py-2">
                  Fusce ac eros quis metus por edit some
                </Link>
                <ul className="admin-list m-0 p-0">
                  <li>
                    <Link to="/bloginner">
                      <span
                        className="fa fa-user-circle"
                        aria-hidden="true"
                      ></span>
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link to="/bloginner">
                      <span className="fa fa-heart" aria-hidden="true"></span>9
                      Likes
                    </Link>
                  </li>
                  <li>
                    <Link to="/bloginner">
                      <span
                        className="fa fa-comments"
                        aria-hidden="true"
                      ></span>
                      9 Comments
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mt-3 my-lg-0 col-md-6">
              <div className="blog-main border p-4 d-flex flex-column">
                <div className="blog-date pb-4">
                  <span className="">
                    25<sup>st</sup>October
                  </span>
                </div>
                <Link to="/bloginner">
                  <img
                    src="https://i.ibb.co/cczmMK7/blog3.jpg"
                    className="img-fluid w-100"
                    alt="blog1"
                    border="0"
                  />
                </Link>
                <Link to="/bloginner" className="blog-title py-2">
                  Cras fringilla, enim a porta fermentum
                </Link>
                <ul className="admin-list m-0 p-0">
                  <li>
                    <Link to="/bloginner">
                      <span
                        className="fa fa-user-circle"
                        aria-hidden="true"
                      ></span>
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link to="/bloginner">
                      <span className="fa fa-heart" aria-hidden="true"></span>9
                      Likes
                    </Link>
                  </li>
                  <li>
                    <Link to="/bloginner">
                      <span
                        className="fa fa-comments"
                        aria-hidden="true"
                      ></span>
                      9 Comments
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------Blog Post END-------------------------------------------------------------- --> */}
      {/* <!-- ------------Contact-------------------------------------------------------------- --> */}
      <section className="contact-lite-section py-5">
        <div className="container py-md-4">
          <div className="row">
            <div className="col-md-6">
              <h1 className="headings">CONTACT US NOW!</h1>
              <p>For Online queries, please call us today</p>
            </div>
            <div className="col-md-6 flex-wrap text-center d-flex flex-column flex-sm-row justify-content-center m-auto">
              <Link to="tel:+919723121537" className="my-auto mr-3 contact-no">
                <i className="fas fa-phone-alt"></i> +91 97231 21537
              </Link>
              <p className="my-auto mr-3 or-tag">Or</p>
              <span>
                <Link to="/contact" className="btn btn-sm custom-btn">
                  Get In Touch
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------Contact ENd-------------------------------------------------------------- --> */}
      {/* <!-- ------------Blog Post-------------------------------------------------------------- --> */}
      <section className="service-section py-5">
        <div className="container py-md-4">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="service-main text-center px-4">
                <i className="fas fa-motorcycle fa-2x"></i>
                <h4 className="py-2">Fast Delivery</h4>
                <p>
                  Lorem ante ipsum primis in faucibus orci luctus eted ultrices
                  posuere curae fers luctus eted.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-main text-center px-4">
                <i className="fas fa-shopping-basket fa-2x"></i>
                <h4 className="py-2">Fresh Ingredients</h4>
                <p>
                  Lorem ante ipsum primis in faucibus orci luctus eted ultrices
                  posuere curae fers luctus eted.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-md-5 mt-lg-0">
              <div className="service-main text-center px-4">
                <i className="fas fa-laptop fa-2x"></i>
                <h4 className="py-2">Online Suport 24/7</h4>
                <p>
                  Lorem ante ipsum primis in faucibus orci luctus eted ultrices
                  posuere curae fers luctus eted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------Blog Post END-------------------------------------------------------------- --> */}
 
    </>
  );
}

export default Home;
