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
        <Link to='/'>Home</Link>
        <Link to='/book'>Book</Link>
        <Link to='/product'>product</Link>
        <Outlet />
      </header>
    </div>
  )
}

export default App
