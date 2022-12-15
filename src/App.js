import logo from './logo.svg'
import { Helmet } from 'react-helmet-async'
import { Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Helmet prioritizeSeoTags>
        <title>來自 helmet 的 App</title>
        <meta property='og:title' content='來自 helmet 的 App' />
        <meta property='og:description' content='來自 helmet 的 App Desc' />
        <meta property='og:image' content='https://picsum.photos/id/20/200/200' />
      </Helmet>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>使用 react-helmet-async 和 react-snap 來達成 open graph</p>
        <p>使用 react-helmet-async 用來動態的增加 meta tag，我們可以依照每一頁想要呈現的 title, description 來設置</p>
        <p>
          且要在原本的 public/index.html 中，將『基本的』、『預設的』 meta tag 加上 data-react-helmet="true" data-rh="true" ，他們是用告訴
          react-helmet-async 這些 meta tag 是之後要被替代掉的。{' '}
        </p>
        <p>
          但因為 CSR 的關係，爬蟲方面沒辦法正確的拿到『動態增加』的這些 meta tag，因此需要透過 react-snap 來幫我們做 pre-rendering 的工作{' '}
        </p>
        <p>react-snap 他所做的事情，就跟 Next.js 預設幫我們所做的是一樣的。</p>
        <p>
          如果有使用過 Next.js 的話，應該會對 page 這個資料夾特別有印象，因為 Next.js 預設會將 page 裡的檔案在 build 的時候幫我們做
          pre-rendering
        </p>
        <p>因此可以發現到，當在 Next.js 架構下執行完 build 之後，在打包產生出來的資料夾內找到 pages 裡面的對應檔案 </p>
        <Link to='/'>Home</Link>
        <Link to='/book'>Book</Link>
        <Link to='/product'>product</Link>
        <Outlet />
      </header>
    </div>
  )
}

export default App
