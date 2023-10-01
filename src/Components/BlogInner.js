import React from 'react'
import {Link, NavLink, useParams} from 'react-router-dom'


function BlogInner() {
    const {blogid} = useParams();
  return (
    <>
       <section className="about-main-banner">
            <div className="container ">
                <div className="row">
                    <div className="col-12 text-center breadcrumb-section">
                        <h3>Blog Single - {blogid}</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item "  aria-current="page"><Link to="/blogs">Blogs</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Blog Single</li>
                            </ol>
                        </nav>
                    </div>


                </div>
            </div>
        </section>
        {/* <!-- ------------breadcrumb END-------------------------------------------------------------- --> */}

        {/* <!-- ------------Blog Post-------------------------------------------------------------- --> */}
        <section className="blog-single-section border-bottom-cust py-2 py-md-5">
            <div className="container">
                <div className="single-blog-sub">

                    <div className="row">
                        <div className="col-12 blog-main blog-single-banner-img">
                            <div className="blog-date pb-4">
                                <span className="">19<sup>st</sup> september</span>
                            </div>
                            <img src="https://i.ibb.co/CsjsV4g/single.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-12 blog-single-content mt-4 mt-md-5">
                            <h1 className="headings">OUR LATEST FOODIES BLOG
                            </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </p>
                            <p>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-sm-6 mt-3">
                                    <Link to="#">
                                        <img src="https://i.ibb.co/5RwJ0vS/blog2.jpg" className="img-fluid blog-single-img" alt=""/>
                                    </Link>
                                </div>
                                <div className="col-12 col-sm-6 mt-3">
                                    <img src="https://i.ibb.co/Swp7xHD/blog1.jpg" className="img-fluid blog-single-img" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 blog-single-content mt-4 mt-md-5">

                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                adipisci velit, sed quia non numquam eius modi tempora.
                            </p>
                            <p> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                                quis nostrum exercitationem ullam corporis.suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                            </p>
                            <p>
                                N Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="col-12 d-flex flex-column border-bottom py-4 flex-md-row justify-content-md-between ">
                            <div className=" d-flex align-items-center">
                                <div className="d-flex flex-row flex-wrap">
                                    <h3 className="mr-3 tags-head">Tags:</h3>
                                    <div>
                                        <div className="tags">
                                            <Link to="#" className="mr-2 mt-2">Fresh</Link>
                                            <Link to="#" className="mr-2 mt-2">Foodie</Link>
                                            <Link to="#" className="mr-2 mt-2">Eat</Link>
                                            <Link to="#" className="mr-2 mt-2">Healthy</Link>
                                        </div>
                                        <div className="tags-icon mt-3">
                                            <div className=" d-flex flex-row">
                                                <Link to="#" className=""><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="#" className=""><i className="fab fa-twitter"></i></Link>
                                                <Link to="#" className=""><i className="fab fa-instagram"></i></Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="col-12 py-4 border-bottom">
                            <div className=" d-flex flex-row prev-next justify-content-between">
                                <Link to="#Previous" className=""><i className="fas fa-arrow-left"></i>  Previous Post  </Link>
                                <Link to="#next" className="">Next Post  <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 py-4 ">
                            <h2 className="headings pb-4">Comments (2)</h2>
                            <div className="comments-single-blog row">
                                <div className="col-md-6 ">
                                    <div className="shadow p-3 mr-2 rounded">
                                        <div className="comment">
                                            <p><i className="fas fa-quote-left mr-2"></i>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                        </div>
                                        {/* <!-- https://i.ibb.co/SNSsd9H/commenter-1.jpg --> */}
                                        <div className="commenter align-items-center d-flex">
                                            <div> <img src="https://i.ibb.co/HKZczY5/commenter-2.jpg" className="img-fluid mr-3" alt=""/></div>
                                            <div className="div">
                                                <h4>Sohel Malek</h4>
                                                <p>lorem ipsum</p>
                                            </div>
                                        </div>
                                        <div className="comment-reply-icon ">
                                            <Link to="#Reply">
                                                <p className="text-right font-weight-bold"><i className="fas fa-reply"></i> Reply</p>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="shadow p-3 rounded">
                                        <div className="comment">
                                            <p><i className="fas fa-quote-left mr-2"></i>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                        </div>
                                        <div className="commenter align-items-center d-flex">
                                            <div> <img src="https://i.ibb.co/SNSsd9H/commenter-1.jpg" className="img-fluid mr-3" alt=""/></div>
                                            <div className="div">
                                                <h4>Sohel Malek</h4>
                                                <p>lorem ipsum</p>
                                            </div>
                                        </div>
                                        <div className="comment-reply-icon ">
                                            <Link to="#Reply">
                                                <p className="text-right font-weight-bold"><i className="fas fa-reply"></i> Reply</p>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-sub">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 my-2 my-md-4">
                                        <h2 className="headings">Leave A Message

                                        </h2>
                                    </div>
                                    <div className="col-sm-6">
                                        <form>
                                            <div className="form-group">
                                                <input type="Fname" placeholder="Your Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input type="Lname" placeholder="Your Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <form>
                                            <div className="form-group">
                                                <textarea className="form-control" placeholder="Write your commens here" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-12 text-right">
                                        <button type="submit" className="btn custom-btn btn-primary">Post Comment</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BlogInner
