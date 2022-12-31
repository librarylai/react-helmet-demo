import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
function CatBreed(props) {
  let [list, setList] = useState([])
  const param = useParams()
  async function fetchData() {
    let result = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${param.id}`)
    let data = await result.json()
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
        <title>來自 Cat Breed Page</title>
        <meta property='og:title' content='來自 Cat Breed Page' />
        <meta property='og:description' content='來自 Cat Breed Page Desc' />
        <meta property='og:image' content={list[0]?.url} />
      </Helmet>
      <h2>Cat Breed</h2>
    </div>
  )
}

CatBreed.propTypes = {}

export default CatBreed
