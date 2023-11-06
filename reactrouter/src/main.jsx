import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github,{GithubInfoLoader} from './components/Github/Github'
import Home from './components/Home/Home'
import User from './components/User/User'
import './index.css'
import Layout from './Layout'

const router = createBrowserRouter (
  // [{
  //   path:'/',
  //   element:<Layout />,
  //   children:[
  //     {
  //       path:"",
  //       element:<Home />
  //     },
  //     {
  //       path:"about",
  //       element:<About />
  //     },
  //     {
  //       path:"contact",
  //       element: <Contact />
  //     }
  //   ]
  // }]
  
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={<User />} />
        <Route loader={GithubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
