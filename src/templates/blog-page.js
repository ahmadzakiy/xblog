import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import "../styles/templates/blog.scss"

class BlogPage extends Component {
  render() {
    const { data } = this.props
    const { markdownRemark: post } = data

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          keywords={post.frontmatter.title.split(" ")}
        />
        <div className="blog-wrapper">
          <span>{`${post.frontmatter.date} - ${post.timeToRead} min Read`}</span>
          <h1 className="title">{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export default BlogPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
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
