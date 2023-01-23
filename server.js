const express = require('express')
const fs = require('fs')
const axios = require('axios')
const app = express()
const port = 3100
const path = require('path')
app.use('/', express.static(path.join(__dirname, 'build')))

// 如果要測試記得先將 react-snap 在 package.json 的 script 那段 postbuild 拿掉，並且重 build
// 不然 replace 時會抓不到對應的字串，因為原本 react-snap 在 build 時就已經把  App.jsx 的 meta tag 給加上去了

app.use('/cat', async (req, res) => {
  // 呼叫 API 取得 Cat 資料
  let result = await axios.get('https://api.thecatapi.com/v1/images/search?limit=25&page=0&order=desc')
  // 讀取 build/index.html 程式碼
  const htmlCode = await fs.readFileSync(path.join(__dirname, 'build', 'index.html'), 'utf-8')
  //用 replace 把原本的 title, meta tag 內容替換成從 Server Side 寫入
  const htmlCodeWithMeta = htmlCode
    .replace('React App', `來自 Server Side 產生的 Cat Page`)
    .replace('預設 og:title', `來自 Server Side 產生的 Cat title`)
    .replace('預設 og:desc', `來自 Server Side 產生的 Cat Desc`)
    .replace('https://picsum.photos/id/2/200/200', `${result?.data?.[0]?.url}`)
  console.log('htmlCodeWithMeta', htmlCodeWithMeta) // log 看看是否正常
  // 將調整完的 程式碼 回傳給瀏覽器
  res.send(htmlCodeWithMeta)
})

app.use('/cat/:id', async (req, res) => {
  // 跟上面 Cat 一樣邏輯，上面是直接將符合的文字替換掉。
  // 這邊是模擬比較攏長的寫法（將 整段都寫出來）。
  let result = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${req.query.id}`)
  const htmlCode = await fs.readFileSync(path.join(__dirname, 'build', 'index.html'), 'utf-8')
  const htmlCodeWithMeta = htmlCode
    .replace('<title>React App</title>', `<title>來自 Server Side 產生的 Cat Breed Page</title>`)
    .replace(
      '<meta property="og:title" content="預設 og:title" data-rh="true" />',
      `<meta property="og:title" content="來自 Server Side 產生的 Cat Breed title" />`
    )
    .replace(
      '<meta property="og:description" content="預設 og:desc" data-rh="true" />',
      `<meta property="og:description" content="來自 Server Side 產生的 Cat Breed Desc" />`
    )
    .replace(
      '<meta property="og:image" content="https://picsum.photos/id/2/200/200" data-rh="true" />',
      `<meta property="og:image" content="${result?.data?.[0]?.url}" />`
    )
  res.send(htmlCodeWithMeta)
})

app.use('*', (req, res) => {
  res.send(fs.readFileSync(path.join(__dirname, 'build', 'index.html'), 'utf-8'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
