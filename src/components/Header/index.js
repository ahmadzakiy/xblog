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

  state = {
    isDarkMode: false,
  }

  toggleDarkMode = () => {
    const { isDarkMode } = this.state

    return isDarkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode")
  }

  handleDarkMode = () => {
    const { isDarkMode } = this.state

    if (typeof window !== "undefined") {
      this.setState(
        {
          isDarkMode: !isDarkMode,
        },
        () => this.toggleDarkMode()
      )
    }
  }

  render() {
    const { siteTitle } = this.props
    const { isDarkMode } = this.state

    const ListLink = props => (
      <li>
        <Link to={props.to}>
          <h4>{props.children}</h4>
        </Link>
      </li>
    )

    return (
      <nav className="header-wrapper">
        <Link to="/">
          <h3>{siteTitle}</h3>
        </Link>
        <ul>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
          <li onClick={this.handleDarkMode}>
            <h2>{isDarkMode ? `🌖️` : `🌘`}</h2>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
