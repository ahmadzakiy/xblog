import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import "../styles/templates/blog.scss"

class ProjectsPage extends Component {
  render() {
    const { data } = this.props
    const { markdownRemark: post } = data

    return (
      <Layout>
        <SEO title="Projects" keywords={[`project`, `page`]} />
        <div className="blog-wrapper">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export default ProjectsPage

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
