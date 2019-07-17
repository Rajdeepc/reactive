import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Header from "../components/header"
import './blogpost.css';
import ContactCard from '../components/contactCard';


export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
     

      <div className="mt20 paddingLeftRight">
        <Link to="/blog"> Go Back</Link>
        <div className="mt20">
          <h3>{post.frontmatter.title}</h3>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>

        <ContactCard/>

      <Header siteTitle="reactive" />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
