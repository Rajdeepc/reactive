import React from "react"
import Link from "gatsby-link"
import "./layout.css"

const MenuComponent = () => (
  <div className="row">
    <div className="menu-contianer">
      <div className="container">
        <ul class="nav nav-tabs">
          <li className="nav-item">
            <Link to="/" className="nav-link " activeClassName="active">
              GitHub Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              isCurrent
              className="nav-link"
              activeClassName="active"
            >
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/vscode"
              isCurrent
              className="nav-link"
              activeClassName="active"
            >
              VS Code Plugins
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gists"
              isCurrent
              className="nav-link"
              activeClassName="active"
            >
              Gists
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default MenuComponent
