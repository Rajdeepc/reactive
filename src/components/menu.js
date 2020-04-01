import React from "react"
import Link from "gatsby-link"
import "./layout.css"

const MenuComponent = () => (
  <div className="row">
    <div className="menu-contianer">
    <div className="container">
      <ul class="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" isCurrent className="nav-link" activeClassName="active">
            My Blogs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/github" className="nav-link " activeClassName="active">
            GitHub Projects
          </Link>
        </li>
      </ul>
    </div>
    </div>
    
  </div>
)

export default MenuComponent
