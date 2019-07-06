import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import "../styles/templates/blog.scss"

class BlogPost extends Component {
  render() {
    const { data } = this.props
    const { markdownRemark: post } = data

    console.log("blog data: ", data)

    return (
      <Layout>
        <div className="blog-wrapper">
          <span>{post.frontmatter.date}</span>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        description
        cover {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
