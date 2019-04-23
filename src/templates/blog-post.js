import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

class BlogPost extends Component {
  render() {
    const { data } = this.props
    const { markdownRemark: post } = data

    console.log("blog data", data)

    return (
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`
