import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      color: '#333',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#333`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>

      </h1>
      <br />
      <br />
      <aside>
        <div
          style={{
            display: 'flex'
          }}>
          <img src='https://avatars1.githubusercontent.com/u/8790510?s=40&v=4' alt="Personal Website - Rajdeep" />
          <p style={{
            fontSize: '15px',
            lineHeight: '20px',
            marginLeft: '13px'
          }}>
            Personal Website by <a href="">Rajdeep Chandra</a><br />
            Follow my blogs,pends,fiddles nad Github Projects
          </p>
        </div>
      </aside>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
