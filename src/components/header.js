import React, { useEffect, useState } from "react"
import profileImg from "../images/download.png"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { GoLocation } from "react-icons/go"


const Header = () => {

  return (
      <header>
        <div className="container">
            <div className="header-container">
              <div className="row">
                <div className="col-md-12">
                  <ul class="nav">
                    <li class="nav-item">
                      <div className="imgContainer">
                        {" "}
                        <img
                          src="https://avatars2.githubusercontent.com/u/8790510?v=4"
                          alt="rajdeep"
                        />
                      </div>
                    </li>
                    <li class="nav-item">
                      <p className="perosnal-info">
                        <h3 className="name"> Rajdeep Chandra</h3>
                        <p className="info">
                          I write on JavaScript.everything()
                        </p>
                        <div>
                          <ul className="nav">
                            <li className="nav-item">
                              <span>
                                <GoLocation />
                              </span>{" "}
                              <span>Bangalore</span>
                            </li>
                            <li className="nav-item">
                              <a
                                href="https://twitter.com/rajrock38"
                                target="_blank"
                              >
                                <FaTwitter /> Twitter
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="http://github.com/Rajdeepc"
                                target="_blank"
                              >
                                <FaGithub /> Github
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="https://www.linkedin.com/in/rajdeepcoder/"
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
        </div>
      </header>
  )
}

export default Header
