import React from "react"
import profileImg from "../images/download.png"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"

const Header = () => (
  <header>
    <div className="container">
      <aside>
        <div className="header-container">
          <div className="row">
            <div className="col-md-12">
              <ul class="nav">
                <li class="nav-item">
                  <div className="imgContainer">
                    {" "}
                    <img src={profileImg} alt="rajdeep" />
                  </div>
                </li>
                <li class="nav-item">
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "20px",
                      marginLeft: "13px",
                      paddingTop: "6px",
                    }}
                  >
                    Personal Blog by{" "}
                    <a
                      target="__blank"
                      href="https://www.linkedin.com/in/rajdeepcoder/"
                    >
                      Rajdeep Chandra
                    </a>
                    <br></br>I write on JavaScript.everything()
                    <div>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link">Follow Me On:</a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://twitter.com/rajrock38"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="nav-link"
                  >
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="http://github.com/Rajdeepc"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaGithub /> Github
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/rajdeepcoder/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaLinkedin /> Linkedin
                  </a>
                </li>
              </ul>
            </div>
                  </p>
                </li>
              </ul>
              
            </div>
           
          </div>
        </div>
      </aside>
    </div>
  </header>
)

export default Header
