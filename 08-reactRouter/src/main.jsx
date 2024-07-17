import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'
import Nst from './components/nst/Nst'


const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children : [
      {
        path : "",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>,
        children : [
          {
            path : "khizar",
            element : <Nst/>
          }
        ]
      },{
        path:"contact",
        element:<Contact/>,
        children :[
          {
            path : "als",
            element : <Nst/>
          }
        ]
      },
      {
        path:"user/:userid",
        element:<User/>
      },{
        loader: githubInfoLoader,
        path:"github",
        element:<Github/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
