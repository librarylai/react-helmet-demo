import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

function Product(props) {
  let [list, setList] = useState([])
  async function fetchData() {
    let result = await fetch('https://api.thecatapi.com/v1/images/search?limit=25&page=0&order=desc')
    let data = await result.json()
    console.log(data)
    setList(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <Helmet>
        <title>來自 Product Page</title>
        <meta property='og:title' content='來自 Product Page' />
        <meta property='og:description' content='來自 Product Page Desc' />
        <meta property='og:image' content={list[0]?.url} />
        {/* <meta property='og:url' content='https://react-helmet-demo-mauve.vercel.app/product' /> */}
      </Helmet>
      <h2>Product</h2>
    </div>
  )
}

Product.propTypes = {}

export default Product
