/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Menu from '../components/menu';


const Layout = ({ children }) => {
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
      <div style={{
        maxWidth:'768px',
        margin:'0 auto'
      }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer style={{marginTop:'4.375rem'}}>
          <ul style={{margin:0,padding:0}}>
          <li style={{display:'inline-block',marginLeft: '10px'}}>
          <a href='https://twitter.com/rajrock38' target='_blank'>twitter</a>
            </li>
            <li style={{display:'inline-block',marginLeft: '10px'}}>
            <a href='http://github.com/Rajdeepc' target='_blank'>github</a>
            </li>
            <li style={{display:'inline-block',marginLeft: '10px'}}>
            <a href='https://www.linkedin.com/in/rajdeepcoder/' target='_blank'>linkedin</a>
            </li>
            </ul>
        </footer>
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
