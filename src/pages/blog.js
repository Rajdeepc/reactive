import React from "react"
import { Link, graphql } from "gatsby"
import CustomDate from '../components/customDate';
import Layout from "../components/layout"
import { calTimeRead } from '../components/timeToRead';

const BlogPage = ({ data }) => (
    <Layout>
        <div style={{ paddingTop:'10px',paddingBottom:'10px',textAlign: 'right',fontWeight:'bold'}}>{data.allMarkdownRemark.edges.length} blogs</div>
        {data.allMarkdownRemark.edges.map((post,i) => (
            <div key={post.node.id} >
            <div style={{ paddingTop:'20px',paddingBottom:'20px',background: 'white'}}>
                <h3 style={{marginBottom:10,fontSize:'1.75rem'}}><Link 
                style={{ fontWeight:900}}
                to={
                    post.node.frontmatter.path
                }>{post.node.frontmatter.title}</Link></h3>
                <small>{ CustomDate(post.node.frontmatter.date)} &nbsp;&nbsp; <i className="fa fa-coffee" aria-hidden="true"/> {calTimeRead(post.node.html)}</small>
                
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


