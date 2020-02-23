import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { node } from "prop-types"

import Header from "../Header"

import "./style.scss"

class Layout extends Component {
  static propTypes = {
    children: node,
  }

  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={layoutQuery}
        render={data => (
          <div className="layout-wrapper">
            <Header />
            <main>{children}</main>
            <footer>
              <small>
                {`© ${new Date().getFullYear()}, ${
                  data.site.siteMetadata.title
                } is another thing from ${data.site.siteMetadata.author}`}
              </small>
            </footer>
          </div>
        )}
      />
    )
  }
}

export default Layout

const layoutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
