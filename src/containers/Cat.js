import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
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

function Cat(props) {
  let [list, setList] = useState([])

  async function fetchData() {
    let result = await fetch('https://api.thecatapi.com/v1/images/search?limit=25&page=0&order=desc')
    let data = await result.json()
    setList(data)
  }
  useEffect(() => {
    // fetchData()
  }, [])
  return (
    <div>
      <Helmet>
        <title>來自 Cat Page</title>
        <meta property='og:title' content='來自 Cat Page' />
        <meta property='og:description' content='隨機顯示一堆貓咪圖' />
        <meta property='og:image' content={list[0]?.url} />
      </Helmet>
      <h2>Cat</h2>
      <Grid>
        {list.map((listItem) => {
          return <img key={listItem?.id} src={listItem?.url} alt='cat' />
        })}
      </Grid>
    </div>
  )
}

Cat.propTypes = {}

export default Cat
