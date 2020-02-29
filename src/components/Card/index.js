import React, { Component } from "react"
import { string, number, object } from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./style.scss"

class Card extends Component {
  static propTypes = {
    title: string,
    description: string,
    coverImage: object,
    dateTime: string,
    readTime: number,
    linkPost: string,
  }

  render() {
    const {
      title,
      description,
      coverImage,
      dateTime,
      readTime,
      linkPost,
    } = this.props

    return (
      <Link to={linkPost} className="mr-20">
        <div className="card-wrapper">
          <Img fluid={coverImage} />
          <div className="background" />
          <div className="header p-24">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="footer p-24">
            <small>{`${dateTime} - ${readTime} min Read`}</small>
          </div>
        </div>
      </Link>
    )
  }
}

export default Card
