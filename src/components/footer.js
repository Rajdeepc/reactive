import React from "react"
import { FaRegHeart } from "react-icons/fa"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { GoLocation } from "react-icons/go"

const Footer = () => {
  return (
    <div className="footer">
      <div className="text-center bg-dark">
        <div>
          Made with <FaRegHeart /> by Rajdeep Chandra
        </div>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <span>
                <GoLocation />
              </span>{" "}
              <span>Bangalore</span>
            </li>
            <li className="nav-item">
              <a href="https://twitter.com/rajrock38" target="_blank">
                <FaTwitter /> Twitter
              </a>
            </li>
            <li className="nav-item">
              <a href="http://github.com/Rajdeepc" target="_blank">
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
      </div>
    </div>
  )
}

export default Footer
