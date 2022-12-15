import logo from './logo.svg'
import { Helmet } from 'react-helmet-async'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Helmet>
        <title>來自 helmet 的 pdf</title>
        <meta property='og:title' content='來自 helmet 的 pdf' data-react-helmet='true' />
        <meta property='og:description' content='來自 helmet 的 pdf Desc' data-react-helmet='true' />
        <meta property='og:image' content='https://picsum.photos/id/2/200/200' data-react-helmet='true' />
      </Helmet>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
