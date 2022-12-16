import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
function ProductItem(props) {
  let [list, setList] = useState([])
  const param = useParams()
  console.log('param', param)
  async function fetchData() {
    let result = await fetch('https://api.thecatapi.com/v1/images/search?limit=5&page=3&order=asc')
    let data = await result.json()
    console.log(data)
    setList(data)
  }
  useEffect(() => {
    if (param) {
      fetchData()
    }
  }, [])
  return (
    <div>
      <Helmet>
        <title>來自 Product Page</title>
        <meta property='og:title' content='來自 Product item Page' />
        <meta property='og:description' content='來自 Product item Page Desc' />
        <meta property='og:image' content={list[0]?.url} />
        {/* <meta property='og:url' content='https://react-helmet-demo-mauve.vercel.app/product' /> */}
      </Helmet>
      <h2>Product</h2>
    </div>
  )
}

ProductItem.propTypes = {}

export default ProductItem
