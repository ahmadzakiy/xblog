import React, { Component } from "react"
import { node } from "prop-types"
import { StaticQuery, graphql } from "gatsby"

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
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                author
              }
            }
          }
        `}
        render={data => (
          <div className="layout-wrapper">
            <Header siteTitle={data.site.siteMetadata.title} />
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
