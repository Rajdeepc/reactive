import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPage = ({ data }) => (
    <Layout>
        <h1>Latest Posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id}>
                <Link to={
                    post.node.frontmatter.path
                }><h3>{post.node.frontmatter.title}</h3></Link>
                <small>Posted By:{post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br />
                <br />
                <hr />
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


