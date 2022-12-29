const express = require('express')
const fs = require('fs')
const axios = require('axios')
const app = express()
const port = 3100

app.use('/', express.static('build'))

app.get('/product/*', (req, res) => {})

app.get('*', (req, res) => {
  res.send(fs.readFileSync(`build/index.html`, 'utf-8'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
