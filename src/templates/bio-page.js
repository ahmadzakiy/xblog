import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

import "../styles/templates/blog.scss"

class BioPage extends Component {
  render() {
    const { data } = this.props
    const { markdownRemark: post } = data

    console.log("bio data: ", data)

    return (
      <Layout>
        <div className="blog-wrapper">
          <h1>{post.frontmatter.name}</h1>
          <h2>{post.frontmatter.description}</h2>
        </div>
      </Layout>
    )
  }
}

export default BioPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
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
