import React from "react"
import { Link, graphql } from "gatsby"
import CustomDate from '../components/customDate';

import Layout from "../components/layout"

const BlogPage = ({ data }) => (
    <Layout>
        <div className="text-right">{data.allMarkdownRemark.edges.length} blogs</div>
        {data.allMarkdownRemark.edges.map((post,i) => (
            <div>
            <div key={post.node.id} style={{ paddingTop:'20px',paddingBottom:'20px',background: 'white'}}>
                <h3><Link 
                style={{ fontWeight:900}}
                to={
                    post.node.frontmatter.path
                }>{post.node.frontmatter.title}</Link></h3>
                <small>Posted By:{post.node.frontmatter.author} on { CustomDate(post.node.frontmatter.date)}</small>
                
            </div>
            { !(data.allMarkdownRemark.edges.length === i + 1) && <hr></hr> }
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


