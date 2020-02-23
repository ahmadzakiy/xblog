import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.scss"

class Bio extends Component {
  render() {
    return (
      <StaticQuery
        query={bioQuery}
        render={data => (
          <div className="bio-wrapper">
            <Img
              fluid={
                data.markdownRemark.frontmatter.cover.childImageSharp.fluid
              }
            />
            <h2 className="mt-8 mb-0">
              {data.markdownRemark.frontmatter.name}
            </h2>
            <p className="mt-8 mb-0">
              {data.markdownRemark.frontmatter.description}
            </p>
          </div>
        )}
      />
    )
  }
}

export default Bio

const bioQuery = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/components/Bio/" } }) {
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
