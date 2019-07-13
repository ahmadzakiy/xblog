import React from "react"

import Layout from "../components/Layout/index"
import SEO from "../components/Seo"

import "../styles/pages/404.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found-wrapper">
      <h1>404 Page Not Found</h1>
      <h1>404 Page Not Found</h1>
      <h1>404 Page Not Found</h1>
      <h1>404 Page Not Found</h1>
      <h1>404 Page Not Found</h1>
    </div>
  </Layout>
)

export default NotFoundPage
