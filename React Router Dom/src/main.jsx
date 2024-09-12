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


// 1st] layout ki file root m banaka outlet ka componenet render krwana haa os filr m...
// 2nd] main.jsx m router ka variable banayaa jiska undar createBroweserRouter ka function call krka aik array of object dedi...
// 3rd] createBroweserRouter ky arr of obj m tamam file ko path , element sy waha pass karygy...
// 4th] main.jsx m hi routerprovider ky tag m router component ko call krwaka uska undar router ka var rakh dy r pori app pass ho jaygi...
