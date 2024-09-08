import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "",
            element: <h1>Person 1</h1>
          },
          {
            path: "person2",
            element: <h1>Person 2</h1>
          },
          {
            path: "person3",
            element: <h1>Person 3</h1>
          }
        ]
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'services', 
        element: <Services />
      },
      {
        path: "*", 
        element: <h1>Not Found!</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
