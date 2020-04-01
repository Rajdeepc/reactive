import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Navbar = ({siteTitle}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img
          src="/docs/4.0/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          alt=""
        />
        
          
      </a>
      <h5 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `#fff`,
                textDecoration: `none`,
                fontWeight: 900,
              }}
            >
              {siteTitle}
            </Link>
          </h5>
    </nav>
  )
}

Navbar.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Navbar.defaultProps = {
    siteTitle: ``,
  }

export default Navbar
