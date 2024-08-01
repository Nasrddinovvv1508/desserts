import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// layouts
import RootLayout from './layout/RootLayout.jsx'
import { About, Books, Desserts, Home, Menus } from './pages'

function App() {
  let routes = createBrowserRouter([
    {
      path: `/`,
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: `/about`,
          element: <About />
        },
        {
          path: `books`,
          element: <Books />
        },
        {
          path: `desserts`,
          element: <Desserts />
        },
        {
          path: `/menus`,
          element: <Menus />
        }
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App