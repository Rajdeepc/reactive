import React from "react"
import Link from "gatsby-link"
import "./layout.css"
import {  GoGistSecret,GoRepo } from "react-icons/go"
import { FaCodepen, FaBlog } from "react-icons/fa"

const MenuComponent = () => (
  <div className="row">
    <div className="menu-contianer">
      <div className="container">
        <ul class="nav nav-tabs">
          <li className="nav-item">
            <Link to="/" className="nav-link " activeClassName="active">
              <GoRepo /> GitHub Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              isCurrent
              className="nav-link"
              activeClassName="active"
            >
              <FaBlog/> Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/vscode"
              isCurrent
              className="nav-link"
              activeClassName="active"
            >
              <FaCodepen/> VS Code Plugins
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gists"
              isCurrent
              className="nav-link"
              activeClassName="active"
            >
              <GoGistSecret/> Gists
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default MenuComponent
