import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Header from "../components/header"
import './blogpost.css';
import ContactCard from '../components/contactCard';
import { calTimeRead } from '../components/timeToRead';

export default function Template({ data }) {
  const post = data.markdownRemark


  return (
    <div className="container"
    >
      <div className="mt20 paddingLeftRight">
        <Link to="/"> Go Back</Link>
        <div className="mt20">
          <h3>{post.frontmatter.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <br/>
        <div>
          <i className="fa fa-coffee" aria-hidden="true">
          </i>&nbsp;
          {calTimeRead(post.html)}</div>
      </div>

      <ContactCard />

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
