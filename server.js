const express = require('express')
const fs = require('fs')
const axios = require('axios')
const app = express()
const port = 3100

app.use('/', express.static('build'))

app.get('/cat/*', async (req, res) => {
  let result = await axios.get('https://api.thecatapi.com/v1/images/search?limit=25&page=0&order=desc')
  const htmlCode = await fs.readFileSync(`build/index.html`, 'utf-8')
  const htmlCodeWithMeta = htmlCode.replace('<title>來自 Cat Page</title>', `<title>來自 Cat Page</title>`)
  res.send()
})

app.get('*', (req, res) => {
  res.send(fs.readFileSync(`build/index.html`, 'utf-8'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
