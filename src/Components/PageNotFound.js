import React from 'react'
import {Link} from 'react-router-dom'

function PageNotFound() {
  return (
    <>
        <div className='main-section error-section'>
          <div className="container">
          <div className="col-12 col-sm-6">
              <section className="error-section">
                  <h1 className="opps">Oops!</h1>
                  <h3>404 - PAGE NOT FOUND
                  </h3>
                  <p>This page you are looking for might have been removed had its name changed or temporarly unavailable.</p>
                  <span><Link to="/" className="btn btn-sm error-homepage-btn custom-btn">Go to Homepage</Link></span>
              </section>
          </div>
              </div>
        </div>

    </>
  )
}

export default PageNotFound
