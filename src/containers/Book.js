import React from 'react'
import { Helmet } from 'react-helmet-async'

function Book(props) {
  return (
    <div>
      <Helmet prioritizeSeoTags>
        <title>來自 Book Page</title>
        <meta property='og:title' content='來自 Book Page' />
        <meta property='og:description' content='來自 Book Page Desc' />
        <meta property='og:image' content='https://picsum.photos/id/10/200/200' />
      </Helmet>
      <h2>Book</h2>
    </div>
  )
}

Book.propTypes = {}

export default Book
