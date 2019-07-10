import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPage = ({ data }) => (
    <Layout>
        {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id} style={{ paddingTop:'20px',paddingBottom:'20px',background: 'white', borderBottom:'1px solid rgba(0, 0, 0, 0.1)' }}>
                <h3><Link 
                style={{ fontWeight:900}}
                to={
                    post.node.frontmatter.path
                }>{post.node.frontmatter.title}</Link></h3>
                <small>Posted By:{post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                
            </div>
        ))}
    </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery 
        {
	allMarkdownRemark {
    edges {
      node {
          id
        frontmatter {
          path
          title
          date
          author
        }
      }
    }
  
}
    }
`


export default BlogPage


