import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import profileImg from '../images/download.png';

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
            fontWeight: 900
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
            <div className="imgContainer">
              <img src={profileImg} alt="rajdeep" />
            </div>
          
          <p style={{
            fontSize: '15px',
            lineHeight: '20px',
            marginLeft: '13px'
          }}>
            Personal Website by <a href="http://github.com/Rajdeepc">Rajdeep Chandra</a><br />
            Follow my blogs, codepens, fiddles and github Projects
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
