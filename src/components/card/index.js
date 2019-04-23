import React, { Component } from "react"
import { string, number } from "prop-types"
import { Link } from "gatsby"

import "./style.scss"

class Card extends Component {
  static propTypes = {
    title: string,
    description: string,
    coverImage: string,
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
      <Link to={linkPost}>
        <div className="card-wrapper">
          <img src={coverImage} alt="cover article" />
          <div className="header">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className="footer">
            <small style={{ marginRight: 6 }}>{dateTime}</small>
            <small>{`${readTime} min Read`}</small>
          </div>
        </div>
      </Link>
    )
  }
}

export default Card
