import React, { Component } from "react"
import { string } from "prop-types"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

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
          <li>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label className="theme-checkbox">
                  <input
                    type="checkbox"
                    onChange={e =>
                      toggleTheme(e.target.checked ? "dark" : "light")
                    }
                    checked={theme === "dark"}
                  />
                  <h2>{theme === "light" ? `🌖️` : `🌘`}</h2>
                </label>
              )}
            </ThemeToggler>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
