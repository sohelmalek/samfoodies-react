import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Blogs() {
  return (
    <>
       {/* <!-------------breadcrumb=----------------------------------------------> */}
        <section className="about-main-banner">
            <div className="container ">
                <div className="row">
                    <div className="col-12 text-center breadcrumb-section">
                        <h3>Blog Posts</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item "  aria-current="page"><Link to="/blogs">Blogs</Link></li>
                                 </ol>
                        </nav>
                    </div>


                </div>
            </div>
        </section>
        {/* <!-- ------------breadcrumb END-------------------------------------------------------------- --> */}

        {/* <!-- ------------Blog Post-------------------------------------------------------------- --> */}
        <section className="blog-section border-bottom-cust py-5">
            <div className="container pt-5 ">
                <div className="row">
                    <div className="col-12">
                        <h1 className="blog-post-heading headings pt-4 pb-2">Blog Post</h1>
                    </div>
                    <div className="col-lg-4 mt-4 col-md-6">
                        <div className="blog-main border p-4 d-flex flex-column">
                            <div className="blog-date pb-4">
                                <span className="">19<sup>st</sup>september</span>
                            </div>
                            <Link to="/bloginner">
                                <img src="https://i.ibb.co/5RwJ0vS/blog2.jpg" className="img-fluid rounded w-100" alt="blog1" border="0"/>
                            </Link>
                            <Link to="/bloginner" className="blog-title py-2">
                               sohel malek - the web developer
                        </Link>
                            <ul className="admin-list m-0 p-0">
                                <li><Link to="/bloginner"><span className="fa fa-user-circle" aria-hidden="true"></span>
                                    Admin</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-heart" aria-hidden="true"></span>9
                                    Likes</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-comments" aria-hidden="true"></span>9 Comments</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 col-md-6">
                        <div className="blog-main border p-4 d-flex flex-column">
                            <div className="blog-date pb-4">
                                <span className="">21<sup>st</sup>september</span>

                            </div>
                            <Link to="/bloginner">
                                <img src="https://i.ibb.co/Swp7xHD/blog1.jpg" className="img-fluid rounded w-100" alt="blog1" border="0"/>
                            </Link>
                            <Link to="/bloginner" className="blog-title py-2">
                            Nunc consequat justo id commodo feugiat
                        </Link>
                            <ul className="admin-list m-0 p-0">
                                <li><Link to="/bloginner"><span className="fa fa-user-circle" aria-hidden="true"></span>
                                    Admin</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-heart" aria-hidden="true"></span>9
                                    Likes</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-comments" aria-hidden="true"></span>9 Comments</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 col-md-6">
                        <div className="blog-main border p-4 d-flex flex-column">
                            <div className="blog-date pb-4">
                                <span className="">25<sup>st</sup>september</span>

                            </div>
                            <Link to="/bloginner">
                                <img src="https://i.ibb.co/qRtMbsj/blog4.jpg" className="img-fluid rounded w-100" alt="blog1" border="0"/>
                            </Link>
                            <Link to="/bloginner" className="blog-title py-2">
                            Fusce ac eros quis metus por edit some

                        </Link>
                            <ul className="admin-list m-0 p-0">
                                <li><Link to="/bloginner"><span className="fa fa-user-circle" aria-hidden="true"></span>
                                    Admin</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-heart" aria-hidden="true"></span>9
                                    Likes</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-comments" aria-hidden="true"></span>9 Comments</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 col-md-6">
                        <div className="blog-main border p-4 d-flex flex-column">
                            <div className="blog-date pb-4">
                                <span className="">29<sup>st</sup>October</span>

                            </div>
                            <Link to="/bloginner">
                                <img src="https://i.ibb.co/MNgpK7j/blog5.jpg" className="img-fluid rounded w-100" alt="blog1" border="0"/>
                            </Link>
                            <Link to="/bloginner" className="blog-title py-2">
                                Cras fringilla, enim a porta fermentum

                        </Link>
                            <ul className="admin-list m-0 p-0">
                                <li><Link to="/bloginner"><span className="fa fa-user-circle" aria-hidden="true"></span>
                                    Admin</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-heart" aria-hidden="true"></span>9
                                    Likes</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-comments" aria-hidden="true"></span>9 Comments</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 col-md-6">
                        <div className="blog-main border p-4 d-flex flex-column">
                            <div className="blog-date pb-4">
                                <span className="">30<sup>st</sup>October</span>

                            </div>
                            <Link to="/bloginner">
                                <img src="https://i.ibb.co/TrrXD5G/blog6.jpg" className="img-fluid rounded w-100" alt="blog1" border="0"/>
                            </Link>
                            <Link to="/bloginner" className="blog-title py-2">
                                Cras fringilla, enim a porta fermentum

                        </Link>
                            <ul className="admin-list m-0 p-0">
                                <li><Link to="/bloginner"><span className="fa fa-user-circle" aria-hidden="true"></span>
                                    Admin</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-heart" aria-hidden="true"></span>9
                                    Likes</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-comments" aria-hidden="true"></span>9 Comments</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 col-md-6">
                        <div className="blog-main border p-4 d-flex flex-column">
                            <div className="blog-date pb-4">
                                <span className="">25<sup>st</sup>October</span>

                            </div>
                            <Link to="/bloginner">
                                <img src="https://i.ibb.co/cczmMK7/blog3.jpg" className="img-fluid rounded w-100" alt="blog1" border="0"/>
                            </Link>
                            <Link to="/bloginner" className="blog-title py-2">
                            Cras fringilla, enim a porta fermentum

                        </Link>
                            <ul className="admin-list m-0 p-0">
                                <li><Link to="/bloginner"><span className="fa fa-user-circle" aria-hidden="true"></span>
                                    Admin</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-heart" aria-hidden="true"></span>9
                                    Likes</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-comments" aria-hidden="true"></span>9 Comments</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 col-md-6">
                        <div className="blog-main border p-4 d-flex flex-column">
                            <div className="blog-date pb-4">
                                <span className="">21<sup>st</sup>september</span>

                            </div>
                            <Link to="/bloginner">
                                <img src="https://i.ibb.co/Swp7xHD/blog1.jpg" className="img-fluid rounded w-100" alt="blog1" border="0"/>
                            </Link>
                            <Link to="/bloginner" className="blog-title py-2">
                            Nunc consequat justo id commodo feugiat
                        </Link>
                            <ul className="admin-list m-0 p-0">
                                <li><Link to="/bloginner"><span className="fa fa-user-circle" aria-hidden="true"></span>
                                    Admin</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-heart" aria-hidden="true"></span>9
                                    Likes</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-comments" aria-hidden="true"></span>9 Comments</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 col-md-6">
                        <div className="blog-main border p-4 d-flex flex-column">
                            <div className="blog-date pb-4">
                                <span className="">25<sup>st</sup>september</span>

                            </div>
                            <Link to="/bloginner">
                                <img src="https://i.ibb.co/qRtMbsj/blog4.jpg" className="img-fluid rounded w-100" alt="blog1" border="0"/>
                            </Link>
                            <Link to="/bloginner" className="blog-title py-2">
                            Fusce ac eros quis metus por edit some

                        </Link>
                            <ul className="admin-list m-0 p-0">
                                <li><Link to="/bloginner"><span className="fa fa-user-circle" aria-hidden="true"></span>
                                    Admin</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-heart" aria-hidden="true"></span>9
                                    Likes</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-comments" aria-hidden="true"></span>9 Comments</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 col-md-6">
                        <div className="blog-main border p-4 d-flex flex-column">
                            <div className="blog-date pb-4">
                                <span className="">29<sup>st</sup>October</span>

                            </div>
                            <Link to="/bloginner">
                                <img src="https://i.ibb.co/MNgpK7j/blog5.jpg" className="img-fluid rounded w-100" alt="blog1" border="0"/>
                            </Link>
                            <Link to="/bloginner" className="blog-title py-2">
                                Cras fringilla, enim a porta fermentum

                        </Link>
                            <ul className="admin-list m-0 p-0">
                                <li><Link to="/bloginner"><span className="fa fa-user-circle" aria-hidden="true"></span>
                                    Admin</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-heart" aria-hidden="true"></span>9
                                    Likes</Link></li>
                                <li><Link to="/bloginner"><span className="fa fa-comments" aria-hidden="true"></span>9 Comments</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 py-4">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <Link className="page-link " to="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </Link>
                                </li>
                                <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Blogs
