import React from "react"
import Link from "gatsby-link"
import "./layout.css"
import {  GoGistSecret,GoRepo } from "react-icons/go"
import { FaCodepen, FaBlog ,FaPlug,FaHiking} from "react-icons/fa"
import {blogs,
  github,
  plugin,
  work} from '../images/images';


const MenuComponent = () => (
  <div className="row">
    <div className="menu-contianer">
      <div className="container">
        <ul class="nav nav-tabs">
          <li className="nav-item">
            <Link to="/" className="nav-link " activeClassName="active">
            <img src={github} alt=""/> GitHub Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              isCurrent
              className="nav-link"
              activeClassName="active"
            >
              <img src={blogs} alt=""/> Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/vscode"
              isCurrent
              className="nav-link"
              activeClassName="active"
            >
              <img src={plugin} alt=""/> VS Code Plugins
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/experiments"
              isCurrent
              className="nav-link"
              activeClassName="active"
            >
               <img src={work} alt=""/> Experiments
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default MenuComponent
