/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import MenuComponent from "../components/menu"
import Footer from "../components/footer"
import Navbar from "./navbar"
import { FiSun, FiMoon } from "react-icons/fi"
import "./slider.css";



const Layout = ({ children }) => {

  const getLocalThemeFromStorage = () => {
    const themeSelected = JSON.parse(localStorage.getItem("dark"))
    return themeSelected || false
  }

  const [darkTheme, setDarkTheme] = useState(getLocalThemeFromStorage())


  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkTheme))
  }, [darkTheme])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className={darkTheme ? "dark-theme" : "light-theme"}>
        <div className="container-fluid">
        <div className="header-wrapper">
          <div className="container">
          <div className="row">
            <div className="col-md-10">
              <Header />
            </div>
            <div className="col-md-2">
              <div class="theme-switch-wrapper">
                <em>
                  <FiMoon />
                </em>
                <label class="theme-switch" for="checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    onChange={() => setDarkTheme(prevTheme => !prevTheme)}
                  />
                  <div class="slider round"></div>
                </label>
                <em>
                  <FiSun />
                </em>
              </div>
            </div>
            </div>
          </div>
          </div>
          <div> <MenuComponent /></div>
         
          <div className="row">
            <div className="container">
              <div className="page-wrapper">{children}</div>
            </div>
          </div>
          <div className="row">
            {" "}
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
