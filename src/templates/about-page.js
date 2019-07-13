import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

import "../styles/templates/blog.scss"

class AboutPage extends Component {
  render() {
    const { data } = this.props
    const { markdownRemark: post } = data

    console.log("about data: ", data)

    return (
      <Layout>
        <div className="blog-wrapper">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export default AboutPage

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
