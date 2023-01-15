import React from 'react'
// import ReactDOM from 'react-dom/client'
import './index.css'
import styled from 'styled-components'
import App from './App'
import Book from './containers/Book'
import Cat from './containers/Cat'
import CatBreed from './containers/CatBreed'
import { HelmetProvider } from 'react-helmet-async'
import { hydrate, render } from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Outlet, Link } from 'react-router-dom'

const NavbarStyled = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 24px;
  background-color: #333;
  color: #fff;
`

const Navbar = () => {
  return (
    <NavbarStyled>
      <Link style={{ color: 'lightblue', marginRight: '16px' }} to='/'>
        Home
      </Link>
      <Link style={{ color: 'lightblue', marginRight: '16px' }} to='/book'>
        Book
      </Link>
      <Link style={{ color: 'lightblue', marginRight: '16px' }} to='/cat'>
        Cat
      </Link>
      <Link style={{ color: 'lightblue', marginRight: '16px' }} to='/cat/beng'>
        CatItem
      </Link>
    </NavbarStyled>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        exact: true,
        element: <App />,
      },
      {
        path: 'book',
        element: <Book />,
      },
      {
        path: 'cat',
        element: <Cat />,
      },
      {
        path: 'cat/:id',
        element: <CatBreed />,
      },
    ],
  },
])

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>,
    rootElement
  )
} else {
  render(
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>,
    rootElement
  )
}
