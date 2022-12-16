import React from 'react'
// import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Book from './containers/Book'
import Product from './containers/Product'
import ProductItem from './containers/ProductItem'
import { HelmetProvider } from 'react-helmet-async'
import { hydrate, render } from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'book',
        element: <Book />,
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: 'product/:id',
        element: <ProductItem />,
      },
    ],
  },
])

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>,
    rootElement
  )
} else {
  render(
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>,
    rootElement
  )
}
