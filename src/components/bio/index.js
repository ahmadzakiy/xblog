import React, { Component } from "react"
import { string } from "prop-types"

import ImageProfile from "../image"

import "./style.scss"

class Bio extends Component {
  static propTypes = {
    name: string,
    description: string,
  }

  render() {
    const { name, description } = this.props

    return (
      <div className="bio-wrapper">
        <ImageProfile />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    )
  }
}

export default Bio
