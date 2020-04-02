import React from "react"
import { Link, graphql } from "gatsby"
import CustomDate from '../components/customDate';
import Layout from "../components/layout"
import { calTimeRead } from '../components/timeToRead';

const BlogPage = ({ data }) => (
    <Layout>
        {data.allMarkdownRemark.edges.map((post,i) => (
            <div key={post.node.id} >
            <div className="blog-post-card">
                <h3 style={{marginBottom:10}}>
                    <Link 
                style={{ fontWeight:900}}
                to={
                    post.node.frontmatter.path
                }>{post.node.frontmatter.title}</Link></h3>
                <small>{ CustomDate(post.node.frontmatter.date)} &nbsp;&nbsp; <i className="fa fa-coffee" aria-hidden="true"/> {calTimeRead(post.node.html)}</small>
                
            </div>
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
        html
        frontmatter {
          path
          title
          date
        }
        excerpt
      }
    }
  
}
    }
`


export default BlogPage


