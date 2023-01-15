import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

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
  console.log('list', list)
  return (
    <div>
      <Helmet>
        <title>來自 Cat Breed Page</title>
        <meta property='og:title' content='來自 Cat Breed Page' />
        <meta property='og:description' content='來自 Cat Breed Page Desc' />
        <meta property='og:image' content={list[0]?.url} />
      </Helmet>
      <h2>Cat Breed</h2>
      <Grid>
        {list.map((listItem) => {
          return <img key={listItem?.id} src={listItem?.url} alt='cat' />
        })}
      </Grid>
    </div>
  )
}

CatBreed.propTypes = {}

export default CatBreed
