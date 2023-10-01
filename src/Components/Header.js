import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header(props) {
  const [mode, setMode] = useState("white");
  const [label, setLabel] = useState("dark");
  const toggleMode = () => {
    if (mode === "white") {
      setMode("dark");
      setLabel("white");
      document.body.classList.add("dark");
      document.body.classList.remove("white");
    } else {
      setMode("white");
      setLabel("dark");

      document.body.classList.remove("dark");
      document.body.classList.add("white");
    }
  };
  return (
    <div id="all_links_div" className=" ">
      <div className="sss main_nav">
        <div className="container">
          <div className="row">
            <div className="col-12 d-none d-lg-block">
              <nav
                id="lg-menu"
                className="navbar navbar-expand-lg navbar-light  py-3 px-1"
              >
                <Link className="navbar_brand d-flex" to="/">
                  <span className="sohel">S</span>
                  <span className="sohel">am</span>
                  <span className="malek">F</span>
                  <span className="malek">oodies</span>
                </Link>

                <button
                  className="navbar-toggler border-0 "
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse d-flex align-items-center justify-content-end"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav m-auto  ">
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          ` ${isActive ? "active-cust" : ""} nav-link`
                        }
                        to="/"
                      >
                        Home <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          ` ${isActive ? "active-cust" : ""} nav-link`
                        }
                        to="/about"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          ` ${isActive ? "active-cust" : ""} nav-link`
                        }
                        to="/menu"
                      >
                        Menu
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          ` ${isActive ? "active-cust" : ""} nav-link`
                        }
                        to="/blogs"
                      >
                        Blogs
                      </NavLink>
                    </li>
                    {/* <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Other
                      </Link>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <span></span>
                        <span></span>
                        <NavLink className="dropdown-item" to="/blogs">
                          Blog Posts
                        </NavLink>
                        
                        
                      </div>
                    </li> */}
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          ` ${isActive ? "active-cust" : ""} nav-link`
                        }
                        to="/contact"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                      <div className="form-check pl-0 form-switch">
                        <input
                          style={{ opacity: 0, display: "none" }}
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          onClick={toggleMode}
                          id="mode"
                        />

                        {
                          <label
                            className={`form-check-label text-${label}`}
                            htmlFor="mode"
                          >
                            <i
                              className={`fa-solid fa-${
                                label === "white" ? "sun" : "moon"
                              }`}
                            ></i>
                          </label>
                        }
                      </div>
                    </li>
                  </ul>
                  {props.searchBar ? (
                    <ul className="navbar-nav navbar-nav-1  ml-auto d-flex flex-row justify-content-end  ">
                      <li>
                        <div className="search">
                          <input type="text" placeholder="search" />
                          <div className="symbol">
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ display: "none" }}
                        >
                          <symbol
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 35 35"
                            id="cloud"
                          >
                            <path
                              d="M31.714,25.543c3.335-2.17,4.27-6.612,2.084-9.922c-1.247-1.884-3.31-3.077-5.575-3.223h-0.021
                                             C27.148,6.68,21.624,2.89,15.862,3.931c-3.308,0.597-6.134,2.715-7.618,5.708c-4.763,0.2-8.46,4.194-8.257,8.919
                                             c0.202,4.726,4.227,8.392,8.991,8.192h4.873h13.934C27.784,26.751,30.252,26.54,31.714,25.543z"
                            />
                          </symbol>
                          <symbol
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            id="lens"
                          >
                            <path
                              d="M15.656,13.692l-3.257-3.229c2.087-3.079,1.261-7.252-1.845-9.321c-3.106-2.068-7.315-1.25-9.402,1.83
                                             s-1.261,7.252,1.845,9.32c1.123,0.748,2.446,1.146,3.799,1.142c1.273-0.016,2.515-0.39,3.583-1.076l3.257,3.229
                                             c0.531,0.541,1.404,0.553,1.95,0.025c0.009-0.008,0.018-0.017,0.026-0.025C16.112,15.059,16.131,14.242,15.656,13.692z M2.845,6.631
                                             c0.023-2.188,1.832-3.942,4.039-3.918c2.206,0.024,3.976,1.816,3.951,4.004c-0.023,2.171-1.805,3.918-3.995,3.918
                                             C4.622,10.623,2.833,8.831,2.845,6.631L2.845,6.631z"
                            />
                          </symbol>
                        </svg>
                      </li>

                      <li className="nav-item mr-3  justify-content-end">
                        <i
                          className="fa"
                          style={{
                            height: "25px",
                            width: "25px",
                          }}
                        ></i>
                      </li>
                    </ul>
                  ) : null}
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 m-0">
          <div className="col-12 p-0 d-block d-lg-none">
            <div
              id="mob-menu"
              className="Mobile_navbar d-flex justify-content-between"
            >
              <nav className="navbar navbar-expand-lg navbar-light  py-3 px-1 ml-2">
                <Link className="navbar_brand d-flex" to="/index">
                  <span className="sohel">S</span>
                  <span className="sohel">am</span>
                  <span className="malek">F</span>
                  <span className="malek">oodies</span>
                </Link>
              </nav>
              <nav className="navbar w-25 navbar-expand-lg navbar-light p-0">
                <section>
                  <i
                    className="fas sssicon"
                    style={{
                      height: "25px",
                      width: "25px",
                    }}
                  ></i>
                  <div className="menu">
                    <input id="menu--toggle" type="checkbox" />
                    <label
                      className="menu--toggle__trigger"
                      htmlFor="menu--toggle"
                    ></label>
                    <label
                      className="menu--toggle__burger"
                      htmlFor="menu--toggle"
                    ></label>
                    <ul className="menu__body">
                      <li className="menu__body-element">
                        <Link
                          className="menu__body-link active-cust"
                          to="/index"
                        >
                          Home{" "}
                        </Link>
                      </li>
                      <li className="menu__body-element">
                        <Link className="menu__body-link" to="/about">
                          About Us{" "}
                        </Link>
                      </li>
                      <li className="menu__body-element">
                        <Link className="menu__body-link" to="/menu">
                          Menu{" "}
                        </Link>
                      </li>
                      <li className="menu__body-element">
                        <div className="dropdown ">
                          <button className="dropbtn ">
                            Pages <i className="fas fa-chevron-down"></i>
                          </button>
                          <div id="myDropdown" className="dropdown-content">
                            <Link to="/blog-posts">Blog Posts</Link>
                            <Link to="/blog-single">Blog Single</Link>
                            <Link to="/error">404 Page</Link>
                            <Link to="/landing">Landing Page</Link>
                          </div>
                        </div>
                      </li>

                      <li className="menu__body-element">
                        <Link className="menu__body-link" to="/contact">
                          Contact Us
                        </Link>
                      </li>
                      {props.searchBar ? (
                        <li className="menu__body-element">
                          <div>
                            <div className="search">
                              <input type="text" placeholder="search" />
                              <div className="symbol">
                                <i className="fa-solid fa-magnifying-glass"></i>
                              </div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ display: "none" }}
                            >
                              <symbol
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 35 35"
                                id="cloud"
                              >
                                <path
                                  d="M31.714,25.543c3.335-2.17,4.27-6.612,2.084-9.922c-1.247-1.884-3.31-3.077-5.575-3.223h-0.021
                                                      C27.148,6.68,21.624,2.89,15.862,3.931c-3.308,0.597-6.134,2.715-7.618,5.708c-4.763,0.2-8.46,4.194-8.257,8.919
                                                      c0.202,4.726,4.227,8.392,8.991,8.192h4.873h13.934C27.784,26.751,30.252,26.54,31.714,25.543z"
                                />
                              </symbol>
                              <symbol
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                id="lens"
                              >
                                <path
                                  d="M15.656,13.692l-3.257-3.229c2.087-3.079,1.261-7.252-1.845-9.321c-3.106-2.068-7.315-1.25-9.402,1.83
                                                      s-1.261,7.252,1.845,9.32c1.123,0.748,2.446,1.146,3.799,1.142c1.273-0.016,2.515-0.39,3.583-1.076l3.257,3.229
                                                      c0.531,0.541,1.404,0.553,1.95,0.025c0.009-0.008,0.018-0.017,0.026-0.025C16.112,15.059,16.131,14.242,15.656,13.692z M2.845,6.631
                                                      c0.023-2.188,1.832-3.942,4.039-3.918c2.206,0.024,3.976,1.816,3.951,4.004c-0.023,2.171-1.805,3.918-3.995,3.918
                                                      C4.622,10.623,2.833,8.831,2.845,6.631L2.845,6.631z"
                                />
                              </symbol>
                            </svg>
                          </div>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </section>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
