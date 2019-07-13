import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.scss"

const Bio = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <div className="bio-wrapper">
        <Img
          fluid={data.markdownRemark.frontmatter.cover.childImageSharp.fluid}
        />
        <h1>{data.markdownRemark.frontmatter.name}</h1>
        <p>{data.markdownRemark.frontmatter.description}</p>
      </div>
    )}
  />
)

export default Bio
