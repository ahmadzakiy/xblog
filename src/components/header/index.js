import React, { Component } from "react"
import { string } from "prop-types"
import { Link } from "gatsby"

import "./style.scss"

class Header extends Component {
  static propTypes = {
    sitTitle: string,
  }

  static defaultProps = {
    siteTitle: "",
  }

  render() {
    const { siteTitle } = this.props

    const ListLink = props => (
      <li>
        <Link to={props.to}>{props.children}</Link>
      </li>
    )

    return (
      <nav className="header-wrapper">
        <Link to="/">
          <h3>{siteTitle}</h3>
        </Link>
        <ul>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </nav>
    )
  }
}

export default Header
